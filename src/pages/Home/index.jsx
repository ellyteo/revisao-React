import { useEffect, useState } from 'react'
import './style.css'
import { data } from 'react-router-dom'
import { getCharacters } from '../../api/rickAndMorty'
import Card from '../../components/Card'

function Home() {
    // LOADING  - existe quando requisita algo para algo externo
    const [carregando, setCarregando] = useState(true)
    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
       async function carregar() {
            const dados = await getCharacters()
            setPersonagens(dados)
            setCarregando(false)
        }

        // variavel = [ ] espaço da memória
        // array    = [   |   |   ] uma variavel com vários espaços dividido da memória
        //              0 | 1 | 2

        carregar()
    }, [])

    if (carregando) {
        return (
            <> CARREGANDO ... </>
        )
    }

    return (
        <div className='home page'>
            <h3 className='titulo-lista'>Personagens - Rick And Morty</h3>

            <div className='lista-personagens'>
                {personagens.map((personagem) => (
                    <Card personagem={personagem} />
                ))}
            </div>
        </div>
    )
}
export default Home