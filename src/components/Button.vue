<template>
  <div class="button"> {{text}}
  </div>
</template>
<script >
export default {
  name: 'Button',
  props: {
    text: String,
  },
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
