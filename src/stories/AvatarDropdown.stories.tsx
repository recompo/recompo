import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import AvatarDropdown from "../components/AvatarDropdown";
import bars__ from '../../public/images/nav-bars.svg';
import { AvatarDropdown } from "../";

const Template: ComponentStory<typeof AvatarDropdown> = ({ children, ...args }) => (
  <AvatarDropdown {...args}>{children}</AvatarDropdown>
);

export default {
  title: "AvatarDropdown",
  component: AvatarDropdown
} as ComponentMeta<typeof AvatarDropdown>;

export const Variant = Template.bind({});

Variant.args = {
  image: bars__,
  dropdown_items: [{ text: 'test', image: bars__, href: "https://www.google.com"}, { text: 'test', image: bars__, href: "https://www.google.com"}, { text: 'test', image: bars__, href: "https://www.google.com"}, { text: 'test', image: bars__, href: "https://www.google.com"}, { text: 'test', image: bars__, href: "https://www.google.com"}]
};
