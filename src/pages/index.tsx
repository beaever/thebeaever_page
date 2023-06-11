import Accordion from '@/components/Accordions';
import Card from '@/components/Card';
import Header from '@/components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        Home
        <Accordion title='아코디언' content='아코디언 컴포넌트 제작' />
        <Card title='CARD' contents='카드 안 내용' description='description' />
      </main>
    </>
  );
};

export default Home;
