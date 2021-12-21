import React from 'react';

import { PositionInGrid, Sides, Size } from '../../lib/types';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  width?: Size;
  height?: Size;
  padding?: Sides;
  margin?: Sides;
  inGrid?: PositionInGrid;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClicked?: () => void;
};

const Block: React.FC<Props> = props => {
  const styles: React.CSSProperties = {
    width: props.width ?? '100%',
    height: props.height ?? '100%',
    padding: props.padding?.join(' '),
    margin: props.margin?.join(' '),
    ...props.style,
  };

  return (
    <div
      style={styles}
      onClick={props.onClicked}
    >
      {props.children}
    </div>
  );
};

export default Block;
