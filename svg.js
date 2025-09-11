// Gsap svg manipulation

var path = `M 50 250 Q 750 250 1450 250`
var finalPath = `M 50 250 Q 750 250 1450 250`

let string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path = `M 50 250 Q ${dets.offsetX} ${dets.offsetY} 1450 250`
    gsap.to("svg path", {
        attr:{d:path}, 
        duration:0.3, 

    })
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path", {
        attr:{d:finalPath}, 
        duration:1.5, 
        ease:"elastic.out(1,0.2)"
    })
})