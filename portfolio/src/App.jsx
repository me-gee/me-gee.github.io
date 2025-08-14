import React, { useEffect } from "react";
import "./App.css"; // 기존 CSS import

function App() {
  useEffect(() => {
    // 외부 스크립트 로드 (GSAP, Swiper 등)
    const script = document.createElement("script");
    script.src = "./assets/js/custom.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="wrapper">
      {/* HEADER */}
      <header id="header">
        <div className="common-inner">
          <div className="logo-area">
            <h1 className="logo">
              <a href="./index.html">
                <i className="ico-logo"></i>HYERIN
              </a>
            </h1>
          </div>
          <nav id="gnb">
            <ul className="gnb-list">
              <li className="gnb-item" data-menu="about">
                <a href="#" className="btn-gnb" role="button">
                  about
                </a>
              </li>
              <li className="gnb-item" data-menu="work">
                <a href="#" className="btn-gnb" role="button">
                  work
                </a>
              </li>
              <li className="gnb-item" data-menu="footer">
                <a href="#" className="btn-gnb" role="button">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main id="main">
        <div className="common-inner">
          {/* visual */}
          <section id="visual" className="sc-visual">
            <h2 className="blind">비주얼 영역</h2>
            <div className="title pc">
              <div className="row row1">
                <strong>creative</strong>{" "}
                <span className="txt-small">web</span>
              </div>
              <div className="row row2">
                <div className="thumb">
                  <img
                    src="./assets/images/content/visual_img1.jpg"
                    alt=""
                  />
                </div>
                <strong>publisher</strong>
              </div>
              <div className="row row3">
                <span className="txt-small">i'm</span>{" "}
                <strong>ready</strong>
                <div className="thumb">
                  <img
                    src="./assets/images/content/visual_img2.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          {/* about */}
          <section id="about" className="sc-about">
            <h2 className="blind">소개 영역</h2>
            <div className="about-content">
              <p className="desc ko">
                '잘 만든 웹사이트를 만들고자 하는 욕심'
                <br />
                단순히 페이지를 구현하는 것에 그치는 것이 아니라 웹 표준, 웹
                접근성, 그리고 웹 호환성 등을 고려하여 마크업 하는 웹
                퍼블리셔가 되고자 합니다. 책임감을 가지고 임하며 맡은 바에
                있어서 항상 최선을 다할 것을 약속드립니다.
              </p>
              <a href="#" className="btn-scroll btn" role="button">
                scroll down
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer id="footer">
        <div className="common-inner">
          <div className="group-row">
            <p className="copyright">
              <i className="ico-logo"></i> <em className="copyright-symbol">
                ©
              </em>{" "}
              <span className="year">2025</span>
            </p>
            <a
              href="mailto:jeonhyelin19951118@gmail.com"
              className="link-contact btn"
            >
              let's get in touch
            </a>
            <div className="social-area">
              <a
                href="https://github.com/JEON-HYERIN"
                target="_blank"
                rel="noreferrer"
                className="link-social btn"
              >
                github
              </a>
              <a
                href="https://velog.io/@jeonhyelin"
                target="_blank"
                rel="noreferrer"
                className="link-social btn"
              >
                velog
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
