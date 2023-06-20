import { styled } from '@stitches/react';
import { Button, Divider, message, Modal } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';
import HongBao from './HongBao';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '10% 0% 10% 5%' : '5% 0% 5% 10%',
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

const GridLayout = styled('div', {
  display: 'grid',
  gridTemplateColumns: '50% 50%',
});

const Description = styled('p', {
  fontSize: '1em',
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: '8px',
});

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Section>
      <Layout>
        <Title>Kirim Hadiah Anda</Title>
        <SubTitle>Kirim Hadiah Ucapan Selamat Dengan Sepenuh Hati</SubTitle>
      </Layout>
      <GridLayout>
        <HongBao title="Putra" subTitle="No Rekening" onClick={() => setGroomVisible(true)} />
        <HongBao title="Irene" subTitle="No Rekening" onClick={() => setBrideVisible(true)} />
      </GridLayout>
      <Modal
        title={<b>No Rekening Pengantin Pria</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>Terimakasih (Klik Nomor Untuk Mengcopy)</Description>]}
      >
        <div>
          <b>1) {config.groom.fatherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.groom.fatherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Copy To Clipboard')}
            >
              {config.groom.fatherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>2) {config.groom.motherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.groom.motherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Copy To Clipboard')}
            >
              {config.groom.motherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>3) {config.groom.name}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.groom.accountNumber}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Copy To Clipboard')}
            >
              {config.groom.accountNumber}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b>No Rekening Pengantin Wanita</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>Terimakasih (Klik Nomor Untuk Mengcopy)</Description>]}
      >
        <div>
          <b>1) {config.bride.fatherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.bride.fatherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Copy To Clipboard')}
            >
              {config.bride.fatherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>2) {config.bride.motherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.bride.motherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Copy To Clipboard')}
            >
              {config.bride.motherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>3) {config.bride.name}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.bride.accountNumber}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Copy To Clipboard')}
            >
              {config.bride.accountNumber}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Section>
  );
};

export default CongratulatoryMoney;
