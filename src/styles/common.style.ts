import { css } from '@emotion/react';
import { Colors, Fonts } from './themes';

/** @desc 각 타이틀의 Font Style */
export const titleFontStyle = css`
  ${Fonts.size.size18};
  ${Fonts.weight.weight800};
`;

/** @desc 각 content의 Style */
export const contentsFontStyle = css`
  ${Fonts.size.size12}
  color: ${Colors.element.grayScale600};
`;
