import styled from "styled-components";
import * as S from "../_styled/layoutStyled"
import logo_image from "../image/logo_navy.svg"
import logo_text from "../image/logo_text_navy.svg"

export default function Nav() {
    return(
        <S.NavContainer>
            <S.Logo>
                <S.LogoImage src={logo_image} alt="logo_image" />
                <S.LogoText src={logo_text} alt="logo_text" />
            </S.Logo>
            <S.NavBtn>🟰</S.NavBtn>
        </S.NavContainer>
    )
}