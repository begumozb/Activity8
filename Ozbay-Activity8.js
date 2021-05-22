var b = document.querySelector("#bluebutton");
var count = 0;
var timeout = 500;

b.addEventListener("mouseover",()=>setTimeout(change,timeout));

var btn = document.getElementById("bluebutton");

btn.onclick = function(){
	count++;
	console.log('here',count);
	if(count==3){
		alert("Level 2")
		timeout = timeout-100; // decrease the timeout by 100ms
	}
	if(count==6){
		alert("Level 3")
		timeout = timeout-100;
	}
	if(count==9){
		alert("Level 4")
		timeout = timeout-100;
	}
	if(count==12){
		alert("Level 5")
		timeout = timeout-100;
	}
	if(count==15){
		alert("Level 6")
		timeout = timeout-100;
	}
}


function change()
{
    let i = Math.floor(Math.random()*300)+1;
    let j = Math.floor(Math.random()*300)+1;
        b.style.left = i + "px";
        b.style.top = j + "px";
	
};