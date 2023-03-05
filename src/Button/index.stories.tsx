import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from "."

const Template: Story<ButtonProps> = (args) => <Button text={args.text} onPress={args.onPress}/> 

export const Default = Template.bind({})

Default.args = {
  text: "Click me!",
  onPress: () => console.log("You clicked.")
}

const meta: Meta = {
  component: Button,
  title: 'Design System/Button'
}

export default meta