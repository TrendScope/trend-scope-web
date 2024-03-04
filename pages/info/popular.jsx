import * as SI from "../../component/_styled/issueStyled.jsx";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router.js";

export default function Main() {
  const router = useRouter();

  return (
    <SI.IssueWrapper>
      <SI.IssueIcon icon={faChartLine}/>
      <SI.IssueMessage>실시간 이슈</SI.IssueMessage>
      <SI.IssueMessage2>각 주제별로 가장 핫한 이슈들을 확인해 보세요</SI.IssueMessage2>
      <SI.IssueContainer>
        <SI.IssueUpSection>
          <SI.CommunityBtn
            onClick={()=>{router.push(`/`)}}
          >메인으로 돌아가기</SI.CommunityBtn>
        </SI.IssueUpSection>
      </SI.IssueContainer>
    </SI.IssueWrapper>
  )
}
