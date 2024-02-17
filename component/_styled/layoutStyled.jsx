import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LayoutWrapper = styled.div`
    max-width: 700px;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const LayoutContent = styled.div`
    flex: 1 0 auto;
    width: 90%;
    margin: 5%;
`

// navbar
export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: #F3F9FD;
    padding: 2% 0;
    align-items: center;
`

export const Logo = styled.div`
    display: flex;
    width: 60%;
    padding: 0 10%;
    margin-left: 20%;
    align-items: center;
    justify-content: center;
    gap: 5%;
`

export const LogoImage = styled(Image)`
    width: 10%;
    height: auto;
    cursor: pointer;
`

export const LogoText = styled(Image)`
    width: 50%;
    cursor: pointer;
`

export const NavBtn = styled(FontAwesomeIcon)`
    width: 3%;
    margin-left: 10%;
    cursor: pointer;
`

// Footer
export const FooterContainer = styled.div`
    border: solid black;
    border-width: 1px 0 0;
    height: 50px;
    text-align: center;
    margin: auto 5%;
`