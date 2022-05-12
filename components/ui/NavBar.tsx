import {  Button, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from 'next/link';
import { useRouter } from "next/router";



export const NavBar = () => {

    const {theme} = useTheme();
    const router = useRouter()

    return (

        <nav
            style={{
                backgroundColor: theme?.colors.gray900.value,
                padding:'0px, 20px',
                display:'flex',
                flexDirection:'row',
                alignItems:"center",
                justifyContent: "start",
                width:'100%'
            }}
        >
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
                alt='Icono de la app'
                width={70}
                height={70}
            />

            <NextLink href='/' >
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okemon</Text>
                </Link> 
            </NextLink>
                    
                
            

            <Spacer css={{flex:1}}/>
            
            <Button onClick={ ()=>router.push('/favorites') } color={"warning"} ghost css={{marginRight:'10px'}} >
                Favoritos
            </Button>

        </nav>

    )

}
