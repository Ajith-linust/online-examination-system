interface CloseSvgPropsI {
  className: string;
  pathClassName?: string;
  onClick?: (e?: any) => void;
}

export default function CloseSvg(props: CloseSvgPropsI) {
  const { className, pathClassName, onClick } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
      className={className}
      onClick={onClick}
    >
      <path
        className={pathClassName}
        fill="white"
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  );
}
