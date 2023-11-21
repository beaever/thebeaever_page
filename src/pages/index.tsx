import Accordion from '@/components/Accordions';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Box from '@/components/Box';
import Footer from '@/components/Footer';
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import {
  CONFIG_ACCORDION_INITALVALUE,
  CONFIG_CARD_INITALVALUE,
} from '@/core/constants';
import Sidebar from '@/components/Sidebar';

const containerStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.1),
    rgba(226, 226, 226, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  main {
    margin-top: 20px;
    padding: 100px;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar topContent='thebeaever' bottomContent='2023.11.22' />
      <div css={containerStyle}>
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
