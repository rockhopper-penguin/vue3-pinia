import type { createStickyNoteTypes } from '@/models/stickyNoteModels'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const stickyNoteStore = defineStore('stickyNote', () => {
  // 付箋モーダル表示ステータス
  const stickyNoteModal = ref<boolean>(false)
  // 付箋登録内容
  const stickyNote = reactive<createStickyNoteTypes>({
    title: null,
    content: null
  })

  return { stickyNoteModal, stickyNote }
})
