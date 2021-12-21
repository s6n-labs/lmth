import React from 'react';

import { PositionInGrid, Sides } from '../../lib/types';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  padding?: Sides;
  margin?: Sides;
  inGrid?: PositionInGrid;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClicked?: () => void;
};

const Inline: React.FC<Props> = props => {
  const styles: React.CSSProperties = {
    display: 'inline-block',
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

export default Inline;
