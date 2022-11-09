import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavIcon">
        <img src="../assets/logo.png" alt="" />
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
    </div>
  );
}
