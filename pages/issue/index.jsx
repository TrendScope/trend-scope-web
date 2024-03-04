import { faBookBookmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../component/_styled/issueStyled.jsx";
import IssueCard from "@/component/issue/IssueCard.jsx";
import { useState } from "react";
import IssueListDropdown from "@/component/issue/IssueListDropdown.jsx";

export default function IssueList() {
  const [currentType, setCurrentType] = useState('최신');
  const types = ['최신', '평균 증가율', '영향력 지수'];

  const [dropdown, setDropdown] = useState(false);
  const handlerDropdown = () => {
    setDropdown(!dropdown);
  };

  return(
    <S.IssueWrapper>
      <S.IssueIcon icon={faBookBookmark} />
      <S.IssueMessage>검색 내역 모음</S.IssueMessage>
      <S.IssueMessage2>도출한 이머징 이슈를 한곳에서 모아보세요</S.IssueMessage2>
      <S.IssueContainer>
        <S.IssueMessage>
          <>{currentType} 순</>
          <S.IssueSortIcon
            onClick={()=>{handlerDropdown()}}
            icon={faChevronDown}/>
        </S.IssueMessage>
        {dropdown && (
        <IssueListDropdown
          types={types}
          setCurrentType={setCurrentType}
          currentType={currentType}
        />
        )}
        <IssueCard />
        <IssueCard />
      </S.IssueContainer>
    </S.IssueWrapper>
  )
}