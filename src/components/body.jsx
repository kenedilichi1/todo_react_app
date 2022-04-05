import styled from 'styled-components';
import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const BodySection = styled.div`
    text-align: center;
    width: 110%;
    height: 17rem;
    border: none;
    border-radius: 7px;
    outline: none;
`
const Completed = styled.div`
    background: white;
    margin: 1.5rem 0;
    text-align: left;
    padding-top: 5px;
    padding-left: 10px;
    height: 2rem;
    border-radius: 8px;
    
`
const TaskDiv = styled.div`
    border: 4px solid white;
    border-radius:8px;
    padding: 5px;
    margin: 2rem 0;
`
const Header = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: #ffff;
    font-family: sans-serif;
`
const HeaderDiv = styled.div`
    margin-bottom:1rem;
`
const TextDiv = styled.div`
    font-size: 1rem;
    font-weight:500;
    color: rgb(168, 40, 40);
`



export const Body = (props) => {
    
    return ( 
        <BodySection>
            
            <TaskDiv>
                <HeaderDiv>
                    <Header>Tasks</Header>
                </HeaderDiv>
                {
                    props.todos.map((item, id)=>{
                        return (
                        <React.Fragment>
                            
                        
                            <div className ='todo__div'>
                                <div>{item}</div>
                                <div className="icons">
                                    <div className='fa__icon' onClick={()=>{props.markCompleted(id)}}><FaCheck/></div>

                                    <div className="fa__icon" onClick={()=>{props.removeTodo(id)}}><FaRegTrashAlt/></div>
                                </div>
                                
                            </div>
                        </React.Fragment>
                        )
                    })
                }
            </TaskDiv>
           

            <TaskDiv>
                <HeaderDiv>
                    <Header>Completed Tasks</Header>
                </HeaderDiv>
                <div>
                    {
                        props.completed.map((item)=>{
                            return(
                                < Completed>
                                    <TextDiv>{item}</TextDiv>
                                </ Completed>
                            )
                        })
                    }
                </div>
                
            </TaskDiv>
        </BodySection>
    );
}
 
