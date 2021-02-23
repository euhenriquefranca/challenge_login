import styled from "styled-components"

export const Container = styled.div`
position: relative;
width: 1366px;
height: 768px;
background: #FAF5FF;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media(max-width: 800px) {
  flex-direction: column;
  position: relative;
}

h1 {
  color: ${props => props.theme.colors.primary};
  position: absolute;
  width: 231px;
  height: 96px;
  left: 877px;
  top: 136px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
}
p {
  position: absolute;
  width: 222px;
  height: 40px;
  left: 877px;
  top: 248px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
    color: #989FDB
}

`

export const InputEmail = styled.input`
  position: absolute;
  width: 256px;
  height: 48px;
  left: 877px;
  top: 353px;

  border: 1px solid #989FDB;
  box-sizing: border-box;
  border-radius: 8px;
`;
export const InputSenha = styled.input`
  position: absolute;
  width: 256px;
  height: 48px;
  left: 877px;
  top: 439px;

  border: 1px solid #989FDB;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const LogoImage = styled.image`
  position: absolute;
  width: 766px;
  height: 768px;
  left: -1px;
  top: 0px;


`

export const ButtonEntrar = styled.button`
  position: absolute;
  width: 256px;
  height: 48px;
  left: 877px;
  top: 511px;

  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  @media(max-width: 800px) {
    button {
     margin-left: 0px;
     margin-top: 10px;
    }
  }
`
export const EsqueceuSenha = styled.span`
  position: absolute;
  width: 212px;
  height: 40px;
  left: 899px;
  top: 591px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  text-align: center;

  color: #989FDB;
`

export const Email = styled.span`
  position: absolute;
  width: 72px;
  height: 14px;
  left: 888px;
  top: 331px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 48px;
  /* or 480% */

  display: flex;
align-items: center;
`
export const Senha = styled.span`
  position: absolute;
  width: 72px;
  height: 14px;
  left: 888px;
  top: 417px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 48px;
  /* or 480% */

  display: flex;
  align-items: center;
  color: #383E71;
`

