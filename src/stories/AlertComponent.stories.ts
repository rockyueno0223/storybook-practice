import { Meta, StoryObj } from "@storybook/react";
import { AlertComponent } from "./AlertComponent";

const meta: Meta<typeof AlertComponent> = {
  component: AlertComponent,
};

export default meta;
type Story = StoryObj<typeof AlertComponent>;

export const Primary: Story = {
  args: {
    title: "Alert title",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.",
    color: "red",
  },
};

export const Secondary: Story = {
  args: {
    title: "Alert title",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.",
    color: "blue",
  },
};
