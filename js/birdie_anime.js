var birdie = document.getElementById('birdieContainer');
var container = document.getElementById('container');
var y = 256;    //directional horizontal
var x = 0;    //directional vertical
	
	function anim(e){
		if(e.keyCode==39){ //left directional
			y +=2;
			birdie.style.left = y  + 'px';
		
		if(y>=680){
			y -=2;
		}
	}
	
		if(e.keyCode==37){ //right directional
			y -=2;
			birdie.style.left = y  + 'px';
		
			if(y<=0){
				y +=2;
		}
	}
	//ending left and right function
	//starting up and down function
			if(e.keyCode==40){ //left directional
				x +=2;
				birdie.style.top = x  + 'px';
		
			if(x>=470){
				x -=2;
		}
	}
	
			if(e.keyCode==38){ //right directional
				x -=2;
				birdie.style.top = x  + 'px';
		
			if(x<=0){
				x +=2;
		}
	}
}
	document.onkeydown = anim;//trigger the animation function
	