<script>
  export let pokemon; // Recevoir les données de chaque Pokémon comme prop
  import { currentLanguage } from "../lib/lang.js"; // Importer le store de langue

  let sprite;
  let isShiny = false;

  function shiny() {
    isShiny = !isShiny;
    if (isShiny) {
      sprite.src = pokemon.sprites.shiny;
    } else {
      sprite.src = pokemon.sprites.regular;
    }
  }
</script>

<div class="pokemon-card">
  <div class="card-header">
    <h2>
      {#if $currentLanguage === "fr"}
        {pokemon.name.fr}
      {:else if $currentLanguage === "en"}
        {pokemon.name.en}
      {:else}
        {pokemon.name.jp}
      {/if}
    </h2>

    <br />
    <span class="category">{pokemon.category}</span>
  </div>
  <img
    bind:this={sprite}
    class="sprite"
    src={pokemon.sprites.regular}
    alt={pokemon.name.fr}
  />
  <button class="shiny-btn" on:click={shiny}>✨</button>

  <!-- Types -->
  {#if pokemon.types}
    <div class="types">
      {#each pokemon.types as type}
        <span class="type">
          <img src={type.image} alt={type.name} />
          {type.name}
        </span>
      {/each}
    </div>
  {/if}

  <!-- Statistiques de base -->
  {#if pokemon.stats}
    <div class="stats">
      <h3>Statistiques</h3>
      <ul>
        <li><strong>HP</strong>: {pokemon.stats.hp}</li>
        <li><strong>Attaque</strong>: {pokemon.stats.atk}</li>
        <li><strong>Défense</strong>: {pokemon.stats.def}</li>
        <li><strong>Attaque Spéciale</strong>: {pokemon.stats.spe_atk}</li>
        <li><strong>Défense Spéciale</strong>: {pokemon.stats.spe_def}</li>
        <li><strong>Vitesse</strong>: {pokemon.stats.vit}</li>
      </ul>
    </div>
  {/if}

  <!-- Évolutions suivantes -->
  {#if pokemon.evolution && pokemon.evolution.next}
    <div class="evolutions">
      <h3>Évolutions</h3>
      <ul>
        {#each pokemon.evolution.next as evolution}
          <li>{evolution.name} - {evolution.condition}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
  .pokemon-card {
    background-color: #ffffff;
    border: 2px solid #cccccc;
    border-radius: 15px;
    width: 320px;
    margin: 20px;
    padding: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    font-family: "Arial", sans-serif;
    color: #444;
    position: relative;
    text-align: center;

    .card-header {
      background-color: #4a90e2;
      padding: 8px;
      border-radius: 10px;
      font-size: 1.2em;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 12px;
    }

    .sprite {
      max-width: 120px;
      height: auto;
      margin-bottom: 10px;
    }

    .category {
      font-size: 0.9em;
      color: white;
      display: block;
      margin-top: -5px;
      font-weight: normal;
    }

    .shiny-btn {
      position: absolute;
      right: 30px;
      margin-top: 10px;
      padding: 8px 15px;
      font-size: 1em;
      font-weight: bold;
      color: #f1c40f;
      background-color: #34495e;
      border: 2px solid #f1c40f;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

      &:hover {
        background-color: #f1c40f;
        color: #34495e;
        box-shadow:
          0 0 8px rgba(241, 196, 15, 0.8),
          0 0 12px rgba(241, 196, 15, 0.6);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .types {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin: 12px 0;

      .type {
        display: flex;
        align-items: center;
        background-color: #f0f0f0;
        border-radius: 5px;
        padding: 4px 8px;
        font-size: 0.9em;
        color: #333;

        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }

    .stats {
      background-color: #f7faff;
      border: 1px solid #d1e3f8;
      border-radius: 10px;
      padding: 10px;
      margin-top: 10px;
      text-align: left;

      h3 {
        color: #4a90e2;
        font-size: 1em;
        margin: 0 0 8px 0;
      }

      ul {
        list-style-type: none;
        padding: 0;

        li {
          font-size: 0.85em;
          line-height: 1.5em;
        }
      }
    }

    .evolutions {
      margin-top: 12px;
      text-align: left;

      h3 {
        color: #4a90e2;
        font-size: 1em;
        margin-bottom: 8px;
      }

      ul {
        list-style-type: none;
        padding: 0;
        font-size: 0.85em;
      }
    }
  }
</style>
