<script>
  import { onMount } from "svelte";
  import "../assets/styles/global.min.css";
  import Header from "../components/header.svelte";
  import Lang from "../components/lang.svelte";
  import PokemonCard from "../components/pokemon-card.svelte";
  import { apiData } from "../lib/api.js";

  onMount(async () => {
    fetch("https://tyradex.tech/api/v1/pokemon")
      .then((response) => response.json())
      .then((data) => {
        apiData.set(data);
      })
      .catch((error) => {
        console.log("Erreur lors du chargement des données :", error);
      });
  });
</script>

<Header />

<!-- Interface pour changer la langue -->
<Lang />

<!-- Affichage de la liste des cartes Pokémon -->
<main>
  <h1>Liste des Pokémon</h1>
  <div class="pokemon-list">
    {#each $apiData as pokemon}
      <PokemonCard {pokemon} />
    {/each}
  </div>
</main>

<style>
  h1 {
    text-align: center;
    padding: 20px;
  }

  .pokemon-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
</style>
