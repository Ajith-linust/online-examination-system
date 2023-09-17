import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cx from "classNames";
import ImageWithFallback from "@library/image";
import HomeIcon from "@assets/home.svg";
import dashboardIcon from "@assets/dashboard.svg";
import ProductIcon from "@assets/product.svg";
import MenuIcon from "@assets/menu.svg";
import SearchIcon from "@assets/search.svg";
import Logo from "@assets/logo.png";
import ProfileHead from "./profile";
import Notifications from "./notification";
import CloseSvg from "@assets/svgr/CloseSvg";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={cx("w-full h-screen flex relative")}>
      {isNavOpen && (
        <nav className="max-w-[250px] flex flex-col align-top bg-primary origin-left animate-[nav_.3s_ease_forwards] nav-wrap">
          <div className="md:justify-between flex p-[6px_6px_2px_0px] items-center">
            <ImageWithFallback
              src={Logo}
              alt="ACME logo"
              width="w-max"
              height="h-[30px]"
              radius="rounded"
            />
            <CloseSvg
              className="md:block hidden cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            />
          </div>
          <ul>
            {navigationDetails.map((data) => (
              <Link to={data.path} key={data.name}>
                <li
                  onClick={() =>
                    window.outerWidth < 767 || window.innerWidth < 767
                      ? setIsNavOpen(false)
                      : undefined
                  }
                  className={cx(
                    "flex gap-3 h-[40px] items-center cursor-pointer px-2 hover:bg-secondary",
                    pathname === data.path && "bg-secondary"
                  )}
                >
                  <ImageWithFallback
                    src={data.icon}
                    alt={data.name}
                    width="w-4"
                    height="h-4"
                  />
                  <small className="leading-[15px] text-white">
                    {data.name}
                  </small>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
      <main className="w-full h-full bg-bg flex flex-col">
        <header className="p-3 bg-white flex items-center gap-3 border-b">
          <ImageWithFallback
            src={MenuIcon}
            alt="menu"
            className="cursor-pointer"
            onClick={() => setIsNavOpen((p) => !p)}
          />
          <div className="flex gap-2 items-center">
            <ImageWithFallback
              src={SearchIcon}
              alt="search"
              width="w-4"
              height="h-4"
            />
            <input
              placeholder="Search"
              className="border-none outline-none bg-transparent h-5"
            />
          </div>
          <Notifications />
          <ProfileHead />
        </header>
        {children}
      </main>
    </div>
  );
}

const navigationDetails = [
  {
    name: "Create Exam",
    path: "/create-exam",
    icon: HomeIcon,
  },
  {
    name: "Attend Exam",
    path: "/attend-exam",
    icon: dashboardIcon,
  },
  {
    name: "Report",
    path: "/report",
    icon: ProductIcon,
  },
];
