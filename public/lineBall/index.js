window.onload=function(){
	WIN_WIDTH = document.documentElement.clientWidth;
	WIN_HEIGHT = document.documentElement.clientHeight;
    Canvas = document.getElementById("can");
	CTX = Canvas.getContext("2d");
	BALLS=[]
	Canvas.init=function(){
		this.width = WIN_WIDTH;
		this.height = WIN_HEIGHT;
	}
	Canvas.drawball = function(x,y,r){
		CTX.fillStyle="white";
		CTX.beginPath();
		CTX.arc(x,y,r,0,2*Math.PI,true);
		CTX.closePath();
		CTX.fill();
	}
	function getBalls(num){
		for (var i = 0; i < num; i++) {
			var ball ={
				pos:{
					x:Math.random()*WIN_WIDTH,
					y:Math.random()*WIN_HEIGHT,
				},
				r:8,
				vx:Math.random()*5,  //水平速度
				vy:Math.random()*5,  //垂直速度
				a:Math.random()*5,
			}
			BALLS.push(ball);
		}
	}
	function drawBalls(){
		CTX.clearRect(0,0,WIN_WIDTH,WIN_HEIGHT);
		BALLS.forEach(function(ball){
			Canvas.drawball(ball.pos.x,ball.pos.y,ball.r,0,2*Math,true)
		})
	}
	function upDate(){
		BALLS.forEach(function(ball){
			ball.pos.x+=ball.vx;
			ball.pos.y+=ball.vy;
			if(ball.pos.y+ball.r>WIN_HEIGHT||ball.pos.y<ball.r){
				ball.vy=-ball.vy;
			}
			else if(ball.pos.x+ball.r>WIN_WIDTH||ball.pos.x<ball.r){
				ball.vx=-ball.vx;
			}
		})
	}
	function drawLines(){
		for (var i = 0; i < BALLS.length; i++) {
			for (var j = 0; j < BALLS.length; j++) {
				if(BALLS[i]==BALLS[j]){break;}
					CTX.save();
					CTX.beginPath();
					CTX.lineWidth="1";
					CTX.strokeStyle="white"
					CTX.moveTo(BALLS[i].pos.x,BALLS[i].pos.y);
					CTX.lineTo(BALLS[j].pos.x,BALLS[j].pos.y);
					CTX.stroke();
					CTX.restore();
								
			}	
		}
		
	}


	

	function main(){
		Canvas.init();
		getBalls(10);
		// drawBalls()
		
		
		setInterval(function(){
			drawBalls();
			drawLines();
			upDate();
		},16.7)
	}
	main();
}	