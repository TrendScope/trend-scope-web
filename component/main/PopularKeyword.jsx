import { useState } from "react"
import * as S from "./Styled.jsx"
import CommunityCard from "../community/CommunityCard.jsx";

export default function PopularKeyword() {
  const types = ['일간', '주간', '월간'];
  const [currentType, setCurrentType] = useState('일간');
  const handlerTypeChange = (type) => {
    setCurrentType(type);
  };
  return(
    <S.SearchContainer>
      <S.MainText>커뮤니티 인기 키워드</S.MainText>
      <S.PopularTypeContainer>
        {types.map((type, idx)=>(
          <S.PopularType
            key={idx}
            onClick={()=>handlerTypeChange(type)}
            isselected={type===currentType?'true':'false'}
          >
            {type}
          </S.PopularType>
        ))}
      </S.PopularTypeContainer>
      <S.PopularContent>
        <CommunityCard />
        <S.PopularLine />
        <CommunityCard />
      </S.PopularContent>
    </S.SearchContainer>
  )
}