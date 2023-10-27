import { useContextSelector } from 'use-context-selector'
import {
  HomeContainer,
} from './styles'
import { ExamplesContext } from '../../stores/contexts/counterStore'

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

      </HomeContainer>
    </div>
  )
}
