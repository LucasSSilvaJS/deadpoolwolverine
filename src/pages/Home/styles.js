import styled from "styled-components";

export const Container = styled.div`
    max-width: 960px;
    width: 100%;
    padding: 40px 20px;
    background-color: rgba(245, 247, 248, 0.9);
    border-radius: 14px;
    box-shadow: 0 0 15px #000;
    overflow-y: scroll;
    max-height: 450px;

    & > h2{
        background-color: red;
        color: #fff;
        padding: 5px 10px;
        margin: 45px 0;
        text-align: center;
    }

    & > audio{
        width: 100%;
        box-shadow: 0 0 15px #000;
        border-radius: 25px;
    }
`

export const Personagem = styled.img`
    cursor: pointer;
    height: 200px;
    object-fit: contain;
    background: #E2DAD6;
    border-radius: 15px;
    border: ${props => props.personagem === 'deadpool' ? "5px solid red" : "5px solid yellow"};
    opacity: ${props => props.select === true ? 1 : 0.2};
    transition: all 1.2s;

    &:hover{
        opacity: 1;
        transform: scale(1.2);
    }
`

export const Titulo = styled.h1`
    text-align: center;
    color: red;
    margin-bottom: 40px;
`

export const ContainerPersonagem = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
    align-items: center;
    justify-content: center;
`

export const Descricao = styled.div`
    width: 100%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    align-items: center;

    @media screen and (max-width:960px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width:667px){
        grid-template-columns: 1fr;
    }
`

export const Quadrinhos = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 20px;

    h3{
        text-align: center;
        text-decoration: underline;
    }

    img{
        object-fit: contain;
        width: 100%;
    }

    p{
        text-align: justify;
        padding: 15px;
        background: #ccc;
        border-radius: 15px;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    height: 100dvh;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    width: 240px;
    background: rgba(245, 247, 248, 0.5);
    padding: 10px;
    border-radius: 15px;
`