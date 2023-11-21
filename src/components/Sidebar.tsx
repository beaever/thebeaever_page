import { Fonts } from '@/styles/themes';
import { css } from '@emotion/react';

const containerStyle = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
  height: 100%;
  padding: 100px 0;
  border-right: 1px solid rgba(215, 215, 215, 0.4);
`;

const contentStyle = css`
  rotate: 90deg;
  & > span {
    ${Fonts.weight.weight900};
  }
`;

const iconStyle = css`
  text-align: center;
`;

interface SidebarProps {
  topContent: string;
  bottomContent: string;
}

const Sidebar = ({ bottomContent, topContent }: SidebarProps): JSX.Element => {
  return (
    <nav css={containerStyle}>
      <div css={contentStyle}>
        <span>{topContent}</span>
      </div>
      <div css={iconStyle}>아이콘 자리</div>
      <div css={contentStyle}>
        <span>{bottomContent}</span>
      </div>
    </nav>
  );
};

export default Sidebar;
