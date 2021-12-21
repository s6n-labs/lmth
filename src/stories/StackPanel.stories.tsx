import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Rectangle, StackPanel } from '..';

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Components/Layout/StackPanel',
  component: StackPanel,
  argTypes: {
  },
} as ComponentMeta<typeof StackPanel>;

const Template: ComponentStory<typeof StackPanel> = args => (
  <StackPanel {...args}>
    <Rectangle
      fill="red"
      width={100}
      height={200}
    />
    <Rectangle
      fill="blue"
      width={300}
      height={100}
    />
    <Rectangle
      fill="green"
      width={400}
    />
    <Rectangle
      fill="orange"
      height={300}
    />
  </StackPanel>
);

export const Basic = Template.bind({});
Basic.args = {
  height: 512,
  orientation: 'vertical',
};
