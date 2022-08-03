import { Button } from '@concrete-ui/solid/src';
import { Meta, Story } from '@storybook/html';

export default {
  title: "Button",
  // argTypes: {
  //   variant: { control: "string" },
  //   style: { control: "string" },
  // },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const BrandButton = Template.bind({});
BrandButton.args = { variant: "solid", semantics: "brand" };

export const OutlineButton = Template.bind({});
OutlineButton.args = { variant: "outline", semantics: "brand" };
