import { useParams,useNavigate } from "react-router-dom";
import { styled } from "styled-components"
import useTeam from "../hooks/useTeams";
import { StyledTitle } from "./Vote";
import { Dimmer, Loader } from "semantic-ui-react";
import { useState } from "react";
const questions = [
   {
     text: "활용성이 높은가요?",
     type: "plan"
   },
   {
    text: "디이노로 전과해도 될 법한 디자인인가요?",
    type: "design"
  },
  {
    text: "아이디어의 구현 완성도가 높은가요?",
    type: "develop"
  },
  {
    text: "발표가 재치있었나요?",
    type: "plan"
  },
  {
    text: "독창성과 차별성을 가지고 있나요?",
    type: "plan"
  },
  {
    text: "아이디어가 지속가능하며 더욱 확장시킬 수 있나요?",
    type: "plan"
  },
  {
    text: "사용자가 사용하기 편리한가요?",
    type: "design"
  },
  
]
const StyledQuestion = styled.div`
    padding: 45px 25px;
    height: 100vh;
    background-color: rgb(35, 57, 255);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .team-name{
        font-size: 20px;
        line-height: 20px;
        text-align: center;
        color: white;
        margin-top: .5rem;
    }
    .question{
        margin-top: 2rem;
        font-size: 50px;
        line-height: 50px;
    }
    table{
        margin-top: 1rem;
    }
    td{
        width: 100px;
        height: 100px;
        span{
            padding: 12px;
            background-color: white;
            border-radius: 100%;
            color: black;
            width: 75px;
            height: 75px;
            font-size: 50px;
            line-height: 50px;
            text-align: center;
            margin: 10px;
            display: block;
        }
        
    }
`
const Question = () => {
    const {team} = useParams();
    const {teams} = useTeam();
    const teamData = teams[team];
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    
    if(teams.length === 0){
        return (
            <StyledQuestion>
                <Dimmer active>
                    <Loader>
                        잠시만 기다려주세요!
                    </Loader>
                </Dimmer>
            </StyledQuestion>
        )
    }

    const onClickScore = (score) => {
        if(index === 6){
            //투표종료
            const voted = window.localStorage.getItem('voted');
            const v = voted ? voted.split(',') : [];
            
            v[Number(team)] = true;

            window.localStorage.setItem('voted', v);

            
            navigate('/voted');
        }
        else{
            setIndex(index+1);
        }
        
    }

    return (
        <StyledQuestion>
            <StyledTitle>인커톤 2023</StyledTitle>
            <div className="team-name">
                {team}조 {teamData.name}
            </div>
            <div className="question">
                <div>Q{index+1}.</div>
                <div>
                    {questions[index].text}
                </div>
            </div>
            <table>
                <tr>
                    <td>
                        <span onClick={() => onClickScore(1)}>
                            1
                        </span>
                    </td>
                    <td>
                        <span onClick={() => onClickScore(2)}>
                            2
                        </span>
                    </td>
                    <td>
                        <span onClick={() => onClickScore(3)}>
                            3
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span onClick={() => onClickScore(4)}>
                            4
                        </span>
                    </td>
                    <td>
                        <span onClick={() => onClickScore(5)}>
                            5
                        </span>
                    </td>
                    <td>
                        <span onClick={() => onClickScore(6)}>
                            6
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span onClick={() => onClickScore(7)}>
                            7
                        </span>
                    </td>
                    <td>
                        <span onClick={() => onClickScore(8)}>
                            8
                        </span>
                    </td>
                    <td>
                        <span onClick={() => onClickScore(9)}>
                            9
                        </span>
                    </td>
                </tr>
            </table>
        </StyledQuestion>
    )
}

export default Question