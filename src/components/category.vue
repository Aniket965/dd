<template>
  <div class="category">
  <a :href="url">
    <div class="center-child">
      <img :src="require(`@/assets/${uri}`)" alt="">
      </div>
      <div class="name">{{name}}</div>
      </a>
  </div>
</template>
<script >
export default {
  name: 'category',
  props: {
    name: String,
    uri: String,
    url: String,
  },
};
</script>


<style scoped lang="scss">
.category {
  // background: pink;
  cursor: pointer;
  width: fit-content;
  font-weight: 400;
  text-align: center;
  img {
    width: 100px;
  }
}

.name::after {
    background: #061E19;
    content: "";
    display: block;
    height: 3px;
    width: inherit;
    border-radius: 10px;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
}
.category:hover  .name:after{ transform: scaleX(1); }
.name::after{  transform-origin:  0% 50%; }
</style>
