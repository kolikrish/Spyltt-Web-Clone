import { useGSAP } from "@gsap/react";
import { SplitText, gsap } from "gsap/all";
import React from "react";

const MessageSection = () => {

    useGSAP(()=> {

        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words"
        })
        const secondMsgSplit = SplitText.create(".second-message", {
            type: "words"
        })
        const paragraphMsgSplit = SplitText.create(".message-content p", {
            type: "words, lines",
            linesClass: "paragraph-line"
        })

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                // markers: true,
                start: "top center",
                end: "30% center",
                scrub: true
            }
        })
        gsap.to(secondMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".second-message",
                // markers: true,
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        })

        const revelTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top 60%",
                // markers: true
            }
        })

        revelTl.to(".msg-text-scroll", {
            duration:1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
        })

        const paragraphTl = gsap.timeline({
            scrollTrigger:{
             trigger: ".message-content p",
              start: "top center",
              // markers: true
            }
        })
        paragraphTl.from(paragraphMsgSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.01
        })
    }, [])

  return (
    <section className="message-content">
      <div className="container flex-center  mx-auto">
        <div className="w-full h-full ">
          <div className="msg-wrapper">
            <h1 className="first-message">STIR UP YOUR FEARLESS PAST AND</h1>
            <div 
            style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
            }}
            className="msg-text-scroll">
              <div className="bg-light-brown md:p-5 pb-3 px-5">
                <h2 className="text-red-brown">fuel up</h2>
              </div>
            </div>
            <h1 className="second-message">YOUR FUTURE WITH EVERY GULP OF PERFECT Protein</h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with SPYLT, where you're one chug away from epic nostalgia and fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
