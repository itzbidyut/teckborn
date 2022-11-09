import React from "react";
import Slider from "react-slick";

export default function Textimonial() {
  const textimonialData = [
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
      post: "  We never know exactly what can lead to which road in life. Your business can fail, you need money for medical emergencies, irrational expenditure or anything like this can happen and you get no choice ",
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
      post: " we have just the right payment facilities to help you out with the same. You can either pay through your bank account using Payrup’s fast payment gateway or you can utilise digital paymen... ",
      time: "12 Aug 2022",
      link: "/",
      category: [
        { id: "1", cate: "Banking", link: "/" },
        { id: "2", cate: "Banking 2", link: "/" },
      ],
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="textimonial">
      <Slider {...settings}>
        {textimonialData.map((item) => (
          <div div className="textimonialItem">
            <div className="textimonialLeft">
              <p className="title"> {item.title}</p>
              <div className="details">
                <p className="time">{item.time}</p>
                <div className="catList">
                  {item.category.map((item) => (
                    <a href={item.link}>{item.cate}</a>
                  ))}
                </div>
              </div>
              <p className="post">{item.post}</p>
              <a className="read" href={item.link}>
                Reed More
              </a>
            </div>
            <div className="textimonialRight">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
