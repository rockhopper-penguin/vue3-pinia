<template>
  <div class="modal_base">
    <div class="modal_content">
      <!-- 入力部 -->
      <div class="modal_input">
        <!-- タイトル -->
        <div class="modal_input_row">
          <div class="modal_input_label">タイトル</div>
          <div class="modal_input_input">
            <input type="text" v-model="stickyNote.stickyNote.title" />
          </div>
        </div>
        <!-- 内容 -->
        <div class="modal_input_row">
          <div class="modal_input_label">内容</div>
          <div class="modal_input_input">
            <textarea v-model="stickyNote.stickyNote.content"></textarea>
          </div>
        </div>
      </div>
      <!-- ボタン -->
      <div class="modal_buttons">
        <!-- キャンセル -->
        <ButtonComponent :button-text="'キャンセル'" class="modal_cancel" @click="modalCancel()" />
        <!-- 保存 -->
        <ButtonComponent :button-text="'保存'" class="modal_save" @click="save()" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal_content,
.modal_input,
.modal_input_row,
.modal_input_label,
.modal_input_input,
.modal_input_input input,
.modal_input_input textarea,
.modal_buttons {
  background-color: #c9c9c9;
}
.modal_base {
  z-index: 999;
  background-color: rgba(100, 100, 100, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal_content {
  width: 60%;
  height: 60%;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
}
/* 入力部 */
.modal_input {
  width: 100%;
  height: auto;
  overflow: scroll;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px 10px 0px 0px;
}
.modal_input_row {
  display: flex;
  color: #2a2a2a;
  width: 90%;
  margin: 10px auto;
}
/* 入力部 ラベル領域 */
.modal_input_label {
  width: 30%;
  font-size: 22px;
}
/* 入力部 入力領域 */
.modal_input_input {
  width: 70%;
}
.modal_input_input input,
.modal_input_input textarea {
  outline: none;
  font-size: 20px;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  border: solid 1px #2a2a2a;
}
/* input */
.modal_input_input input {
  width: 100%;
  height: 35px;
}
/* textarea */
.modal_input_input textarea {
  resize: none;
  width: 100%;
  height: 40vh;
  padding-top: 5px;
  padding-bottom: 5px;
}
.modal_buttons {
  width: 100%;
  height: 70px;
  border-radius: 0px 0px 10px 10px;
  border-top: solid 1px #2a2a2a;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: end;
}
/* ボタン同士の感覚を開ける */
.modal_buttons div {
  margin-right: 10px;
  margin-left: 10px;
}
/* キャンセルボタン */
.modal_cancel {
  border: solid 1px #cc5555;
  background-color: #c9c9c9;
  color: #cc5555;
}
/* 保存ボタン */
.modal_save {
  border: solid 1px #2a2a2a;
  background-color: #c9c9c9;
  color: #2a2a2a;
}
</style>

<script setup lang="ts">
import { stickyNoteStore } from '@/stores/stickyNoteStore'
import ButtonComponent from './ButtonComponent.vue'

// sticky note store
const stickyNote = stickyNoteStore()

/**
 * キャンセルボタンの処理
 */
const modalCancel = (): void => {
  // storeの登録内容をクリア
  stickyNote.stickyNoteCancel()
}

/**
 * 保存ボタンの処理
 */
const save = (): void => {
  // 付箋の登録
  stickyNote.addStickyNote()
}
</script>
