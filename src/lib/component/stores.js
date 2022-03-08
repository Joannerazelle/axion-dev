import { writable } from "svelte/store";

export const note = writable(
  "Dashboard is where you can see your subjects. You can create here to group your tasks on which subject they belong."
);

export const currentActive = writable("Dashboard");
