<template>
  <table class="text-left">
    <tr>
      <td
        class="bg-black text-wrap px-2 border-zinc-500 border-2"
        v-for="(header, index) in props.headers"
        :key="index"
      >
        {{ header.value }}
      </td>
    </tr>
    <tr v-for="(row, index) in props.rows" :key="index">
      <td
        class="p-2 border-zinc-500 border-2"
        v-for="(header, index_header) in props.headers"
        :key="index_header"
      >
        {{ row[header.label] }}
      </td>
    </tr>
  </table>
</template>

<script setup>
const props = defineProps(['headers', 'rows'])
</script>
