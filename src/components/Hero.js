import React from 'react';
import styled from 'styled-components';
import Image from '../assets/bg-img1.jpeg';

const Section = styled.section`
    background-image: url(${Image});
    height: 783px;
    display: block;
    backgroung-repeat: no-repeat;
    background-size: cover; 
    `;

const Content = styled.div`
    width: 100%;
    height: 100px;
`;

const Left = styled.div``;
const Tittle = styled.p``;
const Desc = styled.p``;
const Button = styled.a``;

const Hero= () => {
    return (
       <Section>
           <Content>
               <Left>
                   <Tittle>
                       GET Benefit <br/>For Joining US!
                   </Tittle>
                    <Desc>
                        Join and get more informations bout
                        benefits
                        have a chance to get more like <span>
                            VIP, Foods, Drinks</span>{''}
                    </Desc>
                    <Button href='/'
                    target='_blank'> 
                        <span>Claim your free stocks now</span>
                    </Button>
               </Left>
           </Content>
       </Section>
    );
};

export default Hero;