import { Colors, Fonts } from '@/styles/themes';
import { css } from '@emotion/react';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.palette.gray30};
`;

const titleStyle = css`
  ${Fonts.style.title2};
  color: ${Colors.palette.gray90};
`;

const subTitleStyle = css`
  ${Fonts.style.subtitle2};
  color: ${Colors.palette.gray70};
`;

/** @desc 404 페이지 구현 */
const Index = (): JSX.Element => {
  return (
    <section css={containerStyle}>
      <div css={titleStyle}>404</div>
      <div css={subTitleStyle}>page not found</div>
    </section>
  );
};

export default Index;
