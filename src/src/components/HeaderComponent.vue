<template>
  <div class="header_area">
    <div class="header_content">
      <div class="header_title">Sticky Note</div>
      <ButtonComponent :button-text="'新規作成'" @click="openStickyNoteModal()" />
    </div>
  </div>
</template>

<style scoped>
.header_area {
  width: 100%;
  height: 70px;
  border-bottom: solid 1px #c9c9c9;
}
.header_content {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_title {
  color: #c9c9c9;
  font-size: 20px;
  line-height: 70px;
  font-weight: 600;
}
</style>

<script setup lang="ts">
import { stickyNoteStore } from '@/stores/stickyNoteStore'
import ButtonComponent from './ButtonComponent.vue'

// sticky note store
const stickyNote = stickyNoteStore()

/**
 * 付箋追加モーダルを開く
 */
const openStickyNoteModal = (): void => {
  stickyNote.stickyNoteModal = true
}
</script>
