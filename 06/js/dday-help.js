//(Date) => [number => Date]
function makeNewDate(dateObj){
    timeformillisec = dateObj.getTime();
    return num => {
        let newDate = new Date(timeformillisec + num);
        return newDate;
    };
}

// (Date, Date) -> milliseconds
function timeDifference(d1, d2){
    let t1 = d1.getTime();
    let t2 = d2.getTime();
    return Math.abs(t1-t2);
}
// (Date, Date) -> day
function timePassed(d1, d2){
    const time = timeDifference(d1, d2);
    return millisecToDay(time);
}

// (day) -> millisec
function daysToMillisec(day){
    return day*24*60*60*1000;
}

// (millisec) -> day
function millisecToDay(msec){
    const sec = msec/1000;
    const min = sec/60;
    const hour = min/60;
    const days = Math.floor(hour/24);
    return days;
} 

// (domId, str) -> void
function setValue(id, str){
    document.querySelector(id).innerText = str;
}

/************************************************/
const firstDate = new Date("2021-2-5");
const afterFirstDate = makeNewDate(firstDate);
const dates ={
    today: new Date(),
    'd100': afterFirstDate(daysToMillisec(100)),
    'd200': afterFirstDate(daysToMillisec(200)),
    'y1': afterFirstDate(daysToMillisec(365)),
    'd500': afterFirstDate(daysToMillisec(500))
}
const daysPast = millisecToDay(timeDifference(dates.today, firstDate));

// (Date) -> daystring
function dateToStr(dateObj){
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    return `${year}년 ${month}월 ${date}일`;
}

console.log(dateToStr(dates['d100']));
setValue('#date100', dateToStr(dates['d100']));
setValue('#date200', dateToStr(dates['d200']));
setValue('#date365', dateToStr(dates['y1']));
setValue('#date500', dateToStr(dates['d500']));
setValue('#accent', `${timePassed(firstDate, dates.today)}일`);

