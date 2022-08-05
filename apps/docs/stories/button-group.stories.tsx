import { Button, ButtonGroup } from '@concrete-ui/solid/src';
import { Meta, Story } from '@storybook/html';

export default {
  title: "ButtonGroup",
} as Meta;

const Template: Story = () => (
  <ButtonGroup>
    <Button variant="solid" colorScheme="base">
      Accept
    </Button>
    <Button variant="solid" colorScheme="base">
      Something else
    </Button>
    <Button variant="solid" colorScheme="base">
      Cancel
    </Button>
  </ButtonGroup>
);

export const MainButtonGroup = Template.bind({});
