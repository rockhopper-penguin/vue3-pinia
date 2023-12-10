<template>
  <div class="button-element">
    {{ props.buttonText }}
  </div>
</template>

<style scoped>
.button-element {
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: solid 1px #c9c9c9;
  color: #c9c9c9;
  text-align: center;
  line-height: 40px;
  user-select: none;
  cursor: pointer;
}
</style>

<script setup lang="ts">
// 親からボタンに表示する文字列を受け取る
const props: { buttonText: string } = defineProps<{ buttonText: string }>()
</script>
