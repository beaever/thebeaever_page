import { contentsFontStyle, titleFontStyle } from '@/styles/common.style';
import { Colors } from '@/styles/themes';
import { css } from '@emotion/react';

const containerStyle = css`
  border: 1px solid ${Colors.element.grayScale200};
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

/** @desc Card Props */
interface CardProps {
  title: string;
  description?: string;
  contents: React.ReactNode;
}

/** @desc Card 컴포넌트 */
const Card = ({ title, contents, description }: CardProps): JSX.Element => {
  return (
    <div css={containerStyle}>
      <div>
        <span css={titleFontStyle}>{title}</span>
      </div>
      <div>{contents}</div>
      {description && (
        <div>
          <span css={contentsFontStyle}>{description}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
