<template>
  <div class="min-h-screen p-2 bg-green-200">
    <h2 class="text-xl text-green-700 font-bold">Website</h2>
    <div class="flex gap-2">
      <wwElement element-id="el-1"></wwElement>
      <wwElement element-id="el-2"></wwElement>
      <wwElement element-id="el-3"></wwElement>
    </div>
  </div>
</template>

<script>
import wwElement from './wwElement'

export default {
  name: 'AppWebsite',
  components: { wwElement },
}
</script>
