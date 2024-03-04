import * as S from "./Styled.jsx";
import * as SM from "../main/Styled.jsx";
import factor1 from "../image/factor1.svg"
import factor2 from "../image/factor2.svg"
import { useEffect, useState } from "react";

export default function IssueCard({ issue, selected }) {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    setCategories(issue.categoryList);
  }, [categories]);

  return(
    <S.IssueCardWrapper
      selected={selected}
    >
      <S.IssueCardDate selected={selected}>2024.02.20</S.IssueCardDate>
      <S.IssueCardSubject selected={selected}>{issue.resultSubject}</S.IssueCardSubject>
      <S.IssueCardKeyword selected={selected}>{issue.resultSubject}</S.IssueCardKeyword>
      <S.IssueCategoryBox>
        {categories.map((category, idx)=>(
          <SM.SearchCheckedCategory key={idx}>{category.category}</SM.SearchCheckedCategory>
        ))}
      </S.IssueCategoryBox>
      <S.IssueFactorBox>
        <S.IssueFactor>
          <S.CardIcon src={factor1} alt="factor1"/>
          <S.IssueFactorPercent>{issue.avgGrowthRate}%</S.IssueFactorPercent>
        </S.IssueFactor>
        <S.IssueFactor>
          <S.CardIcon src={factor2} alt="factor2"/>
          <S.IssueFactorPercent>{issue.influenceFactor}%</S.IssueFactorPercent>
        </S.IssueFactor>
      </S.IssueFactorBox>
    </S.IssueCardWrapper>
  )
}