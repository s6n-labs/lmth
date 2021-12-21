import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Rectangle } from '..';

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Layout/Rectangle',
  component: Rectangle,
  argTypes: {
    fill: {
      control: {
        type: 'color',
      },
    },
  },
} as ComponentMeta<typeof Rectangle>;

const Template: ComponentStory<typeof Rectangle> = args => (
  <Rectangle {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  fill: 'red',
  width: 300,
  height: 200,
};
