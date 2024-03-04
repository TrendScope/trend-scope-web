import IssueListDropdown from "@/component/issue/IssueListDropdown.jsx";
import * as SI from "../../component/_styled/issueStyled.jsx";
import { faChartLine, faChevronDown, faL } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router.js";
import { useState } from "react";
import example from "../../component/image/example.png";

export default function Main() {
  const router = useRouter();

  const categories = ['주택•건축', '경제', '교통', '환경', '복지', '안전', '문화', '행정', '과학•기술'];
  const [currentCategory, setCurrentCategory] = useState('주택•건축');

  const [dropdown, setDropdown] = useState(false);
  const handlerDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <SI.IssueWrapper>
      <SI.IssueIcon icon={faChartLine}/>
      <SI.IssueMessage>실시간 이슈</SI.IssueMessage>
      <SI.IssueMessage2>각 주제별로 가장 핫한 이슈들을 확인해 보세요</SI.IssueMessage2>
      <SI.IssueContainer>
        <SI.IssueMessage>
          <>{currentCategory}</>
          <SI.IssueSortIcon
            onClick={()=>{handlerDropdown()}}
            icon={faChevronDown}/>
        </SI.IssueMessage>
        {dropdown && (
          <IssueListDropdown
            types={categories}
            setCurrentType={setCurrentCategory}
            currentType={currentCategory}
          />
        )}

        <SI.IssuePopularResultImg src={example} alt="popular_img"/>
        <SI.IssueUpSection>
          <SI.CommunityBtn
            onClick={()=>{router.push(`/`)}}
          >메인으로 돌아가기</SI.CommunityBtn>
        </SI.IssueUpSection>
      </SI.IssueContainer>
    </SI.IssueWrapper>
  )
}
