import { Button } from '@concrete-ui/solid/src';
import { Meta, Story } from '@storybook/html';

export default {
  title: "Button",
  argTypes: {
    count: { control: "number" },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const OneButton = Template.bind({});
OneButton.args = { count: 1 };

export const TwoButtons = Template.bind({});
TwoButtons.args = { count: 2 };

export const ThreeButtons = Template.bind({});
ThreeButtons.args = { count: 3 };
