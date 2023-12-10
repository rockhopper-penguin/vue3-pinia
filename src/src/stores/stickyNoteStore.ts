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

  /** 表示用の付箋登録内容 */
  const stickyNoteDatas = reactive<createStickyNoteTypes[]>([])

  /**
   * 付箋登録内容のリセット
   */
  const stickyNoteCancel = (): void => {
    stickyNote.title = null
    stickyNote.content = null

    // モーダルを閉じる
    stickyNoteModal.value = false
  }

  /**
   * 付箋の追加
   */
  const addStickyNote = (): void => {
    // 付箋登録内容を配列にpush
    stickyNoteDatas.push({
      title: stickyNote.title,
      content: stickyNote.content
    })

    // 付箋登録内容のリセット
    stickyNoteCancel()
  }

  return {
    stickyNoteModal,
    stickyNote,
    stickyNoteDatas,
    stickyNoteCancel,
    addStickyNote
  }
})
