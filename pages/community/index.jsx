import { faMessage, faMagnifyingGlass, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as SI from "../../component/_styled/issueStyled.jsx";
import * as S from "../../component/_styled/communityStyled.jsx";
import * as SU from "../../component/_styled/userStyled.jsx";
import CommunityCard from "@/component/community/CommunityCard.jsx";
import { useState } from "react";
import IssueListDropdown from "@/component/issue/IssueListDropdown.jsx";

export default function Community() {
  const types = ['최신 순', '좋아요 순'];
  const [currentType, setCurrentType] = useState('최신 순');

  const [dropdown, setDropdown] = useState(false);
  const handlerDropdown = () => {
    setDropdown(!dropdown);
  };

  return(
    <SI.IssueWrapper>
      <SI.IssueIcon icon={faMessage}/>
      <SI.IssueMessage>커뮤니티</SI.IssueMessage>
      <SI.IssueMessage2>생성한 이머징 이슈에 대해서 의견을 나눠보세요</SI.IssueMessage2>
      <SI.IssueContainer>
        <S.CommuSearch>
          <S.CommuSearchIcon icon={faMagnifyingGlass}/>
          <S.CommuSearchPlaceholder
            placeholder="검색어를 입력해 주세요"
          />
        </S.CommuSearch>
        <S.CommuTop>
          <S.CommuSort>
            <>{currentType}</>
            <S.CommuIcon
              icon={faChevronDown}
              onClick={()=>{handlerDropdown()}}
            />
            {dropdown && (
              <IssueListDropdown
                types={types}
                setCurrentType={setCurrentType}
                currentType={currentType}
                location={false}
              />
            )}
          </S.CommuSort>
          <S.CommuWriteBtn>글 쓰기</S.CommuWriteBtn>
        </S.CommuTop>
        <SU.MypageList>
          <CommunityCard />
          <S.CardLine />
          <CommunityCard />
        </SU.MypageList>
      </SI.IssueContainer>
    </SI.IssueWrapper>
  )
}