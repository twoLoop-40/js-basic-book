let userId = document.querySelector('#userId');
let pw1 = document.querySelector('user-pw1');
let pw2 = document.querySelector('user-pw2');

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;





/***************************************************/
function checkId(){
    if(userId.value.length<4 || userId.value.length>15){
        alert('4~15자리의 영문과 숫자를 사용하세요.');
        userId.select();
    }
}

function checkPw(){
    const len = pw1.value.length;
    if(len < 8){
        alert('비밀번호는 8자리 이상이어야 합니다.');
        pw1.value = '';
        pw1.focus();
    }
}

function comparePw(){
    const p1 = pw1.value;
    let p2 = pw2.value;
    if(p1 !== p2){
        alert('암호가 다릅니다. 다시 이력하세요');
        p2 = '';
        pw2.focus();
    }
}
