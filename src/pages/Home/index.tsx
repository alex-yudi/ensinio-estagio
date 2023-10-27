import { useContextSelector } from 'use-context-selector'
import {
  HomeContainer,
} from './styles'
import { Hero } from '../../components/Hero'

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
      </HomeContainer>
    </div>
  )
}
