import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Label, Rectangle } from '../..';

type Props = {
  text?: string;
  background?: string;
  foreground?: string;
  onClicked?: () => void;
};

const Button: React.FC<Props> = props => {
  return (
    <Rectangle
      width="fit-content"
      padding={['16px', '24px']}
      fill={props.background}
      onClicked={props.onClicked}
    >
      <Label
        foreground={props.foreground}
      >{props.text}</Label>
    </Rectangle>
  );
};

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Examples/Button',
  argTypes: {
    foreground: {
      control: {
        type: 'color',
      },
    },
    background: {
      control: {
        type: 'color',
      },
    },
    onClicked: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: 'Hello, world!',
  foreground: 'white',
  background: '#0ea5e9',
};
