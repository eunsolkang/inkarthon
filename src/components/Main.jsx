import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getTeamList } from "../lib/firebase";
import { Dimmer, Loader } from "semantic-ui-react";

const StyledMain = styled.div`
    background-color: rgb(35, 57, 255);
    height: 100vh;
    display: flex;
    flex-direction: column ;
    align-items: center;
    .team-box{
        font-size: 40px;
        padding: 10px 16px;
        background-color: #4A5BFF;
        color: white;
        margin-bottom: 20px;
        box-sizing: border-box;
        display: flex;
        line-height: 32px;
    }
    .team-box:nth-child(even){
        
    }
`

const Main = () => {
    const [teams, setTeams] = useState([]);
    
    const handleTeamList = async() => {
        const res = await getTeamList();
        const data = res.val();
        console.log(data);
        setTeams(data);
    }
    useEffect(() => {
        handleTeamList();
    }, []);

    const teamList = teams.map((team, i) => {
    
        const {name} = team;
        return (
            <div className="team-box" key={`${i}_teamList`}>
                {name}
            </div>
        )
    })

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
            {teamList}
        </StyledMain>
    )
}

export default Main;