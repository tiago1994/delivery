import styled from 'styled-components'
import { InputDefault, ButtonDefault, Logo } from '../../components'

const DefaultContainer = styled.div`
    background-color: #f2b948;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BoxWhite = styled.div`
    background-color: #FFF;
    max-width: 100%;
    width: 300px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const BoxItems = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
`

export const Login = () => {
    return (
        <DefaultContainer>
            <BoxWhite>
                <BoxItems>
                    <Logo />
                </BoxItems>
                <BoxItems>
                    <InputDefault type={'text'} placeholder={'Digite o seu email...'} />
                </BoxItems>
                <BoxItems>
                    <InputDefault type={'password'} placeholder={'Digite a sua senha...'} />
                </BoxItems>
                <BoxItems>
                    <ButtonDefault value={'Login'} />
                </BoxItems>
            </BoxWhite>
        </DefaultContainer>
    )
}