import React, { ComponentProps, PropsWithChildren } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
// import Button from "../components/Button";
import { Button } from "../"

const Template: ComponentStory<typeof Button> = ({
  children,
  ...args
}: PropsWithChildren<ComponentProps<typeof Button>>) => (
  <Button {...args}>{children}</Button>
)

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>

export const ButtonPrimary = Template.bind({})
export const ButtonSecondary = Template.bind({})
export const ButtonSuccess = Template.bind({})
export const ButtonError = Template.bind({})
export const ButtonInfo = Template.bind({})
export const ButtonWarning = Template.bind({})
export const ButtonDisabled = Template.bind({})
export const ButtonOutlinePrimary = Template.bind({})
export const ButtonOutlineSecondary = Template.bind({})
export const ButtonOutlineSuccess = Template.bind({})
export const ButtonOutlineError = Template.bind({})
export const ButtonOutlineInfo = Template.bind({})
export const ButtonOutlineWarning = Template.bind({})
export const ButtonOutlineDisabled = Template.bind({})

ButtonPrimary.args = {
  variant: "primary",
  children: "primary"
}

ButtonSecondary.args = {
  variant: "secondary",
  children: "secondary"
}

ButtonSuccess.args = {
  variant: "success",
  children: "success"
}

ButtonError.args = {
  variant: "error",
  children: "error"
}

ButtonInfo.args = {
  variant: "info",
  children: "info"
}

ButtonWarning.args = {
  variant: "warning",
  children: "warning"
}

ButtonDisabled.args = {
  variant: "primary",
  children: "disabled",
  disabled: true
}

ButtonOutlinePrimary.args = {
  variant: "primary",
  children: "primary outline",
  outline: true
}

ButtonOutlineSecondary.args = {
  variant: "secondary",
  children: "secondary outline",
  outline: true
}

ButtonOutlineSuccess.args = {
  variant: "success",
  children: "success outline",
  outline: true
}

ButtonOutlineError.args = {
  variant: "error",
  children: "error outline",
  outline: true
}

ButtonOutlineInfo.args = {
  variant: "info",
  children: "info outline",
  outline: true
}

ButtonOutlineWarning.args = {
  variant: "warning",
  children: "warning outline",
  outline: true
}

ButtonOutlineDisabled.args = {
  variant: "primary",
  children: "outine disabled",
  disabled: true
}
