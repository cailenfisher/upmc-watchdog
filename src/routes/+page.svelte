<script>
  import Counter from "../lib/components/Counter/Counter.svelte";
import Survey from "../lib/components/Survey/Survey.svelte";
  import Thankyou from "../lib/components/Survey/Thankyou.svelte";
  
  export let form;
  export let data;

  let {counter} = data;
  let showSuccess = false;

  if (form?.success) {
    showSuccess = true;
  }
</script>

<svelte:head>
  <title>Western Maryland Emergency Room Complaints</title>
  <meta
    name="description"
    content="Western Maryland Emergency Room Complaints"
  />
</svelte:head>

<section>
  {#if showSuccess}
    <Thankyou />
  {:else}
    <Survey />
  {/if}
</section>
<section>
	<Counter {counter} />
</section>
