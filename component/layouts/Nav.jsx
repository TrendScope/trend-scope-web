import styled from "styled-components";
import * as S from "../_styled/layoutStyled"
import logo_image from "../image/logo_navy.svg"
import logo_text from "../image/logo_text_navy.svg"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();

    return(
        <S.NavContainer>
            <S.Logo onClick={()=>{router.push(`/`)}}>
                <S.LogoImage src={logo_image} alt="logo_image" />
                <S.LogoText src={logo_text} alt="logo_text" />
            </S.Logo>
            <S.NavBtn icon={faBars} width={10}/>
        </S.NavContainer>
    )
}