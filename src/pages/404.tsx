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
`;

const Index = (): JSX.Element => {
  return (
    <section css={containerStyle}>
      <div>404</div>
      <div>page not found</div>
    </section>
  );
};

export default Index;
