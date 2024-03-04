import * as SL from "../component/_styled/layoutStyled.jsx";
import * as SI from "../component/_styled/issueStyled.jsx";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import logo_image from "../component/image/logo_navy.svg";
import logo_text from "../component/image/logo_text_navy.svg";
import { useRouter } from "next/router.js";

export default function Main() {
  const router = useRouter();

  return (
    <SI.IssueWrapper>
      <SI.IssueIcon icon={faQuestionCircle}/>
      <SI.IssueMessage>이머징 이슈란 무엇일까요?</SI.IssueMessage>
      <SI.IssueMessage2>미래의 트렌드를 위한 대비, 이머징 이슈</SI.IssueMessage2>
      <SI.IssueContainer>
        <SI.IssueUpSection>
          <SI.IssueMessage>이머징 이슈란??</SI.IssueMessage>
          <SI.IssueInfoText>변화의 생애주기에서 초기 단계에 있다고<br />판단되는 이슈를 뜻합니다</SI.IssueInfoText>
          <SI.IssueSource>출처 : 국회미래연구원</SI.IssueSource>
        </SI.IssueUpSection>

        <SI.IssueUpSection>
          <SI.IssueMessage>왜 이머징 이슈에<br />관심가져야할까??</SI.IssueMessage>
          <SI.IssueInfoText>현재로선 이머징 이슈의 성장 가능성을<br />
          뒷받침할 경험적 근거가 부족하여<br />
          이슈 자체의 사회적 파급성을 드러내기 쉽지 않아요<br />
          이 때문에 미래 연구자들은 이머징 이슈로 정부의 정책<br />
          담당자를 설득해 대응책을 논의하기 어렵다고 토로합니다<br />
          그러는 와중 이머징 이슈가 사회적으로 파급력을 나타내면<br />
          그때는 이미 상황이 늦은거죠</SI.IssueInfoText>
        </SI.IssueUpSection>

        <SI.IssueUpSection>
          <SL.Logo onClick={()=>{router.push(`/`)}}>
            <SL.LogoImage src={logo_image} alt="logo_image" />
            <SL.LogoText src={logo_text} alt="logo_text" />
          </SL.Logo>
        </SI.IssueUpSection>
        
        <SI.IssueUpSection>
          <SI.IssueInfoText>“TrendScope”는 이러한 이머징 이슈를 수면 위로<br />
          끌어올리는 역할을 해요<br />
          생성형 AI를 활용하여 이머징 이슈를 도출하고,<br />
          도출한 이머징 이슈에 대해서 사람들과 대화하면서<br />
          파급력을 확인해보세요!!<br />
          </SI.IssueInfoText>
        </SI.IssueUpSection>

        <SI.IssueUpSection>
          <SI.CommunityBtn
            onClick={()=>{router.push(`/`)}}
          >메인으로 돌아가기</SI.CommunityBtn>
        </SI.IssueUpSection>
      </SI.IssueContainer>
    </SI.IssueWrapper>
  )
}
