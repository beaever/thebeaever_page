import { useState } from 'react';
import { Fonts } from '@/styles/themes';
import { css } from '@emotion/react';
import { DarkModeType } from '@/hooks/useTheme';

const containerStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  height: 30px;
`;

const textStyle = css`
  ${Fonts.style.body6}
`;

const contentStyle = css`
  cursor: pointer;
`;

const Header = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<DarkModeType>('light');

  const onClickChangeDarkMode = (mode: DarkModeType) => {
    const changeMode = mode === 'dark' ? 'light' : 'dark';
    setDarkMode(() => changeMode);
  };

  return (
    <header css={containerStyle}>
      <div css={contentStyle} onClick={() => onClickChangeDarkMode(darkMode)}>
        <span css={textStyle}>
          {darkMode === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
        </span>
      </div>
    </header>
  );
};
export default Header;
