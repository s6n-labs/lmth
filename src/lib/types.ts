type Number = string | number;
type WithUnit<T extends string, N extends Number = number> = `${N}${T}`;
type WithOrWithoutUnit<T extends string, N extends Number = number> = N | WithUnit<T,  N>;

export type AbsoluteLengthUnit = 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'px';
export type RelativeLengthUnit = 'em' | 'ex' | 'ch' | 'rem' | 'lh' | 'vw' | 'vh' | 'vmin' | 'vmax';
export type LengthUnit = AbsoluteLengthUnit | RelativeLengthUnit;
export type Length = WithOrWithoutUnit<LengthUnit>;

export type FractionUnit = 'fr';
export type Fraction = WithUnit<FractionUnit>;

export type PositionInGrid = [number, number];
