import { useRef } from "react";
import styled  from "styled-components"
import { Dimmer, Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom"
import useTeam from "../hooks/useTeams"
import backPrice from "../image/backPrice.png"
import downloadbtn from "../image/downloadbtn.png"
import html2canvas from 'html2canvas';
import insta from "../image/insta.png"


const StyledTitle = styled.div`
width: 300px;
height: 200px;
    font-size: 50px;
    line-height: 50px;;
    color: white;
`


const StyledVote = styled.div`
min-height: 100vh;
    padding: 45px 0px;
    background-image: url(${backPrice});
    background-repeat:no-repeat;
    background-size: cover;
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
width: 300px;
height: 100px;
font-size: 70px;
`
const StyledP = styled.p`
width: 300px;
height: 50px;
display:flex;
line-height: 50px;
margin:0;
`
const StyleBtn = styled.button`
    background-color:transparent;
    all: unset;
    position: absolute;
  bottom: 0;
  left: 0;
`

const Result = () => {
    const captureRef = useRef(null)
    const {team} = useParams();
    const {teams} = useTeam();
    const teamData = teams[team];
    const BtnClick = () =>{
        if (captureRef.current) {
            html2canvas(captureRef.current).then((canvas) => {
              const url = canvas.toDataURL('image/png');
              const a = document.createElement('a');
              a.download = 'screenshot.png';
              a.href = url;
              a.click();
            });
    }}
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

        <StyledVote ref={captureRef}>
            <StyledTitle>2023<br/>인터페이스<br/>해커톤</StyledTitle>
            <StylePrise>{prise}</StylePrise>
            <StyleTeam><StyledP>{Number(team)+1}조</StyledP><StyledP>{name}</StyledP></StyleTeam>
            {members?.map(element=>{
                const {name,position} = element;
                return (<StyleMember key={name}><StyledP>{position}</StyledP><StyledP>{name}</StyledP></StyleMember>)
            })}
            <StyleBtn><img onClick={BtnClick} src={downloadbtn}/><img src={insta}/></StyleBtn>
        </StyledVote>
    )
}

export default Result