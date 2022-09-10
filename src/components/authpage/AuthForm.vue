<template>
  <div class="auth__content">
    <el-form
      @click.prevent
      v-loading="loading"
      class="auth__form"
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      label-width="150px"
      label-position="top"
    >
      <el-form-item
        label="Электронная почта"
        prop="email"
        :rules="[
          {
            required: true,
            message: 'Введите адрес',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Введите корректный адрес',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="ruleForm.email" type="email" autocomplete="off" />
      </el-form-item>

      <el-form-item
        label="Пароль"
        prop="pass"
        :rules="[
          {
            required: true,
            message: 'Введите пароль',
            trigger: 'blur',
          },
        ]"
      >
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Войти</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Сбросить</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["serverRequest"]);

const ruleFormRef = ref();

const ruleForm = ref({
  email: "",
  pass: "",
});

const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      emit("serverRequest");
    } else {
      return false;
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="sass" scoped>
.auth
  &__content
    min-width: 32rem
    background: lightgray
    border-radius: $default
  &__form
    padding: 1rem
</style>
