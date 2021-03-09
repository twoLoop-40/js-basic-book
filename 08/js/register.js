function newRegister(){
    let newP = document.createElement("p");
    const userName = document.querySelector("#userName");
    const newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    let delBttn = document.createElement('span');
    const delText = document.createTextNode('X');
    delBttn.setAttribute('class', 'del');
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    let nameList = document.querySelector('#nameList');
    //nameList.appendChild(newP);
    nameList.insertBefore(newP, nameList.childNodes[0]);
    userName.value = '';

    let removeBttns = document.querySelectorAll('.del');
    removeBttns.forEach(bttn => {
        bttn.addEventListener('click', function(){
            if (this.parentNode.parentNode)
                this.parentNode.parentNode.removeChild(this.parentNode);
        });
    });
}
