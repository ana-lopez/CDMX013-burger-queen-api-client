import Header from '../components/Header'
import Botones from '../components/Botones'
import Menu from '../components/Menu'
import Comanda from '../components/Comanda'
import { useEffect, useState } from 'react'
import { getProducts } from '../services/api'

function Inicio (){
    
    return(
        <>
            <Header />
            <Botones />
            <Menu />
            <Comanda  />
        </>
    );
}

export default Inicio;