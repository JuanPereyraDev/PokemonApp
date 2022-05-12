import {  Button, Spacer, useTheme } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import img from '../../public/img/pokemonlogo.svg'


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
                marginBottom:'20px',
                width:'100%'
            }}
        >
            <Image 
                style={{cursor:'pointer'}}
                src={img}
                alt='Icono de la app'
                width={150}
                height={70}
                onClick={()=>{router.push('/')}}
            />
                
            

            <Spacer css={{flex:1}}/>
            
            <Button onClick={ ()=>router.push('/favorites') } color={"warning"} ghost css={{marginRight:'10px'}} >
                Favoritos
            </Button>

        </nav>

    )

}
