import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
// import { useI18next } from 'gatsby-plugin-react-i18next';
// import { useTranslation } from 'react-i18next';
import './styles.css';
import { SocialMediaIcon, SOCIAL_MEDIA } from '../components/socialMediaIcon';
import carbonBadge from '../plugins/carbon-badge';

const Layout = ({ title, description, image, children }) => {
  const { pathname } = useLocation();
  // const { language } = useI18next();
  const { site } = useStaticQuery(query);
  const { defaultTitle, defaultDescription, defaultImage, siteUrl } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  useEffect(() => carbonBadge());

  return (
    <div id='app'>
      <Helmet
        title={seo.title}
        htmlAttributes={{
          // lang: language,
          lang: 'en',
        }}
      >
        <meta name='description' content={seo.description} />
        <meta name='image' content={seo.image} />
        {seo.url && <meta property='og:url' content={seo.url} />}
        {seo.title && <meta property='og:title' content={seo.title} />}
        {seo.description && <meta property='og:description' content={seo.description} />}
        {seo.image && <meta property='og:image' content={seo.image} />}
        <meta name='twitter:card' content='summary_large_image' />
        {seo.title && <meta name='twitter:title' content={seo.title} />}
        {seo.description && <meta name='twitter:description' content={seo.description} />}
        {seo.image && <meta name='twitter:image' content={seo.image} />}
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Helmet>
      <header>
        <div className='tabs'>
          <StaticImage width={113} src='../images/logo-text.svg' alt='logo' className='header-logo' />
          <a className='tab'>
            <p>A propos</p>
          </a>
          <a className='tab'>
            <p>Actualités</p>
          </a>
          <a className='tab'>
            <p>Événements</p>
          </a>
          <a className='tab'>
            <p>Contact</p>
          </a>
        </div>
        <div className='socialmedia-container'>
          <SocialMediaIcon className='socialmedia-item' socialMedia={SOCIAL_MEDIA.facebook} />
          <SocialMediaIcon className='socialmedia-item' socialMedia={SOCIAL_MEDIA.linkedin} />
          <SocialMediaIcon className='socialmedia-item' socialMedia={SOCIAL_MEDIA.instagram} />
          <SocialMediaIcon className='socialmedia-item' socialMedia={SOCIAL_MEDIA.twitter} />
          <button className='with-icon' onClick={() => window.open('https://www.google.com', '_blank')}>
            <StaticImage objectFit='contain' src='../images/brands/discord.svg' alt='discord' />
            Rejoins-nous !
          </button>
        </div>
      </header>
      <div id='content'>{children}</div>
      <footer>
        <StaticImage width={216} height={52.77} src='../images/logo-text.svg' alt='logo' className='footer-logo' />
        <div id='wcb' class='carbonbadge wcb-d'></div>
        <div className='legal'>
          <a>
            <p>Mentions légales</p>
          </a>
          <a>
            <p>CGU</p>
          </a>
          <a>
            <p>Politique de confidentialité</p>
          </a>
        </div>
        <div className='footer-bottom'>
          <div />
          <div className='socialmedia-container'>
            <SocialMediaIcon className='socialmedia-item' socialMedia={SOCIAL_MEDIA.facebook} />
            <SocialMediaIcon className='socialmedia-item' socialMedia={SOCIAL_MEDIA.linkedin} />
            <SocialMediaIcon className='socialmedia-item' socialMedia={SOCIAL_MEDIA.instagram} />
            <SocialMediaIcon className='socialmedia-item' socialMedia={SOCIAL_MEDIA.twitter} />
          </div>
          <p className='copyright'>Copyright ©2022. Societech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
Layout.defaultProps = {
  title: null,
  description: null,
  image: null,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
