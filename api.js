/*	<div class="joke" id="joke">awesome joke is waiting...</div>
	<button id="btn">NEXT</button> */

var joking=document.querySelector("#joke");
var button=document.querySelector("#btn");

const generatejokes= ()=>{



	let setHeader= {
		headers:{
             Accept: "application/json"
		}
	};

fetch(" https://icanhazdadjoke.com/", setHeader)
.then((res)=>res.json())

.then(function(data)
{
	joking.innerHTML= data.joke
})

.catch((error)=>{
	console.log(error)
})
}

button.addEventListener("click",generatejokes)
generatejokes();
