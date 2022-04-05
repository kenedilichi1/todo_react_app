import styled from 'styled-components'
const Title = styled.h1`

    font-family: Jokerman;
    font-weight 400;
    font-size: 40px;
    line-height: 60.49px;
    color:  #FFFFFF;
    text-align: center;
    
`
const ParagraphDiv = styled.div`
    width: 80%;
    height: 3rem;
    margin: .3rem auto;
    text-align: center;
    
`
const Paragraph = styled.p`
    font-family: Istok Web;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color:  #FFFFFF;
`
export const Header  = () => {
    return ( 
        <div className="header__contain">
            <div>
                <Title>DAILY TASK</Title>
            </div>
            <ParagraphDiv>
                <Paragraph>Proper Preparation Prevent Poor Performance</Paragraph>
            </ParagraphDiv>
           
        </div>
     );
}
 
