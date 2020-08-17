import React from 'react'
import styled from 'styled-components'
export default function(props){
    const Wrapper = styled.footer`
    border:1px solid ${props.them};
    margin:10px;
    `;
    return (
        <Wrapper>footer</Wrapper>
    )
}