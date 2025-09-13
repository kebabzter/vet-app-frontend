<script>
  let { text, color } = $props()
  let part1 = text.slice(0, 2) 
  let part2 = text.slice(2, text.length)
</script>

<div>
  <h1 class="text-5xl flex">
    <p class="py-2">{part1}</p>
    <p class="{color} rounded-md py-2">{part2}</p>
  </h1>
</div>
