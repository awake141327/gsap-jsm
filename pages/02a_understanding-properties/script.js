import { gsap } from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotationY: 360,
  scale: 0.8,
  duration: 3,
  repeat: -1,
  yoyo: true,
  delay: 0.5,
  repeatDelay: 0.5,
  ease: 'power1.inOut'
});
