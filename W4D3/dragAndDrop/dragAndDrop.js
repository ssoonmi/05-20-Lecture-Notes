function handleDragStart (e) {
    e.target.classList.add("is-being-dragged");
    e.target.innerHTML = "I'm being dragged!";
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnd (e) {
    e.target.classList.remove("is-being-dragged");
    e.target.innerHTML = "Drag Me!";
}

const handleDragEnter = e => {
    e.preventDefault();
    e.target.classList.add("is-active-drop-zone");
};

const handleDragLeave = e => {
    e.target.classList.remove("is-active-drop-zone");
};

const handleDragOver = function (e) {
    e.preventDefault();
};

const handleDrop = function (e) {
    const id = e.dataTransfer.getData('text/plain');
    const draggedEl = document.getElementById(id);
    draggedEl.removeEventListener('dragend', handleDragEnd);
    draggedEl.draggable = false;
    draggedEl.innerHTML = "I've been dropped!";
    e.target.appendChild(draggedEl);
};

window.addEventListener('DOMContentLoaded', () => {
    const redSquare = document.getElementById("red-square");
    const dropZone = document.getElementById("drop-zone");

    redSquare.addEventListener('dragstart', handleDragStart);
    redSquare.addEventListener('dragend', handleDragEnd);

    dropZone.addEventListener('dragenter', handleDragEnter);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
});