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

gsap.to("#page1 h1", {
    transform:'translate(-50%)', 
    scrollTrigger:{
        trigger:"#page1", 
        scroller:'body', 
        start:'top 0%',
        end:"top -100%", 
        scrub:1,
        pin:true
        

    }
})
gsap.to("#page2 h1", {
    transform:"translate(-70%)",
    scrollTrigger:{
        trigger:'#page2',// when we use the pin prop then we trigger ony the parents 
        scroller:'body', 
        start:'top 0%' ,
        end:'top -100%',
        scrub:1,
        pin:true 

    }
})
gsap.to("#page3 h1", {
    transform:"translate(-70%)",
    scrollTrigger:{
        trigger:'#page3',// when we use the pin prop then we trigger ony the parents 
        scroller:'body', 
        start:'top 0%' ,
        end:'top -100%',
        scrub:1,
        pin:true 

    }
})

