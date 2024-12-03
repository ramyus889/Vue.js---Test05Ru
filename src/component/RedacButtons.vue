<script setup>
import { useContentManager } from './composible.js';

const { isEditable, textContent, imageUrl, toggleEditMode, editImage, saveToLocalStorage } =
  useContentManager();

const copyHtmlContent = () => {
  const htmlContent = document.querySelector('.content-container').innerHTML;
  navigator.clipboard
    .writeText(htmlContent)
    .then(() => {
      alert('HTML content copied to clipboard!');
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
    });
};
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="sticky top-0 py-5 bg-[#181818]">
      <div class="flex items-center gap-5">
        <button @click="toggleEditMode" :class="{ 'border-b pb-1': isEditable }">
          <img src="/Group 3.png" class="w-[42px] h-[38px]" alt="" />
        </button>
        <button @click="editImage">
          <img src="/Group 4.png" class="w-[42px] h-[38px]" alt="Edit Image" />
        </button>
        <button @click="copyHtmlContent" class="text-[#639EFF]">Скопировать HTML</button>
      </div>
    </div>

    <div class="flex flex-col gap-10 content-container">
      <img :src="imageUrl" alt="" class="max-w-[621px] w-full rounded-xl" />
      <div
        v-for="(text, index) in textContent"
        :key="index"
        class="max-w-[621px] w-full"
        :contenteditable="isEditable"
        @input="saveToLocalStorage"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>
