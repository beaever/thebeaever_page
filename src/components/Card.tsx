import {
  boxshadowStyle,
  contentsFontStyle,
  titleFontStyle,
} from '@/styles/common.style';
import { Colors } from '@/styles/themes';
import { css } from '@emotion/react';

const containerStyle = css`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  max-width: 300px;
  color: ${Colors.palette.gray10};
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
    <div css={[containerStyle, boxshadowStyle]}>
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
