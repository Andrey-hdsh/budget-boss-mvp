import styled from "styled-components";

export const ContainerModal = styled.div`
color: var( --white-color-second);
background-color: #383847;
box-shadow: 0px 2px 14px 0px #84848433 inset;
padding: 40px 57px;
position: relative;
`

export const ContainerConfirmationDialog = styled.div`
max-width: 380px;
`;

export const TextQuestion = styled.div`
font-weight: 500;
margin: 0 auto;
text-align: center;
margin-bottom: 32px;
`

export const WrapperButton = styled.div`
display: flex;
gap: 16px;
justify-content: center;
align-items: center;
`

export const ConfirmationButton = styled.button`
max-width: 125px;
max-height: 44px;
color: var( --white-color-second);
border: none;
padding: 12px 50px;
border-radius: 16px;
background-color: #42A652;
box-shadow: 1px 3px 5px 0px #60C47059;
font-size: 12px;
font-weight: 700;

transition: tranform 0.3s ease ;

&:hover{
    transform: scale(1.05);
}


`

export const CancelButton = styled.div`
cursor: pointer;
padding: 12px 50px;
font-size: 12px;
font-weight: 700;
border-radius: 16px;
border:2px solid #474759;
transition: tranform 0.3s ease ;

&:hover{
    transform: scale(1.05);
}

`

export const CloseIcon = styled.div`
cursor: pointer;
position: fixed;
top: 20px;
right: 20px;

transition: tranform 0.3s ease ;

&:hover{
    transform: scale(1.05);
}
`