import { useState } from 'react';
import { css } from '@emotion/react';
import { DarkModeType } from '@/hooks/useTheme';
import Button from './Button';

const containerStyle = css`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.1);
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
        <Button text={darkMode === 'light' ? 'DARK MODE' : 'LIGHT MODE'} />
      </div>
    </header>
  );
};
export default Header;
