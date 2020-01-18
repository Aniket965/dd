<template>
    <div>
        <div class="outdoor center-child">
            <div class="wrapper">
            <div class="emptyspace"></div>
            <div class="emptyspace"></div>
            <h1>OUTDOOR FURNITURE</h1>
            <div class="showcase-grid">
                <showcasecard name="COFFEE SET" uri="coffeeset.jpg"/>
                <showcasecard name="DINING TABLE" uri="dining.jpg"/>
            </div>
            <p>
             Besides these we also sell bar,launger  …. etc sdflsdfjlasdf d sdfsddsfsdafdf
            </p>
            <div class="view-more-button">
                VIEW MORE
            </div>
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
                <category name="BLINDS" uri="blinds.png" />
                <category name="ARITIFICAL GRASS"  uri="grass.png"/>
                <category name="GAZEBO"  uri="gazebo.png"/>
                <category name="BLINDS" uri="blinds.png" />
                <category name="GAZEBO"  uri="gazebo.png"/>
                <category name="ARITIFICAL GRASS"  uri="grass.png"/>
                <category name="BLINDS" uri="blinds.png" />
                <category name="ARITIFICAL GRASS"  uri="grass.png"/>
                <category name="GAZEBO"  uri="gazebo.png"/>
                <category name="BLINDS" uri="blinds.png" />
                <category name="GAZEBO"  uri="gazebo.png"/>
                <category name="BLINDS" uri="blinds.png" />
                <category name="ARITIFICAL GRASS"  uri="grass.png"/>
                <category name="GAZEBO"  uri="gazebo.png"/>
                <category name="GAZEBO"  uri="gazebo.png"/>
            </div>
            </div>
            <div class="emptyspace"></div>
            <div class="emptyspace"></div>
        </div>
    <div class="about-us">
        <div class="emptyspace"></div>
        <div class="emptyspace"></div>
        <div class="center-child" >
        <div class="aboutus-grid">
        <div class="center-child">
            <img class="about-us-logo" src="../assets/dd_vertical_logo.png" />
        </div>

    <div class="center-child">
        <p >
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
 <p>Design and Decorous is the brain child of an Entrepreneur with a vision,
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
          <Button text="ENQUIRY"  />
      </div>
      <div class="emptyspace"></div>
  </div>
</div>
</template>
<script >
import showcasecard from '../components/showcase-card.vue';
import Button from '../components/Button.vue';
import category from '../components/category.vue';

export default {
  name: 'home',
  components: {
    Button,
    category,
    showcasecard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.showcase-grid {
    display: grid;
    gap:1rem;
    grid-template-columns:  repeat(auto-fill, minmax(500px, 1fr));
}
.outdoor {
    background: #F2F2F2;
    .wrapper  {
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
    grid-template-columns:  repeat(auto-fill, minmax(100px, 1fr));
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
    background: #061E19;
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
        font-family: 'Julius Sans One', sans-serif;
    }
    p {
        text-align: center;
        max-width: 800px;
    }
}
</style>
