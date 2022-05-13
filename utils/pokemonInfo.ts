import { pokeApi } from "../api";
import { GetPokemon } from "../interfaces/getPokemon";




export const pokemonInfo = async (id:string) => {

    try {
    
        const {data} = await pokeApi.get<GetPokemon>(`/pokemon/${id}`); //obtener Pokemons

        return data

    } catch {

        return null

    }

};