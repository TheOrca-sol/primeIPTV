import styled from 'styled-components';
import Banner from '../components/home/Banner';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
const HomePage = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function Home() {
  return (
    <HomePage>
      <Banner />
      <Features />
      <Testimonials />
    </HomePage>
  );
}

export default Home;