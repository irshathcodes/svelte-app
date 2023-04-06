<script lang="ts">
  import {fade} from 'svelte/transition'
  import AddTodo from './lib/AddTodo.svelte';
  import Todos from './lib/Todos.svelte';

</script>

<main>

  <div class="m-4 sm:w-96 mx-auto">
  <h1 class="text-center text-2xl text-slate-800 font-bold">My Todos</h1>
  <AddTodo />
  <Todos />
  </div> 
  </main>
