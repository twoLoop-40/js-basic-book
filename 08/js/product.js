let isOpen = false;
var bigPic = document.querySelector("#cup");  
var smallPics = document.querySelectorAll(".small");  

for(i=0; i<smallPics.length; i++) {
	smallPics[i].addEventListener("click", function() {
		newPic = this.src;
		bigPic.setAttribute("src", newPic);
	});
}

const view = document.querySelector('#view');
let detail =document.querySelector('#detail');
view.addEventListener('click', () => {
	if(!isOpen){
		
		detail.style.display = 'block';
		view.innerHTML = '상세 설명 닫기';
		isOpen = true;
	} else{
		
		detail.style.display = 'none';
		view.innerHTML = '상세 설명 보기';
		isOpen = false;
	}
});