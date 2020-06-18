WINDOW_WIDTH = 1290;
WINDOW_HEIGHT = 760;
var Canvas= {};
Canvas.ctx = document.getElementById('myCanvas').getContext("2d");

Canvas.size = function  (WINDOW_HEIGHT,WINDOW_HEIGHT) {
  this.width = WINDOW_HEIGHT;
  this.height = WINDOW_HEIGHT;
}

Canvas.Point = function(x,y) {
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	this.x=width;
	this.y=height;
}

Canvas.windMill = function() {
	var me = Canvas;
	var BackgroundWidth = WINDOW_WIDTH/2;
	var BackgroundHeight = WINDOW_HEIGHT/2;
	var PILLARHEIGHT = 150;
	cntxt = me.ctx;
	center = new me.Point(WINDOW_WIDTH/2,WINDOW_HEIGHT/2);
	// 绘制背景
	function drawBackground(){
		cntxt.save();
		cntxt.fillStyle = "rgba(198,237,237,1)";
		cntxt.fillRect(center.x / 2 - BackgroundWidth / 2,center.y / 2 - BackgroundWidth / 2,
			BackgroundWidth,BackgroundHeight);
		cntxt.fill();
		cntxt.restore();
	}

	// 绘制柱子
	function Pillar(){
		cntxt.save();
		cntxt.fillStyle="white";
		cntxt.translate(center.x / 2-25,center.y / 2 - 25);
		cntxt.moveTo(0,0);
		cntxt.lineTo(20,0);
		cntxt.lineTo(10,- PILLARHEIGHT)
		cntxt.fill();
		cntxt.restore();
	}

	// 叶子
	var tangle = 0;
	var speed = 1;
	var R = 20;
	var X = center.x / 2 -2 * R + 20 + 5;
	var Y =center.y / 2 - PILLARHEIGHT - R;
	// var Y=100;
	function leaf(tangle){
		cntxt.save();
		cntxt.beginPath();
		cntxt.arc(X -(2 * R * Math.cos(tangle)),Y - 2 * R * Math.sin(tangle), 2 * R, tangle, Math.PI + tangle, true)
		cntxt.fillStyle = "white";
		cntxt.closePath();
		cntxt.fill();
	}

	this.rotate=function(){
		cntxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
		drawBackground();
		Pillar();
	  tangle = tangle + (speed * 1 / 32) * Math.PI;
		leaf(tangle);
		leaf(tangle + Math.PI);
		leaf(tangle + 3 / 2 * Math.PI);
		leaf(tangle + 1 / 2 * Math.PI);
	}
}

var main =function(){
	var windmill = new Canvas.windMill();
	setInterval(windmill.rotate, 20);
}

window.onload = function() {
	main();
}