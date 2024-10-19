<template>
  <v-text-field
    class="send-message-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event)"
    placeholder="Type a message..."
    hide-details
    @keyup.enter="sendMessage"
    outlined
  >
    <template #append-inner>
      <v-icon color="primary" @click="sendMessage">mdi-send</v-icon>
    </template>
  </v-text-field>
</template>

<script lang="ts">
export default {
  name: 'HuddleTextInput',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  methods: {
    sendMessage() {
      if (this.modelValue.trim()) {
        this.$emit('send-message', this.modelValue)
        this.$emit('update:modelValue', '')
      }
    }
  }
}
</script>

<style scoped>
.send-message-input {
  border-radius: 24px !important;
  padding-left: 16px !important;
}

.send-message-input .v-input__control {
  border-radius: 24px !important;
}

.send-message-input .v-input__control .v-field__field input {
  padding-left: 20px !important;
}

.send-message-input .v-input__append-inner {
  margin-right: 12px !important;
}

.send-message-input .v-input__icon {
  color: #4c5cf1;
}
</style>
