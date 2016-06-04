import React from 'react';

const { bool, object, string, func, oneOfType } = React.PropTypes;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
function isEmptyObject(object) {
  for (const p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
  }

  return true;
}

function createLocationDescriptor(to, { query, hash, state }) {
  if (query || hash || state) {
    return { pathname: to, query, hash, state };
  }

  return to;
}

const Link = React.createClass({

  contextTypes: {
    router: object
  },

  propTypes: {
    to: oneOfType([ string, object ]).isRequired,
    query: object,
    hash: string,
    state: object,
    activeStyle: object,
    activeClassName: string,
    onlyActiveOnIndex: bool.isRequired,
    onClick: func,
    target: string
  },

  getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      style: {}
    };
  },

  handleClick(event) {
    let allowTransition = true;

    if (this.props.onClick) this.props.onClick(event);

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    if (event.defaultPrevented === true) allowTransition = false;

    // If target prop is set (e.g. to "_blank") let browser handle link.
    /* istanbul ignore if: untestable with Karma */
    if (this.props.target) {
      if (!allowTransition) event.preventDefault();

      return;
    }

    event.preventDefault();

    if (allowTransition) {
      const { to, query, hash, state } = this.props;
      const location = createLocationDescriptor(to, { query, hash, state });

      this.context.router.push(location);
    }
  },

  render() {
    const { to, query, hash, state, activeClassName, activeStyle, onlyActiveOnIndex, ...props } = this.props;

    // Ignore if rendered outside the context of router, simplifies unit testing.
    const { router } = this.context;

    if (router) {
      const location = createLocationDescriptor(to, { query, hash, state });
      props.href = router.createHref(location);

      if (activeClassName || (activeStyle != null && !isEmptyObject(activeStyle))) {
        if (router.isActive(location, onlyActiveOnIndex)) {
          if (activeClassName) {
            if (props.className) {
              props.className += ` ${activeClassName}`;
            } else {
              props.className = activeClassName;
            }
          }

          if (activeStyle) props.style = { ...props.style, ...activeStyle };
        }
      }
    }

    return <a {...props} onClick={this.handleClick} />;
  }
});

export default Link;