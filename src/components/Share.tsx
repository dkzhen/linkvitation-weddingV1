import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { FacebookOutlined, LinkOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 10% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const ButtonGroup = styled('div', {
  width: '100%',
  textAlign: 'center',
  paddingBottom: isPortrait ? '10%' : '5%',
});

const InstagramShareButton = styled(Button, {
  background: '#1877F2',
  borderColor: '#1877F2',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#74ADF7 !important',
    borderColor: '#74ADF7 !important',
    color: '#ffffff !important',
  },
  '&:focus': {
    backgroundColor: '#74ADF7 !important',
    borderColor: '#74ADF7 !important',
    color: '#ffffff !important',
  },
});

const LinkShareButton = styled(Button, {
  background: '#53acee',
  borderColor: '#53acee',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#9fcbed !important',
    borderColor: '#9fcbed !important',
    color: '#ffffff !important',
  },
  '&:focus': {
    backgroundColor: '#9fcbed !important',
    borderColor: '#9fcbed !important',
    color: '#ffffff !important',
  },
});

type ShareProps = {
  config: ConfigsType;
};

const Share = ({ config }: ShareProps) => {
  const baseURL = window.location.origin;
  const handleShareOnInstagram = () => {
    const instagramURL = `https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&display=popup&sdk=joey&u=https://linkvitation-wedding-v1.vercel.app/`;
    window.open(instagramURL, '_blank');
  };

  const handleCopyToClipboard = () => {
    message.success('URL copied to clipboard!');
  };

  return (
    <Section>
      <Layout>
        <Title>Bagikan Undangan</Title>
      </Layout>
      <ButtonGroup>
        <InstagramShareButton
          style={{ margin: 8 }}
          icon={<FacebookOutlined />}
          size="large"
          onClick={() => handleShareOnInstagram()}
        >
          Facebook
        </InstagramShareButton>
        <CopyToClipboard text={baseURL} onCopy={handleCopyToClipboard}>
          <LinkShareButton style={{ margin: 8 }} icon={<LinkOutlined />} size="large">
            Salin Tautan
          </LinkShareButton>
        </CopyToClipboard>
      </ButtonGroup>
    </Section>
  );
};

export default Share;
