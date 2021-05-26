import styled from 'styled-components'
import { expandIn, expandOut } from '../animations'

export const CollapsibleListWrapper = styled.div`
  position: relative;
  min-height: 300px;
  left: 5rem;
  width: 100%;
  max-width: 51.8rem;
`

export const ListWrapper = styled.div`
  background-color: white;
  position: relative;
  z-index: 1;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 1.5rem 2.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
  width: 0;
  ${({ expandAttr = false }) => expandAttr ? expandIn({ time: '2s' }) : expandOut({ time: '.5s' })}
`

export const Title = styled.h3`
  padding: 1rem 1.5rem 2rem;
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 4.5rem;
  letter-spacing: -.036rem;
`

export const List = styled.ul`
  height: 100%;
  min-height: 300px;
`

export const BackgroundLayout = styled.div`
  background-color: #1b5e20;
  height: 100%;
  position: absolute;
  z-index: 0;
  width: 0;
  ${({ expandAttr = false }) => expandAttr ? expandIn({ time: '.5s' }) : expandOut({ time: '2s' })}
`
