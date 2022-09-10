<template>
  <el-row class="home">
    <el-col :span="24" :lg="11">
      <users-table
        class="user-table"
        :users="users"
        @deleteUser="deleteUser"
        :loading="loading"
        :totalPages="totalPages"
        v-model:currentPage="currentPage"
      />
    </el-col>
    <el-col :span="24" :lg="{ span: 11, offset: 2 }">
      <events-list :events="events" />
    </el-col>
  </el-row>
</template>

<script setup>
import UsersTable from "@/components/homepage/UsersTable.vue";
import EventsList from "@/components/homepage/EventsList.vue";
import { ref, onMounted, watch, onUnmounted } from "vue";
import { fetchUsers } from "../composables/index";
import axios from "axios";

const SOCKET = new WebSocket("wss://test.relabs.ru/event");

const limit = ref(5);

let offset = ref(0);

let totalPages = ref(0);

let currentPage = ref(1);

const events = ref([]);

const { users, loading, error, loadUsers } = fetchUsers(async () => {
  const res = await axios.get("https://test.relabs.ru/api/users/list", {
    params: {
      limit: limit.value,
      offset: offset.value,
    },
  });
  totalPages.value = Math.ceil(res.data.total / limit.value);
  formatTime(res.data.items);
  return res.data.items;
});

const formatTime = (users) => {
  users.forEach((user) => {
    user.ctime = user.ctime * 1000
    user.ctime = new Date(user.ctime).toLocaleString([], {
      dateStyle: "short",
      timeStyle: "short",
    });
    user.ctime = user.ctime.replace(/,+/g, "");
  });
};

const deleteUser = (user) => {
  users.value = users.value.filter((item) => item.id != user.id);
};

const loadEvents = (event) => {
  events.value.push(JSON.parse(event.data));
};

watch(currentPage, () => {
  offset.value = limit.value * (currentPage.value - 1);
  loadUsers();
});

onMounted(() => {
  loadUsers();
  SOCKET.addEventListener("message", loadEvents);
});

onUnmounted(() => {
  SOCKET.removeEventListener("message", loadEvents);
});
</script>

<style lang="sass" scoped>
.user-table
  @media (max-width: $bp-1200)
    &
      margin-bottom: 3rem
</style>
