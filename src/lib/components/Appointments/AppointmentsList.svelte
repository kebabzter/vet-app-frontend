<script>
  import AppointmentCard from './AppointmentCard.svelte'
  let { sidebar } = $props();
  let pets = $state([
    {
      name: 'John',
    },
    {
      name: 'Mark',
    },
    {
      name: 'Limmerd',
    },
    {
      name: 'Porky',
    },
    {
      name: 'Kris',
    },
    {
      name: 'Rocky',
    },
    {
      name: 'Freddy',
    },
    {
      name: 'Alvin',
    },
    {
      name: 'Racob',
    },
  ]);
</script>

<section class="flex flex-wrap gap-4 my-10">
  {#each pets as pet}  
    <AppointmentCard sidebar={sidebar} pet={pet}/>
  {/each}
</section>
