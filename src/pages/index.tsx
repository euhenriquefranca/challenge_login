import React from 'react'
import Head from 'next/head'

import ImageLogo from '../assets/image-logo.svg'
import { Container, InputEmail, InputSenha, LogoImage, ButtonEntrar, TextButton } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <LogoImage>

        <ImageLogo />
      </LogoImage>
      <h1>
        Olá, seja bem-vindo!
        </h1>
      <p>
        Para acessar a plataforma, faça seu login.
        </p>
      <InputEmail placeholder=" user.name@mail.com" type="text" />
      <InputSenha placeholder=" ********" type="text" />
      <ButtonEntrar>
        ENTRAR
      </ButtonEntrar>
    </Container>
  )
}

export default Home
