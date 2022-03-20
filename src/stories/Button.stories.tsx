import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import Button from "../components/Button";
import { Button } from "../"

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
export const ButtonOutlinePrimary = Template.bind({});
export const ButtonOutlineSecondary = Template.bind({});
export const ButtonOutlineSuccess = Template.bind({});
export const ButtonOutlineError = Template.bind({});
export const ButtonOutlineInfo = Template.bind({});
export const ButtonOutlineWarning = Template.bind({});
export const ButtonOutlineDisabled = Template.bind({});


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

ButtonOutlinePrimary.args = {
  color: "primary",
  children: "Hello World",
  outline: true,
};

ButtonOutlineSecondary.args = {
  color: "secondary",
  children: "Hello World",
  outline: true,
};

ButtonOutlineSuccess.args = {
  color: "success",
  children: "Hello World",
  outline: true,
};

ButtonOutlineError.args = {
  color: "error",
  children: "Hello World",
  outline: true,
};

ButtonOutlineInfo.args = {
  color: "info",
  children: "Hello World",
  outline: true,
};

ButtonOutlineWarning.args = {
  color: "warning",
  children: "Hello World",
  outline: true,
};

ButtonOutlineDisabled.args = {
  color: "primary",
  children: "Hello World",
  disabled: true,
}
