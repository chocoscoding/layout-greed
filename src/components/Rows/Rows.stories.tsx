import { Meta, Story } from '@storybook/react';

import Rows from './Rows';
import StoryLayout from '../StoryLayout';
import { LayoutProvider } from '../context/LayoutProvider';

const withLayout = (Story: any) => <StoryLayout>{Story()}</StoryLayout>;
export default {
  title: 'Components/Rows',
  component: Rows,

  argTypes: {
    color: { control: 'color' },
    rowsType: {
      options: ['stretch', 'left', 'right', 'center'],
      control: { type: 'radio' },
    },
    count: {
      control: 'number',
      min: 10,
      max: 2000,
      step: 10,
      defaultValue: 10,
    },
  },
  decorators: [withLayout],
} as Meta<typeof Rows>;

const Template: Story = (args: any) => (
  <LayoutProvider testValue={{ ...args }}>
    <Rows />
  </LayoutProvider>
);
export const Main = Template.bind({});
Main.args = {
  color: 'rgba(250, 15, 15, 0.2)',
  rowsType: 'stretch',
  count: 10,
  gutter: 10,
  width: 50,
};

Main.parameters = {
  layout: 'fullscreen',
};
