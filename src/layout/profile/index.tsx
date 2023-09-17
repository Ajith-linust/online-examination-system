import { useRef, useState } from "react";
import ImageWithFallback from "@library/image";
import { useAppSelector } from "@reduxStore/store";
import ExpandSvg from "@assets/svgr/ExpandSvg";
import ProfileIcon from "@assets/person.svg";
import BillingIcon from "@assets/billing.svg";
import LogoutIcon from "@assets/logout.svg";
import useOuterClick from "@hooks/useOuterClick";

export default function ProfileHead() {
  const { fullname, profilePicUrl } = useAppSelector((state) => state.profile);

  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const profileRef = useRef(null);

  useOuterClick(profileRef, (_, show) => setIsProfileClicked(!!show));

  return (
    <div className="relative cursor-pointer" ref={profileRef}>
      <div
        onClick={() => setIsProfileClicked((p) => !p)}
        className="flex gap-1 items-center"
      >
        <p className="text-[13px]">{fullname}</p>
        <ExpandSvg />
        <ImageWithFallback
          src={profilePicUrl}
          alt={fullname}
          width="w-6"
          height="h-6"
        />
      </div>
      {isProfileClicked && (
        <ul className="z-50 w-[120px] absolute top-24px right-0 top-8 rounded-lg bg-white shadow-[0px_0px_8px_#5565751A] overflow-hidden">
          {profileDetails.map((data) => (
            <li
              key={data.name}
              onClick={() => setIsProfileClicked(false)}
              className="p-2 grid grid-cols-[max-content_1fr] gap-x-2 items-center cursor-pointer hover:bg-gray-100"
            >
              <ImageWithFallback
                src={data.icon}
                alt={data.name}
                width="w-4"
                height="h-4"
              />
              <small>{data.name}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const profileDetails = [
  {
    name: "My profile",
    icon: ProfileIcon,
  },
  {
    name: "Billing",
    icon: BillingIcon,
  },
  {
    name: "Logout",
    icon: LogoutIcon,
  },
];
