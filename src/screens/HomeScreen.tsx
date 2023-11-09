import React, { memo } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import { Navigation } from '../types'

type Props = {
  navigation: Navigation
}

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Go Escuela</Header>

    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Iniciar Sesión
    </Button>
  </Background>
)

export default memo(HomeScreen)
