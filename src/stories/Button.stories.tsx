import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/button/Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Large: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Large</Button>
);

export const Contained = Large.bind({});
Contained.args = {
  variant: "contained",
  color: "primary",
  size: "large",
  label: "Contained",
};

export const Outlined = Large.bind({});
Outlined.args = {
  variant: "outlined",
  color: "primary",
  size: "large",
  label: "Outlined",
};

export const Text = Large.bind({});
Text.args = {
  variant: "text",
  color: "primary",
  size: "large",
  label: "Text",
};

export const Unstyled = Large.bind({});
Unstyled.args = {
  variant: "unstyled",
  color: "primary",
  size: "large",
  label: "Unstyled",
};
