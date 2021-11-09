import React, { useState, useEffect } from 'react';
import { StyledContainer } from './App.styles';
import { InnerContainer } from './components/InnerContainer';

const App = () => {

  const [minValue, setMinValue] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      if (minValue <= 15) setMinValue(prevTime => prevTime + 15);
    }, 2000)
  }, [minValue])


  return (
    <StyledContainer>      
      <p style={{textAlign: 'center' , fontSize: '30px' , fontWeight: 600}}>{minValue}%</p>
      <InnerContainer percentage={minValue} src="https://media.comicbook.com/2021/01/one-piece-wano-luffy-cosplay-1252700.jpeg?auto=webp&width=1200&height=627&crop=1200:627,smart" />
    </StyledContainer>
    
  );
}

export default App;
