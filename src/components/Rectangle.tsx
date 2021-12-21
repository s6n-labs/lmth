import React from 'react';

import Block, { Props as BlockProps } from './abstracts/Block';

type Props = BlockProps & {
  fill?: string;
};

const Rectangle: React.FC<Props> = props => {
  return (
    <Block
      {...props}
      style={{
        backgroundColor: props.fill,
      }}
    />
  );
};

export default Rectangle;
