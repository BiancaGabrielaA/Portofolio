<template>
  <div class="flex flex-col md:flex-row items-center justify-center min-h-screen text-center px-4 w-full gap-20">
    <!-- Left Section -->
    <div>
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Let's talk about your next project</h2>
      <p class="text-lg text-gray-300 max-w-md mb-6">
        Whether you have a question, idea, or just want to say hi — I’d love to hear from you.
      </p>
    </div>

    <!-- iPhone Mockup -->
    <div class="iphone-mockup-container relative rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div class="w-[148px] h-[18px] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem]" style="background-color: var(--primary-grey);"></div>
      <div class="h-[46px] w-[3px] absolute -start-[17px] top-[124px] rounded-s-lg" style="background-color: var(--primary-grey);"></div>
      <div class="h-[46px] w-[3px] absolute -start-[17px] top-[178px] rounded-s-lg" style="background-color: var(--primary-grey);"></div>
      <div class="h-[64px] w-[3px] absolute -end-[17px] top-[142px] rounded-e-lg" style="background-color: var(--primary-grey);"></div>

      <div class="iphone-mockup-display rounded-[2rem] overflow-hidden w-[272px] h-[572px] p-4 flex flex-col justify-between">
        <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
          <h3 class="text-black text-center text-xl font-bold mb-6 tracking-wide">Get in touch</h3>
          
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" v-model="form.name" name="name" required class="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md" placeholder="Your name" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" v-model="form.email" name="email" required class="w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md" placeholder="you@example.com" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea v-model="form.message" name="message" rows="4" required class="w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md resize-none" placeholder="Your message"></textarea>
          </div>

          <button type="submit" class="w-full mt-4 py-2 bg-fuchsia-500 text-white font-medium rounded-md hover:bg-fuchsia-600 transition">
            Send Message
          </button>

          <p v-if="success" class="text-green-600 mt-2 text-sm">Your message has been sent!</p>
          <p v-if="error" class="text-red-600 mt-2 text-sm">There was an error. Try again.</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const FORM_ACTION = import.meta.env.VITE_FORM_ACTION;

const form = ref({
  name: '',
  email: '',
  message: '',
});

const success = ref(false);
const error = ref(false);

async function handleSubmit() {
  success.value = false;
  error.value = false;

  const formData = new FormData();
  formData.append('name', form.value.name);
  formData.append('email', form.value.email);
  formData.append('message', form.value.message);
  formData.append('_captcha', 'false');
  formData.append('_template', 'box');

  try {
    const response = await fetch(FORM_ACTION, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
      success.value = true;
    } else {
      throw new Error('Form submission failed');
    }
  } catch (err) {
    error.value = true;
  }
}
</script>

<style scoped>
.iphone-mockup-container {
  background-color: var(--primary-grey);
  border: 14px solid var(--primary-grey);
  border-radius: 2.5rem;
  position: relative;
}

.iphone-mockup-display {
  background-color: var(--primary-white);
}

</style>
