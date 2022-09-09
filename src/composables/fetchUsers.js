import { ref } from "vue";

export const fetchUsers = (getUsers) => {
  const loading = ref(false);
  const error = ref(false);
  const users = ref([]);

  const loadUsers = async () => {
    error.value = false;
    loading.value = true;
    try {
      users.value = await getUsers();
    } catch (e) {
      console.log(e);
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  return { users, loading, error, loadUsers };
};
