<script>
    export let data;
</script>


<h1 class = "text-2xl">{data.recipes.title}</h1>
<img src = {data.recipes.image} alt = {data.recipes.title}/>

<div>
  <h2>Ingredients</h2>
  {#each data.recipes.extendedIngredients as ingredients}
    <p>{ingredients.name}</p>
  {/each}
</div>

<div>
  <h2>Cuisines</h2>
  {#each data.recipes.cuisines as cuisines}
    <p>{cuisines}</p>
  {/each}
</div>

 
<!-- <div class="flex">
  <div class="flex-grow">
    <div class="flex flex-wrap">
      <div class="p-2 flex-1 ">
        <div class="bg-grey-dark shadow-md rounded w-full h-full overflow-hidden" style={{ minHeight: "500px" }}>
          <h2 class="py-6 px-5 text-left text-white">
            Routlike table Component
          </h2>
          {#each data.recipes.extendedIngredients as ingredients}
            <p>{ingredients.name}</p>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div> -->