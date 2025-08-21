<template>
  <div id="the-chat">
    <div id="messages-container"></div>
    <div
      v-for="message in messages"
      :key="message.id"
      :class="['message', message.sender === 'user' ? 'message-user' : 'message-bot']"
    >
      <div class="message-content">
        {{ message.text }}
      </div>
      <div class="message-timestamp">
        {{ formatTimestamp(message.timestamp) }}
      </div>
    </div>
    <div id="input-container">
      <textarea
        id="chat-input-field"
        rows="3"
        ref="textareaRef"
        v-model="newMessage"
        placeholder="Type your message here..."
        @input="autoGrow"
        @keyup.enter="sendMessage"
      ></textarea>
      <button id="send-button" @click="sendMessage" :disabled="false">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Message } from '@/types/Message'
import { v4 as uuidv4 } from 'uuid'
import backendApi from '@/api/backendApi'

const newMessage = ref('')
const textareaRef = ref<HTMLTextAreaElement>()
const messages = ref<Message[]>([])

const sendMessage = async () => {
  if (!newMessage.value.trim()) return

  // Add user message
  const userMessage: Message = {
    id: uuidv4(),
    text: newMessage.value,
    sender: 'user',
    timestamp: new Date(),
  }
  messages.value.push(userMessage)

  try {
    // Send to backend
    const response = await backendApi.sendMessage(userMessage)

    // Add bot response
    const botMessage: Message = {
      id: uuidv4(),
      text: response.data.message,
      sender: 'bot',
      timestamp: new Date(),
    }
    messages.value.push(botMessage)
  } catch (error) {
    console.error('Failed to send message:', error)
  }

  newMessage.value = ''
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
  }
}

const formatTimestamp = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

const autoGrow = () => {
  if (!textareaRef.value) return
  textareaRef.value.style.height = 'auto'
  textareaRef.value.style.height = Math.min(textareaRef.value.scrollHeight, 250) + 'px'
}
</script>

<style scoped></style>
