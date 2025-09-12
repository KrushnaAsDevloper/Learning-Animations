let ham = document.querySelector("#ham")
let close = document.querySelector("#close")
let tl = gsap.timeline();

tl.to("#nav-part", {
    right:0, 
    duration:0.8
})

tl.from("#nav-part a", {
    x:150,
    duration:0.5, 
    stagger:0.2, 
    opacity:0 
    
})

tl.from("#nav-part i", {
    opacity:0
})

tl.pause()

ham.addEventListener("click", ()=>{
    tl.play()
})

close.addEventListener("click", ()=>{
    tl.reverse()
})