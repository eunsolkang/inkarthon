import { useState } from "react";
import styled from "styled-components";

const StyledInputTeam=styled.div`
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

const InputTeam=({InputSubject, handleSelectOption, name})=>{
    
    return(
        
        <StyledInputTeam>
            <div className="InputSubject">
                {InputSubject}
            </div>            
            <select className="InputContent"  onChange={handleSelectOption}>
                <option value="졸립조">졸립조</option>
                <option value="뻥이조">뻥이조</option>
                <option value="응애조">응애조</option>
                <option value="몰빵사조">몰빵사조</option>
                <option value="인사하조">인사하조</option>
                <option value="육사시미">육사시미</option>
                <option value="정래네">정래네</option>
            </select>
        </StyledInputTeam>
    )
}

export default InputTeam;