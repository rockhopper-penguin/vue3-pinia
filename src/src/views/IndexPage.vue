<template>
  <div class="main-area">
    <!-- ヘッダー -->
    <HeaderComponent />
    <!-- 付箋登録モーダル -->
    <StickyNoteModal v-if="stickyNote.stickyNoteModal" />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { stickyNoteStore } from '@/stores/stickyNoteStore'
import HeaderComponent from '../components/HeaderComponent.vue'
import StickyNoteModal from '../components/StickyNoteModal.vue'

// sticky note store
const stickyNote = stickyNoteStore()
</script>
