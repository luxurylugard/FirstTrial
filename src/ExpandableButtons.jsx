export default function ExpandableButtons(props) {
  const SvgStyle = {
    marginBlockStart: "10px",
  };

  const style = {
    transition: "0.35s ease",
  };

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
    <>
      <div style={divStyle}>
        <button className="toggle-btn-body" onClick={props.toggleExpand}>
          Professional Design
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
            height="15px"
            style={SvgStyle}
          >
            {props.isExpanded ? (
              <path
                style={style}
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="25"
                d="M112 328l144-144 144 144"
              />
            ) : (
              <path
                style={style}
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="25"
                d="M112 184l144 144 144-144"
              />
            )}
          </svg>
        </button>
      </div>
    </>
  );
}
