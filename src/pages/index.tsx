import Accordion from '@/components/Accordions';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Box from '@/components/Box';
import Footer from '@/components/Footer';
import { css } from '@emotion/react';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  background: linear-gradient(to right bottom, dodgerblue, crimson);
  main {
    margin-top: 20px;
  }
`;

const Home = () => {
  /** @desc Accordion 컴포넌트의 Inital Value */
  const CONFIG_ACCORDION_INITALVALUE = [
    {
      title: '아코디언',
      content:
        '아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 ',
    },
    {
      title: '아코디언',
      content:
        '아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 ',
    },
    {
      title: '아코디언',
      content:
        '아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 ',
    },
    {
      title: '아코디언',
      content:
        '아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 ',
    },
    {
      title: '아코디언',
      content:
        '아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 ',
    },
    {
      title: '아코디언',
      content:
        '아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 ',
    },
    {
      title: '아코디언',
      content:
        '아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 ',
    },
    {
      title: '아코디언',
      content:
        '아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 ',
    },
    {
      title: '아코디언',
      content:
        '아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 아코디언 컴포넌트 내부 내용 ',
    },
  ];

  /** @desc Card 컴포넌트의 Inital Value */
  const CONFIG_CARD_INITALVALUE = [
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
    <div css={containerStyle}>
      <Header />
      <main>
        <Box columnGap={20} rowGap={40}>
          <Box gap={10}>
            {CONFIG_ACCORDION_INITALVALUE.map((el, idx) => (
              <Box key={`${el.title}-${idx}`} maxWidth='500px'>
                <Accordion title={el.title} content={el.content} />
              </Box>
            ))}
          </Box>
          {CONFIG_CARD_INITALVALUE.map((el, idx) => (
            <Card
              key={`${el.title}-${idx}`}
              title={el.title}
              contents={el.contents}
              description={el.description}
            />
          ))}
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
