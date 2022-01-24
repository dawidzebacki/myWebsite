TweenMax.to(".overlay h1", 2, {
  opacity: 0,
  delay: 0.3,
  y: -60,
  ease: Expo.easeInOut,
});

TweenMax.to(".overlay span", 2, {
  delay: 0.6,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut,
});

TweenMax.to(".overlay", 2, {
  delay: 2,
  top: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".ellipse-container", 1, {
  delay: 3.2,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".yellow", 1, {
  delay: 5.2,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".stack", 1, {
  delay: 5.4,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle1", 1, {
  delay: 3.4,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle2", 1, {
  delay: 3.6,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle3", 1, {
  delay: 3.8,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle4", 1, {
  delay: 4.0,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle5", 1, {
  delay: 4.2,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle6", 1, {
  delay: 4.4,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from(".circle7", 1, {
  delay: 4.6,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle8", 1, {
  delay: 4.8,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle9", 1, {
  delay: 5,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".menu-links ul li",
  1,
  {
    delay: 4.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut,
  },
  0.08
);

TweenMax.from(".text .title", 1, {
  delay: 4,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

TweenMax.from(".text p", 1, {
  delay: 4.2,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".media ul li",
  1,
  {
    delay: 4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut,
  },
  0.08
);
