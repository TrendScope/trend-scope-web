import { faChevronDown, faChevronUp, faSearch } from "@fortawesome/free-solid-svg-icons"
import * as S from "./Styled.jsx"
import { useEffect, useState } from "react"

export default function SearchIssue({ isClikable }) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categoryOpenHandler = () => {
    if (isClikable) {
      setCategoryOpen(!categoryOpen);
    }
  };

  const categories = ['주택•건축', '경제', '교통', '환경', '복지', '안전', '문화', '행정', '과학•기술'];
  const [checkedCategories, setCheckedCategories] = useState([]);
  const handleCheckboxChange = (category) => {
    const newCheckedCategories = [...checkedCategories];
    const index = newCheckedCategories.indexOf(category);

    if (index === -1) {
      newCheckedCategories.push(category);
    } else {
      newCheckedCategories.splice(index, 1);
    }

    setCheckedCategories(newCheckedCategories);
  };

  const [theme, setTheme] = useState('');
  const handleSearchChange = (e) => {
    setTheme(e.target.value)
  };

  return(
    <S.SearchContainer>
      <S.SearchCategory>
        <S.SearchCategoryList>
          {checkedCategories.length>0?<>
            {checkedCategories.map((category)=>(
              <S.SearchCheckedCategory key={category}>
                {category}
              </S.SearchCheckedCategory>
            ))}
            {/* <S.SearchCategoryMore>...</S.SearchCategoryMore>
            <S.SearchCategoryCount>{checkedCategories.length}</S.SearchCategoryCount> */}
          </>:<>
            카테고리를 추가해 주세요          
          </>}
        </S.SearchCategoryList>
        <S.SearchCategoryIcon
          icon={(categoryOpen)?faChevronUp:faChevronDown}
          onClick={categoryOpenHandler}/>
      </S.SearchCategory>
      {categoryOpen && 
        <S.SearchCategoryModal>
          {categories.map((category, idx)=>(
            <S.SearchCategoryBox
              key={idx}
            >
              <S.SearchCategoryInput 
                type="checkbox"
                id={idx}
                value={category}
                checked={checkedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <S.SearchCategoryLabel htmlFor={idx}>{category}</S.SearchCategoryLabel>
            </S.SearchCategoryBox>
          ))}
        </S.SearchCategoryModal>}
      <S.SearchTheme>
        <S.SearchThemePlaceholder
          placeholder="주제어를 입력해 주세요"
          value={theme}
          onChange={handleSearchChange}
          type="text"
        />
        <S.SearchThemeBtn
          $isactive={(theme.length>0)&&(checkedCategories.length>0)?`true`:`false`}
        >
          <S.SearchThemeBtnFont icon={faSearch}/>
        </S.SearchThemeBtn>
      </S.SearchTheme>
    </S.SearchContainer>
  )
}