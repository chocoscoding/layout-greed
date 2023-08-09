import { Meta, Story } from '@storybook/react';

import Columns from './Columns';
import StoryLayout from '../StoryLayout';
import { LayoutProvider } from '../context/LayoutProvider';

const withLayout = (Story: any) => <StoryLayout>{Story()}</StoryLayout>;
export default {
  title: 'Components/Columns',
  component: Columns,

  argTypes: {
    color: { control: 'color' },
    rowsType: {
      options: ['stretch', 'top', 'bottom', 'center'],
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
} as Meta<typeof Columns>;

const Template: Story = (args) => (
  <LayoutProvider testValue={{ ...args }}>
    <Columns />
  </LayoutProvider>
);
export const Main = Template.bind({});
Main.args = {
  color: 'rgba(250, 15, 15, 0.2)',
  columnsType: 'stretch',
  count: 10,
  gutter: 10,
  width: 50,
};

Main.parameters = {
  layout: 'fullscreen',
};
