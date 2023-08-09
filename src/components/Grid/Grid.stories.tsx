import { Meta, Story } from '@storybook/react';

import Grid from './Grid';
import StoryLayout from '../StoryLayout';
import { LayoutProvider } from '../context/LayoutProvider';

const withLayout = (Story: any) => <StoryLayout>{Story()}</StoryLayout>;
export default {
  title: 'Components/Grid',
  component: Grid,

  argTypes: {
    color: { control: 'color' },
    size: { control: 'number', min: 1, max: 2000, step: 1 },
  },
  decorators: [withLayout],
} as Meta<typeof Grid>;

const Template: Story = (args: any) => (
  <LayoutProvider testValue={{ ...args }}>
    <Grid />
  </LayoutProvider>
);
export const Main = Template.bind({});
Main.args = {
  color: 'rgba(250, 15, 15, 0.2)',
  size: 10,
};

Main.parameters = {
  layout: 'fullscreen',
};
