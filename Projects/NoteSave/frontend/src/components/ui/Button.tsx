import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyles = "rounded-md flex items-center gap-x-1";

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

export const Button = (props: ButtonProps) => {
  return (
    <>
      <div>
        <button
          className={`${variantStyles[props.variant]} ${defaultStyles} ${
            sizeStyles[props.size]
          } `}
        >
          {props.startIcon && <span>{props.startIcon}</span>}
          {props.text}
          {props.endIcon && <span>{props.endIcon}</span>}
        </button>
      </div>
    </>
  );
};

<Button variant="primary" size="md" text="submit" onClick={() => {}} />;
