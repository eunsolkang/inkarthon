import styled  from "styled-components"


const StyleThalamus = styled.div`
background-color: rgb(35, 57, 255);
height: 100vh;
display: flex;
flex-direction: column ;
align-items: center;
`
const StyleTitle = styled.header`
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 50px;
text-align: center;
color:#FFFFFF;
`
const StyleTeam = styled.div`

`
const StyleMember = styled.div`
`


const Thalamus = () =>{
    return (
        <StyleThalamus>
            <StyleTitle>인커톤 2023</StyleTitle>
        </StyleThalamus>
    )
}

export default Thalamus