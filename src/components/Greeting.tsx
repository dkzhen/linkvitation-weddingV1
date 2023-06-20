import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '30% 0% 15% 5%' : '5% 0% 5% 10%',
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

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        background: onScreen ? '#EFEBE9' : '#DADADA',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>Wedding</Title>
        <SubTitle>
          Lahir Di Musim Panas {config.bride.name}
          <br />
          Lahir Di Musim Hujan {config.groom.name}
          <br />
          <br />
          Dua Orang Dengan Minat Dan Nilai Berbeda Akan
          <br />
          Menjadi Kemiripan Melalui Cinta
          <br />
          Memulai Perjalanan Yang Disebut Hidup Bersama.
          <br />
          <br />
          Dengan Semangat Dan Restu Yang Hangat
          <br />
          Semoga Langgeng.
          <br />
          <br />
          {config.groom.fatherName} · {config.groom.motherName} · {config.groom.name}
          <br />
          {config.bride.fatherName} · {config.bride.motherName} · {config.bride.name}
        </SubTitle>
      </Layout>
    </section>
  );
};

export default Greeting;
