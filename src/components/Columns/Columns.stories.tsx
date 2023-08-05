import { ComponentStory, Meta } from '@storybook/react';

import Columns from './Columns';
import StoryLayout from '../StoryLayout';

const withLayout = (Story: any) => <StoryLayout>{Story()}</StoryLayout>;
export default {
  title: 'Components/Columns',
  component: Columns,

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
} as Meta<typeof Columns>;

const Template: ComponentStory<typeof Columns> = (args) => (
  <Columns {...args} />
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
