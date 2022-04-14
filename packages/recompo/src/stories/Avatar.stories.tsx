import React, { ComponentProps, PropsWithChildren } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
// import Avatar from "../components/Avatar";
import Avatar from "../components/Avatar"

const Template: ComponentStory<typeof Avatar> = ({
  children,
  ...args
}: PropsWithChildren<ComponentProps<typeof Avatar>>) => (
  <Avatar {...args}>{children}</Avatar>
)

export default {
  title: "Avatar",
  component: Avatar
} as ComponentMeta<typeof Avatar>

export const AvatarCircular = Template.bind({})
export const AvatarRounded = Template.bind({})
export const AvatarSquare = Template.bind({})
AvatarCircular.args = {
  src: "https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp",
  alt: "Circular",
  height: 100,
  width: 100,
  variant: "circular"
}
AvatarRounded.args = {
  src: "https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp",
  alt: "Rounded",
  size: "100px",
  variant: "rounded"
}

AvatarSquare.args = {
  src: "https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp",
  alt: "Square",
  variant: "square"
}
