<template>
  <div class="showcase">
      <img :src="require(`@/assets/${uri}`)" alt="" >
      <h1>{{name}}</h1>
  </div>
</template>
<script >
export default {
  name: 'showcasecard',
  props: {
    name: String,
    uri: String,
  },
};
</script>


<style scoped lang="scss">
.showcase:hover img {
  transform: scale(1.2);
}
.showcase {

    position: relative;
    width: fit-content;
    overflow: hidden;
    max-height: 300px;
    max-width: 500px;
    img {
        max-width: 500px;
        width: 90vw;
        max-height: 300px;
        height: auto;
        overflow: hidden;
        flex-shrink: 0;
        transition: -webkit-transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
            -webkit-transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        will-change: transform;
    }
    h1 {
        position: absolute;
        color: white;
        z-index: 2;
        bottom: 0px;
        font-weight: 700;
        right: 36px;
    }
}
</style>
