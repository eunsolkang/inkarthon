import { styled } from "styled-components"
import { Routes, Route, useParams, Link } from 'react-router-dom';
import useTeam from "../hooks/useTeams";
import { Dimmer, Loader } from "semantic-ui-react";
import NextButton from "./NextButton";


export const StyledTitle = styled.div`
    font-size: 50px;
    line-height: 50px;;
    color: white;
    text-align: center;
`
const StyledTeam = styled.div`
    margin-top: 35px;
    margin-bottom: 25px;
    font-size: 75px;
    line-height: 50px;;
    color: white;
    text-align: center;
`
const StyledVote = styled.div`
    padding: 45px 0px;
    height: 100vh;
    background-color: rgb(35, 57, 255);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items: center;
    .loginTitle{
        text-align: center;
        
        
        margin-bottom: 1rem;
    }
    .team_number{
        text-align: center;
        color: white;

    }
    .team_name{

    }
    .member-list{
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`

const StyledMember = styled.div`
    .profile{
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 100%;
        margin: 1rem 1rem;
    }
    .name{
        text-align: center;
    }
`

export const StyledButton = styled.button`
    font-weight: 400;
    font-size: 40px;
    background-color: #4A5CFF;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px 30px;
    margin-top: 1rem;

`
const Vote = () => {
    const {team} = useParams();
    const {teams} = useTeam();

    const teamData = teams[team];
    if(teams.length === 0){
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

    const memberList = teamData.members.map(member => {
        const {name, position} = member;

        return (
            <StyledMember>
                <div className="profile">
                    
                </div>
                <div className="name">
                    {name}, {position}
                </div>
            </StyledMember>
        )
    })
    return (
        <StyledVote>
            <StyledTitle>인커톤 2023</StyledTitle>
            <StyledTeam>{Number(team)+1}조</StyledTeam>
            <StyledTitle>{teamData.name}조</StyledTitle>
            <div className="member-list">
                {memberList}
            </div>
            <Link to={`/question/${team}`}>
                <StyledButton>
                    VOTE
                </StyledButton>
            </Link>
        </StyledVote>
    )
}

export default Vote;