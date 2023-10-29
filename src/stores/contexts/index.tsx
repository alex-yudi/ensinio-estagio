import { ReactNode } from 'react';
import { TranslationProvider } from './translationStore';

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <TranslationProvider>
      {children}
    </TranslationProvider>
  );
}

