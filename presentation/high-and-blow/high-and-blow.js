'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const randomNumber = [];

// const reasoningNumbers = [];
let count = 1;
let num = 0;
let responseTime = "";

for (let i = 0; i < 3; i++) {
  num = Math.floor(Math.random() * 10);

  for (let j = 0; j < i; j++){
    while (num === randomNumber[j]){
      console.log("num randomNumber" + num + " " + randomNumber[j]);
      num = Math.floor(Math.random() * 10);
      console.log("num randomNumber" + num + " " + randomNumber[j]);
    }
  }
  
  randomNumber.push(num);
  console.log("random number is " + randomNumber);
}





function clickBtn() {
  // const reasoningNumber = {};
  const yourNumbers = [];
  let hitCount = 0;
  let blowCount = 0;

  const num = document.getElementById("num1");

  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const num3 = Number(document.getElementById("num3").value);

  const button = document.getElementById("sendbutton");
  

  if (num1 === num2 || num2 === num3 || num3 === num1) {
    alert("同じ数字は入力できません");
    return;
  }

  // num.addEventListener('keyup', function() {
  //   const num4 = Number(document.getElementById("num1").value);
  //   if(num4) {
  //     // ボタンのdisabled属性を取り除く
  //     button.disabled = null;
  //   } else {
  //     // ボタンにdisabledを設定する
  //     button.disabled = "disabled";
  //   }
  // })

  

  // if (num1 === num2 || num2 === num3 || num3 === num1) {
  //   button.disabled = "disabled";
  // } else {
  //   button.disabled = null;
  // }

  // reasoningNumber["number"] = num1;
  // reasoningNumber["hit"] = num2;
  // reasoningNumber["blow"] = num3;

  // reasoningNumbers.push(reasoningNumber);

  // console.log(reasoningNumbers);

  yourNumbers.push(num1);
  yourNumbers.push(num2);
  yourNumbers.push(num3);

  console.log("your number is " + yourNumbers);
  const table = document.getElementsByTagName("tbody")[0];
  const line = table.appendChild(document.createElement("tr"));

  // const yourNumber = document.createElement("td");
  const responseCount = line.appendChild(document.createElement("th"));
  responseCount.textContent = count;
  const yourNumber = line.appendChild(document.createElement("td"));
  yourNumber.textContent = num1 + " " + num2 + " " + num3;



  // const tr = document.getElementsByTagName("tr");
  line.appendChild(yourNumber);
  

  // for (let i = 0; i < reasoningNumbers.length; i++) {
  //   document.getElementById("your-number1").textContent = reasoningNumbers[i].number.value;
  //   document.getElementById("your-number2").textContent = reasoningNumbers[i].hit.value;
  //   document.getElementById("your-number3").textContent = reasoningNumbers[i].blow.value;
  // }
  // num1.disabled = true;
  // num2.disabled = true;
  // num3.disabled = true;

  for (let i = 0; i < 3; i++) {
    if (yourNumbers[i] === randomNumber[i]) {
      hitCount += 1;
      console.log("hiCount++");
    } else if (yourNumbers[i] === randomNumber[0] || yourNumbers[i] === randomNumber[1] || yourNumbers[i] === randomNumber[2]) {
      blowCount += 1;
    }
    console.log("your number is " + yourNumbers[i] + "type " + typeof yourNumbers[i]);
    console.log("random number is " + randomNumber[i] + "type " + typeof randomNumber[i]);
  }

  const hit = document.createElement("td");
  hit.textContent = hitCount;
  // hit.className = 'hit-blow';

  const blow = document.createElement("td");
  blow.textContent = blowCount;
  // blow.className = 'hit-blow';

  line.appendChild(hit);
  line.appendChild(blow);

  if (hitCount === 3) {
    console.log("hit!");
    button.disabled = "disabled";
    responseTime = hour + ":" + min + ":" + sec;
    dialogOK.showModal();
  }

  if (count === 10) {
    button.disabled = "disabled";
    responseTime = hour + ":" + min + ":" + sec;
    dialogNG.showModal();
  }

  
  console.log("count is " + count);

  document.getElementsByClassName("time")[0].innerText = responseTime;
  document.getElementsByClassName("responses")[0].innerText = String(count);

  document.getElementsByClassName("time")[1].innerText = responseTime;
  document.getElementsByClassName("responses")[1].innerText = String(count);

  document.getElementsByClassName("answer")[0].innerText = randomNumber[0] + " " + randomNumber[1] + " " + randomNumber[2];
  document.getElementsByClassName("answer")[1].innerText = randomNumber[0] + " " + randomNumber[1] + " " + randomNumber[2];

  count++;


  // const time = document.getElementsByClassName("time");
  // time[0].innerText = responseTime;

  // const responses = document.getElementsByClassName("responses");
  // responses[0].innerText = String(count);

  // const time = document.getElementsByClassName("time");
  // time[1].innerText = responseTime;

  // const responses = document.getElementsByClassName("responses");
  // responses[1].innerText = String(count);
}

function dialogOK_Close() {
  dialogOK.close();
}

function dialogNG_Close() {
  dialogNG.close();
}





