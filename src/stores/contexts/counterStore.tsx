import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'


interface ExampleContextType {

}

interface CounterStoreProviderProps {
  children: ReactNode
}

export const ExamplesContext = createContext<ExampleContextType>(
  {} as ExampleContextType,
)

export function ExampleProvider({ children }: CounterStoreProviderProps) {

  useEffect(() => {

  }, [])
  return (
    <ExamplesContext.Provider
      value={{}}
    >
      {children}
    </ExamplesContext.Provider>
  )
}