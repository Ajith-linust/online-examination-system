import { useRef, useState } from "react";
import ImageWithFallback from "@library/image";
import Notification from "@assets/notification.svg";
import { useAppSelector } from "@reduxStore/store";
import "./styles.css";
import useOuterClick from "@hooks/useOuterClick";

export default function Notifications() {
  const notifications = useAppSelector((state) => state.notifications);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const notificationRef = useRef(null);

  useOuterClick(notificationRef, (_, show) => setIsNotificationOpen(!!show));

  return (
    <div
      ref={notificationRef}
      className="relative ml-auto cursor-pointer"
      onClick={() => setIsNotificationOpen((p) => !p)}
    >
      <ImageWithFallback
        src={Notification}
        alt="notification"
        width="w-4"
        height="h-4"
      />
      <span className="rounded-full w-[5px] h-[5px] bg-limeGreen absolute right-0 top-0"></span>
      {isNotificationOpen && (
        <div className="md:right-[-90px] z-50 w-[300px] absolute top-24px right-0 top-6 rounded-lg bg-white shadow-[0px_0px_8px_#5565751A] overflow-hidden">
          {notifications.map((data) => (
            <div
              key={data.fullname}
              className="p-2 grid grid-cols-[max-content_1fr] gap-x-2 items-center hover:bg-gray-100 notification-wrap"
            >
              <ImageWithFallback
                src={data.profilePicUrl}
                alt={data.fullname}
                width="w-7"
                height="h-7"
              />
              <p className="text-xs">
                {data.fullname}
                <small className="text-gray-400 text-[10px] absolute right-0">
                  {new Date(data.messageAt).toLocaleDateString()}
                </small>
              </p>
              <small>{data.message}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
