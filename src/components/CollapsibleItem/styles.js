import styled from 'styled-components'
import { expandVertically } from '../../components/animations'

export const ItemList = styled.li`
  position: relative;
`

export const Content = styled.div`
  padding: 0 1.5rem 1.5rem;
  overflow: hidden;
  text-align: left;
  max-height: 0;
  white-space: break-spaces;
  ${expandVertically({ time: '.5s' })}
`

export const CollapsibleButton = styled.button`
  cursor: pointer;
  border: none;
  text-align: left;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  color: #7f7f7f;
  padding: 1.6rem 1.5rem;
  transition: all .4s ease-in-out;
  border-top: .1rem solid #d9d9d9;
  width: 100%;
  letter-spacing: -.02rem;
  font-size: 1.2rem;
  line-height: 2.7rem;
  font-weight: 400;
`
