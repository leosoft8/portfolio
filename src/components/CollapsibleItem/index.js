import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { ItemList, CollapsibleButton, Content } from './styles'

export const CollapsibleItem = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <ItemList>
      <CollapsibleButton onClick={() => setExpanded(!expanded)}>
        <span>{title}</span> {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </CollapsibleButton>
      {expanded &&
        <Content>
          {description}
        </Content>
      }
    </ItemList>
  )
}
