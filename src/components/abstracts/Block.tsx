import React from 'react';

import { Length, PositionInGrid } from '../../lib/types';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  width?: Length;
  height?: Length;
  inGrid?: PositionInGrid;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Block: React.FC<Props> = props => {
  const styles: React.CSSProperties = {
    width: props.width ?? '100%',
    height: props.height ?? '100%',
    ...props.style,
  };

  return (
    <div
      style={styles}
    >
      {props.children}
    </div>
  );
};

export default Block;
