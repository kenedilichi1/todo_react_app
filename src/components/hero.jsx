import styled from "styled-components";
import React, { useEffect, useState } from "react"
import axios from "axios";

const HeroDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 5% 0;
    gap: 1rem;
`
const HeroInput = styled.input`
    width: 15rem;
    height: 2.7rem;
    border: none;
    outline: none;
    border-radius: 7px;
    padding: 3px 10px;
    font-size: 1rem;
    font-weight: 500;
    

`
const Button = styled.button`
    width: 57%;
    height: 2.8rem;
    text-align: center;
    font-size: 1.3rem;
    color: #C70039;
    font-family: Istok Web;
    font-weight: 400;
    line-height: 35px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    background: #FFFFFF;
`

export const Hero = (props) => {
    
    return ( 
        <HeroDiv>
            <div className="input__field">
                <HeroInput value = {props.todo} onChange={(e) =>props.setInput(e.target.value)}/>
            </div>
            <div className="input__button">
                <Button onClick={
                    ()=>{
                        props.addTodo();
                        props.setInput("")
                    }}>ENTER</Button>
            </div>
        </HeroDiv>
     );
}
 
