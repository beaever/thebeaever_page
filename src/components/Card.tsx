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
      <div>{title}</div>
      <div>{contents}</div>
      {description && <div>{description}</div>}
    </div>
  );
};

export default Card;
