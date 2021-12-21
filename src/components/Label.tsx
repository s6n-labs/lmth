import React from 'react';

import Block, { Props as BlockProps } from './abstracts/Block';

type Props = Omit<BlockProps, 'children'> & {
  foreground?: string;
  children?: string;
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
