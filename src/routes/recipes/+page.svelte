<script>
	import Select from 'svelte-select';
	const items = ['italian', 'american', 'thai'];
	

  export let data;


  const handleSelect = async (event) =>{
    const url = (`https://api.spoonacular.com/recipes/complexSearch?cuisine=${event.detail.value}&number=12&apiKey=b3d0fb807dfe4e3aac3b45bc90e0a592`);
    const res = await fetch(url);
    const {results} = await res.json()

    if (res.ok) {
      data = {
            recipes : results 
        }; 
        console.log(data)
    } else {
      data = {
            recipes : [] 
        };
    }
  }
</script>
  
<h1 class = "text-3xl">Recipes</h1>
<Select {items}  on:select={handleSelect}></Select>
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