import { Grid, Card } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCardPokemon } from './FavoriteCardPokemon';



interface Prop{
    pokemonList: number[]
}

export const FavoriteList:FC<Prop> = ({pokemonList}) => {

    return (

        <Grid.Container gap={2} direction='row' justify="flex-start">
            {
                pokemonList.map( pokeId => (
                    <FavoriteCardPokemon pokeId={pokeId} key={pokeId} />
                ) )
            }
        </Grid.Container>

    )
}
