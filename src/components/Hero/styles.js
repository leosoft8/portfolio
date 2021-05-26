import styled from 'styled-components'

export const HeroComponent = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`
export const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to left,#81c784,#a5d6a7 55%,#81c784 64%,#1b5e20 67%);
  position: absolute;
  top: 0;
  left: 0;
  opacity: .3;
  z-index: 1;
`

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export const InfoWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 5%;
  max-width: 32%;
  z-index: 2;

  & hr {
    margin: 5px 0 10px;
    width: 20%;
    background-color: #FFF;
    border: none;
    height: 1px;
    opacity: .7;
  }

  & p:first-of-type {
    font-size: .9rem;
  }
`

export const SocialWrapper = styled.div`
  margin-top:20px;
`
