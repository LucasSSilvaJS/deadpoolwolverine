import logo from '../../assets/logo.png'

import deadpoolSong from '../../assets/deadpool.mp3'
import wolverineSong from '../../assets/wolverine.mp3'

import { Container, Titulo, Personagem, ContainerPersonagem, Descricao, Quadrinhos, FlexContainer, Logo } from "./styles"
import deadpool from "../../assets/deadpool.gif"
import wolverine from "../../assets/wolverine.gif"

import { useCallback, useState } from "react"

import { api } from '../../services/api'
import Loading from "../../components/Loading"

import ReactAudioPlayer from 'react-audio-player'

const wolverineID = process.env.REACT_APP_WOLVERINE_ID
const deadpoolID = process.env.REACT_APP_DEADPOOL_ID

function Home() {

    const [wolverineSelect, setWolverineSelect] = useState(false)
    const [deadpoolSelect, setDeadpoolSelect] = useState(false)

    const [loading, setLoading] = useState(false)

    const [deadpoolComics, setDeadpoolComics] = useState([])
    const [wolverineComics, setWolverineComics] = useState([])

    const handleWolverine = useCallback(() => {
        setWolverineSelect(true)
        setDeadpoolSelect(false)

        async function wolverineComics() {
            setLoading(true)
            setDeadpoolComics([])
            try{
                const comics = await api(`/characters/${wolverineID}/comics`)
                const data = []
                comics.data.results.forEach(comic => {
                    const filterComic = {
                        id: comic.id,
                        titulo: comic.title,
                        descricao: comic.description,
                        capa: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                    }
                    data.push(filterComic)
                })
                console.log(data)
                setWolverineComics(data)
            }catch(error){
                console.error(error)
            }finally{
                setLoading(false)
            }
        }

        wolverineComics()
    }, [])

    const handleDeadpool = useCallback(() => {
        setDeadpoolSelect(true)
        setWolverineSelect(false)

        async function deadpoolComics() {
            setLoading(true)
            setWolverineComics([])
            try{
                const comics = await api(`/characters/${deadpoolID}/comics`)
                const data = []
                comics.data.results.forEach(comic => {
                    const filterComic = {
                        id: comic.id,
                        titulo: comic.title,
                        descricao: comic.description,
                        capa: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                    }
                    data.push(filterComic)
                })
                console.log(data)
                setDeadpoolComics(data)
            }catch(error){
                console.error(error)
            }finally{
                setLoading(false)
            }
        }

        deadpoolComics()
    }, [])

    return ( 
        <FlexContainer>
            <Logo 
                src={logo} 
                alt="logo" 
                width="200" 
            />
            <Container>
                {loading && <Loading/>}
                <Titulo>Escolha um personagem</Titulo>

                <ContainerPersonagem>
                    <Personagem src={deadpool} alt="deadpool" personagem="deadpool" onClick={handleDeadpool} select={deadpoolSelect}/>
                    <Personagem src={wolverine} alt="wolverine" personagem="wolverine" onClick={handleWolverine} select={wolverineSelect}/>
                </ContainerPersonagem>

                {wolverineComics.length > 0 && <h2>Veja algumas comics com o Wolverine</h2>}
                {deadpoolComics.length > 0 && <h2>Veja algumas comics com o DeadPool</h2>}

                {deadpoolSelect && <ReactAudioPlayer src={deadpoolSong} autoPlay loop controls style={{display: deadpoolComics.length > 0 ? 'block' : 'none'}}/>}
                {wolverineSelect && <ReactAudioPlayer src={wolverineSong} autoPlay loop controls style={{display: wolverineComics.length > 0 ? 'block' : 'none'}}/>}

                <Descricao>
                    {wolverineSelect && (
                        <>
                            {wolverineComics.map(comic => {
                                return(
                                    <Quadrinhos key={comic.id}>
                                        <h3>{comic.titulo}</h3>
                                        <img src={comic.capa} alt={comic.titulo} />
                                        <p>{comic.descricao ? comic.descricao : 'Comic sem descrição'}</p>
                                    </Quadrinhos>
                                )
                            })}
                            
                        </>
                    )}
                    {deadpoolSelect && (
                        <>
                            {deadpoolComics.map(comic => {
                                return(
                                    <Quadrinhos key={comic.id}>
                                        <h3>{comic.titulo}</h3>
                                        <img src={comic.capa} alt={comic.titulo} />
                                        <p>{comic.descricao ? comic.descricao : 'Comic sem descrição'}</p>
                                    </Quadrinhos>
                                )
                            })}
                            
                        </>
                    )}
                </Descricao>
            </Container>
        </FlexContainer>
     );
}

export default Home;