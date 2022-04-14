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
export const H2 = Template.bind({})
export const H3 = Template.bind({})
export const H4 = Template.bind({})
export const H5 = Template.bind({})
export const H6 = Template.bind({})
export const P = Template.bind({})


H1.args = {
  variant: "h1",
  children: "Hi",
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', sans-serif"
}

H2.args = {
  variant: "h2",
  children: "Hi",
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', sans-serif"
}
H3.args = {
  variant: "h3",
  children: "Hi",
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', sans-serif"
}
H4.args = {
  variant: "h4",
  children: "Hi",
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', sans-serif"
}
H5.args = {
  variant: "h5",
  children: "Hi",
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', sans-serif"
}
H6.args = {
  variant: "h6",
  children: "Hi",
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', sans-serif"
}
P.args = {
  variant: "p",
  children: "Hi",
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', sans-serif"
}
