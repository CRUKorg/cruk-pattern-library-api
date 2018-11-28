/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Breadcrumb from '../patterns/breadcrumb';
import Collapsible from '../patterns/collapsible.jsx';
import CtaLink from '../patterns/cta.link';
import CtaPrimary from '../patterns/cta.primary';
import CtaSecondary from '../patterns/cta.secondary';
import Divider from '../patterns/divider';
import Header from '../patterns/header';
import HeaderPageTitle from '../patterns/header.page-title';
import Loader from '../patterns/loader';
import Search from '../patterns/search';
import ListOrdered from '../patterns/list.ordered';
import ListUnordered from '../patterns/list.unordered';
import MegaMenu from '../patterns/menu';
import NavigationBlock from '../patterns/navigation_block';
import RelatedLinks from '../patterns/related.links';
import Video from '../patterns/video';

// @TODO:
// 1) remove eslint error
// 2) add Breadcrumb, Collapsible, ListOrdered, ListUnordered, loader (styling only)
// 3) import component to astrum (vuejs)
const data = {
  NavigationBlock: {
    title: 'Navigation Block',
    target: '_blank',
    text: 'Find out about tests to diagnose cancer and monitor it during and after treatment, including what each test can show, how you have it and how to prepare.',
    href: '#',
  },
  RelatedLinks: {
    title: 'Related links',
    staticContent: `<ul><li><a href='#'><strong>Side effects of triptorelin</strong></a></li><li><a href='#'><strong>Coping with cancer</strong></a></li><li><a href='#'><strong>Coping with cancer</strong></a></li><li><a href='#'><strong>Your cancer type</strong></a></li></ul>`,
  },
  CtaPrimary: {
    href: '#',
    text: 'Primary',
  },
  CtaSecondary: {
    href: '#',
    text: 'Secondary',
  },
  CtaLink: {
    href: '#',
    text: 'This is text link',
  },
  HeaderPageTitle: {
    text: 'This is H1'
  },
  Search: {
    label: 'Search'
  },
  Collapsible: {
    title: 'Collapsible Box',
    staticContent: '',
    content: `<div class="cr-text-pattern"><p>Lobortis viverra torquent cras litora nisl amet tempor et&nbsp; consectetur feugiat bibendum fames ad</p></div><hr class="cr-divider"><h2 class="cr-heading-pattern">Another H2</h2><h3 class="cr-heading-pattern">Another H3</h3><div class="cr-text-pattern"><p>Viverra torquent cras litora nisl amet tempor et consectetur&nbsp; feugiat bibendum fames ad</p></div><h3 class="cr-heading-pattern">Navigation block</h3><a class="cr-cta--primary" href="https://www.cancerresearchuk.org/about-cancer" target="_blank" rel="noopener noreferrer">Primary</a><a class="cr-cta--secondary" href="https://www.cancerresearchuk.org/about-cancer" target="_blank" rel="noopener noreferrer">Secondary</a><hr class="cr-divider">`,
  },
  MegaMenu: {
    url: 'https://www.cancerresearchuk.org/cruk-navigation/menu-mdd/json'
  },
  Header: {
    logoSrc: 'https://www.cancerresearchuk.org/sites/all/themes/custom/cruk/cruk-logo.svg',
    logoTitle: 'Cancer Research UK Homepage',
    logoAlt: 'Cancer Research UK Homepage',
    logoHref: 'https://www.cancerresearchuk.org/',
    slogan: 'Together we will beat cancer',
    href: 'https://www.cancerresearchuk.org/get-involved/donate/',
    text: 'Donate',
    formDest: 'https://www.cancerresearchuk.org/searchredirect'
  },
  Video: {
    url: 'https://www.youtube-nocookie.com/embed/tS4a6I4-Yjo',
    autoplay: 0,
    rel: 0,
    modestbranding: 1
  }
};

export default class App extends Component {
  render() {
    return (
      <div className='cr-layout'>
        <div className='cr-layout__row cr-layout__row--100'>
          <div className='cr-layout__cell'>
            <Header
              logoSrc={data.Header.logoSrc}
              logoTitle={data.Header.logoTitle}
              logoAlt={data.Header.logoAlt}
              logoHref={data.Header.logoHref}
              slogan={data.Header.slogan}
              ctaHref={data.Header.href}
              ctaText={data.Header.text}
            />
          </div>
        </div>
        <div className='cr-layout__row cr-layout__row--fullbleed'>
          <div className='cr-layout__cell'>
            <MegaMenu
              url={data.MegaMenu.url}
            />
          </div>
        </div>
        <div className='cr-layout__row cr-layout__row cr-layout__row--100'>
          <div className='cr-layout__cell'>
            <HeaderPageTitle
              text={data.HeaderPageTitle.text}
            />
            <h2 className="cr-heading-pattern">This is H2</h2>
            <h3 className="cr-heading-pattern">This is H3</h3>
          </div>
        </div>
        <div className='cr-layout__row cr-layout__row cr-layout__row--50-50'>
          <div className='cr-layout__cell'>
            <NavigationBlock
              href={data.NavigationBlock.href}
              target={data.NavigationBlock.target}
              title={data.NavigationBlock.title}
              text={data.NavigationBlock.text}
            />
            <Collapsible
              title={data.Collapsible.title}
              content={data.Collapsible.content}
            />
            <CtaPrimary
              href={data.CtaPrimary.href}
              text={data.CtaPrimary.text}
            />
            <CtaSecondary
              href={data.CtaSecondary.href}
              text={data.CtaSecondary.text}
            />
            <CtaLink
              href={data.CtaLink.href}
              text={data.CtaLink.text}
            />
          </div>
          <div className='cr-layout__cell'>
            <RelatedLinks
              title={data.RelatedLinks.title}
              staticContent={data.RelatedLinks.staticContent}
            />
          </div>
          <Search />
        </div>
        <div className='cr-layout__row cr-layout__row cr-layout__row--100'>
          <div className='cr-layout__cell'>
            <Video
              url={data.Video.url}
              autoplay={data.Video.autoplay}
              rel={data.Video.rel}
              modestbranding={data.Video.modestbranding}
            />
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
