import React from 'react'
import { Label } from 'semantic-ui-react'

const Avatar = ({ children, size, ...props }) => {
  return (
    <Label circular size={size} {...props}
      color={colors[indexer(colors.length)]}
    >
      {children}
    </Label>
  )
}

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]


const indexer = length => Math.floor(Math.random() * length)

export default Avatar
