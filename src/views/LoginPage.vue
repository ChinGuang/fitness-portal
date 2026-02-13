<script setup lang="ts">
import TextField from '../components/form/TextField.vue'
import PasswordField from '../components/form/PasswordField.vue'
import Button from '../components/form/ButtonComponent.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Router, { RoutePath } from '../router'

const username = ref<string>('')
const password = ref<string>('')

const AuthStore = useAuthStore()

function updateUsername(value: string) {
  console.log('Updating username:', value)
  username.value = value
}

function updatePassword(value: string) {
  password.value = value
}

async function handleSignIn() {
  const loginResult = await AuthStore.login({
    username: username.value,
    password: password.value,
  })
  console.log(loginResult)
  if (loginResult.success) {
    await Router.push(RoutePath.Members)
  } else {
    alert(loginResult.error ?? 'Unexpected error')
  }
}
</script>
<template>
  <div class="container">
    <div class="login-container">
      <h1>Nice to see you again</h1>
      <div class="login-form">
        <TextField
          :value="username"
          @update:value="updateUsername"
          type="text"
          placeholder="Username"
        />
        <PasswordField :value="password" @update:value="updatePassword" />
        <!-- <div class="remember-me-container">
          <ToggleSwitch />
          <label>Remember me</label>
        </div> -->
      </div>
      <Button @click="handleSignIn" label="Sign In" />
    </div>
    <div class="logo-container">
      <image
        src="https://picsum.photos/200"
        alt="Fitness Logo"
        width="48"
        height="48"
        style="object-fit: cover"
      />
      <span>Fitness Portal</span>
    </div>
    <footer>
      <span>© Fitness Portal 2026</span>
    </footer>
  </div>
</template>
<style scoped>
h1 {
  font-size: 20px;
  font-family: Poppins, sans-serif;
  font-weight: 600;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  border-bottom: 0.5px solid var(--black100);
  padding-bottom: 1.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding: 0;
  align-self: stretch;
}

.remember-me-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 12px;
  font-family: 'SF Pro Display', sans-serif;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;
  gap: 0.5rem;
  font-family: roboto, sans-serif;
  font-size: 15px;
  line-height: 20px;
}

footer {
  width: 100%;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: roboto, sans-serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.025em;
  color: grey;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
