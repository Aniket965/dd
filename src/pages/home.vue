<template>
  <div style="position:relative;">
    <vue-navigation-bar :options="navbarOptions" />

    <div class="landing">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="landing-slide">
            <img src="../assets/banner1.jpg" alt srcset />
          </div>
        </swiper-slide>
        <!-- <swiper-slide><img src="../assets/logo.png" alt="" srcset=""></swiper-slide>
        <swiper-slide><img src="../assets/logo.png" alt="" srcset=""></swiper-slide>-->

        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
      <div class="tagline_wrapper">
        <div class="tagline">
          <h1>DESIGN N DECORUS</h1>
          <p>Let your spaces create togetherness</p>
        </div>
        <Button id="git" text="GET IN TOUCH" />
      </div>
    </div>
    <div class="outdoor center-child">
      <div class="wrapper">
        <div class="emptyspace"></div>
        <div class="emptyspace"></div>
        <h1>OUTDOOR FURNITURE</h1>
        <div class="showcase-grid">
          <showcasecard name="COFFEE SET" uri="coffeeset.jpg" />
          <showcasecard name="DINING TABLE" uri="dining.jpg" />
        </div>
        <p>The first in "Design N Decorous" line of design is a brand called “Hoch” which is a one stop solution for all the Outdoor products viz wicker furniture, Umbrella, Gazebo, Tensile, Pergola etc. </p>
       <a href="/hoch/hoch.html">  <div class="view-more-button">VIEW MORE</div> </a>
        <div class="emptyspace"></div>
        <div class="emptyspace"></div>
      </div>
    </div>
    <div class="products">
      <div class="emptyspace"></div>
      <div class="emptyspace"></div>
      <h1>PRODUCTS</h1>
      <div class="emptyspace"></div>
      <div class="emptyspace"></div>
      <div class="center-child">
        <div class="product-grid">
        
        <category name="OUTDOOR FURNITURE" uri="beach11.png" url="/hoch/hoch.html" />
        <category name="BLINDS" uri="curtain.png" url="/blinds/blinds/blinds.html" />
        <category name="UMBRELLA" uri="umbrella1.png" url="/hoch/hoch.html" />
         <category name="AWNINGS" uri="awning3.png" url="/awnings/awnings/awnings.html" />
        <category name="WOODEN FLOORING" uri="wood.png" url="/wooden flooring/woodenflooring/woodenflooring.html" />        
          <category name="ARITIFICAL GRASS" uri="grass.png" />
          <category name="GAZEBO" uri="gazebo1.png" url="/hoch/hoch.html" />
          
         
          
          
        </div>
      </div>
      <div class="emptyspace"></div>
      <div class="emptyspace"></div>
    </div>
    <div class="about-us">
      <div class="emptyspace"></div>
      <div class="emptyspace"></div>
      <div class="center-child">
        <div class="aboutus-grid">
          <div class="center-child">
            <img class="about-us-logo" src="../assets/dd_vertical_logo.png" />
          </div>

          <div class="center-child">
            <p>
              Design and Decorous is the brain child of an Entrepreneur with a vision,
              “Let your spaces create togetherness”.
              Today’s modern lifestyle needs to be complimented with spaces which
              reflect your persona – be it personal or professional.
              We are the Manufacturers of Outdoor Wicker Furniture which includes Dining sets,
              Living sets, Coffee sets, Bar sets and many more along with Allied
              products like Awnings,
              Blinds, Wooden Flooring, Artificial Turf etc.
              Design and Decorous promises stringent quality control,
              bespoke designer pieces, Innovative patterns and designs,
              Utility and Utopian options.
              Whatever you can perceive of, we have it all.
              Give us a chance to redefine and redesign your spaces for an enviable
              ambiance where your friends and family will love to spend their time with you.
            </p>
          </div>
        </div>
      </div>
      <div class="emptyspace"></div>
      <div class="emptyspace"></div>
    </div>

    <div class="banner">
      <div class="emptyspace"></div>
      <h1>HAVE QUESTIONS?</h1>
      <div class="center-child">
        <p>
          Design and Decorous is the brain child of an Entrepreneur with a vision,
          “Let your spaces create togetherness”.
          We are one stop shop for Blinds, Awnings,
          Outdoor Furniture and Wooden Flooring.
          We promises stringent quality control, bespoke designer pieces,
          Innovative patterns and designs, Utility and Utopian options.
          Whatever you can perceive of, we have it all.
          Give us a chance to redefine and redesign your spaces.
        </p>
      </div>
      <div class="emptyspace"></div>
      <div class="emptyspace"></div>
      <div class="center-child">
        <Button text="ENQUIRY" />
      </div>
      <div class="emptyspace"></div>
    </div>
  </div>
</template>
<script >
import { swiper, swiperSlide } from "vue-awesome-swiper";
import showcasecard from "../components/showcase-card.vue";
import Button from "../components/Button.vue";
import category from "../components/category.vue";

export default {
  name: "home",
  components: {
    Button,
    category,
    showcasecard,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        }
      },
       navbarOptions: {
            elementId: 'main-navbar',
            isUsingVueRouter: false,
            mobileBreakpoint: 992,
            brandImagePath: './',
            brandImage: require('@/assets/logo.png'),
            brandImageAltText: 'brand-image',
            showBrandImageInMobilePopup: true,
            ariaLabelMainNav: 'Main Navigation',
            tooltipAnimationType: 'shift-away',
            menuOptionsLeft: [
              {
                type: 'link',
                text: 'About',
                subMenuOptions: [

                  {
                    type: "link",
                    text: "Design N Decorous",
                    subText: "Let your spaces create togetherness",
                    path: "./about",
                  },
                  {
                    type: 'hr',
                  },
                  {
                    type: "link",
                    text: "Hoch Furnitures",
                    subText: "German Outdoor Furniture",
                    path: "/hoch/hoch.html",
                  },
                  {
                    type: 'link',
                    text: 'Location',
                    subText: 'A-31 Rajouri Garden New Delhi - 110027',
                    path: './locations',
                  },
                ]
              },
              {
                type: 'link',
                text: 'Contact',
                subMenuOptions: [
                  {
                    type: 'link',
                    text: 'Customer Service',
                    path: './customer-service'
                  },
                  {
                    type: 'link',
                    text: 'Accounting',
                    path: './accounting',
                  },
                  {
                    type: 'hr',
                  },
                  {
                    type: 'link',
                    text: 'Reception',
                    path: './reception',
                    iconLeft: '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>',
                  },
                ]
              },
              {
                type: 'link',
                text: 'Products',
                path: './products',
                iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
              },
            ],
            menuOptionsRight: [
              {
                type: 'button',
                text: 'ENQUIRY',
                path: './signup',
                class: 'button-red'
              },
              {
                type: 'button',
                text: 'REACH US',
                path: './login',
                iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
              }
            ]
          }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.landing {
  position: relative;
  .tagline_wrapper {
    position: absolute;
    z-index: 15;
    bottom: 40%;
    right: 4rem;
    #git {
      width: fit-content;
      float: right;
    }
  }
  .tagline {
    h1 {
      font-size: 2.4rem;
      margin: 0;
    }
    z-index: 15;
    width: fit-content;
    background: black;
    color: white;
    padding: 1rem 3rem;
    margin-bottom: 1rem;
    p {
      text-align: right;
      margin: 0;
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 700px) {
  .tagline {
    display: none;
  }
  .landing {
    .tagline_wrapper {
      bottom: 40%;
      right: 22%;
    }
  }
}

.landing-slide img {
  width: 100vw;
  // height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
}
.landing-slide {
  max-height: 100vh;
  overflow: hidden;
  max-width: 100vw;
}
.showcase-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}
.outdoor {
  background: #f2f2f2;
  .wrapper {
    width: 90%;
    max-width: 1200px;
  }
  .view-more-button {
    font-weight: 700;
    width: fit-content;
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-size: 18px;
    padding: 1rem 3rem;
    cursor: pointer;
  }
}
.products {
  h1 {
    text-align: center;
  }
}
.product-grid {
  max-width: 900px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
}
.about-us-logo {
  max-width: 80vw;
}
.about-us {
  .aboutus-grid {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
  }
  background: #061e19;
  color: white;
  p {
    padding: 3rem 1rem;
    font-style: italic;
    font-family: 18px;
    max-width: 800px;
    text-align: justify;
  }
}
.banner {
  padding: 2rem;
  background: black;
  color: white;
  h1 {
    text-align: center;
    font-family: "Julius Sans One", sans-serif;
  }
  p {
    text-align: center;
    max-width: 800px;
  }
}



</style>
