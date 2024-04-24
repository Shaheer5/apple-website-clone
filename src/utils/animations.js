import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(
    target,
    {
      ...animationProps,
      scrollTrigger: {
        trigger: target,
        toggleActions: "restart pause pause reverse",
        start: "top 90%",
        ...scrollProps,
      },
    },
    []
  );
};

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.easeInOut",
  });
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.easeInOut",
    },
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.easeInOut",
    },
    "<"
  );
};
