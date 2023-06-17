import { Colors } from '@/styles/themes';
import { css } from '@emotion/react';

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 20px;
`;

const contentFontStyle = css`
  color: ${Colors.palette.gray70};
`;

/** @desc Footer*/
const Footer = (): JSX.Element => {
  const CONFIG_COPY_RIGHT = 'Copyright © 2023 THEBEAEVER';

  return (
    <footer css={containerStyle}>
      <span css={contentFontStyle}>{CONFIG_COPY_RIGHT}</span>
    </footer>
  );
};

export default Footer;
