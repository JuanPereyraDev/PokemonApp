import { Grid, Card } from "@nextui-org/react"
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react"



interface Prop {
    pokeId: number
}

export const FavoriteCardPokemon:FC<Prop> = ({pokeId}) => {

    const router = useRouter();

    const onClick = () => {
        router.push( `/pokemon/${pokeId}` );
    };
    
    return (

        <Grid xs={6} sm={3} md={2} xl={1} key={pokeId} >

                <Card onClick={onClick} hoverable clickable css={{padding:"10"}}>
                    <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
                        width={'100%'}
                        height={140}
                    />
                </Card>

        </Grid>

    )

};
