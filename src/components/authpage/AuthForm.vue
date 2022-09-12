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
          {
            validator: checkPass,
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input 
          v-model.trim="ruleForm.pass" 
          type="password" 
          autocomplete="off"
          :show-password="true"
        />
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

const checkPass = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("Введите пароль"));
  }
  if (value.length < 8) {
    return callback(new Error("Минимум 8 символов"));
  }
  if (/(?=.*[A-ZА-Я])/g.test(value)) {
    callback();
  } else {
    callback(new Error("Минимум 1 большая буква"))
  }
};

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
