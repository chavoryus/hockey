let ball
let p1
let p2

let porteria1
let porteria2

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  p1 = new Paddle(1,color('blue'))
  p2 = new Paddle(2,color('red'))

  porteria1 = new Paddle(1,color('white'))
  porteria2 = new Paddle(2,color('white'))

  ball = new Ball()

}

function draw(){
	background('#40ff00')
	drawLine()
	ball.draw()
	ball.move()
	if(ball.collision(porteria1) || ball.collision(porteria2) || ball.collision(p1) || ball.collision(p2))
		ball.move()
	let checkScore = ball.checkScore()
	if (checkScore === 2)//anoto el player 2
		p2.updateScore()
	else if(checkScore === 1)
		p1.updateScore()

	p1.draw()
	p2.draw()


	porteria1.draw2()
	porteria2.draw2()
	
	if (keyIsPressed) {

		if(keyIsDown(87))
			p1.move(-1)
		if(keyIsDown(83))
			p1.move(1)
		//////
		if(keyIsDown(68))
			p1.move2(1)
		if(keyIsDown(65))
			p1.move2(-1)
		//////

		if(keyIsDown(UP_ARROW))
			p2.move(-1)
		if(keyIsDown(DOWN_ARROW))
			p2.move(1)
		///
		if(keyIsDown(LEFT_ARROW))
			p2.move3(-1)
		if(keyIsDown(RIGHT_ARROW))
			p2.move3(1)
		
	}

	showScore()

}


const drawLine = function(){
	stroke('#fff')
	strokeWeight(4)
	line(width / 2, 0, width / 2,height)
	
}


const showScore = function(){
	fill('black')
	textSize(50)
	text(p1.getScore(), width * 0.25, 70)
	text(p2.getScore(), width * 0.75, 70)

}


