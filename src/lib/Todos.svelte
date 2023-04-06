<script lang="ts">
  import {scale} from 'svelte/transition'
  import {todoStore, toggleComplete, deleteTodo} from '../store/todoStore';
</script>


<div class="max-h-[400px] overflow-y-auto">
<ul class="mx-4 space-y-4">
{#each $todoStore as todo  (todo.id) }
	<li class="bg-slate-200 group rounded-md" transition:scale>
    <button on:click={() => toggleComplete(todo.id)} class="flex w-full p-4">
    <div class={`mr-2 transition-opacity duration-300 ${todo.completed ? 'opacity-100': 'opacity-0'}`}>
      ✅
    </div>
    <p class={`flex-1 text-left ${todo.completed ? 'line-through' : ''}`}>
    {todo.name}
    </p>
    <button on:click|stopPropagation={() => deleteTodo(todo.id)} class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      ❌
    </button>
  </button>
  </li>
{/each}
</ul>
</div>