import React from 'react';
import PropTypes from 'prop-types';

function Breadcrumb(props) {
  const classes = ['cr-breadcrumb'];
  if (props.hide_current) {
    classes.push('cr-breadcrumb--hide-current');
  }
  if (props.hide_top) {
    classes.push('cr-breadcrumb--hide-top');
  }
  return (
    <nav id="breadcrumb" aria-label="You are here" className={classes.join(' ')}>
      <ol itemScope itemType="http://schema.org/BreadcrumbList" className="cr-breadcrumb__list cr-breadcrumb-nav">
        {props.crumbs.map((crumb, i) => {
          return (
            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" aria-level={ i + 1 } className="cr-breadcrumb__list-item">
              <a itemProp="item" href={ crumb.href } className="cr-breadcrumb__link">{ crumb.label }</a>
              <span />
              <meta itemProp="position" content={ i + 1 } />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  hide_current: PropTypes.bool,
  hide_top: PropTypes.bool,
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default Breadcrumb;
