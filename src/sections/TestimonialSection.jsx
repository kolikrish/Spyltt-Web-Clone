import { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";

const TestimonialSection = () => {
  const vdRef = useRef([]);

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
        // markers: true
      },
    });
    tl.to(".testimonials-section .first-title", {
        xPercent: 70,

    })
    .to(".testimonials-section .sec-title", {
        xPercent: 25,
        
    }, "<")
    .to(".testimonials-section .third-title", {
        xPercent: -50,
        
    }, "<")

    const pinTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".testimonials-section", 
            start: "10% top",
            end: "200% top",
            pin: true,
            scrub: 1.5
            // markers: true
        }
    })
    pinTl.from('.vd-card', {
        yPercent: 150,
        stagger: 0.2,
        ease: "power1.inOut",
        
    })
  }, []);

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };
  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };
  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">what's</h1>
        <h1 className="text-light-brown sec-title">everyone</h1>
        <h1 className="text-black third-title">talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation} `}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
