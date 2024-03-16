import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { BiListCheck, BiSolidDashboard } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { FiAlertOctagon } from "react-icons/fi";
export interface RoutesIF {
  name: string;
  href: string;
  icons?: any;
  isClickAble: boolean;
}

export const landingPageRoutes: RoutesIF[] = [
  {
    name: "Dashboard",
    href: "/",
    icons: <BiListCheck />,
    isClickAble: false,
  },
  {
    name: "About-us",
    href: "/app/learnings",
    isClickAble: false,
  },
  {
    name: "Prepare",
    href: "/app/prepare",
    // icons: <BiSolidDashboard />,
    isClickAble: false,
  },
  {
    name: "Coding Challenges",
    href: "/app/challenges",
    // icons: <PiSuitcaseSimpleThin />,
    isClickAble: false,
  },
];

export const StreamerDashboardRoutes: RoutesIF[] = [
  {
    name: "Dashboard",
    href: "/streamer",
    icons: <BiSolidDashboard />,
    isClickAble: false,
  },
  {
    name: "AlertBox",
    href: "/streamer/alert-box",
    icons: <FiAlertOctagon />,
    isClickAble: false,
  },
  // {
  //   name: "Logout",
  //   href: "/",
  //   icons: <AiOutlineLogout />,
  //   isClickAble: true,
  // },
];
