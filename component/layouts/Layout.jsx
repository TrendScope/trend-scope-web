import styled from "styled-components";
import *  as S from "../_styled/layoutStyled"
import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({children}) {
    return(
        <S.LayoutWrapper>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                {/* <link rel="icon" href="../image/logo_navy.png"/> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <title>TrendScope</title>
                <meta name="description" content="TrendScope" />
            </Head>
            <Nav />
            <S.LayoutContent>{children}</S.LayoutContent>
            <Footer />
        </S.LayoutWrapper>
    )
}