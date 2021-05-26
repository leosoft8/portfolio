import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0px);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

const expandVerticallyKeyframes = keyframes`
  from {
    max-height: 0;
  }

  to {
    max-height: 1000px;
  }
`

export const expandVertically = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${expandVerticallyKeyframes} ${type};
    height: auto;
    max-height: unset;
  `
const expandInKeyframes = keyframes`
  from {
    display: none;
    width: 0;
  }

  to {
    display: block;
    width: 100%;
  }
`

export const expandIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${expandInKeyframes} ${type};
    width: 100%;
  `

const expandOutKeyframes = keyframes`
  from {
    display: block;
    width: 100%;
  }

  to {
    display: none;
    width: 0;
  }
`

export const expandOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${expandOutKeyframes} ${type};
    width: 0;
  `
