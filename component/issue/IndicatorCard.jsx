import * as S from "./Styled.jsx"
import factor1 from "../image/factor1.svg"
import factor2 from "../image/factor2.svg"
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"

export default function IndicatorCard({ avgGrowthRate, influenceFactor, increaseRate }) {
  const percent = avgGrowthRate? avgGrowthRate : influenceFactor
  return(
    <S.CardContainer>
      <S.CardTitle>
        {avgGrowthRate?<>
          <S.CardIcon src={factor1} alt="factor1"/>
        </>:<>
          <S.CardIcon src={factor2} alt="factor2"/>
        </>}
        <S.CardText>
          {avgGrowthRate?'평균 증가율':'영향력 지수'}
        </S.CardText>
      </S.CardTitle>
      <S.CardPercent
        $percent={percent}
      >
        <S.CardPercentInner>{percent}%</S.CardPercentInner>
      </S.CardPercent>
      <S.CardPercentRage
        avg={increaseRate}
      >
        <S.CardPercentIcon
          icon={(parseInt(increaseRate)>0)?faSortUp:faSortDown}
        />
        <>{increaseRate}%</>
      </S.CardPercentRage>
    </S.CardContainer>
  )
}