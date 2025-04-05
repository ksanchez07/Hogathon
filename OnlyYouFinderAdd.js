const mainContainer = document.querySelector('main');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
    const folderName = prompt('Enter the name of the new folder: ');

    if(folderName) {
        const newFolder = document.createElement('div');
        newFolder.classList.add('folder');
        newFolder.innerHTML=`
        <img src ="assets/icons/folder-icon.png" alt="Folder Icon">
        <p>${folderName}</p>
        `;
    mainContainer.appendChild(newFolder);
    }else{
        alert('Folder name cannot be empty!')
    }
});