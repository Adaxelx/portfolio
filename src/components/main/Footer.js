import React from 'react';
import styled from 'styled-components';

import Text from '../aside/Text'

const StyledFooter = styled.footer`
    width: 100%;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
`

const StyledCon = styled.section`
    width: 90%;
`

const Footer = () =>{
    return(
        <StyledFooter>
            <StyledCon><Text fontS="3rem" content="Created and designed by Adrian Mostowski in 2019"/></StyledCon>
        </StyledFooter>
    )
}

export default Footer;