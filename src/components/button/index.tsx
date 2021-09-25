import styled from 'styled-components'

const ButtonStyle = styled.button`
    background-color: #225644;
    color: #FFF;
    padding: 10px 30px;
    border-radius: 12px;
    box-shadown: initial;
    border: initial;
    text-transform: uppercase;
    font-size: 14px;
    width: 100%;
    height: 40px;
`
export const ButtonDefault = ({ value }: any) => {
    return (
        <ButtonStyle>{ value }</ButtonStyle>
    )
}