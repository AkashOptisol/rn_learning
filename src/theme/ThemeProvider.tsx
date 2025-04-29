import React, {createContext, useContext} from 'react';
import {getBrandConfig} from '../config/brands';

const ThemeContext = createContext<ReturnType<typeof getBrandConfig> | null>(
  null,
);

export const ThemeProvider: React.FC<{
  brand: 'vestel' | 'im';
  children: React.ReactNode;
}> = ({brand, children}) => {
  const theme = getBrandConfig(brand);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
