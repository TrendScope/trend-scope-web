import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Styled.jsx";

export default function CommunityCard() {
  return(
    <S.CardWrapper>
      <S.CardLeft>
        <S.CardIssue>배송경로 최적화</S.CardIssue>
        <S.CardTitle>이 이슈는 어때요??</S.CardTitle>
        <S.CardContent>어떠세요? 어떤지말해줘어떤것같아?...</S.CardContent>
        <S.CardAuthor>ID: 똥국</S.CardAuthor>
      </S.CardLeft>
      <S.CardRight>
        <S.CardLike icon={faHeart}/>
        <S.CardLikeCount>51</S.CardLikeCount>
        <S.CardDate>2024.02.21</S.CardDate>
      </S.CardRight>
    </S.CardWrapper>
  )
}