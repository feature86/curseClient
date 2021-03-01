import React from 'react';
import styled from 'styled-components';


interface AvatarImageProps {
    image: String; 
}

interface AvatarProps extends AvatarImageProps {
    name: String;
}

const AvatarImage = styled.div<AvatarImageProps>`
    height: 70%;
    width: 70%;
    background-size: contain;
    background-image: url( ${ ({ image }) => `${image}`});
    background-position: center center;
    
`
const AvatarWrap = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid green;
  margin: 10px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column; 
  align-items:center;
  justify-content: space-around;

`;

const AvatarName = styled.div`
    font-size: 16px;
    color: black;
`;


export const Avatar: React.FC<AvatarProps> = ({ image, name}) => {
    return (
        <AvatarWrap>
            <AvatarImage image={ image}/> 
            <AvatarName>{name}</AvatarName>
        </AvatarWrap>
    )
}
