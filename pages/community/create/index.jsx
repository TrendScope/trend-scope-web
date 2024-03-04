import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../../component/_styled/communityStyled.jsx";
import * as SI from "../../../component/_styled/issueStyled.jsx";
import { useEffect, useState } from "react";
import IssueCard from "@/component/issue/IssueCard.jsx";
import API from "../../../pages/api.js";
import { useRouter } from "next/router.js";

export default function Create() {
  const router = useRouter();

  const [currentType, setCurrentType] = useState('최신 순');
  const types = ['최신 순', '평균 증가율 순', '영향력 지수 순'];
  
  const [dropdown, setDropdown] = useState(false);
  const handlerDropdown = () => {
    setDropdown(!dropdown);
  };

  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      // const response = await API.get(``);
      // const data = response.data;

      // dummy
      const dummy = {
        "isSuccess": true,
        "code": "COMMON200",
        "message": "성공입니다.",
        "result": {
            "historyList": [
                {
                    "historyId": 1,
                    "resultSubject": "드론",
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
                  "avgGrowthRate": 45,
                  "influenceFactor": 63 
                },
                {
                    "historyId": 2,
                    "resultSubject": "드론2",
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
                  "avgGrowthRate": 45,
                  "influenceFactor": 63 
                }
            ]
        }
      }

      setPosts(dummy.result.historyList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    fetchPosts();
  }, [])
  
  useEffect(() => {
    console.log(posts); // Log the updated state here
  }, [posts, ]);

  const [selectedPost, setSelectedPost] = useState([]);
  const [button, setButton] = useState(false);

  const handlerPostSelected = (post) => {
    if (post===selectedPost) {
      setSelectedPost([]);
      setButton(false);
    } else {
      setSelectedPost(post);
      setButton(true);
    }
  };

  return(
    <S.CreateWrapper>
      <S.CreateText>글을 작성할 이머징 이슈를 선택해 주세요</S.CreateText>
      <SI.IssueMessage>
        <>{currentType}</>
        <SI.IssueSortIcon icon={faChevronDown}/>
      </SI.IssueMessage>

      {posts.map((post, idx)=>(
        <S.CreatePost
          onClick={()=>{handlerPostSelected(post)}}
          key={idx}
        >
          <IssueCard
            issue={post}
            selected={selectedPost===post}
          />
        </S.CreatePost>
      ))}

      <S.CreateBtn
        selected={button}
        onClick={()=>{router.push(`/community/create/write`)}}
      >다음 단계</S.CreateBtn>
    </S.CreateWrapper>
  )
}