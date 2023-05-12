import styled from "styled-components";
import NextButton from "./NextButton";
import InputInfo from "./InputInfo";
import Main from "./Main";
import { getTeamList } from "../lib/firebase";
import { useEffect, useState } from "react";
import InputTeam from "./InputTeam";
import { useNavigate } from "react-router-dom";

const StyledLogin= styled.div`
    background-color: blue;
    height: 100vh;
    width: 100%;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginTitle{
        color: white;
        display:flex;
        justify-content: center;
        height:50px;
        font-size: 50px;
    }
`

const Login = () => {
    const [teams, setTeams] = useState([]);
    const [name, setName] = useState();
    const [team, setTeam] = useState();
    const navigator = useNavigate();
    
    const handleTeamList = async() => {
        const res = await getTeamList();
        const data = res.val();
        console.log(data);
        setTeams(data);
    }
    useEffect(() => {
        handleTeamList();
    }, []);

    const showAlert = () => {
        window.alert("어라라 뭔가가 잘못되었어요");
    };

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
    }

    const handleSelectOption =(e)=>{
        const selectedOption=e.target.value;
        onChangeInput(selectedOption);
    }
    // const [selectedOption, setSelectedOption] = useState([]);
    // const handleSelectOption = (e) => {
    //     setSelectedOption(e);
    // }

    // const [selectedOption, setSelectedOption] = useState([]);
    // const handleSelectOption = (e) => {
    //     const option = e.target.value;
    //     setSelectedOption(option);
    //     console.log('선택된 옵션:', option);
    //     onChangeInput(option); // 선택된 정보를 부모 컴포넌트로 전달
    // };

    const ButtonClick = (n) => {
        let flag=0;
        let s;
        let t;
        for (let i = 0; i < 7; i++) {
            if (teams[i].name === team) {
                for (let j=0;j<4;j++){
                    if(teams[i].members[j].name===name){
                        flag=1;
                        s = name
                        t = i;
                    }
                    // console.log(teams[i].name,teams[i].members[j]);
                }
            }
        }
        if(flag===1){
            window.localStorage.setItem('name', s);
            window.localStorage.setItem('team', t);
            navigator('/');
        }
        else showAlert();
        
    }
    
    return (
        <StyledLogin>
            <div className="loginTitle">2023</div>
            <div className="loginTitle">인터페이스</div>
            <div className="loginTitle">해커톤</div>

            <InputInfo name="name" InputSubject={"이름"}   onChangeInput={(e) => setName(e.target.value)}>


            </InputInfo>
            <InputTeam name="team" InputSubject={"속한 조"} handleSelectOption={(e)=>setTeam(e.target.value)}>
            
            </InputTeam>

            <NextButton onClickButton={ButtonClick}>
            VOTE
            </NextButton>
        </StyledLogin>
    )
}
export default Login;