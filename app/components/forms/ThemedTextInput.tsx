import React from 'react'
import { TextInput, TextInputProps, TextStyle } from 'react-native'

type Props = {
    style: TextStyle
} & Omit<TextInputProps, 'style'>

const ThemedTextInput = ({style, ...props}: Props) => {
  return (
    <TextInput 
        style={[
            {
                padding: 20,
                borderRadius: 6,
            }, 
            style
        ]}
        {...props}
    />
  )
}

export default ThemedTextInput