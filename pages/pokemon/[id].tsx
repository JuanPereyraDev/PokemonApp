import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticProps , GetStaticPaths, NextPage } from 'next'
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { GetPokemon, Id, Species, Sprites } from '../../interfaces/getPokemon';
import { localFavorite } from '../../utils';
import {  useState } from 'react';
import confetti from 'canvas-confetti';
import { redirect } from 'next/dist/server/api-utils';

interface Prop {
    pokemon: Species & Sprites & Id
};


export const PokemonPage:NextPage<Prop> = ({pokemon}) => {

    const [inFav, setInFav] = useState( localFavorite.existPokemonInFav(pokemon.id) );


    const onToggleFavorites = () => {

        localFavorite.toggleFavorite(pokemon.id);

        setInFav(!inFav);

        if(inFav)return;

        confetti({
            zIndex:999,
            particleCount:100,
            spread:160,
            angle:-100,
            origin:{
                x:1,
                y:0
            }
        })

    };


    return (

        <Layout title={pokemon.name} >

            <Grid.Container css={{marginTop:'5px'}} gap={2}>
                
                <Grid xs={12} sm={4}>

                    <Card hoverable css={{padding:'30px'}}>
                        <Card.Body>
                            <Card.Image 
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`|| 'no-image'}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            >
                                
                            </Card.Image>
                        </Card.Body>
                    </Card>

                </Grid>

                <Grid xs={12} sm={8} >

                    <Card>
                        <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                            <Text h1 transform='capitalize'> {pokemon.name} </Text>
                            <Button onClick={onToggleFavorites} color={inFav ?'error' :'gradient'} >
                                {
                                    inFav ? 'No me gusta' : 'Me gusta'
                                }
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>
                                Sprites:
                            </Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}/>

                                <Image 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}/> 

                                <Image 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}/>

                                <Image 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}/>

                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>

        </Layout>

    )
    
};


export const getStaticPaths: GetStaticPaths = async ({}) => {

    const pokemonPage = [...Array(151)].map( (value, i)=> `${i + 1}` ) ;
    
    return {

        paths: pokemonPage.map( id => ({

            params:{id}

        }) ),

        //fallback: false

        fallback: 'blocking'

    }
}



export const getStaticProps: GetStaticProps = async ({params}) => {

    const {id} = params as {id:string};

    const {data} = await pokeApi.get<GetPokemon>(`/pokemon/${id}`); //obtener Pokemons
    
    if(!data.name){
        return {
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }

    return {
        props: {
            pokemon:data
        },
        revalidate: 86400
    }
}

export default PokemonPage;