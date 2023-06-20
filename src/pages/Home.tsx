import Gallery from '../components/Gallery';
import Greeting from '../components//Greeting';
import TitleLayout from '../components//Title';
import Location from '../components//Location';
import CongratulatoryMoney from '../components//CongratulatoryMoney';
import Configs from '../configs';
import Share from '../components/Share';
import { Layout } from 'antd';

const { Footer } = Layout;

function Home() {
  return (
    <main style={{ height: '100%' }}>
      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <Gallery config={Configs} />
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      <Share config={Configs} />
      <Footer
        style={{
          background: '#D7CCC8',
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2023 LinkVitation
      </Footer>
    </main>
  );
}

export default Home;
