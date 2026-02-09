<script setup lang="ts">
import VisibilityOnIcon from '../assets/icons/visibility_on.svg'
import ToggleSwitch from '../components/ToggleSwitch.vue'
</script>
<template>
  <div class="container">
    <div class="login-container">
      <h1>Nice to see you again</h1>
      <div class="login-form">
        <input class="input-field" type="text" placeholder="Username" />
        <div class="password-container">
          <input class="input-field" type="password" placeholder="Password" />
          <span id="togglePassword" class="eye-icon">
            <VisibilityOnIcon />
          </span>
        </div>
        <div class="remember-me-container">
          <ToggleSwitch />
          <label>Remember me</label>
        </div>
      </div>
      <button>Sign In</button>
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

input {
  font-family: roboto, sans-serif;
  font-size: 15px;
  line-height: 20px;
}

input::placeholder {
  font-family: roboto, sans-serif;
  font-size: 15px;
  color: var(--black500);
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  border-bottom: 0.5px solid var(--black100);
  padding-bottom: 1.5rem;
}

.input-field {
  width: 100%;
  box-sizing: border-box;
  background-color: var(--black50);
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: var(--radius-medium);
  border: none;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.75rem;
  padding: 0;
}

.container {
  height: 100dvh;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.password-container {
  width: 100%;
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--black700);
}

#togglePassword {
  width: 1rem;
  height: 1rem;
}

.remember-me-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 12px;
  font-family: 'SF Pro Display', sans-serif;
}

button {
  color: white;
  background-color: var(--system-blue);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-medium);
  border: none;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.01875em;
}

button:hover {
  background-color: var(--system-blue-hover);
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
