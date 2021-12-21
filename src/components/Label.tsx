import React from 'react';

import Block, { Props as BlockProps } from './abstracts/Block';
import { Props as InlineProps } from './abstracts/Inline';

type Props = Omit<BlockProps, 'children'> & {
  foreground?: string;
  children?: string | React.ReactElement<InlineProps> | React.ReactElement<InlineProps>[];
};

const Label: React.FC<Props> = ({ children, ...props }) => {
  const styles = {
    color: props.foreground,
  };

  return (
    <Block
      {...props}
      style={styles}
    >
      {children}
    </Block>
  );
};

export default Label;
