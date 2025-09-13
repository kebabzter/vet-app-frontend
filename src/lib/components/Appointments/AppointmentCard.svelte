<script>
let { sidebar, pet }= $props();
let selected = false;
let color = $state('bg-amber-200');

function colorSwitch(){
  selected = !selected;
  if(selected){
    color = 'bg-red-200'
  }else {
    color = 'bg-amber-200'
  }
  sidebar(pet.name);
}
</script>

<button class="cursor-pointer basis-1/4 hover:-translate-y-0.5 transition" onclick={colorSwitch}>
  <div class="{color} rounded-md overflow-clip">
    <ul class="flex gap-2"> 
      <li class="px-3 py-4 flex-1 bg-gray-600/20">10:30</li>
      <li class="px-3 py-4 flex-2">{pet.name}</li>
      <li class="px-3 py-4 flex-1"><i class="fa-solid fa-dog"></i></li>
    </ul>
  </div>
</button>
