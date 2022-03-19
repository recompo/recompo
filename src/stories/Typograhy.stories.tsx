import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "../components/Typography";

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}></Typography>
);

export default {
  title: "Typography",
  component: Typography
} as ComponentMeta<typeof Typography>;

export const H1 = Template.bind({});

H1.args = {
  variant: "h1"
};
