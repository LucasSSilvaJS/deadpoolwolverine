import {createGlobalStyle} from 'styled-components'
import wallpaper from '../assets/wallpaper.png'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        min-height: 100dvh;
    }

    body{
        background: #F9E400;
        background-image: url(${wallpaper});
        background-repeat: no-repeat;
        background-size: cover;
        font-family: "Pixelify Sans", sans-serif;
    }

    @media screen and (max-width: 768px) {
        body{
            background-position: center;
        }
    }

`