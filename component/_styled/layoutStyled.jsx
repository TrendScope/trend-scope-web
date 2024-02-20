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
    width: 15px;
    margin-left: 10%;
    cursor: pointer;
`

// Footer
export const FooterContainer = styled.div`
    border: solid #C0C5DC;
    border-width: 1px 0 0;
    margin: auto 5%;
    display: flex;
    flex-direction: column;
    padding: 3% 0;
    font-size: 12px;
    color: #7F85A3;
`

export const FooterText = styled.span`
    margin: 1% 0;
`

export const FooterGit = styled(FontAwesomeIcon)`
    width: 16px;
    margin-top: 2%;
    cursor: pointer;
`