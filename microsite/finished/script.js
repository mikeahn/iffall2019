var objTable = document.getElementById("container");

objTable.addEventListener("scroll", function () {
	var bar = document.getElementById("scrollbar"),
	barWidth = 100*(objTable.scrollTop/(objTable.scrollHeight-objTable.offsetHeight));
    bar.style.width = barWidth+"%";
}, false);

var bar_bg = document.getElementById("scrollbar-bg"),
    body = document.body,
    html = document.documentElement;

bar_bg.style.minWidth = document.width + "px";

document.getElementsByTagName("body")[0].onresize = function() {
    bar_bg.style.minWidth = document.width + "px";
}

/*
Below functino is for going to specific section on page.
Leaving the function for possible later use.

function jump(h){
    var url = location.href;              
    location.href = "#"+h;                
    history.replaceState(null,null,url);   
}
*/