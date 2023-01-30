

// Crie uma variável canvas
var canvas = new fabric.Canvas('mycanvas')
//Defina as posições iniciais da bola e do buraco.
ball_x=0
ball_y=0

ball_x=400
ball_y=800

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL('golf-h.png',function(Img) {
		hole_obj = Img
		hole_obj.scaleToHeight(50)
		hole_obj.scaleToWidht(50)
		hole_obj.set({
			top:hole_y,
             left:hole_x
		})
		canvas.add(hole_obj);

	})
	newImage()
	
}

function newImage()
{
	


	fabric.Image.fromURL('ball.png',function(Img) {
		bola = Img
		bola.scaleToHeight(50)
		bola.scaleToWidht(50)
		bola.set({
			top:ball_y,
             left:ball_x
		})
		canvas.add(bola);
	})
	
}






window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(bola)
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
		if(ball_y >=5){
			ball_y = ball_y - block_image_height
			canvas.remove(bola)
			newImage()
	}

	function down()
	{
		 // Escreva o código para mover a bola para baixo.
		 if(ball_y <=450){
ball_y = ball_y + block_image_height
canvas.remove(bola)
newImage()





		 }
	}

	function left()
	{
		if(ball_X >5)

		{
			ball_x = ball_x - block_image_height
			canvas.remove(bola)
			newImage()
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_X <=1050)
		
		{
			ball_x = ball_x + block_image_height
			canvas.remove(bola)
			newImage()
			// Escreva o código para mover a bola para a direita.
		}
	}
	
}
}


