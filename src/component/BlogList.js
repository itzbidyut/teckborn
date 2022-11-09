import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RestoreIcon from "@mui/icons-material/Restore";
import EastIcon from "@mui/icons-material/East";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const blogs = [
  {
    id: 1,
    title: "How to benefit by choosing Vodafone Idea family",
    img: "./assets/post1.jpg",
    post: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ...",
    time: "12 Aug 2022",
    link: "/",
    category: [
      { id: "1", cate: "Postpaid", link: "/" },
      { id: "2", cate: "Prepaid", link: "/" },
    ],
  },
  {
    id: 2,
    title: "Strategies to make loan repayment safely & securely at Payrup",
    img: "./assets/post2.jpg",
    post: "Nobody can live calmly under debt on their heads. We never know exactly what can lead to which road in life. Your business can fail, you need money for medical emergencies, irrational expenditure or anything like this can happen and you get no choice ",
    time: "12 Aug 2022",
    link: "/",
    category: [
      { id: "1", cate: "Cable Tv", link: "/" },
      { id: "2", cate: "Cable ", link: "/" },
    ],
  },
  {
    id: 3,
    title: "Make Loan repayment at Payrup",
    img: "./assets/post3.jpg",
    post: "Just in case you have missed your online loans payment, we have just the right payment facilities to help you out with the same. You can either pay through your bank account using Payrup’s fast payment gateway or you can utilise digital paymen... ",
    time: "12 Aug 2022",
    link: "/",
    category: [
      { id: "1", cate: "Banking", link: "/" },
      { id: "2", cate: "Banking 2", link: "/" },
    ],
  },
];
const popularBlogs = [
  {
    id: 1,
    title: "Strategies to make loan repayment safely & securely at Payrup",
    img: "./assets/post2.jpg",
    post: "Nobody can live calmly under debt on their heads. We never know exactly what can lead to which road in life. Your business can fail, you need money for medical emergencies, irrational expenditure or anything like this can happen and you get no choice ",
    time: "12 Aug 2022",
    link: "/",
    category: [
      { id: "1", cate: "Cable Tv", link: "/" },
      { id: "2", cate: "Cable ", link: "/" },
    ],
  },
  {
    id: 2,
    title: "How to benefit by choosing Vodafone Idea family",
    img: "./assets/post1.jpg",
    post: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ...",
    time: "12 Aug 2022",
    link: "/",
    category: [
      { id: "1", cate: "Postpaid", link: "/" },
      { id: "2", cate: "Prepaid", link: "/" },
    ],
  },

  {
    id: 3,
    title: "Make Loan repayment at Payrup",
    img: "./assets/post3.jpg",
    post: "Just in case you have missed your online loans payment, we have just the right payment facilities to help you out with the same. You can either pay through your bank account using Payrup’s fast payment gateway or you can utilise digital paymen... ",
    time: "12 Aug 2022",
    link: "/",
    category: [
      { id: "1", cate: "Banking", link: "/" },
      { id: "2", cate: "Banking 2", link: "/" },
    ],
  },
];
export default function BlogList() {
  return (
    <div className="BlogList">
      <Container maxWidth="false">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            <Grid item md={12} lg={9}>
              {blogs.map((item) => (
                <a className="blogItem" href={item.link}>
                  <div className="imgBox">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="blogDetails">
                    <div className="catList">
                      {item.category.map((item) => (
                        <a href={item.link}>{item.cate}</a>
                      ))}
                    </div>
                    <p className="title"> {item.title}</p>
                    <p className="post">{item.post}</p>
                    <p className="time">
                      <RestoreIcon />
                      <p> {item.time}</p>
                    </p>
                    <a className="button" href={item.link}>
                      Read More
                    </a>
                  </div>
                </a>
              ))}
            </Grid>
            <Grid item md={12} lg={3}>
              <div className="emailBox">
                <h4>Never Miss A Post !</h4>
                <p>
                  Just in case you have missed your online loans payment, we
                  have just the right payment facilities,
                </p>
                <form>
                  <input placeholder="Email" />
                  <button type="submit">
                    <EastIcon />
                  </button>
                </form>
              </div>
              <div className="popilarBlogs">
                <h4 className="popularHeadeing"> Popular Blogs</h4>
                {popularBlogs.map((item) => (
                  <a className="blogItem" href={item.link}>
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                    <div className="blogDetails">
                      <p className="title"> {item.title}</p>

                      <p className="time">
                        <RestoreIcon />
                        <p> {item.time}</p>
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="socialLink">
                <h4 className="popularHeadeing">Follow Us</h4>
                <ul>
                  <li>
                    <a href="/">
                      <FacebookIcon />
                      <p>https:// www. facebook.com/ </p>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <TwitterIcon />
                      <p>https:// www. twitter.com/ </p>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <InstagramIcon />
                      <p>https:// www. instagram.com/ </p>
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
