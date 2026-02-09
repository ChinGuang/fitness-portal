<template>
  <label class="switch">
    <input type="checkbox" />
    <span class="slider round"></span>
  </label>
</template>
<style scoped>
.switch {
  --switch-height: 20px;
  --switch-width: 40px;
  --padding: 2px;
  --slider-size: calc(var(--switch-height) - (var(--padding) * 2) - 1px);
  --move-x: calc((var(--switch-width) - (var(--padding) * 2) - var(--slider-size)));
  --slider-bg-color: var(--black50);
  --slider-border-color-before: var(--black100);
  --slider-border-color-after: #1a78c2;
  position: relative;
  display: inline-block;
  width: var(--switch-width);
  height: var(--switch-height);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slider-bg-color);
  border: 0.5px solid var(--slider-border-color-before);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: var(--slider-size);
  width: var(--slider-size);
  left: var(--padding);
  bottom: var(--padding);
  background-color: white;
  box-shadow: 1px 1px -1px rgba(51, 51, 51, 0.3);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
  border: 0.5px solid var(--slider-border-color-after);
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(var(--move-x));
  -ms-transform: translateX(var(--move-x));
  transform: translateX(var(--move-x));
}

/* Rounded sliders */
.slider.round {
  border-radius: var(--switch-height);
}

.slider.round:before {
  border-radius: 50%;
}
</style>
