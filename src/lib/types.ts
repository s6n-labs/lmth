type Number = string | number;
type WithUnit<T extends string, N extends Number = number> = `${N}${T}`;
type WithOrWithoutUnit<T extends string, N extends Number = number> = N | WithUnit<T,  N>;

export type AbsoluteLengthUnit = 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'px';
export type RelativeLengthUnit = 'em' | 'ex' | 'ch' | 'rem' | 'lh' | 'vw' | 'vh' | 'vmin' | 'vmax';
export type LengthUnit = AbsoluteLengthUnit | RelativeLengthUnit;
export type Length = WithOrWithoutUnit<LengthUnit>;

export type PercentageUnit = '%'
export type Percentage = WithUnit<PercentageUnit>;

export type FractionUnit = 'fr';
export type Fraction = WithUnit<FractionUnit>;

export type Size = Length | Percentage | 'fit-content';
export type Sides = never
  | [Size] // all
  | [Size, Size] // vertical horizontal
  | [Size, Size, Size] // top horizontal bottom
  | [Size, Size, Size, Size] // top right bottom left
;

export type PositionInGrid = [number, number];
