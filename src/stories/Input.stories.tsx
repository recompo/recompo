import React, { ComponentProps, PropsWithChildren } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
// import Input from "../components/Input";
import { Input } from "../"

const Template: ComponentStory<typeof Input> = ({
  children,
  ...args
}: PropsWithChildren<ComponentProps<typeof Input>>) => (
  <Input {...args}>{children}</Input>
)

export default {
  title: "Input",
  component: Input
} as ComponentMeta<typeof Input>

export const H1 = Template.bind({})

H1.args = {
  label: "Email",
  disabled: false,
  borderRadius: "md",
  placeHolder: "Enter Your Email"
}
