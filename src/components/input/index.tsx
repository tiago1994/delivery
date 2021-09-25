import styled from 'styled-components'

const InputStyle = styled.input`
    height: 40px;
    width: 100%;
    background-color: #F5F5F5;
    border: initial;
    outline: initial;
    border-radius: 12px;
    padding: 15px;
`
export const InputDefault = ({ placeholder, type }: any) => {
    return (
        <InputStyle type={type} value="" placeholder={placeholder} />
    )
}