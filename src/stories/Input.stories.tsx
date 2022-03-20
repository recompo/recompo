import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../components/Input";

const Template: ComponentStory<typeof Input> = ({ children, ...args }) => (
  <Input {...args}>{children}</Input>
);

export default {
  title: "Input",
  component: Input
} as ComponentMeta<typeof Input>;

export const H1 = Template.bind({});

H1.args = {
  label:"Email",
  disabled:false,
  borderRadius:"md",
  placeHolder:"Enter Your Email",
  
};
