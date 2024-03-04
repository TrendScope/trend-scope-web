import * as S from "../../component/_styled/communityStyled.jsx";
import * as SIC from "../../component/community/Styled.jsx";
import * as SI from "../../component/_styled/issueStyled.jsx";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import * as R from "@fortawesome/free-regular-svg-icons";
import IndicatorModal from "@/component/issue/IndicatorModal.jsx";
import IndicatorCard from "@/component/issue/IndicatorCard.jsx";
import { useEffect, useState } from "react";
import CreateComment from "@/component/community/CreateComment.jsx";

export default function CommunityDetail() {
  const [community, setCommunity] = useState([]);
  const fetchCommunity = async () => {
    try {
      // const response = await API.get(``);
      // const data = response.data;

      // dummy
      const dummy = {
        "isSuccess": true,
        "code": "COMMON200",
        "message": "성공입니다.",
        "result": {
            "communityList": [
                {
                    "communityId": 1,
                    "resultSubject": "배송경로 최적화",
                    "categoryList": [
                      {
                          "category": "과학 • 기술",
                      },
                      {
                          "category": "안전",
                      },
                      {
                          "category": "환경",
                      },
                      {
                          "category": "주택 • 건축",
                      }
                    ],
                    "title": "이 이슈는 어때요??",
                    "content": "글이 이정도라면.. 어떠세요?\n줄이 바뀌기도 하나요?",
                    "author": "Dongguk2024",
                    "created_at": "2024.01.20",
                    "liked": "51",
                    "my_liked": true,
                    "avgGrowthRate": 45,
                    "avg_increase": 10,
                    "influenceFactor": 63,
                    "influ_increase": -17                   
                }
            ]
        }
      }

      setCommunity(dummy.result.communityList[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    try {
      // const response = await API.get(``);
      // const data = response.data;

      // dummy
      const dummy = {
        "isSuccess": true,
        "code": "COMMON200",
        "message": "성공입니다.",
        "result": {
            "commentList": [
                {
                    "commentId": 1,
                    "content": "댓글은 이런식으로..",
                    "author": "Dongguk2024",
                    "created_at": "2024.01.20",              
                },
                {
                  "commentId": 2,
                  "content": "댓글은 삼런식으로..",
                  "author": "Dongguk2024",
                  "created_at": "2024.01.20",              
                }
            ]
        }
      }

      setComments(dummy.result.commentList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    fetchCommunity();
    fetchComments();
  }, [])
  
  useEffect(() => {
    console.log(community); // Log the updated state here
  }, [community, ]);

  const [IndicatorModalOpen, setIndicatorModalOpen] = useState(false);
  const IndicatorModalOpenHandler = () => {
    setIndicatorModalOpen(!IndicatorModalOpen);
  };

  return(
    <S.DetailWrapper>
      <S.DetailTop>
        <S.DetailInfo>
          <S.DetailCreated>
            <S.DetailCreatedText>{community.created_at}</S.DetailCreatedText>
            <S.DetailCreatedText>ID : {community.author}</S.DetailCreatedText>
          </S.DetailCreated>
          <S.DetailTitle>{community.title}</S.DetailTitle>
        </S.DetailInfo>
        <SIC.CardRight>
          {community.my_liked?<>
            <SIC.CardLike icon={faHeart}/>        
          </>:<>
            <SIC.CardLike icon={R.faHeart}/>
          </>}
          <SIC.CardLikeCount>{community.liked}</SIC.CardLikeCount>
        </SIC.CardRight>
      </S.DetailTop>
      <S.DetailSubjectWrapper>
        <SI.IssueMessage2>이머징 이슈</SI.IssueMessage2>
        <SI.IssueSubjectText>{community.resultSubject}</SI.IssueSubjectText>
        <SI.IssueMessage2>관련 키워드</SI.IssueMessage2>
        <SI.IssueSubjectText>
        {community.categoryList && community.categoryList.map((category, idx)=>(
          <SI.IssueCategory key={idx}>{category.category}</SI.IssueCategory>
        ))}
        </SI.IssueSubjectText>
        <SI.IssueIndicatorBox>
          {IndicatorModalOpen &&
            <IndicatorModal modalOpenHandler={IndicatorModalOpenHandler}/>
          }
          <SI.IssueMessage>
            <>이머징 이슈 평가 지표</>
            <SI.IssueInfoMore
              icon={faInfoCircle}
              onClick={()=>{IndicatorModalOpenHandler()}}  
            />
          </SI.IssueMessage>
          <SI.IssueIndicatorCard>
            <IndicatorCard
              avgGrowthRate={community.avgGrowthRate}
              increaseRate={community.avg_increase}
            />
            <IndicatorCard
              influenceFactor={community.influenceFactor}
              increaseRate={community.influ_increase}
            />
          </SI.IssueIndicatorCard>
        </SI.IssueIndicatorBox>
      </S.DetailSubjectWrapper>
      <S.CommunityPostWrapper>
        <SI.IssueMessage2>이머징 이슈</SI.IssueMessage2>
        <S.CommunityPostContent>
          {(community.content || "").replace(/\r\n/g, "\n")}
        </S.CommunityPostContent>
        <CreateComment />
        <S.CommunityCommentWrapper>
          {comments.map((comment, idx)=>(
            <S.CommunityCommentBox key={idx}>
              <S.DetailCreated>
                <S.DetailCreatedText>{comment.created_at}</S.DetailCreatedText>
                <S.DetailCreatedText>ID : {comment.author}</S.DetailCreatedText>
              </S.DetailCreated>
              <S.CommunityCommentContent>{comment.content}</S.CommunityCommentContent>
            </S.CommunityCommentBox>
          ))}
        </S.CommunityCommentWrapper>
      </S.CommunityPostWrapper>
    </S.DetailWrapper>
  )
}