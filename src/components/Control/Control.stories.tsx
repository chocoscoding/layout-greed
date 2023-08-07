import { ComponentStory, Meta } from '@storybook/react';

import Control from './Control';
import StoryLayout from '../StoryLayout';

const withLayout = (Story: any) => <StoryLayout>{Story()}</StoryLayout>;
export default {
  title: 'Components/Control',
  component: Control,

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
} as Meta<typeof Control>;

const Template: ComponentStory<typeof Control> = (args) => <Control />;
export const Main = Template.bind({});
Main.args = {};

Main.parameters = {
  layout: 'fullscreen',
};
