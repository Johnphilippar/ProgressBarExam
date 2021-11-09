import React, { useState, useEffect } from 'react';
import { StyledContainer } from './App.styles';
import { InnerContainer } from './components/InnerContainer';

const App = () => {

  const [time, setTime] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      if (time <= 15) setTime(prevTime => prevTime + 15);
    }, 2000)
  }, [time])


  return (
    <StyledContainer>
      <InnerContainer percentage={time} src="https://media.comicbook.com/2021/01/one-piece-wano-luffy-cosplay-1252700.jpeg?auto=webp&width=1200&height=627&crop=1200:627,smart" />
    </StyledContainer>
  );
}

export default App;
