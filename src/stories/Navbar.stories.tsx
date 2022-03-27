import React, { ComponentProps, PropsWithChildren } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Navbar from "../components/Navbar"

const Template: ComponentStory<typeof Navbar> = ({
  children,
  ...args
}: PropsWithChildren<ComponentProps<typeof Navbar>>) => (
  <Navbar {...args}>{children}</Navbar>
)

export default {
  title: "Navbar",
  component: Navbar
} as ComponentMeta<typeof Navbar>

export const NavbarStory = Template.bind({})

NavbarStory.args = {
  logo: {
    avatar: {
      src: "https://images-ext-2.discordapp.net/external/fB5LASL_lHDLCWSZ347nu58xwNiSmIT6vVsLX0ugk9c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/828288323684401202/05ab95219da2a7d67215974da05bb875.webp",
      alt: "Coming soon!"
    },
    align: "start",
    gap: 900,
    left: 20
  },
  rounded: false,
  variant: "glassy",
  links: [{ name: "hi", url: "https://google.com" }],
  color: "black",
  border: true
}
