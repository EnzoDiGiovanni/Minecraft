<!-- src/routes/__layout.svelte -->
<script>
  import "../assets/styles/global.min.css";
  import Header from "../components/header.svelte";
</script>

<Header />

<main>
  <slot />
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
