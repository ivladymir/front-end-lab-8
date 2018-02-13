

if(confirm("Do you want to play a game?")){

	let min=0;
	let max=5;
	let totalPrize=0;
	let maxPrize =10;
	let possPrize=maxPrize;
	let attemptsLeft=3;

		
	let startGame=true;

	while(startGame){
		let number=parseInt(Math.random()*(max-min)+min);
		let next=true;
		
		while(attemptsLeft>0 && next){
			
			let message="Enter a number from "+min+" to "+max+" \nAttempts left: "+attemptsLeft+" \nTotal prize: "+totalPrize+" \nPossible prize on current attempt: "+possPrize+" $";
			let userNumber =prompt(message);

			if (userNumber==number){
				totalPrize+=maxPrize;
				maxPrize=maxPrize*3;
				possPrize=maxPrize;
				max=max*2;
				let next=confirm("Do you want to continue a game?");
					if(next){
						attemptsLeft=3;
						let number=parseInt(Math.random()*(max-min)+min);
					}else{
						console.log("Thank you for a game. Your prize is: "+totalPrize+"$");
						break;
					}
			}else{
				prize=Math.floor(maxPrize/2);
				possPrize=prize;
				attemptsLeft--;
			}
			
			if(userNumber!=number && attemptsLeft==0){
				console.log("Thank you for a game. Your prize is: "+totalPrize+"$");
				startGame=false;
			}
		}
	}

}else{
	console.log("You did not become a millionaire");
}




