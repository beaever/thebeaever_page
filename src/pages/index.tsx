import Accordion from '@/components/Accordions';
import Header from '@/components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        Home
        <Accordion title='아코디언' content='아코디언 컴포넌트 제작' />
      </main>
    </>
  );
};

export default Home;
