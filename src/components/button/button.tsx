interface customButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "button1" | "button2";
  disabled: boolean;
  loading: boolean;
  style: string;
}

function Button({
  text,
  type = "button",
  onClick,
  variant,
  disabled = false,
  loading = false,
  style,
}: customButtonProps) {
  const variantClasses = {
    button1: "rounded-full text-[20px] font-semibold ",
    button2: "rounded-[8px] text-[14px]  ",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center  ${variantClasses[variant]} ${style}`}
    >
      {loading ? "در حال بارگذاری..." : text}
    </button>
  );
}

export default Button;
