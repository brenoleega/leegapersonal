import Logo from '../logo/index.js'
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: black;
    color: white;
    justify-content: center;
`

function Headers(){
    return(
    <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
    </HeaderContainer>
    )
}

export default Headers