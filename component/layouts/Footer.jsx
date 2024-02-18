import { faGithub } from "@fortawesome/free-brands-svg-icons"
import * as S from "../_styled/layoutStyled"

export default function Footer() {
    return(
        <S.FooterContainer>
            <S.FooterText>@TrendScope. All rights Reserved.</S.FooterText>
            <S.FooterText>KAPS. 사회문제 해결을 위한 해커톤 팀 “TrendScope”</S.FooterText>
            <S.FooterGit icon={faGithub} />
        </S.FooterContainer>
    )
}