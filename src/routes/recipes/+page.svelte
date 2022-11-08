<script>
  export let data;
</script>
  
<h1 class = "text-3xl">Recipes</h1>
<div class = "grid grid-cols-3 gap-6">
  {#each data.recipes as item}
      <a data-sveltekit-reload href = "/recipes/{item.id}">
        <div class = "image">
          <div class = "image-img"><img src = {item.image} alt = {item.title}/></div>
              <div class = "image-overlay">
                <div class = "box"> </div>
                <p class = "image-title Gill-Sans text-lg">{item.title}</p>
              </div>
        </div>
      </a>
  {/each}
</div>

<!-- <h1 class = "text-4xl">Recipes</h1>
<div class = "grid grid-cols-3 gap-6">
  {#each data.recipes as item}
      <a data-sveltekit-reload href = "/recipes/{item.id}">
        <div class = "underlayer">
          <div class = "box"></div>
          <p class = "image-title Gill-Sans text-lg">{item.title}</p>
          <div class = "ivisible hover:invisible"><img src = {item.image} alt = {item.title}/></div>
        </div>
  {/each}
</div> -->