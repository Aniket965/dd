<template>
  <div class="footer" id="contactus">
    <div class="footer-links-grid">
      <div>
          <img class="logo-full" src='../assets/dd_vertical_logo.png' >
      </div>
      <div>
        <h2>Address</h2>
        <ul>
          <li>
             <a href="https://goo.gl/maps/5B9XpQYjh9MynwqD6" >A-31</a>
          </li>
          <li>
            <a href="https://goo.gl/maps/5B9XpQYjh9MynwqD6" >Rajouri Garden</a>
          </li>
          <li>
             <a href="https://goo.gl/maps/5B9XpQYjh9MynwqD6" >New Delhi - 110 027</a> 
          </li>
        </ul>
      </div>
      <div>
        <h2>Phone</h2>
        <ul>
          <li><a href="https://wa.me/message/DEZNNSKMCGTTL1">Whatsapp Us</a></li>
          <li><a href="tel:+91966712855">+91 - 9667162855</a></li>
          <li><a href="tel:+91966712866">+91 - 9667162866</a></li>
          
        </ul>
      </div>
      <div>
        <h2>Social</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/designndecorous/" >  <font-awesome-icon :icon="['fab', 'facebook']" class="social-icon"/> Design N Decorous</a>
          </li>
          <li>
            <a href="https://www.instagram.com/designdecorous/">
            <font-awesome-icon :icon="['fab', 'instagram']" class="social-icon"/> DesignDecorous</a>
          </li>
          <li>
            <a href="mailto:info@designndecorous.com">
              <font-awesome-icon :icon="['fab', 'google']" class="social-icon"/> info@designndecorous.com</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-copyright">© DESIGN N DECOROUS 2020</div>
  </div>
</template>
<script >
export default {
  name: 'Footer',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-links-grid {
  padding: 2rem;
  background: #ffffff;
  color: rgb(0, 0, 0);
  display: grid;
  grid-template-columns: repeat(4,1fr);
  div {
    text-align: left;
    h2 {
      margin: 0;
      padding: 0;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .logo-full {
      height: 100px;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        font-size: 1rem;
        a,
        a:visited {
          text-decoration: none;
          color: rgb(0, 0, 0);
        }
      }
    }
  }
}
.footer-copyright {
  margin: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: #d1d1d11a;
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 1rem;
  text-align: right;
}
.social-icon {
  padding-right: 4px;
}
  @media screen and (max-width: 1100px) {
    .footer-links-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
   @media screen and (max-width: 700px) {
    .footer-links-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
