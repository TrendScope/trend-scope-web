import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../component/_styled/issueStyled.jsx";
import IssueCard from "@/component/issue/IssueCard.jsx";

export default function IssueList() {
  return(
    <S.IssueWrapper>
      <S.IssueIcon icon={faBookBookmark} />
      <S.IssueMessage>검색 내역 모음</S.IssueMessage>
      <S.IssueMessage2>도출한 이머징 이슈를 한곳에서 모아보세요</S.IssueMessage2>
      <S.IssueContainer>
          <S.IssueMessage>최신 순</S.IssueMessage>
          <IssueCard />
          <IssueCard />
      </S.IssueContainer>
    </S.IssueWrapper>
  )
}