<script>
    export let name;
    export let label;
    export let placeholder = '';
    export let required = '';
    export let value;
</script>
<label
for={name}
class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
>{label}</label
>
<input
type="text"
id={name}
name={name}
bind:value={value}
class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
placeholder={placeholder}
{required}
/>