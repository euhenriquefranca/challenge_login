import React from 'react'
import Head from 'next/head'

import ImageLogo from '../assets/image-desktop.svg'
import { Container, InputEmail, InputSenha, LogoImage, ButtonEntrar, EsqueceuSenha, Email, Senha } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <div>
        <LogoImage>
          <ImageLogo />
        </LogoImage>
      </div>
      <h1>
        Olá, seja bem-vindo!
        </h1>
      <p>
        Para acessar a plataforma, faça seu login.
      </p>
      <Email>E-MAIL</Email>
      <InputEmail placeholder=" user.name@mail.com" type="text" />
      <InputSenha placeholder=" ********" type="text" />
      <ButtonEntrar type="submit">
        ENTRAR
      </ButtonEntrar>
      <Senha>SENHA</Senha>
      <EsqueceuSenha>
        Esqueceu seu login ou senha? Clique aqui
        </EsqueceuSenha>
    </Container>
  )
}

export default Home
