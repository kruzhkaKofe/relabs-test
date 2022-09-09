<template>
  <div class="events">
    <h2 class="events__heading">События</h2>
    <el-table class="events__list" :data="events" height="350" empty-text="Событий нет">
      <el-table-column prop="ctime" label="Дата" />
      <el-table-column prop="event" label="Событие" />
    </el-table>
  </div>
</template>

<script setup>
const props = defineProps({
  events: {
    type: Array,
    default: [],
  },
});

</script>

<style lang="sass" scoped>
.events
  &__heading
    font-size: 3rem
    margin-bottom: 2rem

:deep(.el-table__cell)
  height: 5rem
</style>
