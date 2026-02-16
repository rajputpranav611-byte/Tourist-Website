var tl1=gsap.timeline({
    delay:0.3
})

tl1.from(".page1 nav h1",{
    y:-200,
    autoAlpha:0,
})
tl1.from(".page1 .part2 ",{
    autoAlpha:0, 
})

tl1.from(".page1 .part2 a",{
    y:-200,
    autoAlpha:0,
    stagger:0.3,
})
tl1.from(".page1 #part3",{
    y:-200,
    autoAlpha:0,
})

tl1.from(".page1 .center .center-text1",{
    y:200,
    autoAlpha:0,
    ease:"sine.in"
})

tl1.from(".page1 .information ",{
    autoAlpha:0,
})
tl1.from(".page1 .information .info1",{
    y:200,
    autoAlpha:0,
    stagger:0.3,
})
tl1.from(".page1 .information button",{
    y:200,
    autoAlpha:0,
})

tl1.from(".page1 .about .abt",{
    autoAlpha:0,
    stagger:0.3,
})

tl1.from(".page1 .about .abt .txt",{
    y:100,
    autoAlpha:0,
    stagger:0.2,
})
tl1.from(".page1 .about .abt p",{
    y:100,
    autoAlpha:0,
    stagger:0.2,
})


//page 2

var tl2=gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".page2",
        scrub:2,
        pin:true
    }
})

tl2.from(".page2 .heading .hpart1 ",{
    x:-200,
    autoAlpha:0,
})
tl2.from(".page2 .heading .hpart2 ",{
    x:200,
    autoAlpha:0,
})
tl2.from(".page2 .place-div .place-img12 .place-img1 ",{
    x:-200,
    autoAlpha:0,
})
tl2.from(".page2 .place-div .place-img12 .place-img2 ",{
    x:200,
    autoAlpha:0,
})
tl2.from(".page2 .place-div .place-img34 .place-img3 ",{
    x:-200,
    autoAlpha:0,
})
tl2.from(".page2 .place-div .place-img34 .place-img4 ",{
    x:200,
    autoAlpha:0,
})
tl2.from(".page2 .place-div p ",{
    x:200,
    autoAlpha:0,
})
tl2.from(".page2 .place-div h3 ",{
    x:-200,
    autoAlpha:0,
})

//page 3
var tl3=gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".page3",
        scrub:3,
        start:"top 35%",
        end:"top 5%",
    }
})

tl3.from(".page3 .page3-center-part .page3-center-part1 ",{
    x:-300,
    autoAlpha:0,
    scale:0.5,
})
tl3.from(".page3 .spice .info1 ",{
    autoAlpha:0,
    stagger:0.2,
    delay:0.6,
})
tl3.from(".page3 .page3-center-part .page3-center-part1 p ",{
    delay:0.3,
    autoAlpha:0,
})
tl3.from(".page3 .page3-center-part .page3-center-part2 .text ",{
    autoAlpha:0,
})
tl3.from(".page3 .page3-center-part .page3-center-part2 .text2 ",{
    autoAlpha:0,
})
tl3.from(".page3 .ai-divs .ai-div1 ",{
    autoAlpha:0,
    stagger:0.4,
})
tl3.from(".page3 .ai-divs .ai-div1 i ",{
    autoAlpha:0,
    stagger:0.4,
})
tl3.from(".page3 .ai-divs .ai-div1  h5",{
    x:300,
    autoAlpha:0,
    stagger:0.4,
    ease:"sine.in"
})
tl3.from(".page3 .ai-divs .ai-div1  p",{
    x:300,
    autoAlpha:0,
    stagger:0.4,
    ease:"sine.in"
})

// page 4 

var tl4=gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".page4",
        scrub:2,
        start:"top 55%",
        end:"top 3%",

    }
})

tl4.from(".page4 .heading2",{
    autoAlpha:0,
    scale:0.5,

})

tl4.from(".page4 .div-packages .package",{
    scale:4,
    autoAlpha:0,
    stagger:0.6,
})

tl4.from(".page4 .div-packages .pack-top",{
    delay:0.5,
    scale:0.5,
    autoAlpha:0,
    stagger:0.3,
})

tl4.from(".page4 .div-packages .pack-bottom",{
    delay:0.3,
    scale:0.5,
    autoAlpha:0,
    stagger:0.3,
})

tl4.from(".page4 button",{
    autoAlpha:0,
})

// for page 5

var tl5=gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".page5",
        scrub:2,
        start:"top 55%",
        end:"top 10%",
    }
})

tl5.from(".page5 .center-page5 p",{
    autoAlpha:0,
    scale:0.5,
})
tl5.from(".page5 .center-page5 h1",{
    autoAlpha:0,
    scale:0.5,
})
tl5.from(".page5 .blogs .blog1",{
    x:-200,
    autoAlpha:0,
    scale:0.5,
    ease:"slow"
},"pop")

tl5.from(".page5 .blogs .blog2",{
    x:200,
    autoAlpha:0,
    scale:0.5,
    ease:"slow"
},"pop")

tl5.from(".page5 .blogs .blog1 .light",{
    x:-200,
    autoAlpha:0,
    scale:0.5,
    ease:"slow"
},"popi")

tl5.from(".page5 .blogs .blog1 .dark",{
    x:-200,
    autoAlpha:0,
    scale:0.5,
    ease:"slow"
},"popin")

tl5.from(".page5 .blogs .blog2 .light",{
    x:200,
    autoAlpha:0,
    scale:0.5,
    ease:"slow"
},"popi")

tl5.from(".page5 .blogs .blog2 .dark",{
    x:200,
    autoAlpha:0,
    scale:0.5,
    ease:"slow"
},"popin")
