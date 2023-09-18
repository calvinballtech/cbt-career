import { ArrowLeft, Calendar, Map, MapPin, Pin } from "lucide-react";
import Link from "next/link";
import md from "markdown-it";
import { Footer } from "@/components/footer";
import clsx from "clsx";
import { FONT_P22_MAKINAC_PRO } from "@/components/font";
import { availablePositions } from "@/app/api/v1/careers/data";

export default function Carrers({ params }: any) {
  const jobs = availablePositions.filter((item: any) => item.id == params.id);
  const data = jobs.length ? jobs[0] : null;

  if (null) return window.location.href = '/careers';

  return (
    <main>
      <div className="w-full md:w-[1000px] mx-auto px-5 md:px-0">
        <header className="py-20 pb-10 space-y-3">
          <h3>We&apos;re looking for:</h3>
          <h1
            className={clsx(
              "text-4xl font-bold font-color-gradient",
              FONT_P22_MAKINAC_PRO.className,
            )}
          >
            Customer Success Data Engineer Manager
          </h1>
        </header>

        <div
          id="job-detail"
          className="space-y-5 mb-20"
          dangerouslySetInnerHTML={{ __html: md().render(data.detail) }}
        />

        <div className="flex flex-col justify-center items-center space-y-5 mb-20">
          <Link
            href="https://forms.gle/7mfUBZjVGTz4PyZA9"
            className="px-10 py-2 border rounded-full bg-indigo-400 hover:bg-indigo-600 text-white font-semibold"
          >
            I want to apply for this position
          </Link>
          <Link
            href="/careers"
            className="flex items-center space-x-3 text-white text-sm"
          >
            <ArrowLeft size={15} />
            <div>Go back to all positions</div>
          </Link>
        </div>
      </div>

      <section
        className="flex flex-col items-center py-72 pt-[400px] px-5 md:px-0 space-y-16"
        style={{
          background: "url(/images/background.png) no-repeat bottom",
          backgroundSize: "cover",
        }}
      ></section>
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
