document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('book-form');
    const languageListDiv = document.getElementById('language-list');
    const bookTitlesDiv = document.getElementById('book-titles');
    const booksTableBody = document.querySelector('#books-table tbody');

    // Function to load books from the server
    function loadBooks() {
        fetch('get_books.php')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(data, 'application/xml');
                updateBooksTable(xml);
                updateLanguageList(xml);
            });
    }

    // Function to update books table from XML
    function updateBooksTable(xml) {
        const books = xml.getElementsByTagName('book');
        booksTableBody.innerHTML = ''; // Clear previous content
        for (let book of books) {
            const row = document.createElement('tr');
            const langCell = document.createElement('td');
            langCell.textContent = book.getElementsByTagName('language')[0].textContent;
            const titleCell = document.createElement('td');
            titleCell.textContent = book.getElementsByTagName('title')[0].textContent;
            row.appendChild(langCell);
            row.appendChild(titleCell);
            booksTableBody.appendChild(row);
        }
    }

    // Function to update language list from XML
    function updateLanguageList(xml) {
        const languages = new Set();
        const books = xml.getElementsByTagName('book');
        for (let book of books) {
            languages.add(book.getElementsByTagName('language')[0].textContent);
        }
        languageListDiv.innerHTML = ''; // Clear previous content
        languages.forEach(lang => {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = lang;
            link.addEventListener('click', function(e) {
                e.preventDefault();
                loadBooksByLanguage(xml, lang);
            });
            languageListDiv.appendChild(link);
        });
    }

    // Function to load books by language
    function loadBooksByLanguage(xml, language) {
        const books = xml.getElementsByTagName('book');
        bookTitlesDiv.innerHTML = ''; // Clear previous content
        const ul = document.createElement('ul');
        for (let book of books) {
            if (book.getElementsByTagName('language')[0].textContent === language) {
                const li = document.createElement('li');
                li.textContent = book.getElementsByTagName('title')[0].textContent;
                ul.appendChild(li);
            }
        }
        bookTitlesDiv.appendChild(ul);
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const language = form.language.value;
        const title = form.title.value;
        const formData = new FormData();
        formData.append('language', language);
        formData.append('title', title);

        fetch('save_book.php', {
            method: 'POST',
            body: formData
        }).then(() => {
            form.reset();
            loadBooks();
        });
    });

    // Initialize the books table and language list
    loadBooks();
});
