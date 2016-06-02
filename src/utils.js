import { Children, PropTypes } from 'react';
import objectAssign from 'object-assign';

export const oneOrMoreRenderablePropType = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node)
]);

export const oneOrMoreRenderableChildrenPropType = {
  children: oneOrMoreRenderablePropType
};

export const oneOrMoreRenderableChildrenRequiredPropType = {
  children: oneOrMoreRenderablePropType.isRequired
};

export const classNamePropType = {
  className: PropTypes.string
};

export const stringOrNumberPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]);

export const stringOrNumberPropTypeForKey = (key, isRequired=false) => {
  const propType = {};
  propType[key] = isRequired ? stringOrNumberPropType.isRequired : stringOrNumberPropType;
  return propType;
};

export const stringOrNumberPropTypeForKeys = (keys, isRequired=false) => {
  const propTypes = objectAssign({}, ...(keys.map(key => stringOrNumberPropTypeForKey(key, isRequired))));
  return propTypes;
};

const createChainableTypeChecker = validate => {
  function checkType(isRequired, props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';
    if (props[propName] === null) {
      if (isRequired) {
        return new Error(`Required prop '${propName}' was not specified in '${componentName}'`);
      }
      return null;
    } else {
      return validate(props, propName, componentName);
    }
  }

  let chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
};

export const allChildrenAreOneOfTypePropType = (types, isRequired=false) => {
  let func = createChainableTypeChecker(allChildrenAreOneOfTypePropTypeFactory(types));
  if (isRequired) func = func.isRequired;
  return {
    children: func
  };
};

function allChildrenAreOneOfTypePropTypeFactory(types) {
  return function(props, propName, cName) {
    if (Children.count(props[propName]) <= 0) return new Error(`${cName} must have some children!`);

    const children = Children.toArray(props[propName]);
    for (let i = children.length - 1; i >= 0; i--) {
      let error = childIsOneOfType(children[i], types);
      if (error) return error;
    }
    return null;
  };
}

function childIsOneOfType(child, types) {
  let funcName = child.type.name;
  // Hack for making this stuff work with stateless component functions and dynamically exported
  // variables/functions. See Column.js for a hint as to what I mean.
  if (child.type.funcName) funcName = child.type.funcName;
  if (!types.includes(funcName)) {
    if (!funcName) funcName = child.type;
    return new Error(`Prop 'children' must be one of types: ${types}. Found '${funcName}' instead.`);
  }
  return null;
}

export function composePropTypes(...objects) {
  return objectAssign({}, ...objects);
}