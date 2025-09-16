<script lang="ts">
    import ClientsList from "$lib/components/Clients/ClientsList.svelte";
    import Heading from "$lib/components/Heading.svelte";

</script>

<section>
  <div class="flex-5 ml-20 mt-20 py-20 flex flex-col">
    <Heading text={'Clients'} color={'bg-green-300'}/>
    <ClientsList />
  </div>
</section>
