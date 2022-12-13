let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let cloud = document.querySelector("#cloud");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#GameOver");

//declaring variable for score
let interval = null;
let playerScore =0;

//function for score
let scoreCounter =()=>
{
	playerScore++;
	score.innerHTML = `Score <b>${playerScore}</b>`;
}

//start game

window.addEventListener("keydown",(start)=>
{
	if (start.code =="Space") 
	{
		gameOver.style.display = "none";
		block.classList.add("blockActive");
		road.firstElementChild.style.animation = "roadAnimate 4s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 12s linear infinite"; 

        let playerScore = 0;
        interval = setInterval(scoreCounter,200);
	}
});

//Dino Jump
window.addEventListener("keydown" ,(e)=>
{
	if(e.key == "ArrowUp")
		if (dino.classList != "dinoActive")
		 {
		 	dino.classList.add("dinoActive");
		 	setTimeout(()=>
		 	{
		 		dino.classList.remove("dinoActive");
		 	},550);
		 }

});

//Game Over Condition
let result = setInterval(()=>
{
	let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
	let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
	if (dinoBottom <=90 && blockLeft >=20 && blockLeft<=145) 
	{
		gameOver.style.display = "block";
		block.classList.remove("blockActive");
		road.firstElementChild.style.animation = "none";
		cloud.firstElementChild.style.animation = "none";
		clearInterval(interval);
		playerScore=0;
	}

},10);