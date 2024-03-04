import { faMessage, faMagnifyingGlass, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as SI from "../../component/_styled/issueStyled.jsx";
import * as S from "../../component/_styled/communityStyled.jsx";
import * as SU from "../../component/_styled/userStyled.jsx";
import CommunityCard from "@/component/community/CommunityCard.jsx";

export default function Community() {
  return(
    <SI.IssueWrapper>
      <SI.IssueIcon icon={faMessage}/>
      <SI.IssueMessage>커뮤니티</SI.IssueMessage>
      <SI.IssueMessage2>생성한 이머징 이슈에 대해서 의견을 나눠보세요</SI.IssueMessage2>
      <SI.IssueContainer>
        <S.CommuSearch>
          <S.CommuSearchIcon icon={faMagnifyingGlass} />
          <S.CommuSearchPlaceholder
            placeholder="검색어를 입력해 주세요"
          />
        </S.CommuSearch>
        <S.CommuTop>
          <S.CommuSort>
            <>최신 순</>
            <S.CommuIcon icon={faChevronDown}/>
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