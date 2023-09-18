import { FONT_P22_MAKINAC_PRO } from "@/components/font";
import { Footer } from "@/components/footer";
import clsx from "clsx";
import { ArrowLeft, Calendar, Map, MapPin, Pin } from "lucide-react";
import Link from "next/link";

export default function Carrers() {
  const availablePositions = [
    {
      id: "customer-success-data-engineer-manager",
      title: "Customer Success Data Engineer Manager",
      description:
        "Responsible for seamless integration of all data setups necessary for powering enterprise success.",
    },
  ];

  return (
    <main>
      <Link href="/the-journey" className="fixed m-5">
        <ArrowLeft />
      </Link>

      <div className="w-full md:w-[1000px] mx-auto px-5 md:px-0">
        <header className="text-center py-20 space-y-5">
          <h1
            className={clsx(
              "text-4xl font-bold font-color-gradient",
              FONT_P22_MAKINAC_PRO.className,
            )}
          >
            Ready to Embrace the Stealth?
          </h1>
          <h3 className="text-[#DC97A7] font-semibold">
            Browse here to initiate the most daring mission of your career!
          </h3>
        </header>

        <div className="space-y-5 mb-20">
          {availablePositions.map((item: any, i: number) => (
            <AvailablePosition key={i} {...item} />
          ))}
        </div>
      </div>

      <section
        className="flex flex-col items-center py-72 pt-[400px] px-5 md:px-0 space-y-16"
        style={{
          background: "url(/images/background.png) no-repeat bottom",
          backgroundSize: "cover",
        }}
      ></section>

      <Footer />
    </main>
  );
}

const AvailablePosition = ({ id, title, description, location, time }: any) => (
  <div className="flex items-center space-x-2 border rounded-lg p-5 md:p-10">
    {/* <div className="w-[200px]"></div> */}
    <div className="space-y-3">
      <h1 className="font-bold text-indigo-400 text-xl">{title}</h1>
      <div className="flex space-x-10 text-gray-500 text-sm">
        <div className="flex items-center space-x-2">
          <MapPin /> <div>{location ? location : "Hybrid"}</div>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar /> <div>{time ? time : "Fulltime"}</div>
        </div>
      </div>
      <div className="text-gray-500">{description}</div>
      <Link href={`/careers/${id}`} className="block">
        <button className="text-indigo-400 border rounded-full px-5 py-2 text-xs shadow hover:text-white hover:bg-indigo-400 hover:border-indigo-400 font-semibold">
          View Detail
        </button>
      </Link>
    </div>
  </div>
);
