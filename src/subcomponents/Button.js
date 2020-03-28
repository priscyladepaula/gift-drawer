import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    height: ${props => props.height};
    width: ${props => props.width};
    background: #D33741;
    border: 2px none;
    border-radius: 55px;
    font-size: 18px;
    color: white;
    font-weight: 700;
    box-shadow: 0px 7px 7px rgba(211, 55, 65, 0.25);
    transition: 0.5s;
    &:hover{
        background: rgb(209, 5, 19);
        cursor: pointer;
    }
`

const Button = props => {
    return (
        <>
            <ButtonStyle type="submit"
                         top={props.top}
                         bottom={props.bottom}
                         left={props.left}
                         right={props.right}
                         height={props.height}
                         width={props.width}>{props.text}</ButtonStyle>
        </>
    )
}
export default Button;