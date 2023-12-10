<template>
  <div class="main-area">
    <!-- ヘッダー -->
    <HeaderComponent />
    <div class="sticky_note_area">
      <!-- 付箋 -->
      <div
        v-for="(stickyNoteData, index) in stickyNote.stickyNoteDatas"
        :key="index"
        class="sticky_note_contents"
      >
        <div class="sticky_note">
          <!-- タイトル -->
          <div class="sticky_note_title">{{ stickyNoteData.title }}</div>
          <!-- 内容 -->
          <div class="sticky_note_content">{{ stickyNoteData.content }}</div>
        </div>
      </div>
    </div>
    <!-- 付箋登録モーダル -->
    <StickyNoteModal v-if="stickyNote.stickyNoteModal" />
  </div>
</template>

<style scoped>
.sticky_note_area {
  width: 90%;
  margin: auto;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
}
.sticky_note_contents {
  margin-top: 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
  margin: 10px;
  width: 30%;
  background: #fff9b1;
}
.sticky_note {
  width: auto;
  height: 30vh;
  background: #fff9b1;
  padding: 10px;
  box-sizing: border-box;
}
.sticky_note_title,
.sticky_note_content {
  background: #fff9b1;
}
.sticky_note_title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.sticky_note_content {
  font-size: 18px;
  font-weight: 500;
}
</style>

<script setup lang="ts">
import { stickyNoteStore } from '@/stores/stickyNoteStore'
import HeaderComponent from '../components/HeaderComponent.vue'
import StickyNoteModal from '../components/StickyNoteModal.vue'

// sticky note store
const stickyNote = stickyNoteStore()
</script>
