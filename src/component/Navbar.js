import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);

  const openModal = () => {
    console.log("open");
    setDrawer(true);
  };
  const CloseModal = () => {
    console.log("open");
    setDrawer(false);
  };

  return (
    <div className="Navbar">
      <div className="NavIcon">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div className="mobileArrow" onClick={openModal}>
        <DehazeIcon />
      </div>
      <div className="navLinks">
        <div className="Payment">
          <a href="/">
            Reaharge& Bill Payment <KeyboardArrowDownSharpIcon />
            <div className="insideLinks">
              <ul>
                <li>
                  <a href="/">Links 1</a>
                  <a href="/">Links 2</a>
                  <a href="/">Links 3</a>
                  <a href="/">Links 4</a>
                </li>
              </ul>
            </div>
          </a>
        </div>
        <div>
          <a href="/"> Online Insurance</a>
        </div>
        <div>
          <a href="/"> Banking</a>
        </div>
        <div>
          <a href="/"> Fastag</a>
        </div>
        <div className="more">
          <a href="/">
            More <KeyboardArrowDownSharpIcon />
            <div className="insideLinks">
              <ul>
                <li>
                  <a href="/">Links 1</a>
                  <a href="/">Links 2</a>
                  <a href="/">Links 3</a>
                  <a href="/">Links 4</a>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      {drawer ? (
        <div className="navLinkMobile">
          <div className="close " onClick={CloseModal}>
            <CloseIcon />
          </div>
          <div className="Payment">
            <a href="/">
              Reaharge& Bill Payment <KeyboardArrowDownSharpIcon />
            </a> 
            <div className="insideLinks">
              <ul>
                <li>
                  <a href="/">Links 1</a>
                  <a href="/">Links 2</a>
                  <a href="/">Links 3</a>
                  <a href="/">Links 4</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="/"> Online Insurance</a>
          </div>
          <div>
            <a href="/"> Banking</a>
          </div>
          <div>
            <a href="/"> Fastag</a>
          </div>
          <div className="more">
            <a href="/">
              More <KeyboardArrowDownSharpIcon />
            </a>
            <div className="insideLinks">
              <ul>
                <li>
                  <a href="/">Links 1</a>
                  <a href="/">Links 2</a>
                  <a href="/">Links 3</a>
                  <a href="/">Links 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
