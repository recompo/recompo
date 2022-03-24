import React, { ComponentProps, PropsWithChildren } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
// import Typography from "../components/Typography";
import { Typography } from "../"

const Template: ComponentStory<typeof Typography> = ({
  children,
  ...args
}: PropsWithChildren<ComponentProps<typeof Typography>>) => (
  <Typography {...args}>{children}</Typography>
)

export default {
  title: "Typography",
  component: Typography
} as ComponentMeta<typeof Typography>

export const H1 = Template.bind({})

H1.args = {
  variant: "h1",
  children: <span>Hi</span>,
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', sans-serif"
}
