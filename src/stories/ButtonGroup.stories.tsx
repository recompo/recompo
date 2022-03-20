import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button";
// import ButtonGroup from "../components/ButtonGroup";
import { ButtonGroup } from "../";

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = ({ children, ...args }) => (
    <ButtonGroup {...args}>{children}</ButtonGroup>
);

export const ButtonGroupStory = Template.bind({})

ButtonGroupStory.args = {
    children: (
      <>
        <Button color="primary">First</Button>
        <Button color="primary">Middle</Button>
        <Button color="primary">Last</Button>
      </>
    ),
    gap: '0.5rem'
}
