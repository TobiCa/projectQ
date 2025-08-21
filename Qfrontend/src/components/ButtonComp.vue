<template>
  <button class="custom-button" @click="handleClick" :disabled="disabled">
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  buttonText: string
  functionName: string
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
})

const emit = defineEmits(['clickEvent'])

const handleClick = () => {
  emit('clickEvent', props.functionName)
}
</script>

<style scoped>
.custom-button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background-color: #42b883;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.custom-button:hover {
  background-color: #3aa876;
}

.custom-button:active {
  transform: translateY(0);
}

.custom-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
}
</style>
