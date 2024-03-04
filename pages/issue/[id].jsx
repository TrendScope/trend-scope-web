import { faCircleCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../component/_styled/issueStyled.jsx";
import SearchIssue from "@/component/main/SerachIssue.jsx";
import IndicatorCard from "@/component/issue/IndicatorCard.jsx";
import { useState } from "react";
import IndicatorModal from "@/component/issue/IndicatorModal.jsx";
import { useRouter } from "next/router.js";

export default function Issue() {
  const router = useRouter();

  const [IndicatorModalOpen, setIndicatorModalOpen] = useState(false);
  const IndicatorModalOpenHandler = () => {
    setIndicatorModalOpen(!IndicatorModalOpen);
  };
  return(
    <S.IssueWrapper>
      <S.IssueIcon icon={faCircleCheck} />
      <S.IssueMessage>이머징 이슈를 도출하였습니다</S.IssueMessage>
      <S.IssueMessage2>결과를 확인해주세요</S.IssueMessage2>
      <S.IssueContainer>
        <SearchIssue 
          isClikable={false}
        />
        <S.IssueSubjectBox>
          <S.IssueMessage>결과값 확인</S.IssueMessage>
          <S.IssueMessage2>이머징 이슈</S.IssueMessage2>
          <S.IssueSubjectText>배송경로 최적화</S.IssueSubjectText>

          <S.IssueMessage2>관련 키워드</S.IssueMessage2>
          <S.IssueSubjectText>
            <S.IssueCategory>결정</S.IssueCategory>
            <S.IssueCategory>결정</S.IssueCategory>
            <S.IssueCategory>결정</S.IssueCategory>
            <S.IssueCategory>이렇게 길면 어떻게 돼???</S.IssueCategory>
            <S.IssueCategory>결정</S.IssueCategory>
            <S.IssueCategory>결정</S.IssueCategory>
            <S.IssueCategory>결정</S.IssueCategory>
            <S.IssueCategory>결정</S.IssueCategory>
            <S.IssueCategory>이렇게 길면 어떻게 돼???</S.IssueCategory>
          </S.IssueSubjectText>

          <S.IssueIndicatorBox>
            {IndicatorModalOpen &&
              <IndicatorModal modalOpenHandler={IndicatorModalOpenHandler}/>
            }
            <S.IssueMessage>
              <>이머징 이슈 평가 지표</>
              <S.IssueInfoMore
                icon={faInfoCircle}
                onClick={()=>{IndicatorModalOpenHandler()}}  
              />
            </S.IssueMessage>
            <S.IssueIndicatorCard>
              <IndicatorCard />
              <IndicatorCard />
            </S.IssueIndicatorCard>
          </S.IssueIndicatorBox>
        </S.IssueSubjectBox>

        <S.CommunityBtn
          onClick={()=>{router.push(`/community/create/write`)}}
        >이슈에 목소리를 더하세요</S.CommunityBtn>
        
      </S.IssueContainer>
    </S.IssueWrapper>
  )
}