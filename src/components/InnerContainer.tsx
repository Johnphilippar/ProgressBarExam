import React from 'react';
import styled from 'styled-components';

type InnerContainerType = {
    percentage: number;
    src: string;
}


const StyledInnerContainer = styled.img`
  position: absolute;
  width: ${props => props.width}%;
  height: 50vh;
`


export const InnerContainer = (props: InnerContainerType) => {
    const { percentage , src } = props;

    return (
        <StyledInnerContainer width={percentage} src={src} />
    )
}