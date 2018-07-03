export const Directions = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  STAY: "STAY"
}

// const initialState = {
//   boardWidth: 31,
//   boardHeight: 31,
//   playerPosition: {
//     x: BOARD_WIDTH / 2,
//     y: BOARD_HEIGHT / 2
//   },
//   bombs: [
//     {
//       timer: 2,
//       x: 0,
//       y: 0
//     }
//   ],
//   gameOver: false
// }

export const doTurn = (gameState) => {
	/*let randomize = Math.floor(Math.random()*5);
	switch(randomize)
  	{
  		case 0: return Directions.UP;
  		case 1: return Directions.DOWN;
  		case 2: return Directions.LEFT;
  		case 3: return Directions.RIGHT;
  		case 4: return Directions.STAY;
  		default: return Directions.STAY;
  	}*/
  	const LEVEL_OF_DANGEROUS =3;
  	const bombsArray = gameState.bombs;
  	var playerX = gameState.playerPosition.x;
  	var playerY = gameState.playerPosition.y;
  	var valueBoard = new Array(31);
  	for(let i=0;i<31;i++)
  	{
  		valueBoard[i] = new Array(31);
  		valueBoard[i].fill(0); 
  	}
  	function lordOfLevelValue(x,y,valuetimer)
  	{
  		valueBoard[x][y] = Math.max(LEVEL_OF_DANGEROUS-valuetimer,valueBoard[x][y]);
  	}
    /*bombsArray.foreach(bomb=>{
  		if(bomb.timer!=0)
  		{
  			lordOfLevelValue(bomb.x,bomb.y,bomb.timer);
  			lordOfLevelValue((bomb.x-1+31)%31,bomb.y,bomb.timer);
  			lordOfLevelValue((bomb.x-2+31)%31,bomb.y,bomb.timer);
  			lordOfLevelValue((bomb.x+1)%31,bomb.y,bomb.timer);
  			lordOfLevelValue((bomb.x+2)%31,bomb.y,bomb.timer);
  			lordOfLevelValue(bomb.x,(bomb.y-1+31)%31,bomb.timer);
  			lordOfLevelValue(bomb.x,(bomb.y-2+31)%31,bomb.timer);
  			lordOfLevelValue(bomb.x,(bomb.y+1+31)%31,bomb.timer);
  			lordOfLevelValue(bomb.x,(bomb.y+2+31)%31,bomb.timer);
  			lordOfLevelValue((bomb.x-1+31)%31,(bomb.y-1+31)%31,bomb.timer);
  			lordOfLevelValue((bomb.x+1+31)%31,(bomb.y-1+31)%31,bomb.timer);
  			lordOfLevelValue((bomb.x-1+31)%31,(bomb.y-1+31)%31,bomb.timer);
  			lordOfLevelValue((bomb.x+1+31)%31,(bomb.y-1+31)%31,bomb.timer);
  		}
  	});*/
  	

  	for(let i =0;i<bombsArray.length;i++)
  	{
  		if(bombsArray[i].timer!=0)
  		{
  			lordOfLevelValue(bombsArray[i].x,bombsArray[i].y,bombsArray[i].timer);
  			lordOfLevelValue((bombsArray[i].x-1+31)%31,bombsArray[i].y,bombsArray[i].timer);
  			lordOfLevelValue((bombsArray[i].x-2+31)%31,bombsArray[i].y,bombsArray[i].timer);
  			lordOfLevelValue((bombsArray[i].x+1)%31,bombsArray[i].y,bombsArray[i].timer);
  			lordOfLevelValue((bombsArray[i].x+2)%31,bombsArray[i].y,bombsArray[i].timer);
  			lordOfLevelValue(bombsArray[i].x,(bombsArray[i].y-1+31)%31,bombsArray[i].timer);
  			lordOfLevelValue(bombsArray[i].x,(bombsArray[i].y-2+31)%31,bombsArray[i].timer);
  			lordOfLevelValue(bombsArray[i].x,(bombsArray[i].y+1+31)%31,bombsArray[i].timer);
  			lordOfLevelValue(bombsArray[i].x,(bombsArray[i].y+2+31)%31,bombsArray[i].timer);
  			lordOfLevelValue((bombsArray[i].x-1+31)%31,(bombsArray[i].y-1+31)%31,bombsArray[i].timer);
  			lordOfLevelValue((bombsArray[i].x+1+31)%31,(bombsArray[i].y-1+31)%31,bombsArray[i].timer);
  			lordOfLevelValue((bombsArray[i].x-1+31)%31,(bombsArray[i].y+1+31)%31,bombsArray[i].timer);
  			lordOfLevelValue((bombsArray[i].x+1+31)%31,(bombsArray[i].y+1+31)%31,bombsArray[i].timer);
  		}
  	}
  	
  	switch(valueBoard[playerX][playerY])
  	{

  		//code the AI to check whether there will be a bomb in the position that took 3 steps from current player position

  		//need to have more If loops for efficiency

  		//var randomInt = Math.floor(Math.random()*5)
  		// 		switch(randomInt)
  		// 		{
  		// 			case 0:if(valueBoard[playerX][(playerY-1+31)%31] ==0) return Directions.UP;
  		// 			case 1:if(valueBoard[playerX][(playerY+1+31)%31] ==0) return Directions.DOWN;
  		// 			case 2:if(valueBoard[(playerX-1+31)%31][playerY] ==0) return Directions.LEFT;
  		// 			case 3:if(valueBoard[(playerX+1+31)%31][playerY] ==0) return Directions.RIGHT;
  		// 			case 4: return Directions.STAY;
  		// 			default: break;
  		// 		}
  		 case 0: 
  				return Directions.STAY;
  		        break;

  		case 1:if(valueBoard[(playerX-1+31)%31][playerY] ==0) return Directions.LEFT;
  			   if(valueBoard[(playerX+1+31)%31][playerY] ==0) return Directions.RIGHT;
  			   if(valueBoard[playerX][(playerY+1+31)%31] ==0) return Directions.DOWN;
  			   if(valueBoard[playerX][(playerY-1+31)%31] ==0) return Directions.UP;
  			   if(valueBoard[(playerX + 1 + 31) % 31][playerY] == 1)
  			   {
  			   		if(valueBoard[(playerX+2+31)%31][playerY] ==0 || (valueBoard[(playerX+1+31)%31][(playerY+1+31)%31] ==0)||(valueBoard[(playerX+1+31)%31][(playerY-1+31)%31] ==0))
  			   		{
  			   			return Directions.RIGHT;
  			   		}
  			   }
			   if(valueBoard[(playerX - 1 + 31) % 31][playerY] == 1)
			   {
			   		if(valueBoard[(playerX-2+31)%31][playerY] ==0 || (valueBoard[(playerX-1+31)%31][(playerY+1+31)%31] ==0)||(valueBoard[(playerX-1+31)%31][(playerY-1+31)%31] ==0))
  			   		{
  			   			return Directions.LEFT;
  			   		}
			   }
			   if(valueBoard[playerX][(playerY + 1 + 31) % 31] == 1)
			   {
			   		if(valueBoard[playerX][(playerY+2+31)%31] ==0 || (valueBoard[(playerX-1+31)%31][(playerY+1+31)%31] ==0)||(valueBoard[(playerX+1+31)%31][(playerY+1+31)%31] ==0))
  			   		{
  			   			return Directions.DOWN;
  			   		}
			   }
			   if(valueBoard[playerX][(playerY - 1 + 31) % 31] == 1)
			   {
			   		if(valueBoard[playerX][(playerY-2+31)%31] ==0 || (valueBoard[(playerX-1+31)%31][(playerY-1+31)%31] ==0)||(valueBoard[(playerX+1+31)%31][(playerY-1+31)%31] ==0))
  			   		{
  			   			return Directions.UP;
  			   		}
			   }

			   break;
  		case 2:if (valueBoard[(playerX + 1 + 31) % 31][playerY] == 0) return Directions.RIGHT;
      		   if (valueBoard[(playerX - 1 + 31) % 31][playerY] == 0) return Directions.LEFT;
               if (valueBoard[playerX][(playerY + 1 + 31) % 31] == 0) return Directions.DOWN;
			   if (valueBoard[playerX][(playerY - 1 + 31) % 31] == 0) return Directions.UP;
			   if (valueBoard[(playerX + 1 + 31) % 31][playerY] == 1) return Directions.RIGHT;
			   if (valueBoard[(playerX - 1 + 31) % 31][playerY] == 1) return Directions.LEFT;
			   if (valueBoard[playerX][(playerY + 1 + 31) % 31] == 1) return Directions.DOWN;
			   if (valueBoard[playerX][(playerY - 1 + 31) % 31] == 1) return Directions.UP;
			   break;
		default:break;
  	}
  return Directions.STAY;

}
