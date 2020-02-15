// 動くものクラス を定義
var Moveble = function(x, y) {
  this.pos = {
    x: x,
    y: y
  };
  this.move = function(x,y){
    this.pos.x += x;
    this.pos.y += y;
  };
}

// ボールオブジェクトを格納する空の配列を用意する
var ball = [];

// １００回繰り返し
for (var i = 0; i<=100; i++) {
// ボールオブジェクトのインスタンスを生成する
  ball[i] = new Moveble(
    Math.floor(Math.random()*window.innerWidth),
    Math.floor(Math.random()*window.innerHeight)
  );
}

// ボールをブラウザに描写する
for (var i=0; i<=100; i++) {
  document.write('<div class="ball" style="top:' + ball[i].pos.y + 'px;left:' + ball[i].pos.x + 'px;">●</div>');
}