<template>
  <teleport to="#modals">
    <div class="fixed inset-0 flex flex-col justify-center items-center">
      <div class="bg-white p-2 w-64 min-h-20">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>
