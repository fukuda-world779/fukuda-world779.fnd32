'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 答えをランダムに生成
const randomNumber = [];

let count = 0;
let num = 0;
let responseTime = "";
let stopFlag = 0;

for (let i = 0; i < 3; i++) {
  num = Math.floor(Math.random() * 10);

  for (let j = 0; j < i; j++) {
    while (num === randomNumber[j]) {
      console.log("num randomNumber" + num + " " + randomNumber[j]);
      num = Math.floor(Math.random() * 10);
      console.log("num randomNumber" + num + " " + randomNumber[j]);
    }
  }

  randomNumber.push(num);
  console.log("random number is " + randomNumber);
}


// ボタンを押したときの動作
function clickBtn() {
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

  yourNumbers.push(num1);
  yourNumbers.push(num2);
  yourNumbers.push(num3);

  console.log("your number is " + yourNumbers);
  const table = document.getElementsByTagName("tbody")[0];
  const line = table.appendChild(document.createElement("tr"));

  const responseCount = line.appendChild(document.createElement("th"));
  responseCount.textContent = count + 1;
  const yourNumber = line.appendChild(document.createElement("td"));
  yourNumber.textContent = num1 + " " + num2 + " " + num3;

  line.appendChild(yourNumber);

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

  const blow = document.createElement("td");
  blow.textContent = blowCount;

  line.appendChild(hit);
  line.appendChild(blow);

  if (hitCount === 3) {
    console.log("hit!");
    stopFlag = 1;
    button.disabled = "disabled";
    responseTime = hour + ":" + min + ":" + sec;

    const pTag = document.createElement("p");
    pTag.textContent = "ゲームクリア！"
    pTag.className = "game-clear";
    document.getElementById("dialog-title").appendChild(pTag);

    dialog.showModal();
  }

  if (count === 9) {
    stopFlag = 1;
    button.disabled = "disabled";
    responseTime = hour + ":" + min + ":" + sec;

    const pTagOne = document.createElement("p");
    pTagOne.textContent = "ゲームオーバー！"
    pTagOne.className = "game-clear";
    document.getElementById("dialog-title").appendChild(pTagOne);

    const pTagTwo = document.createElement("p");
    pTagTwo.textContent = "10回回答していまいました。。。"
    document.getElementById("dialog-title").appendChild(pTagTwo);

    dialog.showModal();
  }


  console.log("count is " + count);

  document.getElementsByClassName("time")[0].innerText = responseTime;
  document.getElementsByClassName("responses")[0].innerText = String(count);
  document.getElementsByClassName("answer")[0].innerText = randomNumber[0] + " " + randomNumber[1] + " " + randomNumber[2];

  count++;
}

function dialog_Close() {
  dialog.close();
}

//時間計測
let start = new Date();
let hour = 0;
let min = 0;
let sec = 0;
let now = 0;
let pass = 0;

function timer() {
  now = new Date();
  console.log(start);
  console.log(now);

  pass = parseInt((now.getTime() - start.getTime()) / 1000 - 2); //秒単位の経過時間 アニメーション時間の2秒をマイナスする
  console.log(pass);
  console.log(typeof pass);

  hour = parseInt(pass / 60 / 60);
  min = parseInt(pass / 60 % 60);
  sec = pass % 60;

  console.log(hour + ":" + min + ":" + sec);

  if (pass >= 0) {
    document.getElementById("count-timer").textContent = hour + ":" + min + ":" + sec;
  }

  if (pass === 30) { //制限時間を300秒とする
    const button = document.getElementById("sendbutton");
    button.disabled = "disabled";
    responseTime = hour + ":" + min + ":" + sec;

    const pTagOne = document.createElement("p");
    pTagOne.textContent = "ゲームオーバー！"
    pTagOne.className = "game-clear";
    document.getElementById("dialog-title").appendChild(pTagOne);

    const pTagTwo = document.createElement("p");
    pTagTwo.textContent = "制限時間です。"
    document.getElementById("dialog-title").appendChild(pTagTwo);

    document.getElementsByClassName("time")[0].innerText = responseTime;
    document.getElementsByClassName("responses")[0].innerText = String(count);
    document.getElementsByClassName("answer")[0].innerText = randomNumber[0] + " " + randomNumber[1] + " " + randomNumber[2];
    dialog.showModal();
    return;
  }

  if (stopFlag === 0) {
    setTimeout("timer()", 1000); //1秒ごとにカウントを更新
  }

}

timer();
