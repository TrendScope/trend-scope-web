import * as S from "./Styled.jsx"
import factor1 from "../image/factor1.svg"
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"

export default function IndicatorCard() {
  const dummy = {
    'name': '평균 증가율',
    'percent': '45',
    'avg': '15'
  }
  return(
    <S.CardContainer>
      <S.CardTitle>
        <S.CardIcon src={factor1} alt="factor1"/>
        <S.CardText>{dummy.name}</S.CardText>
      </S.CardTitle>
      <S.CardPercent
        percent={dummy.percent}
      >
        <S.CardPercentInner>{dummy.percent}%</S.CardPercentInner>
      </S.CardPercent>
      <S.CardPercentRage
        avg={parseInt(dummy.avg)}
      >
        <S.CardPercentIcon
          icon={(parseInt(dummy.avg)>0)?faSortUp:faSortDown}
        />
        <>10%</>
      </S.CardPercentRage>
    </S.CardContainer>
  )
}