import styled from "styled-components";
import Image from "next/image";

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

// navber
export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: #F3F9FD;
    padding: 5% 0;
    height: 50px;
    align-items: center;
    justify-content: center;
`

// Footer
export const FooterContainer = styled.div`
    border: solid black;
    border-width: 1px 0 0;
    height: 50px;
    text-align: center;
    margin: auto 5%;
`