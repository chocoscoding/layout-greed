import { ComponentStory, Meta } from '@storybook/react';

import Rows from './Rows';
import StoryLayout from '../StoryLayout';

const withLayout = (Story: any) => <StoryLayout>{Story()}</StoryLayout>;
export default {
  title: 'Components/Rows',
  component: Rows,

  argTypes: {
    color: { control: 'color' },
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

const Template: ComponentStory<typeof Rows> = (args) => <Rows {...args} />;
export const Main = Template.bind({});
Main.args = {
  color: '#ff00003b',
  rowsType: 'stretch',
  count: 10,
  gutter: 10,
  width: 50,
};

Main.parameters = {
  layout: 'fullscreen',
};
