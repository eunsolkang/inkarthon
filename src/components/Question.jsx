import { useParams } from "react-router-dom";
import { styled } from "styled-components"
import useTeam from "../hooks/useTeams";
import { StyledTitle } from "./Vote";
import { Dimmer, Loader } from "semantic-ui-react";

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
        font-size: 50px;
        line-height: 50px;
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


    return (
        <StyledQuestion>
            <StyledTitle>인커톤 2023</StyledTitle>
            <div className="team-name">
                {team}조 {teamData.name}
            </div>
            <div className="question">
                <div>Q1.</div>
                <div>
                    참신한 기획인가요?
                </div>
            </div>
            <table>
                <tr>
                    <td>
                        <span>
                            1
                        </span>
                    </td>
                    <td>
                        <span>
                            2
                        </span>
                    </td>
                    <td>
                        <span>
                            3
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>
                            4
                        </span>
                    </td>
                    <td>
                        <span>
                            5
                        </span>
                    </td>
                    <td>
                        <span>
                            6
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>
                            7
                        </span>
                    </td>
                    <td>
                        <span>
                            8
                        </span>
                    </td>
                    <td>
                        <span>
                            9
                        </span>
                    </td>
                </tr>
            </table>
        </StyledQuestion>
    )
}

export default Question