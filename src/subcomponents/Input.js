import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #272727;
    box-sizing: border-box;
    border-radius: 4px;
    opacity: 0.4;
    padding-left: 20px;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    height: ${props => props.height};
    width: ${props => props.width};
`

const Input = props => {
    return (
        <>
            <InputStyle placeholder={props.placeholder}
                className={props.className}
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                height={props.height}
                width={props.width}
                top={props.top}
                bottom={props.bottom}
                left={props.left}
                right={props.right}>{props.input}</InputStyle>
        </>
    )
}
export default Input;