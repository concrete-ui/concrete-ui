import { Button } from '@concrete-ui/solid/src';
import { Meta, Story } from '@storybook/html';

export default {
  title: "Button",
} as Meta;

const Template: Story = (args) => <Button {...args}>Accept</Button>;

export const DefaultButton = Template.bind({});

export const BaseButton = Template.bind({});
BaseButton.args = { variant: "solid", colorScheme: "base" };

export const OutlineButton = Template.bind({});
OutlineButton.args = { variant: "outline", colorScheme: "base" };

export const SubduedButton = Template.bind({});
SubduedButton.args = { variant: "solid", colorScheme: "subdued" };

export const SubduedOutlineButton = Template.bind({});
SubduedOutlineButton.args = { variant: "outline", colorScheme: "subdued" };
