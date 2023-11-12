import { useState } from "react";
import ExpandableButtons from "./ExpandableButtons";

export default function Details() {
  const [isExpanded, setExpansion] = useState(0);

  const toggleExpand = () => {
    setExpansion(!isExpanded);
  };

  const expandableContentStyle = {
    maxHeight: isExpanded ? "1000px" : "0",
  };

  return (
    <>
      <section className="details-body">
        <div className="details">
          <p>Why Choose Us?</p>
          <h1>We bring solutions to make life easier for our clients.</h1>

          <div className="expandable-layout">
            <ExpandableButtons
              toggleExpand={toggleExpand}
              isExpanded={isExpanded}
            />
            <div className="wrapper">
              <div className="expandable" style={expandableContentStyle}>
                <div className="expandable-grid-items"></div>
                {/* <p></p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
