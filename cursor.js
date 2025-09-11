let main = document.querySelector('.main')
let cursor = document.querySelector('.cursor')
let image = document.querySelector('.image')

main.addEventListener("mousemove", (dets)=>{
    console.log(1)
    gsap.to(cursor, {
        x:dets.x, 
        y:dets.y, 
        duration:.6,
        ease:'power2.out'
    })
})

image.addEventListener('mouseenter', ()=>{
    cursor.innerHTML = "view more"
    cursor.style.backgroundColor = "#ffffff7c"
    
    gsap.to(cursor, {
        scale:5
    })
})
image.addEventListener('mouseleave', ()=>{
    
    cursor.style.backgroundColor = "white"
    cursor.innerHTML = ""

    gsap.to(cursor, {
        scale:1
    })
})