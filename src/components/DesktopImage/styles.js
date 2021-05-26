import styled from 'styled-components'
import { expandIn, expandOut } from '../animations'

export const DesktopImageWrapper = styled.div`
  position: absolute;
  height: 100%;
  right: 5%;
  margin-top: 6rem;
  width: calc(100% - 40rem);
  display: flex;
  flex-direction: row-reverse;
`

export const BackgroundLayout = styled.div`
  background-color: #1b5e20;
  height: 100%;
  position: absolute;
  z-index: 0;
  width: 0;
  ${({ expandAttr = false }) => expandAttr ? expandIn({ time: '.5s' }) : expandOut({ time: '2s' })}
`

export const Image = styled.img`
  background-color: white;
  position: relative;
  object-fit: fill;
  z-index: 1;
  width: 0;
  ${({ expandAttr = false }) => expandAttr ? expandIn({ time: '2s' }) : expandOut({ time: '.5s' })}
`
