const Paddle = function (player, color){
	
	const c = color
	const w = 20
	const h = 100
	const p = player

	const w2 = 20
	const h2 = 160
	const p2 = player

	// ? es un if corto   : en caso constrario

	let x = p === 1 ? 140 : width - h-70

	let x2 = p2 === 1 ? 140 : width -h2-10

	const speed = 10
	const UP = -1
	const DOWN = 1

	const RIGHT = 1
	const LEFT = -1



	let y = Math.floor(height / 2)

	let score = 0

	const getX = function(){
		return x
	}
	const getY = function(){
		return y
	}

	const getW = function(){
		return w
	}

	const getH = function(){
		return h
	}
	const getScore = function(){
		return score
	}



	const draw = function (){
		rectMode(CORNER)
		noStroke()
		fill(c)
		rect(x, y-20, w, h)
		
	}


	const draw2 = function (){
		rectMode(CORNER)
		noStroke()
		fill(c)
		rect(x2, y, w2, h2)
		
	}


	const move = function(dir){
		if(edge(dir))
		{
			
			y+= (speed * dir)
		}
		
		
	}

	const move2 = function(dir2){
		
		if(edge2(dir2))
		{
			
			x+= (speed * dir2)
		}
		
	}

	const move3 = function(dir3){
		
		if(edge3(dir3))
		{
			
			x+= (speed * dir3)
		}
		
	}


	const edge = function(dir){
		return(dir === UP && y > 0   ||   dir === DOWN && y < height - h)

	}
	const edge2 = function(dir2){
		return(dir2 === LEFT  && x > 0 ||  dir2 === RIGHT && x < (width/2) - w)

	}
	const edge3 = function(dir3){
		return(dir3 === LEFT  && x > (width/2) ||  dir3 === RIGHT && x < width-w)

	}



	const updateScore = function(){
		score++
	}

	return{
		draw,
		draw2,
		move,
		move2,
		move3,
		getH,
		getW,
		getX,
		getY,
		getScore,
		updateScore
	}

}