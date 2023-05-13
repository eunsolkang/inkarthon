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
    margin-bottom: 2rem;
    font-size: 50px;
    line-height: 50px;;
    color: white;
`


const StyledVote = styled.div`
min-height: 100vh;
    padding: 45px 25px;
    background-color: rgb(35, 57, 255);
    background-image: url(${backPrice});
    background-repeat:no-repeat;
    background-size: cover;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items: flex-start;
    position: relative;
    .diagonal3 {
        position: absolute;
        width: 0px;
        height: 0px;
        bottom: 0;
        right: 0;
        border-bottom: 40px solid black;
        border-right: 40px solid rgba(0,0,0,0);
        
        transform: scale(10) rotate(-90deg)!important; 
        
    }
`

const StyleTeam= styled.div`
font-size: 50px;
margin-bottom: 1rem;
`
const StyleMember = styled.div`
display:flex;
width: 70%;
min-width: 217px;
justify-content:space-between;
font-size: 30px;
padding:0;
`
const StylePrise = styled.div`
font-size: 70px;
line-height: 70px;;
color: gold;
margin-bottom: 1rem;
`
const StyledP = styled.p`
text-align: left;
display:flex;
line-height: 50px;
margin:0;
span{
    color: gold;
}
`
const StyleBtn = styled.button`
    background-color:transparent;
    all: unset;
    position: absolute;
    bottom: 10px;
    left: 10px;
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
            <StyleBtn><img onClick={BtnClick} src={downloadbtn}/></StyleBtn>
        </StyledVote>
    )
}

export default Result