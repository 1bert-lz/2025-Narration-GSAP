gsap.registerPlugin(ScrollTrigger, Draggable,MotionPathPlugin);

let mm = gsap.matchMedia();

mm.add(
  {
    isMobile: "(max-width: 900px)",
    isDesktop: "(min-width: 901px)",
  },
  (context) => {
    let { isMobile, isDesktop } = context.conditions;


/* Timeline  */
const tlIntro = gsap.timeline({
  defaults: { duration: 0.8, }
});

tlIntro
  .from(".title", { y: 60, opacity: 0 })
  .from(".text", { y: 40, opacity: 0 })
  .from(".cta", { scale: 0.9, opacity: 0 })
  .from(".litle-text", { y: 20, opacity: 0 })
  .from(".client-satisfaction", { opacity: 0, scale: 0.9 });


/* ScrollTrigger */

    gsap.from(".video", {
      y: isMobile ? 200 : 400,  
      duration: isMobile ? 0.5 : 2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#section2",
        start: "top 70%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  }
);


/* ScrollTrigger */
const logo = document.querySelector(".header-logo-img");
gsap.to(".cards-top-img-ai", {
  scrollTrigger: {
    trigger: "#section3",          
    start: "top 75%",
    toggleActions: "play none none reverse"
    // markers: true   
  },
  duration: 3,

  /* Motion Path */
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 50, y: 0 },
      { x: 0, y: 50 },
      { x: -50, y: -50 },
      { x: 0, y: 0 }
    ],
    autoRotate: true
  }
});


/* Draggable */
Draggable.create([".avis-card-one", ".avis-card-two", ".avis-card-tree"], {
  type: "x,y",
  bounds: ".avis-card",
  onDragEnd: function () {
    gsap.to(this.target, { x: 0, y: 0, duration: 0.6,});
  }
  
});

