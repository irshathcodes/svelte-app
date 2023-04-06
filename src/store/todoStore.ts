import { writable } from 'svelte/store';

let generateId = 0;

export interface TodoStore {
	id: number;
	name: string;
	completed: boolean;
}

export const todoStore = writable<TodoStore[]>([]);

export const deleteTodo = (id: number) => {
	todoStore.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const addTodo = (name: string) => {
	todoStore.update((store) => [
		...store,
		{ id: generateId++, name, completed: false },
	]);
};

export const toggleComplete = (id: number) => {
	todoStore.update((todos) => {
		return todos.map((todo) => {
			if (todo.id === id) return { ...todo, completed: !todo.completed };
			return todo;
		});
	});
};
