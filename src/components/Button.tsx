import { Colors, Fonts } from '@/styles/themes';
import { css } from '@emotion/react';

const containerStyle = css`
  display: flex;
  width: 100%;
  height: 40px;
  border: 1px solid ${Colors.palette.gray90};
  border-radius: 45%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${Colors.palette.gray10};
`;

const buttonStyle = css`
  ${Fonts.style.detail1}
  ${Fonts.weight.weight800}
  background-color: ${Colors.palette.gray10};
`;

interface ButtonProps {
  text: string;
}

/** @desc 사용할 커스텀 Button */
const Button = ({ text }: ButtonProps): JSX.Element => {
  return (
    <div css={containerStyle}>
      <button css={buttonStyle} type='button'>
        {text}
      </button>
    </div>
  );
};

export default Button;
