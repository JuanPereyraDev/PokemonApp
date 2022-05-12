import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts"
import { NoFavorite } from '../../components/ui/NoFavorite';
import { localFavorite } from "../../utils";
import { FavoriteList } from '../../components/ui/FavoriteList';





export const FavoritesPage = () => {

    const [favList, setFavList] = useState<number[]>( [] );

    useEffect( () => {

        setFavList( localFavorite.pokemonList() );

    }, [] );
    

    return (

        <Layout title="Favorites Pokemons">

            {
                favList.length===0
                ?
                (<NoFavorite/>)
                :
                ( <FavoriteList pokemonList={favList}/> )

            }

        </Layout>


    )

}

export default FavoritesPage;