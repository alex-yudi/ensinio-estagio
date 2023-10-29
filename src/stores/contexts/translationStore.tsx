import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { useTranslation } from "react-i18next";
import i18next from '../../lib/i18n/i18next'

interface TranslationContextType {
  t: Function; // TODO: Alterar a tipagem dps
  currentLanguage: string;
}

interface TranslationStoreProviderProps {
  children: ReactNode
}

export const TranslationContext = createContext<TranslationContextType>(
  {} as TranslationContextType,
)

export function TranslationProvider({ children }: TranslationStoreProviderProps) {
  const { t } = useTranslation();
  const currentLanguage: string = i18next.language;

  return (
    <TranslationContext.Provider
      value={{ t, currentLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  )
}