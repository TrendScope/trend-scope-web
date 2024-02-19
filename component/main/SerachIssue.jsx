import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons"
import * as S from "./Styled.jsx"

export default function SearchIssue() {
  return(
    <S.SearchContainer>
      <S.SearchText>원하는 분야의 이머징 이슈를 도출해 보세요</S.SearchText>
      <S.SearchCategory>
        <S.SearchCategoryList>
            카테고리를 추가해 주세요
        </S.SearchCategoryList>
        <S.SearchCategoryIcon icon={faChevronDown}/>
      </S.SearchCategory>
      <S.SearchTheme>
        <S.SearchThemePlaceholder
          placeholder="주제어를 입력해 주세요"
        />
        <S.SearchThemeBtn>
          <S.SearchThemeBtnFont icon={faSearch}/>
        </S.SearchThemeBtn>
      </S.SearchTheme>
    </S.SearchContainer>
  )
}