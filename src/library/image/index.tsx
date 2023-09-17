import { useEffect, useState } from "react";
import Avatar from "@assets/avatar.webp";
import cx from "classNames";
import { IProps } from "./types";

function ImageWithFallback(props: IProps) {
  const {
    src,
    width,
    height,
    alt,
    fallbackSrc,
    radius,
    margin,
    padding,
    className,
    onClick,
  } = props;

  const [imageInfo, setImageInfo] = useState({
    url: src,
    isLoading: false,
  });

  useEffect(() => {
    setImageInfo((p) => ({
      ...p,
      isLoading: true,
    }));

    /**
     * Check whether image is loaded or not
     */

    const img = new Image();
    img.src = src;

    img.onload = function () {
      setImageInfo({
        url: src,
        isLoading: false,
      });
    };

    img.onerror = function () {
      setImageInfo({
        url: fallbackSrc || Avatar,
        isLoading: false,
      });
    };
  }, [src]);

  return (
    <div
      className={cx(
        "relative overflow-hidden",
        (width || "w-5"),
        (height || "h-5"),
        (radius || "rounded-full"),
        (margin || "m-0"),
        (padding || "p-0"),
        className
      )}
    >
      {imageInfo.isLoading ? (
        <div
          className={cx(
            "absolute w-full h-full bg-[length:1200px_100%] overflow-hidden animate-[placeholder_2s_linear_infinite]",
            "image-wrap"
          )}
        ></div>
      ) : (
        <img
          onClick={onClick}
          src={imageInfo.url}
          alt={alt || ""}
          className="bg-contain h-full w-full"
        />
      )}
    </div>
  );
}

export default ImageWithFallback;
