<script>
  import AppointmentsList from "$lib/components/Appointments/AppointmentsList.svelte";
  import ClientsList from "$lib/components/Clients/ClientsList.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  let isOn = $state(false);
  function sidebar() {
    isOn = !isOn;
  }
</script>

<section class="flex">
  <div class="flex-5 ml-20 py-20 mt-20 flex flex-col">
    <Heading text="Appointments" color="bg-blue-300" />
    <AppointmentsList {sidebar} />
    <Heading text="Clients" color="bg-green-300" />
    <ClientsList />
  </div>
  <div class="flex-2">
    <Sidebar turnedOn={isOn} />
  </div>
</section>
