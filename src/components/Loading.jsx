export default function Loading({
  color = "#588086",
  size = "100%",
  style = {},
}) {
  return (
    <div className="loading-gif" style={{ ...style }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "rgba(255, 255, 255, 0)",
          display: "block",
          shapeRendering: "auto",
        }}
        width={size}
        height={size.toString().includes("%") ? "auto" : size}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke={color}
          strokeWidth="9"
          r="31"
          strokeDasharray="146.08405839192537 50.69468613064179"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="0.5181347150259068s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
}
