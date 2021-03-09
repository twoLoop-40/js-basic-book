let check = document.querySelector('#shippingInfo');
const idListTo = ['#shippingName', '#shippingTel', '#shippingAddr'];
const idListFrom = ['#billingName', '#billingTel', '#billingAddr'];
check.addEventListener('click', () =>{
    if(check.checked == true){
        applyFuncForList(moveInfo, idListFrom, idListTo);
    } else{
        idListTo.forEach(id => resetInfo(id));
    }
});

/******helper functions *******/
// (string, string) -> null 
// string : id for tag
function moveInfo(id1, id2){
    document.querySelector(id2).value = document.querySelector(id1).value;
}
function resetInfo(id){
    document.querySelector(id).value = '';
}
// (func, [], []) -> null
function applyFuncForList(func, list1, list2){
    if (list1.length !== list2.length){
        console.error();
    } else{
        for(let i=0; i<list1.length; i++){
            func(list1[i], list2[i]);
        }
    }
}
