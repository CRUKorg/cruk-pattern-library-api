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
    staticContent: `<a class='cr-cta--link' href='#'>This is CTA text link</a><a class='cr-cta--link' href='#'>This is CTA text link</a>`,
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
      <div>
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
        </div>
        <div className='cr-layout__row cr-layout__row--full'>
          <div className='cr-layout__cell'>
            <MegaMenu
              url={data.MegaMenu.url}
            />
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
        <h1 className="cr-page-title">Cycle 300</h1>
        <div className='cr-layout'>
          <div className='cr-layout__row cr-layout__row--full'>
            <div className ='cr-layout__cell'>
              <img
                className='cr-image cr-image--standard'
                sizes='100vw'
                srcSet='https://ccp-s3.rel.cruk.org/styles/standard_full/s3/2018-11/thanks-cycle300-hero.jpg?itok=sBX2TbKm 980w, https://content.rel.cruk.org/s3/files/styles/standard_mobile/s3/2018-11/thanks-cycle300-hero.jpg?itok=lee-osLT 575w'
                src='https://ccp-s3.rel.cruk.org/styles/standard_full/s3/2018-11/thanks-cycle300-hero.jpg?itok=sBX2TbKm'
                alt='cycle' />
            </div>
          </div>
          <div className='cr-layout__row cr-layout__row--100'>
            <div className='cr-layout__cell'>
              <h2 className='cr-heading-pattern'>300 Miles.This September.For Cancer Research UK.</h2>
                <div className='cr-text-pattern'>
                  <p>Entries have now closed for Cycle 300 but you can register your interest below to hear about the next Cycle 300.</p>
                  <p>Thank you to all those who took on the challenge of cycling 300 miles over the month of September. The money raised will take us a step closer to beating cancer.</p>
                </div>
                <a
                  className='cr-cta--primary'
                  href='https://www.cancerresearchuk.org/support-us/do-your-own-fundraising/register-your-interest-for-cycle-300'>
                  Register your interest
                </a>
                  <div className='cr-collapsible'>
                    <input id='cr-collapsible__input-Reaching300miles' className='cr-collapsible__input' type='checkbox' />
                    <label htmlFor='cr-collapsible__input-Reaching300miles' className='cr-collapsible__heading-button'>
                      <h2 className='cr-collapsible__heading'>Reaching 300 miles</h2>
                    </label>
                    <div className='cr-collapsible__content'>
                        <div className='cr-text-pattern'>
                          <p>Set out a plan at the beginning of the month so you know exactly when you’re going to fit in the miles. For instance, you could ride 10 miles every day of September or commit to 75 miles every weekend. If you need to rack up extra miles, attend a few spin classes, cycle to work or ditch the car for your bike next time you pop to the shops.</p>
                        </div>
                    </div>
                  </div>
                  <div className='cr-collapsible'>
                    <input id='cr-collapsible__input-Measuringyourdistance' className='cr-collapsible__input' type='checkbox' />
                    <label htmlFor='cr-collapsible__input-Measuringyourdistance' className='cr-collapsible__heading-button'>
                      <h2 className='cr-collapsible__heading'>Measuring your distance</h2>
                    </label>
                    <div className='cr-collapsible__content'>
                      <div className='cr-text-pattern'>
                        <p>If you don’t have a GPS device, your phone will have plenty of apps to track to distance you covered. Strava, MapMyRide and Google Maps are all free and highly recommended apps that let you plan your route and track your distance but there are plenty more to choose from.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='cr-collapsible'>
                    <input id='cr-collapsible__input-Thebenefits' className='cr-collapsible__input' type='checkbox' />
                    <label htmlFor='cr-collapsible__input-Thebenefits' className='cr-collapsible__heading-button'>
                      <h2 className='cr-collapsible__heading'>The benefits</h2>
                    </label>
                    <div className='cr-collapsible__content'>
                      <ul className='cr-list cr-list--unordered'>
                        <li className='cr-list__item'><p>Even moderate exercise can build stamina, burn excess calories, give you a
                          healthier heart and protect you against a range of diseases including cancer.</p></li>
                        <li className='cr-list__item'><p>Cycling is a great way to stay fit – an average person will burn between
                          450 to 750 calories per hour of cycling, dependent on your weight, speed and time you ride for.</p></li>
                        <li className='cr-list__item'><p>Improves your mood and will give a sense of greater self-esteem,
                          self-control and the ability to rise to a challenge.</p></li>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>
          <div className='cr-layout__row cr-layout__row--100'>
            <div className='cr-layout__cell' />
          </div>
          <div className='cr-layout__row cr-layout__row--33-33-33'>
            <div className='cr-layout__cell'>
            <h2 className='cr-heading-pattern'>Prepare for your cycle</h2>
              <img
                className='cr-image cr-image--standard' sizes='100vw'
                srcSet='https://ccp-s3.rel.cruk.org/styles/standard_full/s3/2018-11/improve_performance_1.png?itok=AV13TAzv 980w, https://content.rel.cruk.org/s3/files/styles/standard_mobile/s3/2018-11/improve_performance_1.png?itok=JAR_Pqw5 575w'
                src='https://ccp-s3.rel.cruk.org/styles/standard_full/s3/2018-11/improve_performance_1.png?itok=AV13TAzv'
                alt='cycle' />
              <div className='cr-text-pattern'>
                <p>Follow our guide to help you prepare for your cycling challenge.</p>
              </div>
              <a
                className='cr-cta--secondary'
                href='https://www.cancerresearchuk.org/support-us/find-an-event/charity-challenges/cycle-challenge/how-to-prepare-for-your-challenge'>
                Find out more
              </a>
            </div>
            <div className='cr-layout__cell'>
              <h2 className='cr-heading-pattern'>Get fundraising !</h2>
          <img
            className = 'cr-image cr-image--standard'
            sizes = '100vw'
            srcSet = 'https://ccp-s3.rel.cruk.org/styles/standard_full/s3/2018-11/cycle_pink_lady_3box.jpg?itok=MHxN0_C5 980w, https://content.rel.cruk.org/s3/files/styles/standard_mobile/s3/2018-11/cycle_pink_lady_3box.jpg?itok=gy76hJJs 575w'
            src = 'https://ccp-s3.rel.cruk.org/styles/standard_full/s3/2018-11/cycle_pink_lady_3box.jpg?itok=MHxN0_C5'
            alt = 'cycle 2' />
              <div className = 'cr-text-pattern' >
              <p>Our fundraising tools are guaranteed to help you smash your target.</p>
          </div>
            <a
              className='cr-cta--secondary'
              href='https://www.cancerresearchuk.org/support-us/find-an-event/charity-challenges/300-mile-cycle-challenge/fundraising-ideas'>
              Find out more</a>
            </div>
            <div className='cr-layout__cell'>
              <h2 className='cr-heading-pattern'>Improve performance</h2>
              <img className='cr-image cr-image--standard' sizes='100vw'
                   srcSet='https://ccp-s3.rel.cruk.org/styles/standard_full/s3/2018-11/improve_performance_1.png?itok=AV13TAzv 980w, https://content.rel.cruk.org/s3/files/styles/standard_mobile/s3/2018-11/improve_performance_1.png?itok=JAR_Pqw5 575w'
                   src='https://ccp-s3.rel.cruk.org/styles/standard_full/s3/2018-11/improve_performance_1.png?itok=AV13TAzv'
                   alt='cycle' />
                <div className='cr-text-pattern'>
                  <p>Make every ride count this September with our tops tips.</p>
                </div>
                <a
                  className='cr-cta--secondary'
                  href='https://www.cancerresearchuk.org/support-us/find-an-event/charity-challenges/cycle-challenge/improving-your-cycling-performance'>
                  Find out more
                </a>
            </div>
          </div>
          <div className='cr-layout__row cr-layout__row--100'>
              <div className='cr-layout__cell'> </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
