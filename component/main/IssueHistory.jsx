import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import * as S from "./Styled.jsx"

export default function IssueHistory() {
  return(
    <S.HistoryContainer>
      <S.MainText>검색 내역</S.MainText>
      <S.HistoryMore>
        자세히보기
        <S.HistoryMoreIcon icon={faChevronRight}/>
        </S.HistoryMore>
      <S.HistoryCardSlide>

        <S.HistoryCard>
          <S.HistoryCardTop>
            <S.HistoryCardText>
                <S.HistoryCardDate>2024.02.20</S.HistoryCardDate>
                <S.HistoryCardTheme>주제어: 어쩌구 기술</S.HistoryCardTheme>
            </S.HistoryCardText>
            <S.HistoryCardPercent
                percent={75}
            >
                <S.HistoryCardPercentInner>75%</S.HistoryCardPercentInner>
            </S.HistoryCardPercent>
          </S.HistoryCardTop>
          <S.HistoryCardCategoryBox>
            <S.SearchCheckedCategory>
              안전
            </S.SearchCheckedCategory>
            <S.SearchCheckedCategory>
              주택•건축
            </S.SearchCheckedCategory>
            <S.SearchCategoryMore>...</S.SearchCategoryMore>
          </S.HistoryCardCategoryBox>
        </S.HistoryCard>

        <S.HistoryCard>
          <S.HistoryCardTop>
            <S.HistoryCardText>
                <S.HistoryCardDate>2024.02.20</S.HistoryCardDate>
                <S.HistoryCardTheme>주제어: 드론</S.HistoryCardTheme>
            </S.HistoryCardText>
            <S.HistoryCardPercent
                percent={15}
            >
                <S.HistoryCardPercentInner>15%</S.HistoryCardPercentInner>
            </S.HistoryCardPercent>
          </S.HistoryCardTop>
          <S.HistoryCardCategoryBox>
            <S.SearchCheckedCategory>
            주택•건축
            </S.SearchCheckedCategory>
            <S.SearchCheckedCategory>
              주택•건축
            </S.SearchCheckedCategory>
            <S.SearchCategoryMore>...</S.SearchCategoryMore>
          </S.HistoryCardCategoryBox>
        </S.HistoryCard>

      </S.HistoryCardSlide>
    </S.HistoryContainer>
  )
}