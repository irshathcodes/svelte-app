<script lang="ts">
  import {addTodo, todoStore} from '../store/todoStore'
  let name;
  const handleSubmit = () => {
    addTodo(name);
    name = '';
  };
  
</script>

<form class="flex gap-2 mx-4 my-8" on:submit|preventDefault={handleSubmit}>
<input required class="flex-1 focus:outline-purple-500 border-2 border-slate-300 p-2 rounded-md" type="text" bind:value={name}>
<button class="bg-purple-500 px-6 py-2 text-white rounded-md hover:brightness-110 focus:ring-2 focus:ring-purple-500 ring-offset-2">Add</button>
</form>