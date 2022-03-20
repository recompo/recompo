import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button";

const Template: ComponentStory<typeof Button> = ({ children, color }) => (
  <Button color={color}>{children}</Button>
);

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  color: "primary",
  children: "Hello World",
};
