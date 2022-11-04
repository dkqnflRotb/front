'use strict';

// 오늘날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear();  //연도 4자리를 갖고온다.
const month = today.getMonth()+1;  // 월(기존월보다 1자리 작다.)
const date = today.getDate();      //일
const hour = today.getHours();     //시
const minute = today.getMinutes(); //분
const second = today.getSeconds(); //초
const yymmdd = year + "-" + month + "-"+ date + " " + hour + ":" +minute + ":" + second;

//표준날짜 출력 함수

function fCheck1(){
  let date1 =new Date();
  document.getElementById("demo").innerHTML = date1;
}

// 편집날짜 함수
function fCheck2(){
  let strDate = yymmdd;
  demo.innerHTML = strDate;
}

// 쉬운날짜 함수
function fCheck3(){
  let str = "";
  str += year + "년 " ;
  str += month + "월 " ;
  str += date + "일 " ;
  // 요일 : 0(일),1(월),2(화),3(수),4(목),5(금),6(토)
  // str += today.getDay() + "요일"; //요일 : getDay()
  let week = ["일","월","화","수","목","금","토"];
  str += week[today.getDay()] + "요일 ";
  str += hour + "시 ";
  str += minute + "분 ";
  str += second + "초";

  let strDate = str;
  demo.innerHTML = strDate;
}

// 시간출력 함수
function fCheck4(){
  // // let strDate =today.getTime();
  // let strTime =today.getMilliseconds();
  // strTime = (today.getMilliseconds()/100)+"초";
  // let strDate = strTime;
  // demo.innerHTML = strDate;
  let startDate = today.getTime();
  let lastDate = new Date();

}

// 해당월의 마지막일자꺼내기 함수
function fCheck5(){
  // let strDate =today.getTime();
  let stryy = document.getElementById("year").value;
  let strmm = document.getElementById("month").value;
  let strDate = new Date(stryy,strmm,0);  //new Date (년,월,일,시,분,초);
  // let strda = "해당월의 마지막 일자는? " + strDate.getDate();
  let strda = strDate.getDate()+"일";
  let ymd =  stryy+"년"+strmm+"월 <br/> 해당월의 마지막일은?"+strda;
  demo.innerHTML = ymd;
}

// 해당월마지막일자(yyyy-mm-dd)
function fCheck6(){
  // let strDate =today.getTime();
  let stryy = document.getElementById("year").value;
  let strmm = document.getElementById("month").value;
  let strDate = new Date(stryy,strmm,0);  //new Date (년,월,일,시,분,초);
  // let strda = "해당월의 마지막 일자는? " + strDate.getDate();
  let strda = strDate.getDate();
  let mm = ('0'+ strmm).slice(-2);
  let ymd =  strDate.getFullYear()+"-"+mm+"-"+strda+"<br/> 해당월의 마지막일은?"+strda;
  demo.innerHTML = ymd;
}

// 오늘날짜(yyyy-mm-dd)
function fCheck7(){
  let strDate = year + "-" + month + "-" +date;
  let fmtDate = strDate.split("-");
  let yy = fmtDate[0];
  let mm = ('0' + fmtDate[1]).slice(-2);
  let dd = ('0' + fmtDate[2]).slice(-2);
  let ymd = yy+"-"+mm+"-"+dd;
  demo.innerHTML = ymd;
}

//