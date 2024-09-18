interface ArrowProps {
  left?: boolean;
  onClick: () => void;
  disabled: boolean;
}

const Arrow = ({ left, onClick, disabled }: ArrowProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`arrow ${left ? "left-0" : "right-0"} ${
      disabled ? "disabled" : ""
    } rounded-[5px] px-4 py-2 text-white`}
    style={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
  >
    {left ? "<" : ">"}
  </button>
);
