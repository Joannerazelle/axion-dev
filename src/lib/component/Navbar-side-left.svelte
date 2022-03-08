<script>
  import { currentActive } from "./stores";

  let curActiveMenu;
  currentActive.subscribe((curActive) => {
    curActiveMenu = curActive;
  });
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
  </style>
</svelte:head>

<div class="is-flex is-flex-wrap-wrap">
  <!-- dashboard -->
  <div
    class="container is-flex is-align-items-center py-4 px-4 is-clickable navbarsideleftitem {curActiveMenu ==
    'Dashboard'
      ? 'has-background-grey'
      : ''}"
    on:click={() => {
      currentActive.set("Dashboard");
    }}
  >
    <img src="Dashboard.png" alt="Dashboard icon" />
    <p class="has-text-black ml-2 is-size-5-desktop has-text-weight-bold">
      Dashboard
    </p>
  </div>

  <!-- assigned to me -->
  <div
    class="container is-flex is-align-items-center py-4 px-4 is-clickable navbarsideleftitem {curActiveMenu ==
    'Assigned to me'
      ? 'has-background-grey'
      : ''}"
    on:click={() => {
      currentActive.set("Assigned to me");
    }}
  >
    <img src="Assigned to me.png" alt="Assigned icon" />
    <p class="has-text-black ml-2 is-size-5-desktop has-text-weight-bold">
      Assigned to me
    </p>
  </div>

  <!-- favorites -->
  <div
    class="container is-flex is-align-items-center py-4 px-4 is-clickable navbarsideleftitem {curActiveMenu ==
    'Favorites'
      ? 'has-background-grey'
      : ''}"
    on:click={() => {
      currentActive.set("Favorites");
    }}
  >
    <img src="Favorites.png" alt="Assigned icon" />
    <p class="has-text-black ml-2 is-size-5-desktop has-text-weight-bold">
      Favorites
    </p>
  </div>

  <!-- calendar -->
  <div
    class="container is-flex is-align-items-center py-4 px-4 is-clickable navbarsideleftitem {curActiveMenu ==
    'Calendar'
      ? 'has-background-grey'
      : ''}"
    on:click={() => {
      currentActive.set("Calendar");
    }}
  >
    <img src="Calendar.png" alt="Assigned icon" />
    <p class="has-text-black ml-2 is-size-5-desktop has-text-weight-bold">
      Calendar
    </p>
  </div>
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
