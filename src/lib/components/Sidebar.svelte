<script>
  import { fly } from "svelte/transition";
  let { turnedOn, petName } = $props();
</script>
{#if turnedOn}
  <div class="h-screen shadow-lg bg-gray-100 border border-gray-300 rounded-2xl" transition:fly={{x:300, duration:300}}>
    <div class="flex justify-center items-center flex-col my-40">
      <h1 class="flex-1 text-xl font-extrabold">{petName}</h1>  
      <div class="mt-5 flex-4 py-40 w-3/4 h-1/2 rounded-lg shadow-lg bg-white">
          <span></span>
      </div>
    </div>
  </div>
{/if}
