import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../component/_styled/communityStyled.jsx";
import * as SI from "../../component/_styled/issueStyled.jsx";
import { useState } from "react";
import IssueCard from "@/component/issue/IssueCard.jsx";

export default function Create() {
  const [currentType, setCurrentType] = useState('최신 순');
  const types = ['최신 순', '평균 증가율 순', '영향력 지수 순'];
  
  const [dropdown, setDropdown] = useState(false);
  const handlerDropdown = () => {
    setDropdown(!dropdown);
  };

  return(
    <S.CreateWrapper>
      <S.CreateText>글을 작성할 이머징 이슈를 선택해 주세요</S.CreateText>
      <SI.IssueMessage>
        <>{currentType}</>
        <SI.IssueSortIcon icon={faChevronDown}/>
      </SI.IssueMessage>

      <IssueCard />
      <IssueCard />
    </S.CreateWrapper>
  )
}