import { CSSProperties } from "react";

interface ExpandSvgPropsI {
  width?: string;
  height?: string;
  fill?: string;
  styles?: CSSProperties;
  onClick?: (e?: any) => void;
}

export default function ExpandSvg(props: ExpandSvgPropsI) {
  const { width, height, fill, onClick, styles } = props;

  return (
    <svg
      version="1.1"
      width={width || "20px"}
      height={height || "20px"}
      viewBox="0 -960 960 960"
      onClick={onClick}
      style={styles}
    >
      <path
        d="M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z"
        fill={fill || "lightgrey"}
      />
    </svg>
  );
}
