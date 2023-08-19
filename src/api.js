export const getApi = async (item, setItem) => {
    const check = localStorage.getItem(item);

    if (check) {
        setItem(JSON.parse(check));
    } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();

        localStorage.setItem(item, JSON.stringify(data.recipes));
        setItem(data.recipes);
    }
}