import { createContext, useContext, useMemo } from 'react';
import { Underlined } from '../components/common/Underlined';

const UnderlineContext = createContext();

export const UnderlineProvider = ({ children }) => {
  const wrapWithUnderline = (text) => {
    // Check if the text contains <u></u> tags and wrap with Underlined accordingly
    const parts = text.split(/(<u>.*?<\/u>)/g).filter(Boolean);

    return parts.map((part, index) => (part.startsWith('<u>') ? <Underlined key={index}>{part.slice(3, -4)}</Underlined> : part));
  };

  const value = useMemo(() => ({ wrapWithUnderline }), []);

  return <UnderlineContext.Provider value={value}>{children}</UnderlineContext.Provider>;
};

export const useUnderline = () => useContext(UnderlineContext);