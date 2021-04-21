/* Attribute 2 */
let inputNum = prompt(`숫자를 입력해주세요.`,`숫자`);
console.log(inputNum);
let num = Math.random()*10 + 1;//random 반환하는 값 => (0부터 ~ 1미만) * 10 => 1 ~ 9
// num = Math.ceil(num); //소수점 아래 올림
// console.log(num);

// num = Math.round(num); //소수점 아래 반올림
// console.log(num);

num = Math.floor(num); //소수점 아래 버림
console.log(num);

function changeColor(){
  document.querySelectorAll('div')[num-1].setAttribute('class','selected');
  t = setTimeout(timeFunc,2000);
  function timeFunc(){
      if(inputNum == num){
      alert('당첨번호는 '+num+'입니다.\n이벤트에 당첨되셨습니다!!!');
    }else{
      alert('당첨번호는 '+num+'입니다. 이벤트에 당첨 안되셨습니다!!! \n다음 기회에 도전');
    }
  }
}

function reset(){
  document.querySelectorAll('div')[num-1].removeAttribute('class');
}
