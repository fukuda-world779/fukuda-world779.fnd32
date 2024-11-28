'use strict'
// 1行目に記載している 'use strict' は削除しないでください

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

  if (pass === 3) { //制限時間を3600秒とする
    return;
  }

  setTimeout("timer()", 1000); //1秒ごとにカウントを更新
}

timer();
