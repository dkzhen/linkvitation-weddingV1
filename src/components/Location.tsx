import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 15% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <Title>Lokasi</Title>
        <SubTitle>
          Jl. Patriot No.25, Dukuh, Pekalongan Utara
          <br />
          <br />
          Pekalongan, Jawa Tengah
          <br />
          5 Menit Dari Lapangan Jetayu Dan Stadion Keraton.
          <br />
          <br />
          <iframe
            style={{ width: isPortrait ? '90%' : '60%', border: '0' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1368231592724!2d109.6683199218778!3d-6.874205158819413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7025d80e03b5e9%3A0x3be4e1ed9ecee65c!2sSchool%20of%20Management%20Information%20and%20Computer%20Widya%20Pratama%20Pekalongan!5e0!3m2!1sen!2sid!4v1687488354563!5m2!1sen!2sid"
            width="600"
            height="450"
          ></iframe>
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;
