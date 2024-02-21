import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../component/_styled/issueStyled.jsx";
import SearchIssue from "@/component/main/SerachIssue.jsx";

export default function Issue() {
  return(
    <S.IssueWrapper>
      <S.IssueIcon icon={faCircleCheck} />
      <S.IssueMessage>이머징 이슈를 도출하였습니다</S.IssueMessage>
      <S.IssueMessage2>결과를 확인해주세요</S.IssueMessage2>
      <S.IssueContainer>
        <SearchIssue />
      </S.IssueContainer>
    </S.IssueWrapper>
  )
}