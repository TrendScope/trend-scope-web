import { faChartLine, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import * as S from "../component/_styled/mainStyled"
import SearchIssue from "@/component/main/SerachIssue"

export default function Main() {
  return (
    <S.MainContainer>
      <S.MainIssueBox>
        <S.MainIssueBtn>
          <S.MainIssueIcon icon={faCircleExclamation}/>
          <S.MainIssueText>이머징 이슈란?</S.MainIssueText>
        </S.MainIssueBtn>
        <S.MainIssueBtn>
          <S.MainIssueIcon icon={faChartLine}/>
          <S.MainIssueText>실시간 이슈</S.MainIssueText>
        </S.MainIssueBtn>
      </S.MainIssueBox>

      <SearchIssue />
    </S.MainContainer>
  )
}
