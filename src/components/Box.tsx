import { css } from '@emotion/react';

type FlexDirectionType = 'row' | 'column';

const containerStyle = (
  gap?: number,
  rowGap?: number,
  columnGap?: number,
  flexDirection?: FlexDirectionType,
  maxWidth?: string
) => css`
  ${maxWidth && `max-width: ${maxWidth};`};
  width: 100%;
  display: flex;
  flex-direction: ${flexDirection};
  ${gap && `gap: ${gap}px;`};
  ${rowGap && `row-gap: ${rowGap}px;`};
  ${columnGap && `column-gap: ${columnGap}px;`};
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

interface BoxProps {
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  flexDirection?: FlexDirectionType;
  maxWidth?: string;
  children?: React.ReactNode;
}

/** @desc 공용으로 사용하기 위하여, Box 컴포넌트 */
const Box = ({
  flexDirection = 'row',
  columnGap,
  gap,
  rowGap,
  maxWidth,
  children,
}: BoxProps) => {
  return (
    <div css={containerStyle(gap, rowGap, columnGap, flexDirection, maxWidth)}>
      {children}
    </div>
  );
};

export default Box;
