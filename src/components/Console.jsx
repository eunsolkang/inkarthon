import { styled } from "styled-components";
import useTeam from "../hooks/useTeams"

const StyledConsole = styled.div`
    background-color: blue;
    height: 100vh;
    width: 100%;
    color: white;
    padding: 45px 20px;
    
    .team{
        width: 300px;
        font-size: 24px;
        line-height: 24px;
    }
    .team-box{
        margin-bottom: 2rem;
    }
`
const Console = () => {
    const {teams} = useTeam();

    const teamList = teams.map(team => {
        const {scores, name} = team;
        const {develop, design, plan} = scores;
        const total = Number(develop) +  Number(design) + Number(plan);
        return (
            <div className="team-box">
                <div className="team">{name}조 </div>개발: {develop}, 디자인: {design}, 기획:{plan}
                <div className="total">
                    {total}점
                </div>
            </div>
        )
    })
    return (
        <StyledConsole>
            {teamList}
        </StyledConsole>
    )
}

export default Console