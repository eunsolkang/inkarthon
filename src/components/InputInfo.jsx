import { useState } from "react";
import styled from "styled-components";

const StyledInputInfo=styled.div`
    width: 300px;
    height: 75px;
    margin-bottom: 20px;
    .InputSubject{
        font-size: 20px;
        color: white;
        height:25px;
    }
    .InputContent{
        width: 100%;
        background-color: #4A5CFF;       
        height:50px;
        border-radius: 10px;
        font-size:1.5rem;
        color: whitesmoke;
    }
`

const InputInfo=({InputSubject, onChangeInput, name})=>{
    return(
        
        <StyledInputInfo>
            <div className="InputSubject">
                {InputSubject}
            </div>
            <input name={name} onChange={onChangeInput} className="InputContent"></input>

        </StyledInputInfo>
    )
}

export default InputInfo;