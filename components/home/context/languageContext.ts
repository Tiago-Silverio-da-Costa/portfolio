import { create } from 'zustand';

interface LanguageStore {
  language: string;
  texts: Record<string, any>;
  setLanguage: (lang: string) => Promise<void>;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'en',
  texts: {},
  setLanguage: async (lang: string) => {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load language file for ${lang}`);
      }
      const data = await response.json();
      set({ language: lang, texts: data });
    } catch (error) {
      console.error('Error setting language:', error);
    }
  },
}));

