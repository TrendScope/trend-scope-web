import * as S from "./Styled.jsx";
import * as SM from "../main/Styled.jsx";
import factor1 from "../image/factor1.svg"
import factor2 from "../image/factor2.svg"

export default function IssueCard() {
  return(
    <S.IssueCardWrapper>
      <S.IssueCardDate>2024.02.20</S.IssueCardDate>
      <S.IssueCardSubject>배송경로 최적화</S.IssueCardSubject>
      <S.IssueCardKeyword>드론</S.IssueCardKeyword>
      <S.IssueCategoryBox>
        <SM.SearchCheckedCategory>안전</SM.SearchCheckedCategory>
        <SM.SearchCheckedCategory>안전</SM.SearchCheckedCategory>
        <SM.SearchCheckedCategory>안전</SM.SearchCheckedCategory>
        <SM.SearchCheckedCategory>안전</SM.SearchCheckedCategory>
        <SM.SearchCheckedCategory>안전</SM.SearchCheckedCategory>
        <SM.SearchCheckedCategory>안전</SM.SearchCheckedCategory>
        <SM.SearchCheckedCategory>안전</SM.SearchCheckedCategory>
      </S.IssueCategoryBox>
      <S.IssueFactorBox>
        <S.IssueFactor>
          <S.CardIcon src={factor1} alt="factor1"/>
          <S.IssueFactorPercent>45%</S.IssueFactorPercent>
        </S.IssueFactor>
        <S.IssueFactor>
          <S.CardIcon src={factor2} alt="factor2"/>
          <S.IssueFactorPercent>63%</S.IssueFactorPercent>
        </S.IssueFactor>
      </S.IssueFactorBox>
    </S.IssueCardWrapper>
  )
}