import { ComponentStory, Meta } from '@storybook/react';

import Grid from './Grid';
const styles: React.CSSProperties = {
  display: 'flex',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'transparent',
  margin: '0',
  overflow: 'hidden',
  position: 'absolute',
  top: '0px',
  left: '0px',
  outline: '10px solid pink',
};
const withLayout = (Story: any) => (
  <div style={styles} data-testid="layout">
    {Story()}
  </div>
);
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
