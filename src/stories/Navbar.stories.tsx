import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "../components/Navbar";

const Template: ComponentStory<typeof Navbar> = ({ children, ...args }) => (
  <Navbar {...args}>{children}</Navbar>
);

export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;


export const NavbarStory = Template.bind({});

NavbarStory.args = {
  background: 'tomato',
  color: 'white',
  accent: 'black',
  links: [{name: 'test', url: 'https://google.com'},{name: 'test', url: 'https://google.com'},{name: 'test', url: 'https://google.com'}]
}