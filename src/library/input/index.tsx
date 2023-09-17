import cx from 'classNames';
import { ChangeEvent } from 'react';

interface IInput {
  label?: string;
  value: string;
  name?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  rightElement?: React.ReactNode;
  error?: string;
  className?: string;
}

function Input({
  label,
  value,
  name,
  placeholder,
  error,
  rightElement,
  className,
  onChange,
}: IInput) {

  return (
    <div className={cx("w-full",className)}>
      {label && <label className={cx("text-sm block", error && "text-redCs")}>{label}</label>}
      <div className={cx('w-full h-10 border rounded-lg px-2 mt-2 bg-white relative', error && "border-redCs")}>
      <input
        className='w-full h-full bg-transparent text-sm border-none outline-none'
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
      {rightElement}
      </div>
      {error && <span className='text-redCs text-[12px] capitalize'>{error}</span>}
    </div>
  );
}

export default Input;
