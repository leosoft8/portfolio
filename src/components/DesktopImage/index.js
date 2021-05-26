import React from 'react'

import { DesktopImageWrapper, BackgroundLayout, Image } from './styles'
import computerExample from '../../assets/computer_example.jpeg'

export const DesktopImage = ({ expandAttr = false } = {}) => (
  <DesktopImageWrapper >
    <BackgroundLayout expandAttr={expandAttr} />
    <Image src={computerExample} expandAttr={expandAttr} />
  </DesktopImageWrapper >
)
