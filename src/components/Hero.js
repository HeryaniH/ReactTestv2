import React from 'react';
import styled from 'styled-components';
import Image from '../assets/bg-img1.jpeg';
import { MdKeyboardArrowRight } from 'react-icons/md'

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

const Left = styled.div`
padding-left: 10em;
padding-top: 10em;
`;

const Tittle = styled.p`
    font-size: 55px;
    color: #04050a;
    font-weight: 400;
`;

const Desc = styled.p`
    width: 472px;
    font-size: 20px;
    color: #9ea0ac;
    line-height: 30px;
    margin-top: 58px;
`;

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-top: 58px;
    width: 371px;
    height: 71px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #0546d6, #3f89fc);
    text-decoration: none;
    box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

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
                        <span>Join Now!</span>
                        <MdKeyboardArrowRight />
                    </Button>
               </Left>
           </Content>
       </Section>
    );
};

export default Hero;