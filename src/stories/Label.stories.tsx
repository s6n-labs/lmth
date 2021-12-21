import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Label, Text } from '..';

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Components/Typography/Label',
    component: Label,
  argTypes: {
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => (
  <Label {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Hello, world!',
};

export const Nested = Template.bind({});
Nested.args = {
  children: (
    <>
      <Text foreground="blue">Hello</Text>
      <Text>,</Text>
      <Text foreground="red">World!</Text>
    </>
  ),
};
