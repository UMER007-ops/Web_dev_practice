var navtl = gsap.timeline();
navtl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
})
navtl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3,
})

navtl.from("#sher",{
    y:20,
    opacity:0,
    scale:0.2,
})

gsap.to("#box1",{
    x:800,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    // scale:0.5,
    repeat:-1,      // repeat the animation infinite times
    yoyo:true,      // for back and forth motion of the object
})
gsap.from("#box2",{
    x:300,
    y:100,
    duration:2,
    delay:1,
    repeat:-1,      // repeat the animation infinite times
    yoyo:true,      // for back and forth motion of the object
})
gsap.to("#box1 h1",{
    opacity:0,
    duration:2,
    delay:1,
    stagger:1,      // things appear and disappear one by one   
    repeat:-1,      // repeat the animation infinite times
})
gsap.from("#box2 h1",{
    opacity:0,
    duration:2,
    delay:1,
    stagger:-1,         // things appear and disappear one by one in descending order
    repeat:-1,      // repeat the animation infinite times
})

// gsap.to("#box3",{
//     x:900,
//     rotate:360,
//     duration:1.5,
//     delay:1,
//     repeat:-1,
//     yoyo:true,
// })
// gsap.to("#box4",{
//     x:900,
//     duration:1.5,
//     delay:2.5,
//     repeat:-1,
//     yoyo:true,
// })
// gsap.to("#box5",{
//     x:900,
//     borderRadius:"50%",
//     scale:0.5,
//     duration:1.5,
//     delay:4,
//     repeat:-1,
//     yoyo:true,
// })

//     DOING THE ABOVE USING TIMELINE


var tl=gsap.timeline();

tl.to("#box3",{
    x:900,
    rotate:360,
    duration:1.5,
    delay:1,
    repeat:-1,
    yoyo:true,
})
gsap.to("#box4",{
    x:900,
    duration:1.5,           // delay will not be given in box 4 and box 5 because things occur in a sync using timeline
    repeat:-1,
    yoyo:true,
})
gsap.to("#box5",{
    x:900,
    borderRadius:"50%",
    scale:0.5,
    duration:1.5,            // delay will not be given in box 4 and box 5 because things occur in a sync using timeline
    repeat:-1,
    yoyo:true,
})














