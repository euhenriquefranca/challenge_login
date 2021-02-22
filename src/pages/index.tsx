import React from 'react'
import Head from 'next/head'

import ImageLogo from '../assets/image-logo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
        <ImageLogo />
        <h1>Olá, seja
          bem-vindo!
        </h1>
    </Container>
  )
}

export default Home
