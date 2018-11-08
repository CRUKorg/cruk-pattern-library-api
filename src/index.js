/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from '../patterns/breadcrumb';
import Collapsible from '../patterns/collapsible';
import CtaLink from '../patterns/cta.link';
import CtaPrimary from '../patterns/cta.primary';
import CtaSecondary from '../patterns/cta.secondary';
import Divider from '../patterns/divider';
import HeaderPageTitle from '../patterns/header.page-title';
import Loader from '../patterns/loader';
import Search from '../patterns/search';
import ListOrdered from '../patterns/list.ordered';
import ListUnordered from '../patterns/list.unordered';
import MegaMenu from '../patterns/menu';
import NavigationBlock from '../patterns/navigation_block';
import RelatedLinks from '../patterns/related.links';

// @TODO:
// fix eslint
// import all components, add dummy data for props
// issues - Breadcrumb, Collapsible, ListOrdered, ListUnordered
// styling issue - loader
// fix components
// create readme file
// bridge between /docs and /lib

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBlock
          href="#"
          target="_blank"
          text="This is navigation block"
        />
        <RelatedLinks />
        <HeaderPageTitle />
        <MegaMenu />
        <Divider />
        <CtaLink />
        <CtaPrimary />
        <CtaSecondary />
        <Search />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
