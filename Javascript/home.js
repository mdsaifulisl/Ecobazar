// product scroll 
const scroll = document.querySelector('.productscroll');


scroll.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scroll.scrollLeft += evt.deltaY;
});

function updateTime() {
    const now = new Date();

    // Extract parts of the date and time
    const day = now.getDate();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    hours = hours % 12 || 12; 

    // Update HTML
    document.querySelector('.date').textContent = `${day} :`;
    document.querySelector('.hours').textContent = `${hours} :`;
    document.querySelector('.minuss').textContent = `${minutes.toString().padStart(2, '0')} :`;
    document.querySelector('.second').textContent = `${seconds.toString().padStart(2, '0')} :`;
}
setInterval(updateTime, 1000);
updateTime();


const add = document.querySelector('.add');
const addDlt = document.querySelector('.delate-add');

window.onload = () => {
    setTimeout(() => {
        add.style.display = 'flex';
    }, 1000); 
};

addDlt.onclick = () => {
    add.style.display = 'none';
};


const slid = document.querySelector('.client-items');
const clientBtns = document.querySelectorAll('.client-btn span'); 
const itemBox = document.querySelectorAll('.item-box')[0]; 

let firstImgWidth = itemBox.clientWidth + 10; 

clientBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        slid.scrollLeft += btn.id === 'client-left' ? -firstImgWidth : firstImgWidth;
    });
});

