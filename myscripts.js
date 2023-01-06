var color = ["#222f3e", "#f368e0", "#ee5253", "#1c100b", "#b87455", "#0abde3", "#10ac84", "#222f3e", "#5f27cd", "#1979a9"];
var i = 0;
document.querySelector("button").addEventListener("click", 
function(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]

})