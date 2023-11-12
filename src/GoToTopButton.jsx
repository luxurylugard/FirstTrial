export default function GoToTopButton(props) {
  return (
    <button className="btn-to-top" onClick={props.scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
        height="15px"
        className="btn-to-top-img"
      >
        <path
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="25"
          d="M112 244l144-144 144 144M256 120v292"
        />
      </svg>
    </button>
  );
}
