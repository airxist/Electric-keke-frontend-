import { Heading } from "..";
import { services, about_titles, about_descriptions } from "../../constants";
import React from "react";
import Btn from "../Btn";
import { useGSAP } from "@gsap/react";
import { animateFromPosition } from "../../animate";

const About = () => {
  useGSAP(() => {
    animateFromPosition(".brief", {
      x: -2000,
      opacity: 0,
      scrollTrigger: {
        trigger: ".brief",
        start: "top center",
      },
    });
    animateFromPosition(".about-image", {
      x: 2000,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-image",
        start: "top center",
      },
    });
    animateFromPosition(".service", {
      y: 20,
      opacity: 0,
      stagger: {
        amount: 0.75,
      },
      scrollTrigger: {
        trigger: ".service",
        start: "top center",
      },
    });
    animateFromPosition(".service-heading", {
      y: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".service-heading",
        start: "top center",
      },
    });
    animateFromPosition(".service-desc", {
      x: -2000,
      opacity: 0,
      scrollTrigger: { trigger: ".service-desc", start: "top center" },
    });
  }, []);
  return (
    <section className="home-pad bg-base-white overflow-hidden">
      <div className={`min-h-[696px] flex-center`}>
        <div className="min-h-[526px] md:flex items-center">
          <div className="w-full tablet:w-6/12 brief">
            <Heading
              className="w-full"
              introTitle="About Us"
              introClass="text-eco-green mx-auto md:mx-0"
              title={about_titles.one}
              tclass="text-center md:text-left text-eco-neutral"
              description={about_descriptions.one}
              dclass="mt-5 mb-10 text-eiteen text-center md:text-left"
              type="about"
            />
            <div className="text-center md:text-left">
              <Btn text="Learn More" />
            </div>
          </div>

          <div className="md:w-[33rem] md:h-[454px] about-image">
            <img
              src="/about.png"
              alt="about keke"
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="py-20 overflow-hidden">
        <Heading
          introTitle="Service"
          title={about_titles.two}
          tclass="max-w-[623px] mx-auto text-center border service-heading"
          description={about_descriptions.two}
          dclass="mt-7 text-center text-eiteen service-desc"
          introClass="mx-auto text-eco-green service-heading"
          type="about"
        />

        <div className="service-board">
          {services.map((item) => (
            <div key={item.title} className="service">
              <div className="flex flex-col items-center text-center">
                <div className="size-[65px] flex-center bg-pgreen-1 rounded-full">
                  <img src={item.icon} alt={item.title} />
                </div>

                <div className="mt-8">
                  <h2 className="service-title">{item.title}</h2>
                  <p className="font-montserrat text-base mt-2 text-eco-neutral-prime">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
