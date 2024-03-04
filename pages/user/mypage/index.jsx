import { faUser } from "@fortawesome/free-solid-svg-icons";
import * as SI from "../../../component/_styled/issueStyled.jsx";
import * as S from "../../../component/_styled/userStyled.jsx";

export default function Mypage() {
  return(
    <SI.IssueWrapper>
      <SI.IssueIcon icon={faUser} />
      <SI.IssueMessage>마이 페이지</SI.IssueMessage>
      <SI.IssueMessage2>나의 활동을 확인해 보세요</SI.IssueMessage2>
      <SI.IssueContainer>
        <SI.IssueMessage>내가 작성한 글</SI.IssueMessage>
        <S.MypageList>
          
        </S.MypageList>
        <SI.IssueMessage>좋아요한 글</SI.IssueMessage>
        <S.MypageList>
          
        </S.MypageList>
      </SI.IssueContainer>
    </SI.IssueWrapper>
  )
}