<template>
  <div class="table">
    <h2 class="table__heading">Список пользователей</h2>
    <div class="table__content">
      <el-table
        class="table__list"
        v-loading="loading"
        :data="users"
        empty-text="Пользователей нет"
      >
        <el-table-column prop="id" label="ID" width="75" />
        <el-table-column prop="name" label="Имя" :align="'center'" />
        <el-table-column prop="role" label="Роль" :align="'center'" />
        <el-table-column prop="ctime" label="Дата создания" width="150" />
        <el-table-column label="Действия" width="100">
          <template #default="scope">
            <el-button type="danger" @click="deleteUser(scope.row)"
              >Удалить</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="table__pagination"
        background
        :page-count="totalPages"
        layout="prev, pager, next"
        @update:current-page="updatePage"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  users: {
    type: Array,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  totalPages: {
    type: Number,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["deleteUser", "update:currentPage"]);

const updatePage = (page) => {
  emit("update:currentPage", page);
};

const deleteUser = (user) => {
  emit("deleteUser", user);
};
</script>

<style lang="sass" scoped>
.table
  &__heading
    font-size: 3rem
    margin-bottom: 2rem
  &__content
    display: flex
    flex-direction: column
    align-items: center
  &__list
    font-size: 1.5rem
    margin-bottom: 2rem

:deep(.el-table__cell)
  height: 5rem
</style>
