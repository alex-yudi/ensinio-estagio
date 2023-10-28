import { useContextSelector } from 'use-context-selector'
import {
  HomeContainer,
} from './styles'
import { Hero } from '../../components/Hero'
import { MainHome } from '../../components/MainHome'

export function Home() {
  /*   
    const  = useContextSelector(
      ExamplesContext,
      (context) => {
        return context
      },
    )
   */
  return (
    <div>
      <HomeContainer>
        <Hero />
        <MainHome />
      </HomeContainer>
    </div>
  )
}
