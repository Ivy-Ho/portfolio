import { createContext, useEffect, useState } from 'react';

// create context
export const ScreenContext = createContext();

const ScreenProvider= ({children}) => {
  
    const [isMobile, setIsMobile ] = useState(false);
    const [isPc, setIsPc ] = useState(false);
  
    useEffect(() => {
      const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
      const pcMediaQuery = window.matchMedia('(min-width: 1025px)');

      setIsMobile(mobileMediaQuery.matches);
      setIsPc(pcMediaQuery.matches);

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }

      const handlePcQueryChange = (event) => {
        setIsPc(event.matches);
      }


      mobileMediaQuery.addEventListener('change', handleMediaQueryChange)
      pcMediaQuery.addEventListener('change', handlePcQueryChange)

      return () => {
        mobileMediaQuery.removeEventListener('change', handleMediaQueryChange);
        pcMediaQuery.removeEventListener('change', handlePcQueryChange);
      }
    }, [])

  return <ScreenContext.Provider value={{isMobile, isPc}}>{children}</ScreenContext.Provider>;
};

export default ScreenProvider;
