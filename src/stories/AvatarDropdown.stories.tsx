import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import AvatarDropdown from "../components/AvatarDropdown";
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
  src: 'https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp',
  variant: "circular",
  alt: "Avatar",
  size: "140px",
  background: "#1b1b1b",
  color: '#fff',
  dropdown_items: [{ text: 'test', image: 'https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp', href: "https://www.google.com" }, { text: 'test', image: 'https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp', href: "https://www.google.com" }, { text: 'test', image: 'https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp', href: "https://www.google.com" }, { text: 'test', image: 'https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp', href: "https://www.google.com" }, { text: 'test', image: 'https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp', href: "https://www.google.com" }]
};
