import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Fetch } from 'react-data-fetching';
import Search from './search';

export default class MegaMenu extends Component {
  constructor(props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
    this.handleMenuItem = this.handleMenuItem.bind(this);
  }

  // @TODO: regex to add external class
  handleMenuItem = (href, title) => {
    return (
      <a
        role='menuitem'
        href={href}
      >
        {title}
      </a>
    );
  };

  // @TODO: top level item weight? and tidy up the rubbish code, mobile onClick reset both checkboxes
  handleNav = (data) => {
    const menuItems= Object.keys(data)
      .filter(obj => data[obj]['#title'] !== undefined )
      .map(obj => {
        const level1 = data[obj];
        const menuBar = (
          <div className="cr-menu__block">
            <span />
            {this.handleMenuItem(level1['#href'], level1['#title'])}
          </div>
        );
        const menu = Object.keys(level1['#below'])
          .filter(obj2 => level1['#below'][obj2]['#title'] !== undefined )
          .map(
            obj2 => {
              const level2 = level1['#below'][obj2];
              const menuItem = Object.keys(level2['#below'])
                .filter(obj3 => level2['#below'][obj3]['#title'] !== undefined )
                .map(
                  obj3 => {
                    const level3 = level2['#below'][obj3];
                    return (
                      <li>
                        {this.handleMenuItem(level3['#href'], level3['#title'])}
                      </li>
                    );
                  }
                );

              return (
                <li>
                  {this.handleMenuItem(level2['#href'], level2['#title'])}
                  <ul>
                    {menuItem}
                  </ul>
                </li>
              );
            }
          );

        return (
          <li>
            {menuBar}
            <ul role="menu">
              {menu}
            </ul>
          </li>
        );
      });

    return (
      <nav className="cr-menu__nav">
        <ul role="menubar" tabIndex="0">
          {menuItems}
        </ul>
      </nav>
    );
  };

  render() {
    return (
      <Fetch
        url={this.props.url}
      >
        {({ data }) => (
          <div className="cr-menu__wrapper">
            <hr className="cr-menu__divider" />
            <div className="cr-menu__inner">
              <div className="cr-menu">
                <input type="checkbox" id="cr-menu__btn--menu" className="cr-menu__btn" />
                <label htmlFor="cr-menu__btn--menu" className="cr-menu__label">Menu</label>
                <input type="checkbox" id="cr-menu__btn--search" className="cr-menu__btn" />
                <label htmlFor="cr-menu__btn--search" className="cr-menu__label">Search</label>
                <div className="cr-menu__main-menu">
                  {this.handleNav(data)}
                </div>
                <div className="cr-menu__search">
                  <Search
                    label='Search'
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Fetch>
    );
  }
}

MegaMenu.propTypes = {
  url: PropTypes.string,
};
