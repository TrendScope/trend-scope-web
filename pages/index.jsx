import { faChartLine, faCircleExclamation, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import * as S from "../component/_styled/mainStyled"
import * as SC from "../component/main/Styled"
import SearchIssue from "@/component/main/SerachIssue"
import IssueHistory from "@/component/main/IssueHistory"
import PopularKeyword from "@/component/main/PopularKeyword"
import { useRouter } from "next/router"

export default function Main() {
  const router = useRouter();

  return (
    <S.MainContainer>
      <S.MainIssueBox>
        <S.MainIssueBtn
          onClick={()=>{router.push(`/emerging`)}}
        >
          <S.MainIssueIcon icon={faCircleExclamation}/>
          <S.MainIssueText>이머징 이슈란?</S.MainIssueText>
        </S.MainIssueBtn>
        <S.MainIssueBtn>
          <S.MainIssueIcon icon={faChartLine}/>
          <S.MainIssueText>실시간 이슈</S.MainIssueText>
        </S.MainIssueBtn>
      </S.MainIssueBox>

      <SC.MainText>원하는 분야의 이머징 이슈를 도출해 보세요</SC.MainText>
      <SearchIssue
        isClikable={true}
      />

      <SC.MainText>
        <>검색 내역</>
        <SC.HistoryMore>
          자세히보기
          <SC.HistoryMoreIcon icon={faChevronRight}/>
        </SC.HistoryMore>
      </SC.MainText>
      <IssueHistory />

      <SC.MainText>커뮤니티 인기 키워드</SC.MainText>
      <PopularKeyword />
    </S.MainContainer>
  )
}
