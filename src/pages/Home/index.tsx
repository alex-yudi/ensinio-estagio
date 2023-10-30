import { useContextSelector } from 'use-context-selector'
import {
  HomeContainer,
} from './styles'
import { Hero } from '../../components/Hero'
import { MainHome } from '../../components/MainHome'

export function Home() {

  return (
    <div>
      <HomeContainer>
        <Hero />
        <MainHome />
      </HomeContainer>
    </div>
  )
}
