  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

gsap.to("#bm",{
  opacity:0,
  delay:2,
})
gsap.to("#page1",{
  opacity:1,
  delay:2.5,
})
var tl=gsap.timeline();
gsap.from("#cover1",{
  width:"100%",
  delay:3,
  duration:0.5,
})
tl.to("#page1 #cover1",{
  width:"40%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 80%",
    end:"top 0%",
    // markers:true,
    // scrub:2,
  }
})
tl.to("#page1 #cover1",{
  width:"50%",
  // width:"80%",
  // width:"100%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 70%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page1 #cover1",{
  width:"60%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 50%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page1 #cover1",{
  width:"70%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 30%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page1 #cover1",{
  width:"80%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 20%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page1 #cover1",{
  width:"90%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 10%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page1 #cover1",{
  width:"100%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
gsap.from("#nav",{
  y:-40,
  delay:3.5,
  opacity:0,
})
gsap.from("#t1",{
  y:40,
  delay:4,
  opacity:0,
})
gsap.from("#t2",{
  y:40,
  delay:4.5,
  opacity:0,
})
gsap.from("#t3",{
  y:40,
  delay:5,
  opacity:0,
})
gsap.from("#page1 button",{
  y:40,
  delay:5.5,
  opacity:0,
})
gsap.from("#icon",{
  y:40,
  delay:6,
  opacity:0,
})
tl.to("#page2 #cover2",{
  width:"40%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 80%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page2 #cover2",{
  width:"50%",
  // width:"80%",
  // width:"100%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 70%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page2 #cover2",{
  width:"60%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 50%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page2 #cover2",{
  width:"70%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 30%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page2 #cover2",{
  width:"80%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 20%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page2 #cover2",{
  width:"90%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 10%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page2 #cover2",{
  width:"100%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
gsap.from("#t21",{
  y:40,
  delay:2.5,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
gsap.from("#t22",{
  y:40,
  delay:3,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
gsap.from("#t23",{
  y:40,
  delay:3.5,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
gsap.from("#page2 button",{
  y:40,
  delay:4,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
gsap.from("#icon2",{
  y:40,
  delay:4.4,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
tl.to("#page3 #cover3",{
  width:"40%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 80%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page3 #cover3",{
  width:"50%",
  // width:"80%",
  // width:"100%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 70%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page3 #cover3",{
  width:"60%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 50%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page3 #cover3",{
  width:"70%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 30%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page3 #cover3",{
  width:"80%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 20%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page3 #cover3",{
  width:"90%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 10%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
tl.to("#page3 #cover3",{
  width:"100%",
  duration:2,
  stagger:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    // markers:true,
    // scrub:ue,
  }
})
gsap.from("#t31",{
  y:40,
  delay:2.5,
  opacity:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
gsap.from("#t32",{
  y:40,
  delay:3,
  opacity:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
gsap.from("#t33",{
  y:40,
  delay:3.5,
  opacity:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
gsap.from("#page3 button",{
  y:40,
  delay:4,
  opacity:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
gsap.from("#icon3",{
  y:40,
  delay:4.4,
  opacity:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 0%",
    end:"top 0%",
    scrub:3,
  }
})
