import React from "react";
import ButtonList from "../components/button/ButtonList";
import * as IndividualButtons from "./Button.stories";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: ButtonList,
  title: "Presentation",
  decorators: [(story) => <div>{story()}</div>],
} as ComponentMeta<typeof ButtonList>;

const Template: ComponentStory<typeof ButtonList> = (args) => (
  <ButtonList {...args} />
);

export const Buttons = Template.bind({});
Buttons.args = {
  buttons: [
    { ...IndividualButtons.Contained.args },
    { ...IndividualButtons.Contained.args },
    { ...IndividualButtons.Contained.args },
    { ...IndividualButtons.Contained.args },
    { ...IndividualButtons.Contained.args },
  ],
};
