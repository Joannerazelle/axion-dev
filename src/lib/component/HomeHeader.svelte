<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
  </style>
</svelte:head>

<nav class="navbar has-background-primary px-4 py-0">
  <p class="navbar-brand navbar-item is-size-1-desktop has-text-white">AXION</p>
  <div class="navbar-menu ">
    <div class="navbar-end">
      <p class="has-text-white is-size-5-desktop navbar-item">
        <a href="/" class="has-text-white">Home</a>
      </p>
      <p class="has-text-white is-size-5-desktop navbar-item">
        <a href="/" class="has-text-white">About</a>
      </p>
      <p class="has-text-white is-size-5-desktop navbar-item">
        <a href="/" class="has-text-white">Contact</a>
      </p>
      <div class="navbar-item">
        <button class="button is-size-5-desktop">Sign Up</button>
      </div>
    </div>
  </div>
</nav>

<style>
  .navbar-brand {
    font-family: "Fredoka One", cursive;
  }

  .navbar-end > p {
    font-family: "DM Sans", sans-serif;
  }

  .button {
    font-family: "DM Sans", sans-serif;
    font-weight: bold;
    border-radius: 12px;
  }
</style>
