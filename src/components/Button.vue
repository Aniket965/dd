<template>
  <div class="button" v-on:click="openLink()" > {{text}}
  </div>
</template>
<script >
export default {
  name: 'Button',
  props: {
    text: String,
    uri:String
  },
  methods: {
    openLink() {
          window.open(this.$props.uri, "_blank");    
    },
  }
};
</script>


<style scoped lang="scss">
    div {
        font-weight: 700;
        background: white;
        color: #B89A51;
        font-size: 18px;
        padding: 1rem 3rem;
        cursor: pointer;
    }
</style>
