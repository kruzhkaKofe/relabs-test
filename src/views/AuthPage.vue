<template>
  <el-row>
    <el-col :span="12" :offset="6" :xs="{ span: 24, offset: 0 }">
      <auth-form :loading="loading" @serverRequest="serverRequest" />
    </el-col>
  </el-row>
</template>

<script setup>
import AuthForm from "@/components/authpage/AuthForm.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const loading = ref(false);

const serverRequest = () => {
  loading.value = true;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      toggleIndicator;
      resolve();
    }, 2000);
  });
  promise.then(redirectPage);
};

const redirectPage = () => {
  router.push("/");
};

const toggleIndicator = () => {
  loading.value = false;
};
</script>
