import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getTeamList } from "../lib/firebase";
import { Dimmer, Loader } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import useTeam from "../hooks/useTeams";

const StyledMain = styled.div`

    background-color: rgb(35, 57, 255);
    min-height: 100vh;

    display: flex;
    flex-direction: column ;
    justify-content: center;
    /* align-items: center; */
    align-items: center;
    .team-list{
        display: flex;
        flex-direction: column ;
        /* align-items: center; */
        align-items: center;
        width: 100%;
    }
    .team-box{
        font-size: 40px;
        padding: 15px 16px;
        background-color: #4A5BFF;
        color: white;
        
        box-sizing: border-box;
        display: flex;
        line-height: 32px;
        /* width: 60%; */
        
        /* align-items:center ; */
        margin-right: .5rem;
        margin-left: .5rem;
        
    }
    .team-container{
        width: 100%;
        margin-bottom: 20px;
        span{
            color:#FFFF00;
            font-size: 60px;
            line-height: 60px;

        }
    }
    .team-container:nth-child(even){
        /* margin-right: 100px; */
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .team-container:nth-child(odd){
        display: flex;
        align-items: center;
        justify-content: flex-end;

    }
    .loginTitle{
        color: white;
        /* display:flex;
        justify-content: center;
        align-items: center; */
        font-size: 50px;
        line-height: 50px;;
        margin-bottom: 1rem;
    }

    
`

const Main = () => {
    
    const {teams, isPending} = useTeam(); 
    const navigate = useNavigate();
    const voted = window.localStorage.getItem('voted');
    const user = window.localStorage.getItem('name');
    const userTeam = window.localStorage.getItem('team');
    const v = voted ? voted.split(',') : [false, false, false, false, false, false, false];
    console.log(isPending)
    if(!user){
        navigate('/login')
    }
    
    if(v.reduce((acc, vt) => vt === 'true'  ? acc + 1 : acc, 0) >= 6){
        navigate('/pending')
    }
    if(isPending){
        navigate('/lobby')
    }
    const teamList = teams.map((team, i) => {
        const {name} = team;
        if(i % 2 === 0){
            return (
                <div className="team-container" onClick={() => onClickTeam(i)}>
                    <div className="team-box" key={`${i}_teamList`}>
                        {i+1}. {name}
                    </div>
                    <span>
                        {v[i] === 'true' ? '완' : ''}
                    </span>
                </div>
            )
        }else{
            return (
                <div className="team-container"  onClick={() => onClickTeam(i)}>
                    <span>
                        {v[i] === 'true' ? '완' : ''}
                    </span>
                    <div className="team-box" key={`${i}_teamList`}>
                        {i+1}. {name}
                    </div>
                </div>
            )
        }
        
    });

    const onClickTeam = (idx) => {
        if(Number(userTeam) === idx){
            alert('자신의 팀은 투표할 수 없습니다!');
            return;
        }
        if(v[idx] === 'true'){
            alert('이미 투표한 팀입니다!');
        }
        else{
            navigate(`/vote/${idx}`)
        }
    }

    if(teams.length === 0){
        return (
            <StyledMain>
                <Dimmer active>
                    <Loader>
                        잠시만 기다려주세요!
                    </Loader>
                </Dimmer>
            </StyledMain>
        )
    }
    return(
        <StyledMain>
            <div className="loginTitle">인커톤 2023</div>
            <div className="team-list">
                {teamList}
            </div>
        </StyledMain>
    )
}

export default Main;