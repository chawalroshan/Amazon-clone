import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <img className="home_image" src="https://s.yimg.com/uu/api/res/1.2/Y0sdCqqSrXzmtFWgzjwgZg--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/280da9d0-33d8-11ed-beeb-9f0777e02779.cf.jpg" alt='' />

        <div className="home_row">
          <Product title="Goldfish"
            price={99.99}
            image="https://www.pepperidgefarm.com/wp-content/uploads/2017/03/products-goldfish-packs-1.jpg"
            alt='' />

          <Product title="Horlicks"
            price={59.99}
            image="https://www.the-wyndham.co.uk/wp-content/uploads/2022/12/shutterstock_1903664056-scaled-e1671814299764.jpg"
            alt='' />
        </div>

        <div className="home_row">
          <Product title="Goalstar"
            price={99.99}
            image="https://static-01.daraz.com.np/p/338489d587c2964180a0e3bbb90864bf.jpg"
            alt='' />

          <Product title="Smart Watch"
            price={99.99}
            image="https://m.media-amazon.com/images/I/71QO8z3Vv8L._AC_UF894,1000_QL80_.jpg"
            alt='' />

          <Product title="iPhone"
            price={99.99}
            image="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"
            alt='' />
        </div>

        <div className="home_row">
          <Product title="Samsung Television"
            price={99.99}
            image="https://m.media-amazon.com/images/I/91-U9jryVFL.jpg"
            alt='' />
        </div>
      </div>
    </div>
  );
}

export default Home;
