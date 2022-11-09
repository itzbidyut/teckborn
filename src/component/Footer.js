import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <div className="footerComponent">
      <Container maxWidth="false">
        <div className="item">
          <h3>Mobile Recharges & DTH</h3>
          <hr></hr>
          <div className="list">
            <a href="/">Mobile Prepaid</a>
            <a href="/">Mobile Postpaid</a>
            <a href="/">DTH Recharge</a>
          </div>
        </div>
        <div className="item">
          <h3>Bill Payments</h3>
          <hr></hr>
          <div className="list">
            <a href="/">Broadband</a>
            <a href="/">Electricity</a>
            <a href="/">DTH Recharge</a>
            <a href="/">Electricity</a>
            <a href="/">DTH Recharge</a>
            <a href="/">Electricity</a>
            <a href="/">DTH Recharge</a>
          </div>
        </div>
        <div className="item">
          <h3>Utility Payment</h3>
          <hr></hr>
          <div className="list">
            <a href="/">Life Insurance</a>
            <a href="/">Health Insurance</a>
            <a href="/">Life Insurance</a>
            <a href="/">Health Insurance</a>
            <a href="/">Life Insurance</a>
            <a href="/">Health Insurance</a>
          </div>
        </div>
        <div className="item">
          <h3>Travel Bookings</h3>
          <hr></hr>
          <div className="list">
            <a href="/">Flight booking</a>
            <a href="/">Hotel booking</a>
            <a href="/">Bus booking</a>
          </div>
        </div>
        <div className="item">
          <h3>eGift Card</h3>
          <hr></hr>
          <div className="list">
            <a href="/">eGift Card</a>
          </div>
        </div>
        <div className="footerEnd">
          <div className="footerEnd-left">
            <a href="/">About Us</a>
            <a href="/">Blog</a>
            <a href="/">Support</a>
            <a href="/">Terms & Comditions</a>
            <a href="/">Privacy Policy</a>
          </div>
          <div className="footerEnd-right">
            <p>2021-2022 RayRup | All rights reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
