<script>
  import { currenActive } from "./stores";

  let curActiveMenu;
  currenActive.subscribe((curActive) => {
    curActiveMenu = curActive;
  });

  export let name;
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
  </style>
</svelte:head>

<div
  class="is-flex is-align-items-center py-2 px-4 is-clickable navbarsideleftitem {curActiveMenu ===
  { name }
    ? 'has-background-grey'
    : ''}"
  on:click={currenActive.set({ name })}
>
  <img src="{name}.png" alt="{name} icon" />
  <p class="has-text-black ml-2 is-size-5-desktop has-text-weight-bold">
    {name}
  </p>
</div>

<style>
  img {
    max-width: 35px;
  }

  p {
    font-family: "Quicksand", sans-serif;
  }

  .navbarsideleftitem:hover {
    background-color: hsl(208, 18%, 81%);
  }
</style>
