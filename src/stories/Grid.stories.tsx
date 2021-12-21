import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Rectangle, Grid } from '..';

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Components/Layout/Grid',
  component: Grid,
  argTypes: {
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = args => (
  <Grid {...args}>
    <Rectangle
      fill="red"
      inGrid={[1, 1]}
    />
    <Rectangle
      fill="blue"
      inGrid={[1, 2]}
    />
    <Rectangle
      fill="green"
      inGrid={[2, 1]}
    />
    <Rectangle
      fill="orange"
      inGrid={[2, 2]}
    />
  </Grid>
);

export const Basic = Template.bind({});
Basic.args = {
  width: 640,
  height: 480,
  rowDefinitions: [
    {},
    {},
  ],
  columnDefinitions: [
    {},
    {},
  ],
};
