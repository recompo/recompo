import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button";

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonPrimary = Template.bind({});
export const ButtonSecondary = Template.bind({});
export const ButtonSuccess = Template.bind({});
export const ButtonError = Template.bind({});
export const ButtonInfo = Template.bind({});
export const ButtonWarning = Template.bind({});
export const ButtonDisabled = Template.bind({});


ButtonPrimary.args = {
  color: "primary",
  children: "Hello World",
};

ButtonSecondary.args = {
  color: "secondary",
  children: "Hello World",
};

ButtonSuccess.args = {
  color: "success",
  children: "Hello World",
};

ButtonError.args = {
  color: "error",
  children: "Hello World",
};

ButtonInfo.args = {
  color: "info",
  children: "Hello World",
};

ButtonWarning.args = {
  color: "warning",
  children: "Hello World",
};

ButtonDisabled.args = {
  color: "primary",
  children: "Hello World",
  disabled: true,
}
