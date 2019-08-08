import React from 'react';
import styled from 'styled-components'

const StyledLines = styled.div`
    height: 100%;
    position: absolute;
    border-left: 1px solid #003783
    border-right: 1px solid #003783
    width: 5px;
    top: 0;
    ${({side}) => side==='l' ? 'left: calc(5% - 5px)' : 'right: calc(5% - 5px)'}
`

const Lines = ({side}) => {
    return(
        <StyledLines side={side}/>
    )
}

export default Lines;