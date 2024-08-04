import axios from 'axios'
import md5 from 'md5'

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY
const baseUrl = 'https://gateway.marvel.com:443/v1/public'

const timestamp = new Date().getTime()
const hash = md5(`${timestamp}${privateKey}${publicKey}`)

export const api = async (endpoint) => {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`, {
      params: {
        apikey: publicKey,
        ts: timestamp,
        hash: hash,
      }
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar dados da Marvel:', error)
    throw error
  }
}