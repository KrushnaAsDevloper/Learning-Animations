function breakTheText() {
    let h1 = document.querySelector("h1")
    let text = h1.textContent
let splittedText = text.split("");   

let splittedHalf = Math.floor(splittedText.length/2)
let clutter  = ""
console.log(splittedHalf)
splittedText.forEach(function (elem, idx) {
    if (idx < splittedHalf) {
        clutter += `<span class="a inline-block">${elem}</span>`
        
    }else{
        clutter += `<span class="b inline-block">${elem}</span>`
    }
})
 h1.innerHTML  = clutter


}

breakTheText();
gsap.from(".a", {
    y:70, 
    duration:0.4, 
    stagger:0.155, 
    opacity:0
})
gsap.from(".b", {
    y:70, 
    duration:0.4, 
    stagger:-0.155, 
    opacity:0
})
