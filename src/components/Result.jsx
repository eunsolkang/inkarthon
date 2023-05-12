import styled  from "styled-components"
import { Dimmer, Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom"
import useTeam from "../hooks/useTeams"

const StyledTitle = styled.div`
width: 300px;
height: 200px;
    font-size: 50px;
    line-height: 50px;;
    color: white;
`


const StyledVote = styled.div`
    height: 100vh;
    padding: 45px 0px;
    background-color: rgb(35, 57, 255);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items: center;
`

const StyleTeam= styled.div`
width: 300px;
height: 100px;
font-size: 50px;
`
const StyleMember = styled.div`
display:flex;
justify-content:space-between;
width: 300px;
height: 50px;
font-size: 30px;
padding:0;
`
const StylePrise = styled.div`
width: 500px;
height: 100px;
font-size: 100px;
`
const StyledP = styled.p`
width: 500px;
height: 50px;
display:flex;
line-height: 50px;
justify-contents:center;
margin:0;
`


const Result = () =>{
    const {team} = useParams();
    const {teams} = useTeam();
    const teamData = teams[team];
    if(teams.length === 0 || teamData.prise===null){
        return (
            <StyledVote>
                <Dimmer active>
                    <Loader>
                        잠시만 기다려주세요!
                    </Loader>
                </Dimmer>
            </StyledVote>
        )
    }
    const {name, members,prise} = teamData;
    return (
        <StyledVote>
            <StyledTitle>2023<br/>인터페이스<br/>해커톤</StyledTitle>
            <StylePrise>{prise}</StylePrise>
            <StyleTeam><StyledP>{Number(team)+1}조</StyledP><StyledP>{name}</StyledP></StyleTeam>
            {members?.map(element=>{
                const {name,position} = element;
                return (<StyleMember><StyledP>{position}</StyledP><StyledP>{name}</StyledP></StyleMember>)
            })}
        </StyledVote>
    )
}

export default Result