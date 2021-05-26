import React from 'react'

import { CollapsibleListWrapper, List, BackgroundLayout, Title, ListWrapper } from './styles'
import { data } from './data'
import { CollapsibleItem } from '../CollapsibleItem'

export const CollapsibleList = ({ expandAttr = false } = {}) => {
  const itemList = data

  return (
    <CollapsibleListWrapper>
      <BackgroundLayout expandAttr={expandAttr} />
      <ListWrapper expandAttr={expandAttr}>
        <Title>List of working skills: (change this latter)</Title>
        <List>
          {
            itemList.map((item) => (
              <CollapsibleItem
                title={item.title}
                description={item.description}
                key={item.id}
              />
            ))
          }
        </List>
      </ListWrapper>
    </CollapsibleListWrapper>
  )
}
