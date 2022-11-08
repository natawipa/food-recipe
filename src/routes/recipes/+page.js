/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const url = ("https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&apiKey=b3d0fb807dfe4e3aac3b45bc90e0a592");
    const res = await fetch(url);
    const {results} = await res.json()

    if (res.ok) {
        return {
            recipes : results 
        }; 
    } else {
        return {
            status : 404,
            error : 'Can not fetch recipes' 
        };
    }
}