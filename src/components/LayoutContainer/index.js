import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'

import { Hero } from '../Hero'
import { WorkSkills } from '../WorkSkills'

import { SectionContainer } from './styles'


export const LayoutContainer = () => (
  <SectionContainer>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div>
          <Hero />
        </div>
      </Scene>
      <Scene pin>
        <div>
          <WorkSkills />
        </div>
      </Scene>
    </Controller>
  </SectionContainer>
)
