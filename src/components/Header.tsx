import { Fonts } from '@/styles/themes';
import { css } from '@emotion/react';
import { useState } from 'react';

const containerStyle = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 10px;
  height: 30px;
`;

const textStyle = css`
  ${Fonts.style.body6}
`;

type DarkModeType = 'light' | 'dark';

const Header = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<DarkModeType>('light');

  return (
    <header css={containerStyle}>
      <div>
        <span css={textStyle}>
          {darkMode === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
        </span>
      </div>
    </header>
  );
};
export default Header;
