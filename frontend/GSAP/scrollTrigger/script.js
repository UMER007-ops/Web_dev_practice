


gsap.from("#page1 .box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
})

gsap.from("#page2 .box",{
    scale:0,
    duration:2,
    // delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        markers: true,
        start:"top 50%",
        end:"top 25%",
        scrub:2,       // its value is from 1 to 5 and can be true or false scrub is for making animations smooth
        pin:true,
    }
})


gsap.from("#page3 h1",{
    opacity:0,
    x:500,
    duration:2,
    // delay:1,
    scrollTrigger:{
        trigger:"#page3 ",
        scroller:"body",
        markers:true,
        start:"top 20%",
        end:"top 40%",
        scrub:2,
        pin:true,
    }
})


gsap.from("#page3 h2",{
    opacity:0,
    x:-500,
    duration:2,
    // delay:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 10%",
        end:"top 30%",
        scrub:2,
        pin:true,
    }
})

gsap.to("#page5 h1",{
    transform: "translateX(-170%)",
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        pin:true,
        scrub:2,
    }
})






