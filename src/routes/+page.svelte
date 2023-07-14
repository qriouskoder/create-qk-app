<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>Todos</h1>
<ul>
  {#each data.todosData as d}
    <li>{d}</li>
  {/each}
</ul>

<form method="POST" class="todoForm">
  <div class="formGroup">
    <label for="todoTitle">Todo Title</label>
    <input type="text" name="todoTitle" id="todoTitle" class="todoTitle" />
  </div>
  <div class="formGroup">
    <label for="todoDesc">Todo Description</label>
    <textarea name="todoDesc" id="todoDesc" class="todoDesc" cols="30" rows="10" />
  </div>
  <div class="formGroup">
    <label for="todoDate">Todo Due Date</label>
    <input type="date" name="todoDate" id="todoDate" />
  </div>
  <button class="todoButton" type="submit">Add Todo</button>
</form>

<style>
  .todoForm {
    display: flex;
    flex-direction: column;
    max-width: 200px;
  }
  input,
  textarea,
  button {
    width: 100%;
  }

  .formGroup,
  button {
    margin-top: 1rem;
  }
</style>
