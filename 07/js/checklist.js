
const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

let itemList = [];
function addList(){
    const item = document.querySelector("#item").value; 
    if(item){
        itemList.push(item);
        document.querySelector("#item").value = '';
        document.querySelector("#item").focus();
    }
    showList();
}

// (string, string) -> (string -> string)
function tagWrapper(open, close){
    return item => `${open}${item}${close}`;
}

function showList(){
    const ulWrap = tagWrapper('<ul>', '</ul>');
    const liWrap = tagWrapper('<li>', '</li>');
    let wrappedList = itemList
        .map((item, idx)=> {
            const  spanWrap = tagWrapper(`<span class='close' id=${idx}>`,`</span>`);
            return liWrap(item+spanWrap('X'));})
        .reduce((preV, currV)=> preV+currV, '');
    let list = ulWrap(wrappedList);
    
    document.querySelector("#itemList").innerHTML = list;

    let remove = document.querySelectorAll(".close");
    remove.forEach(item => item.addEventListener("click", removeList));

    function removeList(){
        const id = this.getAttribute("id");
        //console.log(typeof(id));
        itemList.splice(id, 1);
        showList();
    }
}

