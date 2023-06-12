import { css } from '@emotion/react';
import Accordion from '@/components/Accordions';
import Card from '@/components/Card';
import Header from '@/components/Header';

const contentContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const CONFIG_INITALVALUE = [
    {
      title: '카드',
      contents:
        '카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용',
      description:
        '카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란',
    },
    {
      title: '카드',
      contents:
        '카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용',
      description:
        '카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란',
    },
    {
      title: '카드',
      contents:
        '카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용',
      description:
        '카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란',
    },
    {
      title: '카드',
      contents:
        '카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용',
      description:
        '카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란',
    },
    {
      title: '카드',
      contents:
        '카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용',
      description:
        '카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란',
    },
    {
      title: '카드',
      contents:
        '카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용',
      description:
        '카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란',
    },
    {
      title: '카드',
      contents:
        '카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용',
      description:
        '카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란',
    },
    {
      title: '카드',
      contents:
        '카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용 카드 안 내용',
      description:
        '카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란 카드 설명란',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div css={contentContainerStyle}>
          <Accordion title='아코디언' content='아코디언 컴포넌트 제작' />
          {CONFIG_INITALVALUE.map((el) => (
            <Card
              key={`${el.title}-${el.contents}-${el.description}`}
              title={el.title}
              contents={el.contents}
              description={el.description}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
