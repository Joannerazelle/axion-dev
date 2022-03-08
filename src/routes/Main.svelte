<script>
  import Header from "../lib/component/Header.svelte";
  import NavbarSideLeft from "../lib/component/Navbar-side-left.svelte";

  import { note, currentActive } from "../lib/component/stores";

  let footernote;
  note.subscribe((note) => {
    footernote = note;
  });

  let curActive;
  currentActive.subscribe((active) => (curActive = active));
</script>

<div class="columns is-gapless is-multiline">
  <div class="column is-12-desktop">
    <Header />
  </div>
  <div class="column is-2-desktop">
    <NavbarSideLeft />
  </div>
  <div class="column">
    {curActive}
  </div>
</div>
<footer class="footer has-background-primary is-paddingless py-2 px-4">
  <p class="is-size-6 has-text-white">{footernote}</p>
</footer>
