import { ComponentStory, Meta } from '@storybook/react';

import Column from './Column';
import StoryLayout from '../StoryLayout';

const withLayout = (Story: any) => <StoryLayout>{Story()}</StoryLayout>;
export default {
  title: 'Components/Column',
  component: Column,

  argTypes: {
    color: { control: 'color' },
    count: { control: 'number', min: 10, max: 2000, step: 1 },
  },
  decorators: [withLayout],
} as Meta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => <Column {...args} />;
export const Main = Template.bind({});
Main.args = {
  color: '#ff00003b',
  count: 10,
};

Main.parameters = {
  layout: 'fullscreen',
};
