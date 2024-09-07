document.getElementById('tipForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const tipTitle = document.getElementById('tipTitle').value;
    const tipDetails = document.getElementById('tipDetails').value;

    addTip(tipTitle, tipDetails);

    document.getElementById('tipForm').reset();
});

function addTip(title, details) {
    const tipsContainer = document.getElementById('tipsContainer');
    const newTip = document.createElement('div');
    newTip.classList.add('tip');

    const tipTitle = document.createElement('h3');
    tipTitle.textContent = title;
    newTip.appendChild(tipTitle);

    const tipDetails = document.createElement('p');
    tipDetails.textContent = details;
    newTip.appendChild(tipDetails);

    tipsContainer.appendChild(newTip);
}
