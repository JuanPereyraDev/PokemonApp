



const toggleFavorite = (id:number) => {

    let favoriteList : number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    if( favoriteList.includes(id) ){

        favoriteList = favoriteList.filter( pokeId=> pokeId !== id );

    }else{

        favoriteList.push(id);

    };

    localStorage.setItem('favorites', JSON.stringify(favoriteList));


};

const existPokemonInFav = (id:number): boolean => {

    if( typeof window === "undefined" ) return false;

    const favoriteList : number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    return favoriteList.includes(id);

};


const pokemonList = () : number[] => {
    
    return JSON.parse(localStorage.getItem('favorites') || '[]');

}



export default {
    toggleFavorite,
    existPokemonInFav,
    pokemonList
}