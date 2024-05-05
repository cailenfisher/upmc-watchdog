<script>
  import Survey from "../lib/components/Survey/Survey.svelte";
  export let form;

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
    Thank you!
  {:else}
    <Survey />
  {/if}
</section>
