"use client";

import { Footer } from "@/components/footer";
import { ArrowLeft, MoveDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { FONT_P22_MAKINAC_PRO } from "@/components/font";
import { useState } from "react";
import { Particle } from "@/components/particle";

export default function TheJourney() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: (
        <>
          Embrace the Playful Spirit
          <br />
          "The Spark Within"
        </>
      ),
      description: `In this quest, we'll dive into your journey and motivations. What drives you to embrace the playful spirit of Calvinball? Unleash your spark and let us in on your unique inspirations. This isn't about impressing; it's about sharing who you are and how you can amplify our diverse tapestry. We will share with your our code and you can tell us if the code is something you connect with and make it your own.`,
      button: {
        label: "Next Step",
        onClick: () => setCurrentStep(1),
      },
    },
    {
      id: 2,
      title: (
        <>
          Master the Role
          <br />
          "Craftsmanship Unveiled"
        </>
      ),
      description: `Shift gears to the practical side. We'll delve into your role mastery and the tapestry of skills you've woven. Show us your craftsmanship and give us a glimpse of how you've turned ideas into tangible triumphs. We want to see your work as you will do it in the company. It is designed to give you a real simulation of what your role is expected to contribute. Show your best and this will be a submission based on the role you are considering us for.`,
      button: {
        label: "Next Step",
        onClick: () => setCurrentStep(2),
      },
    },
    {
      id: 3,
      title: (
        <>
          Compatibility Unleashed
          <br />
          "Weaving Our Futures"
        </>
      ),
      description: `Now, let's explore our compatibility as fellow Calvinballers. Are we in sync, ready to weave our paths into a shared tapestry of success? This quest reveals the harmony between you and our team, ensuring our woven future resonates with shared purpose and passion. This will be with one of the Calvinballers leaders and this is your chance to ask us questions.`,
      button: {
        label: "Next step",
        onClick: () => setCurrentStep(3),
      },
    },
    {
      title: <>The Calvinballer Decision and Beyond</>,
      description: `As we conclude our Calvinballer Conversation Quest, the decision takes center stage. If our sparks ignite and our tapestries intertwine beautifully, we'll extend an invitation to join our eclectic ensemble. Should the tapestry show different hues, rest assured we'll provide insights for your journey ahead. Every conversation is a step toward discovery, no matter the outcome..`,
      button: {
        label: "Browse Jobs",
        onClick: () => (window.location.href = "/dark/careers"),
      },
    },
  ];

  return (
    <main>
      <Link href="/" className="fixed m-5 -mt-24 md:m-5">
        <ArrowLeft />
      </Link>

      <header className="w-full h-screen flex flex-col md:flex-row md:justify-between items-center p-5 my-32 mb-20 md:m-0 md:p-0 md:pl-20">
        <div className="text-center md:text-left">
          <div className="text-gray-400 font-semibold mb-3 md:mb-2">
            Our CalvinBaller Conversation Quest:
          </div>
          <h1
            className={clsx(
              "text-4xl font-bold mb-10 font-color-gradient",
              FONT_P22_MAKINAC_PRO.className,
            )}
          >
            Unveil Your Unique Spark
          </h1>
          <div className="md:w-[520px] space-y-5 text-indigo-400 mb-10">
            <p>
              At CBT, we&apos;re rewriting the interview playbook. This
              isn&apos;t your typical interview process; it&apos;s a
              Calvinballer Conversation Quest – a chance for us to explore how
              your unique spark fits into our dynamic team tapestry.
            </p>
            <p>
              We&apos;re not here to put you on the spot; we&apos;re here to
              discover the genuine you and how you&apos;d thrive in our
              imaginative realm.
            </p>
          </div>
          <a
            href="#journey-starts-here"
            className="block bg-indigo-400 w-fit mx-auto md:mx-0 p-3 rounded-full cursor-pointer"
          >
            <MoveDown size={18} className="text-white" />
          </a>
        </div>

        <div className="pt-[200px] md:p-20 md:pt-[600px]">
          <motion.img
            animate={{ y: [0, -40, 0] }}
            transition={{
              y: { duration: 2, repeat: Infinity, repeatType: "mirror" },
            }}
            src="/images/astronaut-floating.png"
            // className="animate-bounce"
          />
        </div>
      </header>

      <section
        id="journey-starts-here"
        className="w-full flex flex-col justify-center items-center py-28 px-5 pb-72 md:px-0"
        style={{
          background: "url(/images/planets.png) no-repeat bottom left",
        }}
      >
        <div>
          <h1
            className={clsx(
              "text-center text-3xl font-bold mb-20 font-color-gradient",
              FONT_P22_MAKINAC_PRO.className,
            )}
          >
            Your Exciting Journey
            <br />
            Starts Here
          </h1>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "tween" }}
          >
            <ItemContainer {...steps[currentStep]} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const ItemContainer = ({ id, title, description, button }: any) => (
  <motion.div className="md:w-[680px] flex flex-col justify-center">
    <div className="text-center space-y-10 px-5 mb-14">
      <div className="bg-indigo-400 mx-auto text-white w-10 h-10 p-2 rounded-full cursor-pointer">
        {id}
      </div>
      <h2 className="text-indigo-400 font-semibold text-xl">{title}</h2>
      <div>{description}</div>
    </div>

    <button
      className="w-fit mx-auto text-white font-semibold bg-indigo-400 hover:bg-indigo-600 rounded-full px-10 py-3"
      onClick={button.onClick}
    >
      {button.label}
    </button>
  </motion.div>
);
