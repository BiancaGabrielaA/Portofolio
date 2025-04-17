<template>
  <div class="flex flex-col md:flex-row items-center justify-center min-h-screen text-center px-4 w-full gap-20">
    
    <!-- Left Section: Text -->
     <div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let's talk about your next project
        </h2>
        <p class="text-lg text-gray-300 max-w-md mb-6">
          Whether you have a question, idea, or just want to say hi — I’d love to hear from you. I’m always open to new collaborations or freelance opportunities.
        </p>
     </div>
   

    <!-- Right Section: iPhone Mockup -->
    <div class="iphone-mockup-container relative rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <!-- Top Notch -->
      <div class="w-[148px] h-[18px] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem]" style="background-color: var(--primary-grey);"></div>
      
      <!-- Side Buttons -->
      <div class="h-[46px] w-[3px] absolute -start-[17px] top-[124px] rounded-s-lg" style="background-color: var(--primary-grey);"></div>
      <div class="h-[46px] w-[3px] absolute -start-[17px] top-[178px] rounded-s-lg" style="background-color: var(--primary-grey);"></div>
      <div class="h-[64px] w-[3px] absolute -end-[17px] top-[142px] rounded-e-lg" style="background-color: var(--primary-grey);"></div>

      <!-- Screen Area -->
      <div class="iphone-mockup-display rounded-[2rem] overflow-hidden w-[272px] h-[572px] p-4 flex flex-col justify-between">
        <div class="mt-5">

          <form class="flex flex-col gap-3">
            <h3 class="text-black text-center text-xl font-bold mb-6 tracking-wide">Get in touch</h3>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@example.com" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your message"></textarea>
            </div>
          </form>
        </div>

        <button class="w-full mt-4 py-2 bg-fuchsia-500 text-white font-medium rounded-md hover:bg-fuchsia-600 transition">
          Send Message
        </button>
      </div>
    </div>
    
  </div>
</template>

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
