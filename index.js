// Gsap basic timeline with some animation of the .from() and .to()
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

// Gsap - Scroll Trigger

gsap.from("#page1 #box", {
    duration:2,
    rotate:360, 
    scale:0, 
})
gsap.to("#page2 h1", {
    transform:"translate(-75%)",
    scrollTrigger:{
        trigger:'#page2',
        scroller:'body', 
        markers:true, 
        start:'top 0%' ,
        end:'top -100%',
        scrub:1,
        pin:true 

    }
})
gsap.from("#page3 #box", {
    duration:2,
    rotate:930, 
    scale:0, 
    scrollTrigger:"#page3 #box"
})