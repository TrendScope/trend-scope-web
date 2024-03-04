import { faMessage, faMagnifyingGlass, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as SI from "../../component/_styled/issueStyled.jsx";
import * as S from "../../component/_styled/communityStyled.jsx";
import * as SU from "../../component/_styled/userStyled.jsx";
import CommunityCard from "@/component/community/CommunityCard.jsx";
import { useEffect, useState } from "react";
import IssueListDropdown from "@/component/issue/IssueListDropdown.jsx";

export default function Community() {
  const types = ['최신 순', '좋아요 순'];
  const [currentType, setCurrentType] = useState('최신 순');

  const [dropdown, setDropdown] = useState(false);
  const handlerDropdown = () => {
    setDropdown(!dropdown);
  };

  const [communities, setCommunityies] = useState([]);
  const fetchCommunities = async () => {
    try {
      // const response = await API.get(``);
      // const data = response.data;

      // dummy
      const dummy = {
        "isSuccess": true,
        "code": "COMMON200",
        "message": "성공입니다.",
        "result": {
            "communityList": [
                {
                    "communityId": 1,
                    "resultSubject": "배송경로 최적화",
                    "categoryList": [
                      {
                          "category": "과학 • 기술",
                      },
                      {
                          "category": "안전",
                      },
                      {
                          "category": "환경",
                      },
                      {
                          "category": "주택 • 건축",
                      }
                    ],
                    "title": "이 이슈는 어때요??",
                    "content": "글이 이정도라면.. 어떠세요? \n 줄이 바뀌기도 하나요?",
                    "author": "Dongguk2024",
                    "created_at": "2024.01.20",
                    "liked": "51",
                    "my_liked": true,
                    "avgGrowthRate": 45,
                    "influenceFactor": 63                   
                },
                {
                  "communityId": 2,
                  "resultSubject": "배송경로 최적화",
                  "categoryList": [
                    {
                        "category": "과학 • 기술",
                    },
                    {
                        "category": "안전",
                    },
                    {
                        "category": "환경",
                    },
                    {
                        "category": "주택 • 건축",
                    }
                  ],
                  "title": "이 이슈는 어때요??",
                  "content": "글이 이정도라면.. 어떠세요? \n 줄이 바뀌기도 하나요?",
                  "author": "Dongguk2024",
                  "created_at": "2024.01.20",
                  "liked": "40",
                  "my_liked": false,
                  "avgGrowthRate": 45,
                  "influenceFactor": 63  
                }
            ]
        }
      }

      setCommunityies(dummy.result.communityList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    fetchCommunities();
  }, [])
  
  useEffect(() => {
    console.log(communities); // Log the updated state here
  }, [communities, ]);

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
          {communities.map((community, idx)=>(
            <S.CommuList key={idx}>
              <CommunityCard community={community}/>
              <S.CardLine />
            </S.CommuList>
          ))}

        </SU.MypageList>
      </SI.IssueContainer>
    </SI.IssueWrapper>
  )
}