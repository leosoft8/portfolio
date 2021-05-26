import React from 'react'
import { TiSocialLinkedin, TiMail } from 'react-icons/ti'

import { HeroComponent, Layout, Img, InfoWrapper, SocialWrapper } from './styles'
import hero_cover from '../../assets/hero_cover.jpg'

export const Hero = ({id}) => (
  <HeroComponent>
    <Layout />
    <InfoWrapper>
      <h1>{id}</h1>
      <p>Welcome to my page!</p>
      <hr />
      <h1>Hello, I'm Leonardo Ruiz Diaz</h1>
      <h3>Front-end developer</h3>
      <br />
      <p>
        I'm a web UI developer living in Argentina, my main languages are ReactJS and VueJS.<br />
        I hope you enjoy my introduction page.
      </p>
      <SocialWrapper>
        <a href="https://www.linkedin.com/in/leonardo-bernab%C3%A9-ruiz-diaz-541a5a141/" target="_self"><TiSocialLinkedin size='30px' color="#000"/></a>
        <a href="mailto: leonardord8@gmail.com"><TiMail size='30px' color="#000" /></a>
      </SocialWrapper>
    </InfoWrapper>
    <Img srcset="https://via.placeholder.com/320x240.png 320w,
             https://via.placeholder.com/480x360.png 480w,
             {hero_cover} 800w"
      sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
      src={hero_cover} alt="Hero image"
      role="presentation"
    />
  </HeroComponent>
)