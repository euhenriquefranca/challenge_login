import styled from "styled-components";
import myImage from "../../assets/image-mobile.png";

export const Container = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.primary};
    position: absolute;
    width: 139px;
    height: 64px;
    left: 118px;
    top: 163px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
  p {
    position: absolute;
    width: 255px;
    height: 20px;
    left: 60px;
    top: 243px;

    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */

    text-align: center;

    color: #989fdb;
  }
  position: relative;
  width: 375px;
  height: 652px;

  @media screen and (min-width: 480px) {
    position: relative;
    background: #faf5ff;
    height: 768px;
    width: 1366px;

    h1 {
      color: ${(props) => props.theme.colors.primary};
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
      color: #989fdb;
    }
  }
`;
export const Retangulo = styled.div`
  @media screen and (max-width: 480px) {
    position: absolute;
    width: 311px;
    height: 357px;
    left: 32px;
    top: 139px;

    background: #faf5ff;
    border-radius: 8px;
  }
`;
export const Retangulo2 = styled.div`
  @media screen and (max-width: 480px) {
    position: absolute;
    width: 376px;
    height: 443px;
    left: 0px;
    top: 382px;
    background: #130525;
  }
`;

export const InputEmail = styled.input`
  position: absolute;
  width: 256px;
  height: 48px;
  left: 59px;
  top: 305px;

  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;
  @media screen and (min-width: 480px) {
    position: absolute;
    width: 256px;
    height: 48px;
    left: 877px;
    top: 353px;

    border: 1px solid #989fdb;
    box-sizing: border-box;
    border-radius: 8px;
  }
`;
export const InputSenha = styled.input`
  position: absolute;
  width: 256px;
  height: 48px;
  left: 59px;
  top: 391px;

  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;
  @media screen and (min-width: 480px) {
    position: absolute;
    width: 256px;
    height: 48px;
    left: 877px;
    top: 439px;

    border: 1px solid #989fdb;
    box-sizing: border-box;
    border-radius: 8px;
  }
`;
export const GradientMobile = styled.div`
  position: relative;
  width: 376px;
  height: 386px;
  left: 376px;
  top: -4px;
  margin-left: -376px;

  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  transform: rotate(-180deg);
`;
export const Gradient = styled.div`
  @media screen and (min-width: 480px) {
    position: relative;
    width: 376px;
    height: 774px;
    left: 376px;
    top: -391px;
    width: 765px;
    display: flex;
    margin-left: -377px;
    justify-content: center;
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    transform: rotate(-180deg);
  }
`;
export const Image = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    position: absolute;
    width: 376px;
    display: block;
    height: 383px;
    left: 0px;
    top: 0px;
    background-image: url(${myImage});
  }
`;

export const LogoImage = styled.div`
  display: none;
  @media screen and (min-width: 480px) {
    display: block;
    position: absolute;
    width: 766px;
    height: 768px;
    left: -1px;
    top: 0px;
  }
`;

export const ButtonEntrar = styled.button`
  position: absolute;
  width: 168px;
  height: 48px;
  left: 103px;
  top: 471px;

  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  color: #ffffff;

  @media screen and (min-width: 480px) {
    position: absolute;
    width: 256px;
    height: 48px;
    left: 877px;
    top: 511px;

    background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
    box-shadow: 0px 10px 25px #cf99db;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
`;
export const EsqueceuSenha = styled.span`
  position: absolute;
  width: 212px;
  height: 40px;
  left: 81px;
  top: 543px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  text-align: center;

  color: #ffffff;
  @media screen and (min-width: 480px) {
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

    color: #989fdb;
  }
`;

export const Email = styled.span`
  position: absolute;
  width: 72px;
  height: 14px;
  left: 70px;
  top: 283px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 48px;
  /* or 480% */

  display: flex;
  align-items: center;

  color: #383e71;
  @media screen and (min-width: 480px) {
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
  }
`;
export const Senha = styled.span`
  position: absolute;
  width: 72px;
  height: 14px;
  left: 70px;
  top: 369px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 48px;
  /* or 480% */

  display: flex;
  align-items: center;

  color: #383e71;

  @media screen and (min-width: 480px) {
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
    color: #383e71;
  }
`;
