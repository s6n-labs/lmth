import React from 'react';

import Block, { Props as BlockProps } from './abstracts/Block';
import { Fraction, Length } from '../lib/types';

export type GridLength = Length | Fraction;

export type RowDefinition = {
  height?: GridLength;
};

export type ColumnDefinition = {
  width?: GridLength;
};

type Props = BlockProps &  {
  rowDefinitions?: RowDefinition[];
  columnDefinitions?: ColumnDefinition[];
};

const Grid: React.FC<Props> = props => {
  const styles: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: props.rowDefinitions?.map(d => d.height ?? '1fr').join(' '),
    gridTemplateColumns: props.columnDefinitions?.map(d => d.width ?? '1fr').join(' '),
  };

  return (
    <Block
      {...props}
      style={styles}
    >
      {props.children}
    </Block>
  );
};

export default Grid;
