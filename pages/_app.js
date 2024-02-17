import '@/styles/globals.css'
import styled from "styled-components";
import Layout from '@/component/layouts/Layout.jsx';
import Head from 'next/head';

const Body = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F5F5F5;
`

export default function App({ Component, pageProps }) {
  return(
    <Body>
      <Head>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
        <style jsx global>
        {
          `
            @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 100;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format('.woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype');}
            @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 300;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('.woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');}
            @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('.woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');}
            @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 500;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('.woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype');}
            @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 700;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('.woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');}
            @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 900;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format('.woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype');}
            @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

            body, h1, h2, h3, h4, h5, h6, input, textarea, select {
              font-family: 'Noto Sans KR', sans-serif;
            }
            * {
              font-family: 'Noto Sans KR', sans-serif;
            }
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, menu, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed,
            figure, figcaption, footer, header, hgroup,
            main, menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
              font-family : Helvetica;
            }
            /* HTML5 display-role reset for older browsers */
            article, aside, details, figcaption, figure,
            footer, header, hgroup, main, menu, nav, section {
              display: block;
            }
            /* HTML5 hidden-attribute fix for newer browsers */
            *[hidden] {
                display: none;
            }
            body {
              line-height: 1;
            }
            menu, ol, ul {
              list-style: none;
            }
            blockquote, q {
              quotes: none;
            }
            blockquote:before, blockquote:after,
            q:before, q:after {
              content: '';
              content: none;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }
            
            * {
                box-sizing: border-box;
            }
            
            a{
                text-decoration: none;
                color:inherit;
            }
            `
          }
        </style>
    </Body>
  )
}
