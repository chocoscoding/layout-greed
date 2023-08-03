import { ComponentStory, Meta } from '@storybook/react';

import Grid from './Grid';
import StoryLayout from '../StoryLayout';

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

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;
export const Main = Template.bind({});
Main.args = {
  color: '#ff00003b',
};

Main.parameters = {
  layout: 'fullscreen',
};
