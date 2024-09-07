document.addEventListener("DOMContentLoaded", function() {
    // Sample data for demonstration purposes
    const languages = [
        { name: 'JavaScript', id: 1 },
        { name: 'Python', id: 2 },
        { name: 'Java', id: 3 },
    ];

    const books = {
        1: ['Eloquent JavaScript', 'You Don\'t Know JS'],
        2: ['Automate the Boring Stuff with Python', 'Python Crash Course'],
        3: ['Effective Java', 'Java: The Complete Reference']
    };

    // Create and insert the list of languages
    const languageListDiv = document.getElementById('language-list');
    languages.forEach(lang => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = lang.name;
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadBooks(lang.id);
        });
        languageListDiv.appendChild(link);
    });

    function loadBooks(languageId) {
        const bookTitlesDiv = document.getElementById('book-titles');
        bookTitlesDiv.innerHTML = ''; // Clear previous content

        // Fetch book titles related to the selected language
        const titles = books[languageId];
        if (titles) {
            const ul = document.createElement('ul');
            titles.forEach(title => {
                const li = document.createElement('li');
                li.textContent = title;
                ul.appendChild(li);
            });
            bookTitlesDiv.appendChild(ul);
        } else {
            bookTitlesDiv.textContent = 'No books available.';
        }
    }
});
