import React from 'react';
import styled from 'styled-components';

import Text from '../aside/Text'

const StyledFooter = styled.footer`
    width: 100%;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
`

const Footer = () =>{
    return(
        <StyledFooter>
            <Text fontS="3rem" content="Created and designed by Adrian Mostowski in 2019"/>
        </StyledFooter>
    )
}

export default Footer;