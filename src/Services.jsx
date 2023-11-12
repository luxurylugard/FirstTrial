export default function Services() {
  return (
    <>
      <div className="services">
        <p>Our Services</p>
        <h1>Best IT & technology service in your area</h1>

        <div className="services-items">
          <h2>Design % Development</h2>
        </div>
        <div className="services-items">
          <h2>Android Apps Development</h2>
        </div>
        <div className="services-items">
          <h2>Laravel Web Development</h2>
        </div>
        <div className="services-items">
          <h2>React Web Development</h2>
        </div>

        <div className="progress">
          <p>About V-Wallet</p>
          <h1>
            We Provide The Best Online <span>Education</span>
          </h1>
          {/* <p style={{ color: "black", fontSize: "25px", fontWeight: "800" }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p> */}

          <div className="progress-body">
            <div className="progress-item">
              <p className="name">Business Studies</p>
              <p className="percentage">86%</p>
            </div>

            <div className="progress-item-1">
              <div
                style={{
                  width: "100%",
                  height: "7px",
                  position: "absolute",
                  background: "white",
                }}
              ></div>

              <div
                style={{
                  width: "86%",
                  height: "7px",
                  position: "absolute",
                  background: "#FF8086",
                }}
              ></div>
            </div>

            <div style={{ marginBlockStart: "35px" }}>
              <div className="progress-item">
                <p>Marketing</p>
                <p>67%</p>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "7px",
                  marginBlockStart: "15px",
                  position: "relative",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "7px",
                    position: "absolute",
                    background: "white",
                  }}
                ></div>

                <div
                  style={{
                    width: "67%",
                    height: "7px",
                    position: "absolute",
                    background: "#30C0AF",
                  }}
                ></div>
              </div>
            </div>
            <div style={{ marginBlockStart: "35px" }}>
              <div className="progress-item">
                <p>Design & Development</p>
                <p>95%</p>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "7px",
                  marginBlockStart: "15px",
                  position: "relative",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "7px",
                    position: "absolute",
                    background: "white",
                  }}
                ></div>

                <div
                  style={{
                    width: "95%",
                    height: "7px",
                    position: "absolute",
                    background: "#FFBC1E",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
