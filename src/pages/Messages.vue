<script setup>
    import { ref } from 'vue';
    import Message from '../components/Message.vue'
    let messageOpen = ref(false);
</script>

<template>
    <button class="button is-primary" @click="messageOpen = true" v-if="messageOpen == false">Open message</button>
    <button class="button is-primary" @click="messageOpen = false" v-if="messageOpen == true">Close message</button>
    <Message :open="messageOpen" @close="messageOpen = false">
      <div class="message-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iure. Odio est sapiente accusamus, ex eaque veritatis nobis, reprehenderit at esse excepturi amet architecto aliquid dolorum veniam odit assumenda cumque.
      </div>
    </Message>
</template>