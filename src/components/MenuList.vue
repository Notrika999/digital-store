<script setup>
import { computed } from "vue"
import { useSidebarStore } from "@/stores/sidebarStore"

const sidebarStore = useSidebarStore()

const isHovered = computed(() => sidebarStore.isHovered)


// آرایه آیتم‌ها
const menuItems = [
  {
    id: 1,
    name: 'لپ تاپ و تبلت',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8.3 3.25h7.4c.899 0 1.648 0 2.243.08c.627.084 1.194.27 1.65.725c.455.456.64 1.023.725 1.65c.08.595.08 1.345.08 2.243v7.284l1.513 1.561l.003.004l.008.007l.007.008l.006.006l.01.01l.01.011l.005.005l.008.009l.009.01l.008.01l.012.015c.372.43.703 1.074.748 1.717v.004l.003.023v.013l.002.014v.115c0 .13 0 .319-.005.4a2.75 2.75 0 0 1-2.57 2.57c-.088.006-.185.006-.311.006H4.137c-.126 0-.223 0-.31-.006a2.75 2.75 0 0 1-2.572-2.57a9 9 0 0 1-.004-.398v-.117l.001-.014v-.012l.003-.024v-.004c.046-.643.377-1.286.749-1.717l.012-.015l.008-.01l.01-.01l.007-.009l.004-.005l.011-.01l.01-.011l.005-.006l.008-.008l.007-.007l.004-.004l1.513-1.561V7.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.344-.08 2.243-.08M4.67 16.286l-1.514 1.563c-.227.253-.394.626-.405.877v.223l.001.13a1.25 1.25 0 0 0 1.17 1.168c.033.003.078.003.239.003h15.678c.16 0 .206 0 .24-.003a1.25 1.25 0 0 0 1.168-1.168l.001-.035l.001-.257v-.06c-.011-.252-.178-.625-.406-.878l-1.514-1.563zm14.227-1.5V8c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066H8.353c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.238.327-.3.788c-.065.483-.066 1.131-.066 2.095v6.786zM2.331 18.024l-.031-.012l.009.005zm6.419.476a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/> <path fill="currentColor" d="M12.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/></svg>`
  },
  {
    id: 2,
    name: 'کامپیوتر و تجهیزات اداری',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><path d="M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0z"/><path stroke-linecap="round" d="M12 7v4"/></g></svg>`
  },
  {
    id: 3,
    name: 'سخت افزار و تجهیزات شبکه',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="none" d="M352 128H160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32m0 216a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"/><rect width="192" height="192" x="160" y="160" fill="#000" rx="8" ry="8"/><path fill="#000" d="M464 192a16 16 0 0 0 0-32h-16v-32a64.07 64.07 0 0 0-64-64h-32V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-32a64.07 64.07 0 0 0-64 64v32H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v32a64.07 64.07 0 0 0 64 64h32v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h32a64.07 64.07 0 0 0 64-64v-32h16a16 16 0 0 0 0-32h-16v-48h16a16 16 0 0 0 0-32h-16v-48Zm-80 160a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32Z"/></svg>`
  },
  {
    id: 4,
    name: 'گوشی هوشمند',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 25h2M11 3h10a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"/></svg>`
  },
  {
    id: 5,
    name: 'تجهیزات گیمینگ',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path fill="#000" d="M13.1 11.5c-.6.3-1.4.1-1.8-.5l-1.1-1.4H4.8L3.7 11c-.5.7-1.4.8-2.1.3c-.5-.4-.7-1-.6-1.5l.7-3.7C1.9 4.9 3 4 4.2 4H7V2.5C7 1.7 7.6 1 8.4 1h3.1c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5.2-.5.4V4h2.8c1.2 0 2.3.9 2.5 2.1l.7 3.7c.1.7-.2 1.4-.9 1.7M6 6.5C6 5.7 5.3 5 4.5 5S3 5.7 3 6.5S3.7 8 4.5 8S6 7.3 6 6.5m6 0c0-.3-.2-.5-.5-.5H11v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V6h-.5c-.3 0-.5.2-.5.5s.2.5.5.5h.5v.5c0 .3.2.5.5.5s.5-.2.5-.5V7h.5c.3 0 .5-.2.5-.5"/></svg>`
  },
  {
    id: 6,
    name: 'تصویر و فیلم برداری',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2 19V9a2 2 0 0 1 2-2h.5a2 2 0 0 0 1.6-.8l2.22-2.96A.6.6 0 0 1 8.8 3h6.4a.6.6 0 0 1 .48.24L17.9 6.2a2 2 0 0 0 1.6.8h.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"/><path d="M12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/></g></svg>`
  },
]
</script>

<template>
  <ul>
    <li v-for="item in menuItems" :key="item.id" class="pb-6">
      <a href="#" class="flex items-center gap-x-1 relative text-[#333333] hover:text-sky-700" :class="{ 'justify-start': isHovered, 'justify-center': !isHovered }">
        <span v-html="item.icon"></span>
        <span :class="['transition-all duration-1000 ease-in-out text-sm text-nowrap font-bold absolute -right-10', { 'inline-block right-8' : isHovered, 'hidden' : !isHovered}]">{{ item.name }}</span>
      </a>
    </li>
  </ul>
</template>
