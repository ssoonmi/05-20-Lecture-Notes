
const handleDragStart = e => {
    e.target.classList.add('is-being-dragged');
    e.target.innerHTML = "I'm Being Dragged!";
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.dropEffect = 'move';
};

const handleDragEnd = e => {
    e.target.classList.remove('is-being-dragged');
    e.target.innerHTML = "Drag Me!"
}

const handleDragEnter = e => {
    // Needed so that the "drop" event will fire.
    e.preventDefault();
    e.target.classList.add('is-active-drop-zone');
};

const handleDragLeave = e => {
    e.target.classList.remove('is-active-drop-zone');
};

const handleDragOver = e => {
    const id = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    // Needed so that the "drop" event will fire.
    e.preventDefault();
};

const handleDrop = e => {
    const id = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    draggedElement.removeEventListener('dragend', handleDragEnd);
    draggedElement.draggable = false;
    draggedElement.innerHTML = "I've been dropped!";
    e.target.appendChild(draggedElement);
};

window.addEventListener('DOMContentLoaded', () => {
    const redSquare = document.getElementById('red-square');
    redSquare.addEventListener('dragstart', handleDragStart);
    redSquare.addEventListener('dragend', handleDragEnd);

    const dropZone = document.getElementById('drop-zone');
    dropZone.addEventListener('dragenter', handleDragEnter);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
});