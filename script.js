document.querySelector('.add-new').addEventListener('click', () => {
    const archiveName = prompt('새로운 아카이브의 이름을 입력하세요:');
    if (!archiveName) return;

    const archiveDescription = prompt('아카이브에 대한 설명을 입력하세요:');
    if (!archiveDescription) return;

    const newArchiveCard = document.createElement('div');
    newArchiveCard.className = 'archive-card';
    
    newArchiveCard.innerHTML = `
        <img src="https://via.placeholder.com/300" alt="${archiveName} 아카이브">
        <h3>${archiveName}</h3>
        <p>${archiveDescription}</p>
    `;

    const archivesGrid = document.querySelector('.archives-grid');
    const addNewButton = document.querySelector('.add-new');
    archivesGrid.insertBefore(newArchiveCard, addNewButton);
});