const bigPic = document.querySelector('#cup');
const smallPic = document.querySelectorAll('.small');

smallPic.forEach(pic => pic.onclick = showBig);

function showBig(){
    const newPic = this.src;
    bigPic.setAttribute("src", newPic);
}