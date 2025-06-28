import { gsap } from "gsap";

gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 3,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      boxShadow: "0 20px 50px rgba(61, 159, 254, 0.6)",
    });
  },
});
