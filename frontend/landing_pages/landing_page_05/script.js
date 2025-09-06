
var tl = gsap.timeline()

tl.from("#img1",{
    delay: 0.4,
    opacity:0,
    duration: 1,
    y:60,
})

tl.from("#img2",{
    delay: 0.4,
    opacity:0,
    duration: 1,
    x:60,
})

tl.from("#img3",{
    delay: 0.4,
    opacity:0,
    duration: 1,
    x:-60,
})

tl.from("#main h1",{
    delay: 0.4,
    opacity:0,
    duration: 1,
})

gsap.from("#page2 h5, #page2 h1, #page2 #about-us",{
    opacity: 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
        trigger: "#page2 h5",
        scroller: "body",
        start: "top 50%",
        toggleActions: "play none none reverse",
    }
})




