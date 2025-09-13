<script lang="ts">
  import NavLink from "./NavLink.svelte";
</script>

<div class="absolute left-1/2 -translate-x-1/2">
  <nav class="mt-6">
    <div class="flex justify-center text-center items-center">
      <ul class="flex justify-center gap-8 shadow-md border border-gray-300 rounded-full px-8">
        <NavLink route={'/'} text="Home" icon="fa-solid fa-home"/>
        <NavLink route={'/clients/dogs'} text="Clients" icon="fa-solid fa-users" />
      </ul>
    </div>
  </nav>
</div>

