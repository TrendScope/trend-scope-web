import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as R from "@fortawesome/free-regular-svg-icons";
import * as S from "./Styled.jsx";
import { useRouter } from "next/router.js";

export default function CommunityCard({ community }) {
  const router = useRouter();
  const { id } = router.query;

  return(
    <S.CardWrapper
      onClick={()=>{router.push(`/community/${id}`)}}
    >
      <S.CardLeft>
        <S.CardIssue>{community.resultSubject}</S.CardIssue>
        <S.CardTitle>{community.title}</S.CardTitle>
        <S.CardContent>{community.content}...</S.CardContent>
        <S.CardAuthor>ID: {community.author}</S.CardAuthor>
      </S.CardLeft>
      <S.CardRight>
        {community.my_liked?<>
          <S.CardLike icon={faHeart}/>        
        </>:<>
          <S.CardLike icon={R.faHeart}/>
        </>}
        <S.CardLikeCount>{community.liked}</S.CardLikeCount>
        <S.CardDate>{community.my_liked}</S.CardDate>
      </S.CardRight>
    </S.CardWrapper>
  )
}