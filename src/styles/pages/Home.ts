import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1 {
  color: ${props => props.theme.colors.primary};
  position: absolute;
  width: 231px;
  height: 96px;
  left: 392px;
  top: 284px;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
}
p {
  position: absolute;
  width: 222px;
  height: 40px;
  left: 392px;
  top: 396px;
  color: #989FDB
}
`

export const InputEmail = styled.input`
  position: absolute;
  width: 297px;
  height: 48px;
  left: 392px;
  top: 498px;
  color: ${props => props.theme.colors};
  background: #E5E5E5;
  border: 1px solid #989FDB;
  border-radius: 8px;
`;
export const InputSenha = styled.input`
  position: absolute;
  width: 297px;
  height: 48px;
  left: 392px;
  top: 587px;
  color: ${props => props.theme.colors};
  background: #E5E5E5;
  border: 1px solid #989FDB;
  border-radius: 8px;
`;

export const LogoImage = styled.image`
position: absolute;
width: 327px;
height: 1024px;
left: -15px;
top: 0px;
`

export const ButtonEntrar = styled.button`
  position: absolute;
  width: 297px;
  height: 48px;
  left: 392px;
  top: 659px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
`
