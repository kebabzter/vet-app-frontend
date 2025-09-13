<script>
  import AppointmentCard from './AppointmentCard.svelte'
  let { sidebar } = $props();
</script>

<section class="flex flex-wrap gap-4 my-10">
  {#each { length : 8}, rank}  
    <AppointmentCard sidebar={sidebar}/>
  {/each}
</section>
