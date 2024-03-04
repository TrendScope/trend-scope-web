import { faCircleQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
import * as SI from "../../../component/_styled/issueStyled.jsx";
import * as S from "../../../component/_styled/userStyled.jsx";
import logo_img from "../../../component/image/logo_black.svg";
import { useState } from "react";
import CommunityCard from "@/component/community/CommunityCard.jsx";

export default function Mypage() {
  const [myPosts, setMyPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  return(
    <SI.IssueWrapper>
      <SI.IssueIcon icon={faUser} />
      <SI.IssueMessage>마이 페이지</SI.IssueMessage>
      <SI.IssueMessage2>나의 활동을 확인해 보세요</SI.IssueMessage2>
      <SI.IssueContainer>
        <SI.IssueMessage>내가 작성한 글</SI.IssueMessage>
        <S.MypageList>
          {myPosts.length>0?<>
            {myPosts.map((post, idx)=>{
              <CommunityCard
                key={idx}
              />
            })}
          </>:<>
            <S.MypageNotPosts>
              <S.MypageNotPostsIcon>
                <S.MypageIcon icon={faCircleQuestion}/>
                <S.MypageIconImg src={logo_img} alt="logo_img"/>
              </S.MypageNotPostsIcon>
              <>아직 작성한 글이 없어요</>
            </S.MypageNotPosts>
          </>}
        </S.MypageList>
        <SI.IssueMessage>좋아요한 글</SI.IssueMessage>
        <S.MypageList>
          {likedPosts.length>0?<>
            {likedPosts.map((post, idx)=>{
              <CommunityCard
                key={idx}
              />
            })}
          </>:<>
            <S.MypageNotPosts>
              <S.MypageNotPostsIcon>
                <S.MypageIcon icon={faCircleQuestion}/>
                <S.MypageIconImg src={logo_img} alt="logo_img"/>
              </S.MypageNotPostsIcon>
              <>아직 작성한 글이 없어요</>
            </S.MypageNotPosts>
          </>}
        </S.MypageList>
      </SI.IssueContainer>
    </SI.IssueWrapper>
  )
}