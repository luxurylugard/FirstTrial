const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-content-1">
            <div class="footer-brand">
              <a href="#home" class="logo">
                V-Wallet
              </a>

              <p class="text">
                Maecenas pellentesque placerat quam, in finibus nisl tincidunt
                sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget
                felis.
              </p>
            </div>
          </div>
          <div className="footer-content-2">
            <div className="footer-list-items">
              <p>Our Links</p>
              <ul>
                {[
                  "FAQ",
                  "Portfolio",
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Support",
                ].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-list-items">
              <p>Navigations</p>
              <ul>
                {["Home", "About Us", "Services", "Features", "Blogs"].map(
                  (item, index) => (
                    <li key={index}>
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="footer-list-items">
              <p>Services</p>
              <ul>
                {[
                  "Design",
                  "Development",
                  "Marketing",
                  "Content Writing",
                  "Management",
                ].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className="footer-bottom"
          style={{ borderBlockStart: "1px solid hsl(0, 0%, 23%)" }}
        >
          <p>
            {/* © Copyright 2022 | Youdemi Template | All Rights Reserved by codewithsadee */}
            &copy; Copyright 2023 | V-Wallet Template | all rights reserved by{" "}
            <a href="#home">nasiralimo</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
