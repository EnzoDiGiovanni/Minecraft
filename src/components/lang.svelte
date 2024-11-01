<script>
  import { setLanguage } from "../lib/lang.js"; // Import de setLanguage
</script>

<div class="lang">
  <button class="lang-btn" on:click={() => setLanguage("fr")}>FR</button>
  <button class="lang-btn" on:click={() => setLanguage("en")}>EN</button>
  <button class="lang-btn" on:click={() => setLanguage("jp")}>JP</button>
</div>

<style lang="scss">
  .lang {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .lang-btn {
    padding: 10px 15px;
    font-size: 0.9em;
    font-weight: bold;
    color: #4a90e2;
    background-color: #fff;
    border: 2px solid #4a90e2;
    border-radius: 8px;
    cursor: pointer;
    transition:
      background-color 0.3s,
      color 0.3s,
      transform 0.2s;

    &:hover {
      background-color: #4a90e2;
      color: #fff;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
    }
  }
</style>
