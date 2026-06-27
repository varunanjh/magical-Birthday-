const bgMusic = document.getElementById('bgMusic');
const gallery = document.getElementById('gallery');
const imgDisplay = document.getElementById('imgDisplay');
let count = 1;

document.getElementById('startBtn').addEventListener('click', () => {
    bgMusic.play();
    document.querySelector('h1').classList.add('hidden');
    document.getElementById('startBtn').classList.add('hidden');
    gallery.classList.remove('hidden');
});

function nextImg() {
    count++;
    if (count > 6) count = 1;
    imgDisplay.src = "photo" + count + ".jpg";
}
