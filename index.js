const t1 = gsap.timeline();
t1.from("#bor",{
    x:-30,
    duration:1, 
    opacity:0,
})
t1.from("#born",{
    x:30,
    opacity:0,
    duration:1,
})

t1.from(".navigation, a", {
    y:-40,
    duration:1,
    opacity:0,
    stagger:.2

})