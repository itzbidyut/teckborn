import Container from "@mui/material/Container";

export default function Section6() {
  return (
    <Container maxWidth="false">
      <div className="Section6">
        <div>
          <p className="title">We're here to help you</p>
          <p className="subTitle">24/7 Customer Support</p>
          <div className="text-center">
              <button>Contact us</button>
          </div>
        
        </div>
        <div>
          <img src="../assets/contact.png" alt="" />
        </div>
      </div>
    </Container>
  );
}
