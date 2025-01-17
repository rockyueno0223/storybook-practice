import { Meta, StoryObj } from "@storybook/react";
import { PillComponent } from "./PillComponent";

const meta: Meta<typeof PillComponent> = {
  component: PillComponent,
};

export default meta;
type Story = StoryObj<typeof PillComponent>;

export const Primary: Story = {
  args: {
    label: "React",
  },
};
