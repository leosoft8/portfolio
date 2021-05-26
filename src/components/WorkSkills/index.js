import React from 'react'
import TrackVisibility from 'react-on-screen'

import { WorkSkillsWrapper, ComponentTracked } from './styles'
import { CollapsibleList } from '../CollapsibleList'
import { DesktopImage } from '../DesktopImage'

const ComponentToTrack = ({ isVisible }) => (
  <ComponentTracked >
    <DesktopImage expandAttr={isVisible} />
    <CollapsibleList expandAttr={isVisible} />
  </ComponentTracked>
)

export const WorkSkills = () => (
  <WorkSkillsWrapper>
    <TrackVisibility>
      <ComponentToTrack />
    </TrackVisibility>
  </WorkSkillsWrapper>
)
