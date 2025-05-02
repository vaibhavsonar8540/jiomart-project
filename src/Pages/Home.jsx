import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";

const images = [
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1744469612_grocery_super_saver.jpg?im=Resize=(768,448)",
    link: "/grocery",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745692182_1.jpg?im=Resize=(768,448)",
    link: "/mobiles",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767036_22.jpg?im=Resize=(768,448)",
    link: "/tv-deals",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767177_HPMC_1.jpg?im=Resize=(768,448)",
    link: "/product/hpmc1",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745692252_HPMC_2.jpg?im=Resize=(768,448)",
    link: "/product/hpmc2",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767225_HPMC_3.jpg?im=Resize=(768,448)",
    link: "/product/hpmc3",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745692448_HPMC_4.jpg?im=Resize=(768,448)",
    link: "/product/hpmc4",
  },
];

const secslider = [
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1740384914_SBI_Cards_632_x_160.jpg?im=Resize=(768,200)",
    link: "#",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735537779_632x160__copy.jpg?im=Resize=(768,200)",
    link: "#",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735538404_632x160__copy_2.jpg?im=Resize=(768,200)",
    link: "#",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745083605_Federal-CC--632-x-160.jpg?im=Resize=(768,200)",
    link: "#",
  },,
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745083686_Federal.jpg?im=Resize=(768,200)",
    link: "#",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1743407821_PhonePe_632x160.jpg?im=Resize=(768,200)",
    link: "#",
  },
  
]

const Home = () => {
  return (
    <div className="slider-main">
     
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map(({ src, link }, index) => (
            <SwiperSlide key={index} >
              <Link to={link}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="slide-img"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="poster">
          <Link><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1746036953_2368-x-400.jpg?im=Resize=(2368,400)" alt="" /></Link>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {secslider.map(({ src, link }, index) => (
            <SwiperSlide key={index} >
              <Link to={link}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="slide-img"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="blockbuster-sec">
          <Link to={'#'}><img src="/banner.png" alt="" /></Link>
        </div>

        <div className="trendingDealsSec">
          <h2 style={{fontFamily:"sans-serif"}}>Trending Deals</h2>
          
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div className="subTrend">
              <Link><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745428622_smartphones.jpg?im=Resize=(368,452)" alt="" /></Link>
            </div>
            <div className="subTrend">
              <Link><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745428660_kids.jpg?im=Resize=(368,452)" alt="" /></Link>
            </div>
            <div className="subTrend">
              <Link><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745428714_kitchen.jpg?im=Resize=(368,452)" alt="" /></Link>
            </div>
            <div className="subTrend">
              <Link><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745704555_Square-Tile-Carousel--2-.jpg?im=Resize=(368,452)" alt="" /></Link>
            </div>
            <div className="subTrend">
              <Link><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744907473_Square-Tile-Carousel-1.jpg?im=Resize=(368,452)" alt="" /></Link>
            </div>
            <div className="subTrend">
              <Link><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744907594_Homechair.jpg?im=Resize=(368,452)" alt="" /></Link>
            </div>
          </div>
        </div>

        
      </div>
  
  );
};

export default Home;
