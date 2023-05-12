import styled  from "styled-components"
import { StyledTitle } from "./Vote"
import { Dimmer, Loader } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import useTeam from "../hooks/useTeams"

const StyledVote = styled.div`
    min-height: 100vh;
    padding: 45px 0px;
    background-color: rgb(35, 57, 255);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items: center;
`

const StyleTeam= styled.div`
margin-top:50px;
width: 300px;
height: 150px;
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
width: 300px;
height: 50px;
font-size: 50px;
margin-top: 10px;
display:flex;
flex-direction:column;
`
const StyledP = styled.p`
width: 300px;
height: 50px;
display:flex;
line-height: 50px;
margin:0;
`


const Thalamus = () =>{
    const navigate = useNavigate();
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
    const toResult = () =>{
        navigate(`/Result/${team}`)
    }
    const {name, members,prise} = teamData;
    return (
        <StyledVote>
            <StyledTitle>인커톤 2023</StyledTitle>
            <StyleTeam><StyledP>{Number(team)+1}조</StyledP><StyledP>{name}</StyledP></StyleTeam>
            {members?.map(element=>{
                const {name,position} = element;
                return (<StyleMember key={name}><StyledP>{position}</StyledP><StyledP>{name}</StyledP></StyleMember>)
            })}
            <StylePrise onClick={toResult}><StyledP >🥇</StyledP><StyledP>{prise}</StyledP></StylePrise>
        </StyledVote>
    )
}

export default Thalamus