<script>
  let {children } = $props();
</script>

<!-- Fix to navigation being affected by margin top inside clients/+page -->
<h1 class="text-white">a</h1>
{@render children?.()}
