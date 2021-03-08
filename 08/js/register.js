function newRegister(){
    let newP = document.createElement("p");
    const userName = document.querySelector("#userName");
    const newText = document.createTextNode(userName.value);
    newP.appendChild(newText);
    let nameList = document.querySelector('#nameList');
    nameList.appendChild(newP);
    userName.value = '';
}
