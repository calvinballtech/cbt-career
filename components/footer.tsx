import clsx from "clsx";
import { FONT_P22_MAKINAC_PRO_BOLD } from "./font";

export const Footer = () => (
  <footer className="py-32">
    <div className="container mx-auto">
      <div className="text-center text-indigo-400">
        <div
          className={clsx(
            "text-lg font-semibold",
            FONT_P22_MAKINAC_PRO_BOLD.className,
          )}
        >
          CalvinBall Technologies
        </div>
        <div className="text-sm">&copy; 2023. All rights reserved.</div>
      </div>
    </div>
  </footer>
);
