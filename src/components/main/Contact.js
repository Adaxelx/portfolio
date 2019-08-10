import React from 'react';
import styled from 'styled-components';

import Title from '../aside/Title'

const StyledContact = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 20px 0;
`

const StyledList = styled.ul`
    list-style-type: none;
    font-size ${({theme}) => theme.fontSize.m}
`
const StyledSocials = styled.div`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: 1px solid black;
    position: absolute;
    top: 50%;
    ${({side}) => side ? 'right: 0%' : "left: 0%"};

`

const Contact = () => {
    return(
        <StyledContact>
            <Title content="Contact"/>
            <StyledSocials />
            <StyledSocials side="r"/>
            <StyledList>
                <li>Adrian Mostowski</li>
                <li>adaxelx@o2.pl</li>
            </StyledList>
        </StyledContact>
    )
}

export default Contact;