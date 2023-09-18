"use client";

import { FONT_P22_MAKINAC_PRO } from "@/components/font";
import { Footer } from "@/components/footer";
import clsx from "clsx";
import { MoveDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <section
        id="main"
        className="w-full flex justify-center items-center py-28 px-5 md:px-0"
      >
        <div className="text-center space-y-5">
          <motion.img
            animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
            transition={{
              x: { duration: 3, repeat: Infinity, repeatType: "mirror" },
              y: { duration: 2, repeat: Infinity, repeatType: "mirror" },
            }}
            src="/images/astronout-tiger.png"
            alt="spaceship"
            className="mx-auto mb-20 w-[170px]"
          />

          <h1
            className={clsx(
              "text-indigo-400 text-4xl font-bold font-color-gradient",
              FONT_P22_MAKINAC_PRO.className,
            )}
          >
            Welcome to CalvinBall Technologies
          </h1>
          <div className="md:w-[460px] md:mx-auto">
            <div>
              Where we&apos;ve taken CalvinBall and turned it into the most
              electrifying tech adventure you&apos;ll ever play.
            </div>
            <div className="mt-20">
              <div className="text-indigo-400 font-semibold mb-10">
                Get Started
              </div>
              <a
                href="#about-us"
                className="block bg-indigo-400 w-fit mx-auto p-3 rounded-full animate-bounce cursor-pointer"
              >
                <MoveDown size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className="border-t py-28 px-5 pb-72 md:pb-40 md:px-0 border-b"
        style={{
          background:
            "url(/images/astronaut-in-moon.png) no-repeat bottom right",
        }}
      >
        <h1
          className={clsx(
            "text-indigo-400 text-4xl font-semibold text-center mb-20",
            FONT_P22_MAKINAC_PRO.className,
          )}
        >
          About Us
        </h1>

        <div className="container mx-auto space-y-10 pb-32 md:pb-0">
          <ItemContainer
            id="1"
            title="Beyond Stealth Mode"
            description={`Ever dreamt of turning "stealth mode" into an art form? At CBT, we're not just making AI magic; we're doing it all under the cloak of the best-kept secret in the universe. Our mission? To democratize technology access and make the world & even the galaxies say, "Whoa."`}
            position="left"
            content={
              <motion.img
                animate={{ y: [0, -40, 0] }}
                transition={{
                  y: { duration: 2, repeat: Infinity, repeatType: "mirror" },
                }}
                src="/images/astronaut.png"
                alt="spaceship"
                className="mx-auto w-[200px]"
              />
            }
          />

          <ItemContainer
            id="2"
            title="Game-Changing Innovation"
            description={`Imagine CalvinBall with a cosmic twist – that's our kind of innovation. Our Products are not  just smart; it's the kind of genius that leaves stars in awe. It's like taking the coolest science fiction and saying, "Hold my spacetime."`}
            position="right"
          />

          <ItemContainer
            id="3"
            title="Meet Your Co-Conspirator"
            description={`Introducing Our first Product personas. They dont just solve problems; it outsmarts them, out-creates them, and out-innovates them. It's like playing CalvinBall on a whole new level, one that's light-years ahead.`}
            position="left"
          />

          <ItemContainer
            id="4"
            title="Daring Stealth Challenges"
            description={`At CBT, we thrive in the shadows. Our team lives for the thrill of solving challenges that would make even Calvin hesitate. We're rewriting the rules of the stealth game, one secret mission at a time.`}
            position="right"
          />

          <ItemContainer
            id="5"
            title="Traits We Secretly Seek"
            description={
              <>
                <div>{`Ready to take the leap into the unknown? We're on the hunt for the bold and the dreamers – those who dare to ask, "What if?" If you've got a heart full of aspiration and a dash of "Galactic Calvin," we need you on our cosmic team.`}</div>
                <Link
                  href="/the-journey"
                  className="mt-10 inline-block text-indigo-400 hover:text-white hover:bg-indigo-400 border border-indigo-400 px-10 py-3 rounded-lg "
                >
                  I want to know more about the process at CBT!
                </Link>
              </>
            }
            position="left"
          />
        </div>
      </section>

      <section
        className="flex flex-col items-center py-28 px-5 md:px-0 space-y-16"
        style={{
          background: "url(/images/background.png) no-repeat bottom",
          backgroundSize: "cover",
        }}
      >
        <h2
          className={clsx(
            "text-center text-indigo-400 text-2xl font-semibold",
            FONT_P22_MAKINAC_PRO.className,
          )}
        >
          The universe is waiting, the adventure is unfolding, and the secrets
          are yours to uncover.
          <br />
          <br />
          Let&apos;s embark on this cosmic quest together at CBT!
        </h2>

        <Link
          href={"/careers"}
          className="text-indigo-400 hover:text-white hover:bg-indigo-400 text-2xl font-bold border border-indigo-400 px-10 py-3 rounded-lg "
        >
          Let&apos;s fly!
        </Link>

        <motion.img
          animate={{
            x: [0, -20, 20, 0],
            y: [0, -40, 0],
          }}
          transition={{
            x: { duration: 2, repeat: Infinity, repeatType: "mirror" },
            y: { duration: 2, repeat: Infinity, repeatType: "mirror" },
          }}
          src="/images/astronaut-riding-spaceship.png"
        />
      </section>

      <Footer />
    </main>
  );
}

const ItemContainer = ({ id, title, description, position, content }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    {position && position == "right" ? <div>{content}</div> : null}

    <div className="text-center space-y-5 px-5">
      <div className="bg-indigo-400 mx-auto text-white w-10 h-10 p-2 rounded-full cursor-pointer">
        {id}
      </div>
      <h2
        className={clsx(
          "text-indigo-400 text-xl font-semibold",
          FONT_P22_MAKINAC_PRO.className,
        )}
      >
        {title}
      </h2>
      <div>{description}</div>
    </div>

    {position && position == "left" ? <div>{content}</div> : null}
  </div>
);
