import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import App from '../components/app'
import InputLink from '../components/input/inputLink'
import OutputLink from '../components/input/outputLink'
import { store } from '../store/store'
import styles from '../styles/Home.module.css'
import fetchLink from '../utils/fetchUrl'

export default function Home() {


  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
