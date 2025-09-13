<script>
  import { fly } from "svelte/transition";
  let { turnedOn } = $props();
</script>
{#if turnedOn}
  <div class="h-screen shadow-lg bg-gray-100 border border-gray-300 rounded-2xl" transition:fly={{x:300, duration:300}}>

  </div>
{/if}
