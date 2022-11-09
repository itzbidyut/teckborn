import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const list = [
  {
    id: 1,
    img: "./assets/listIcon.png",
    title: "24*7 Assistance",
    subtitle:
      "It is a long established fact that a reader will be distracted  ",
  },
  {
    id: 2,
    img: "./assets/listIcon.png",
    title: "100% Safe and legit",
    subtitle:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece ",
  },
  {
    id: 3,
    img: "./assets/listIcon.png",
    title: "Quick & Easy method tp payments",
    subtitle:
      "There are many variations of passages of Lorem Ipsum available, but the majority have   ",
  },
];

export default function Section7() {
  return (
    <div className="Section7">
      <Container maxWidth="false">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className="items">
                <img src="./assets/logo.png" alt="" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div>
                <h3>Quick Link</h3>
                <div className="list">
                  <a href="/">Mobile Prepaid</a>
                  <a href="/">Mobile Postpaid</a>
                  <a href="/">DTH Recharge</a>
                  <a href="/">Broadband</a>
                  <a href="/">Electricity</a>
                </div>
                <div className="list2">
                  <a href="/">
                    <FacebookIcon />
                  </a>
                  <a href="/">
                    <InstagramIcon />
                  </a>
                  <a href="/">
                    <LinkedInIcon />
                  </a>
                  <a href="/">
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {list.map((item) => (
              <Grid item xs={12} md={6}>
                <div className="box">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={2}>
                        <img src={item.img} alt="" />
                      </Grid>
                      <Grid item xs={8}>
                        <p className="title"> {item.title}</p>
                        <p className="subtitle"> {item.subtitle}</p>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
