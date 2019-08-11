import React from 'react';
import styled from 'styled-components';

import Title from '../aside/Title'
import Text from '../aside/Text'

const StyledContact = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`

const StyledList = styled.ul`
    list-style-type: none;
    font-size ${({theme}) => theme.fontSize.m};
    width: 90%;
    padding: 15px 0;
    margin-top: ${({theme}) => theme.marginContent}
    border-top: 2px solid ${({theme}) => theme.bColor};
`

const StyledSocials = styled.section`
    border-top: 2px solid ${({theme}) => theme.bColor};
    border-bottom: 2px solid ${({theme}) => theme.bColor};
    width: 90%;
    padding-bottom: 15px;
`

const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const StyledA = styled.a`
    color: black;
`

const Contact = () => {
    return(
        <StyledContact>
            <Title content="Contact&media"/>
            <StyledList>
                <StyledLi><span>Author:</span><span>Adrian Mostowski</span></StyledLi>
                <StyledLi><span>E-mail</span>adaxelx@o2.pl</StyledLi>
            </StyledList>
            <StyledSocials>
                <StyledA href="https://github.com"><Text content="Github" fontS="4rem"/></StyledA>
                <StyledA href="https://github.com"><Text content="Facebook" fontS="4rem"/></StyledA>
                <StyledA href="https://github.com"><Text content="Instagram" fontS="4rem"/></StyledA>
            </StyledSocials>
        </StyledContact>
    )
}

export default Contact;