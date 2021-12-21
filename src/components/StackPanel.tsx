import React from 'react';

import Block, { Props as BlockProps } from './abstracts/Block';

type Props = BlockProps & {
  orientation?: 'vertical' | 'horizontal';
};

const StackPanel: React.FC<Props> = props => {
  return (
    <Block
      {...props}
      style={{
        display: 'flex',
        flexDirection: props.orientation === 'horizontal' ? 'row' : 'column',
        alignItems: 'stretch',
      }}
    >
      {props.children}
    </Block>
  );
};

export default StackPanel;
