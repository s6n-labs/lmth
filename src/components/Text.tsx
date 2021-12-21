import React from 'react';

import Inline, { Props as InlineProps } from './abstracts/Inline';

type Props = Omit<InlineProps, 'children'> & {
  foreground?: string;
  children?: string;
};

const Text: React.FC<Props> = ({ children, ...props }) => {
  const styles = {
    color: props.foreground,
  };

  return (
    <Inline
      {...props}
      style={styles}
    >
      {children}
    </Inline>
  );
};

export default Text;
