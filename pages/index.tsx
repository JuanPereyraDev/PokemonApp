import type { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts';
import {pokeApi} from '../api';
import { PokemonApiResponse, Pokemons } from '../interfaces/interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon/PokemonCard';


interface Props {
  pokemons: Pokemons[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {


  return (
    
      <Layout title={'Listado de Pokemons'}>

        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map( (pokemon) =>(
              <PokemonCard  key={pokemon.id} pokemon={pokemon}/>
            ) )
          }
        </Grid.Container>

      </Layout>

  )
  
};




export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data:{results}} = await pokeApi.get<PokemonApiResponse>('/pokemon/?limit=151'); //obtener Pokemons
  

  const pokemons: Pokemons[] = results.map( (pokemon, i) => ({
    ...pokemon,
    id:i + 1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }) );//Agregamos mas propiedades a dichos Pokemons(id, img)


  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
