const cowOneAnimation = new TimelineMax({ repeat: -1 });
const cowTwoAnimation = new TimelineMax({ repeat: -1 });
const cowThreeAnimation = new TimelineMax({ repeat: -1 });
const cowFourAnimation = new TimelineMax({ repeat: -1 });
const cowSmAnimation = new TimelineMax({ repeat: -1 });
const cowFiveAnimation = new TimelineMax({ repeat: -1 });

cowOneAnimation
  // head
  .to(".cow-head-1", 2, {
    rotation: -30,
  })
  .to(".cow-head-1", 2, {
    rotation: 0,
    delay: 2,
  })
  .to(
    ".cow-tail-1",
    2,
    {
      rotation: 45,
      transformOrigin: "left top",
    },
    "-=4"
  )
  //left ear
  .to(
    ".cow-ear-left-1",
    3,
    {
      rotation: -40,
      y: 30,
      x: 7,
      transformOrigin: "left bottom",
    },
    "-=6"
  )
  .to(
    ".cow-ear-left-1",
    3,
    {
      rotation: 0,
      y: 0,
      x: 0,
    },
    "-=2"
  )
  // right ear
  .to(
    ".cow-ear-right-1",
    3,
    {
      rotation: -30,

      transformOrigin: "left bottom",
    },
    "-=7"
  )
  .to(
    ".cow-ear-right-1",
    3,
    {
      rotation: 0,

      transformOrigin: "left bottom",
    },
    "-=3"
  )
  // tail
  .to(
    ".cow-tail-1",
    2,
    {
      rotation: 0,
      transformOrigin: "left top",
    },
    "-=3"
  );

cowTwoAnimation

  .to(".cow-leg-2", 2, {
    rotation: -27,
    y: 7,
    x: 2,
    //delay: 4,
    transformOrigin: "left top",
  })
  .to(".cow-leg-2", 0.5, {
    rotation: 0,
    y: 0,
    x: 0,
  })
  .to(".cow-head-2", 2, {
    rotation: 10,
    x: 10,
    transformOrigin: "top top",
  })
  .to(
    ".cow-ear-left-2",
    2,
    {
      rotation: 15,

      transformOrigin: "right bottom",
    },
    "-=2"
  )
  .to(
    ".cow-ear-right-2",
    2,
    {
      rotation: -5,
      x: 2,
      y: -2,

      transformOrigin: "left bottom",
    },
    "-=2"
  )
  .to(
    ".cow-head-2",
    2,
    {
      rotation: 0,
      x: 0,
      delay: 5,
    },
    "-=4"
  )
  .to(".cow-ear-left-2", 2, {
    rotation: 0,
    delay: 4,
  })
  .to(
    ".cow-ear-right-2",
    2,
    {
      rotation: 0,
      x: 0,
      y: 0,
    },
    "-=2"
  )
  .to(
    ".cow-tail-2",
    2,
    {
      rotation: 10,
      transformOrigin: "right top",
    },
    "-=2"
  )
  .to(".cow-tail-2", 2, {
    rotation: 0,
    transformOrigin: "right top",
  });

cowThreeAnimation
  .to(".cow-head-3", 1, {
    rotation: 20,
    x: 18,
    y: 5,
    delay: 1.5,
    transformOrigin: "right top",
  })
  .to(".cow-head-3", 1, {
    rotation: 0,
    x: 0,
    y: 0,
    delay: 3,
    transformOrigin: "right top",
  });

cowFourAnimation
  .to(".cow-head-4", 1, {
    rotation: -30,
    x: -14,
    y: 5,
    delay: 3,
    transformOrigin: "left top",
  })
  .to(".cow-head-4", 1, {
    rotation: 0,
    x: 0,
    y: 0,
    delay: 1,
  });

cowSmAnimation

  .to(".cows-head-sm1", 1, {
    rotation: -10,
    x: -3,
    //delay: 3,
    transformOrigin: "left top",
  })
  .to(".cows-head-sm1", 1, {
    rotation: 0,
    x: 0,
    y: 0,
  })
  .to(
    ".cows-head-sm2",
    1,
    {
      rotation: -2,
      x: -2,
      y: -1,
      //delay: 3,
      transformOrigin: "right top",
    },
    "-=1.9"
  )
  .to(".cows-head-sm2", 1, {
    rotation: 0,
    x: 0,
    y: 0,
    //delay: 1,
  });
cowFiveAnimation
  .to(".cow-head-cont-5", 1, {
    rotation: -35,
    y: 43,
    transformOrigin: "right top",
    delay: 3,
  })

  .to(
    ".cow-ear-right-5",
    0.5,
    {
      rotation: 35,
      y: -23,
      x: -30,
      transformOrigin: "left bottom",
      delay: 2,
    },
    "-=0.4"
  )
  .to(
    ".cow-ear-left-5",
    0.5,
    {
      rotation: -30,
      y: -43,
      transformOrigin: "right bottom",
    },
    "-=0.4"
  )
  .to(".cow-eyes-5", 0.2, {
    opacity: 0,
  })
  .to(
    ".cow-eyes-close-5",
    {
      opacity: 1,
    },
    "-=0.1"
  )
  .to(".cow-eyes-5", {
    opacity: 1,
  })
  .to(".cow-eyes-close-5", {
    opacity: 0,
  })

  .to(
    ".cow-ear-right-5",
    0.2,
    {
      rotation: 0,
      y: 0,
      x: 0,
      transformOrigin: "left bottom",
    },
    "-=0.2"
  )
  .to(
    ".cow-ear-left-5",
    0.2,
    {
      rotation: 0,
      y: 0,
      transformOrigin: "right bottom",
    },
    "-=0.2"
  )
  .to(
    ".cow-head-cont-5",
    0.5,
    {
      rotation: 0,
      y: 0,
      delay: 1,
    },
    "-=1.3"
  );
///////////////
const grassAnimatedOne = new TimelineMax({ repeat: -1 });
const grassAnimatedTwo = new TimelineMax({ repeat: -1 });
const grassAnimatedThree = new TimelineMax({ repeat: -1 });
const grassAnimatedFour = new TimelineMax({ repeat: -1 });
const grassAnimatedFive = new TimelineMax({ repeat: -1 });
const grassAnimatedSix = new TimelineMax({ repeat: -1 });
const grassAnimatedSeven = new TimelineMax({ repeat: -1 });

grassAnimatedOne
  .to(".grass-anim1", 4, {
    rotation: -10,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim1", 4, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedTwo
  .to(".grass-anim2", 6, {
    rotation: 20,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim2", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedThree
  .to(".grass-anim3", 6, {
    rotation: 20,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim3", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedFour
  .to(".grass-anim4", 6, {
    rotation: -10,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim4", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedFive
  .to(".grass-anim5", 6, {
    rotation: -7,
    x: -14,
    y: 5,
    delay: 2,
    transformOrigin: "bottom",
  })
  .to(".grass-anim5", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedSix
  .to(".grass-anim6", 4, {
    rotation: 6,

    transformOrigin: "bottom",
  })
  .to(".grass-anim6", 4, {
    rotation: 0,
  });
grassAnimatedSeven
  .to(".grass-anim7", 6, {
    rotation: -10,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim7", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

//  =========================  xxxxx  ==========================

gsap.set(".centered", { autoAlpha: 1, xPercent: -50, yPercent: -50 });
gsap.set("h1", { autoAlpha: 1, yPercent: -50 });
gsap.set(" .slide", { autoAlpha: 1, xPercent: 0 });
gsap.set(".go", { autoAlpha: 1, yPercent: -50 });

var slides = $(".slide"),
  activeSlide = $(".slide.active"),
  next = $(".go-next"),
  prev = $(".go-prev"),
  moveSlideTL = gsap.timeline(),
  lines = $("h1");

// Animaciones individuales para cada slider ======

const allSlides = [].slice.call(slides);
let animations = [];

for (let [i] of allSlides.entries()) {
  animations[i] = gsap.timeline({});
}

animations[0]

  .set(".scene1", {
    scale: 1,
    y: 0,
  })
  .to("#slide01 .grass2", {
    y: 0,
  });

animations[1]
  // changes

  ////
  .to(
    "#slide01 .grass1",
    {
      yPercent: 100,
    },
    "-=0.9"
  )

  .to(
    ".scene1",
    {
      scale: 3,
      y: 100,
    },
    "-=0.9"
  )
  .to(
    ".cows-container",
    {
      scale: 2,
      y: 100,
    },
    "-=0.9"
  )
  .to(
    ".grass-container-2",
    {
      y: -813,
    },
    "-=0.9"
  )
  .to(
    ".grass-animated2",
    {
      y: 0,
    },
    "-=0.9"
  )

  .to(".hero__overlay", {
    autoAlpha: 1,
  })
  .to(".hero__herbs-container", {
    autoAlpha: 1,
  })

  .reverse();

animations[2]
  .set(".scene2", {
    opacity: 1,
  })

  .to(".scene2", {
    scale: 5.5,
    y: -772,
    x: -200,
    duration: 0.4,
  })
  .to(".scene3", {
    opacity: 1,
  })
  .to("#slide01 .grass2", {
    y: 0,
  })
  .to(".cow-5", 2, {
    xPercent: -117,
  })

  .reverse();

animations[3]
  .to(".scene2", {
    scale: 6,
    y: -600,
  })
  .reverse();

animations[4]
  .from("#slide05 .lines", {
    scale: 0.2,
    transformOrigin: "center",
    duration: 2,
  })
  .reverse();

animations[5]
  .from("#slide06 .lines", {
    scale: 0.2,
    transformOrigin: "center",
    duration: 2,
  })
  .reverse();

function onMouseWheel(event) {
  //Normalize event wheel delta

  var delta =
    event.originalEvent.wheelDelta / 50 || -event.originalEvent.detail;

  if (delta < -1) {
    //scrolling down -> next slide

    if (!moveSlideTL.isActive()) {
      var slideFrom = $(".slide.active"),
        sectionToIndex = slides.index(slideFrom);
      /// conditions
      console.log(sectionToIndex);
      if (sectionToIndex === 0 && !animations[1].isActive()) {
        animations[1].reverse();
        slideTo = slides.eq(sectionToIndex + 1);
        moveToSlide(slideFrom, slideTo);
      }
      if (sectionToIndex === 1 && !animations[1].isActive()) {
        animations[1].reverse(2);
        slideTo = slides.eq(sectionToIndex + 1);
        moveToSlide(slideFrom, slideTo);
      }
      // if (sectionToIndex !== slides.length - 1) {
      //   slideTo = slides.eq(sectionToIndex + 1);
      //   moveToSlide(slideFrom, slideTo);
      // }
    }
  } else if (delta > 1) {
    // animations[1].reverse();
    // animations[2].reverse();
    // -> prev

    if (!moveSlideTL.isActive()) {
      if (!moveSlideTL.isActive()) {
        var slideFrom = $(".slide.active"),
          sectionToIndex = slides.index(slideFrom);
        // if (sectionToIndex === 1) {
        //  animations[1].reverse(1);
        //console.log(sectionToIndex);
        // }
        console.log(sectionToIndex);
        if (sectionToIndex === 1 && !animations[1].isActive()) {
          animations[1].reverse(2);
          slideTo = slides.eq(sectionToIndex - 1);
          moveToSlide(slideFrom, slideTo);
        } else if (
          sectionToIndex === 2 &&
          !animations[1].isActive() &&
          !animations[2].isActive()
        ) {
          animations[2].reverse();
          animations[1].reverse();

          slideTo = slides.eq(sectionToIndex - 1);
          moveToSlide(slideFrom, slideTo);
        }
        // if (sectionToIndex != 0) {
        //   slideTo = slides.eq(sectionToIndex - 1);
        //   moveToSlide(slideFrom, slideTo);
        // }
      }
    }
  }
  //event.preventDefault();
}

// ============================
function dotClick() {
  var slideFrom = $(".slide.active"),
    sectionToIndex = $(this).index(),
    sectionToIndex = $(this).index(),
    slideTo = slides.eq(sectionToIndex);

  var indexFrom = slideFrom.index();

  console.log(
    slideFrom,
    "from: " + indexFrom,
    "to: " + sectionToIndex,
    "slideTo: " + slideTo
  );

  //if(slideFrom !== slideTo && !moveSlideTL.isActive()) {  // not working

  if (indexFrom !== sectionToIndex && !moveSlideTL.isActive()) {
    moveToSlide(slideFrom, slideTo);
  }
}

// =============================
function nextClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".slide.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex !== slides.length - 1) {
      slideTo = slides.eq(sectionToIndex + 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

function prevClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".slide.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex != 0) {
      slideTo = slides.eq(sectionToIndex - 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

// ==============================
function moveToSlide(slideFrom, slideTo) {
  gsap.set(".go", { autoAlpha: 0 }); // ????

  if (slides.index(slideFrom) < slides.index(slideTo)) {
    // vorwärts

    moveSlideTL = gsap
      .timeline({
        onComplete: setActiveSlide,
        onCompleteParams: [slideTo, slideFrom],
      })
      .to(slideTo, { xPercent: 0, duration: 1, className: "slide active" })
      .to(slideFrom, { xPercent: 0, duration: 1, className: "slide" })
      .set(slideFrom, { xPercent: 0 });
  } else {
    moveSlideTL = gsap
      .timeline({
        onComplete: setActiveSlide,
        onCompleteParams: [slideTo, slideFrom],
      })
      .set(slideTo, { xPercent: 0, className: "slide active" })
      .to(slideTo, { xPercent: 0, duration: 1 })
      .to(slideFrom, { xPercent: 0, duration: 1, className: "slide" });
  }
}

function setActiveSlide(active, last) {
  var currentSlideIndex = slides.index(active);
  var lastSlideIndex = slides.index(last);

  animations[currentSlideIndex].reversed(false);
  animations[lastSlideIndex].progress(0).reversed(true);

  gsap.to(".navDot.active", { opacity: 0.5, scale: 1 });
  $(".navDot.active").removeClass("active");
  $(".navDot").eq(currentSlideIndex).addClass("active");
  gsap.to(".navDot.active", { opacity: 1, scale: 1.3 });

  if (currentSlideIndex == 0) {
    gsap.set(".go-prev", { autoAlpha: 0 });
  } else {
    gsap.set(".go-prev", { autoAlpha: 1 });
  }
  if (currentSlideIndex == slides.length - 1) {
    gsap.set(".go-next", { autoAlpha: 0 });
  } else {
    gsap.set(".go-next", { autoAlpha: 1 });
  }
}

// ================================
function init() {
  for (var i = 0; i < slides.length; i++) {
    var navDots = $("<div></div>").addClass("navDot").appendTo("nav");
    gsap.set(".navDot:first-child", {
      className: "navDot active",
      opacity: 1,
      scale: 1.3,
      transformOrigin: "center",
    });
    navDots.on("click", dotClick);
  }

  if (slides[0]) {
    gsap.set(".go-prev", { autoAlpha: 0 });
  }

  next.on("click", nextClick);
  prev.on("click", prevClick);

  $(window).on("mousewheel DOMMouseScroll", onMouseWheel);
  //$(window).on("touchmove", onMouseWheel);

  gsap.set(".slide.active", { xPercent: 0 });
  //animations[0].reversed(false);
}

init();
