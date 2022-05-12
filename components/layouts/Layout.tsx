import Head from 'next/head'
import { ReactElement } from 'react'
import { NavBar } from '../ui/NavBar';


interface Prop {
    children: ReactElement | ReactElement[];
    title?:string;
}

    const origin = (typeof window === 'undefined' ? '' : window.origin)

export const Layout = ({children, title}:Prop) => {


    return (

        <>
            <Head>
                <title>{ title || 'Pokem App' }</title>
                <meta name='author' content='Juan Cruz Pereyra' />
                <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
                <meta name='Keywords' content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={` Informacion sobre ${title} `} />
                <meta property="og:description" content={` Esta en la pagina ${title} `} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <NavBar />

            <main style={{
                padding: '0px, 20px'
            }}>

                {children}

            </main>
        </>

    )
};
