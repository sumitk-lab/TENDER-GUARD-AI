import React from 'react';

export const REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element');
export const REACT_PORTAL_TYPE = Symbol.for('react.portal');
export const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
export const REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
export const REACT_PROFILER_TYPE = Symbol.for('react.profiler');
export const REACT_CONSUMER_TYPE = Symbol.for('react.consumer');
export const REACT_CONTEXT_TYPE = Symbol.for('react.context');
export const REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
export const REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
export const REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
export const REACT_MEMO_TYPE = Symbol.for('react.memo');
export const REACT_LAZY_TYPE = Symbol.for('react.lazy');

export function typeOf(object: any): any {
  if (typeof object === 'object' && object !== null) {
    const $$typeof = object.$$typeof;
    if ($$typeof === REACT_ELEMENT_TYPE || React.isValidElement(object)) {
      if (object.type === REACT_FRAGMENT_TYPE || object.type === React.Fragment) {
        return REACT_FRAGMENT_TYPE;
      }
      return object.type;
    }
    return $$typeof;
  }
  return undefined;
}

export function isFragment(object: any): boolean {
  if (!object) return false;
  return (
    object.type === React.Fragment ||
    object.type === REACT_FRAGMENT_TYPE ||
    typeOf(object) === REACT_FRAGMENT_TYPE
  );
}

export function isElement(object: any): boolean {
  return React.isValidElement(object);
}

export function isValidElementType(type: any): boolean {
  return typeof type === 'string' || typeof type === 'function' || type === React.Fragment;
}

export const ContextConsumer = REACT_CONSUMER_TYPE;
export const ContextProvider = REACT_CONTEXT_TYPE;
export const Element = REACT_ELEMENT_TYPE;
export const ForwardRef = REACT_FORWARD_REF_TYPE;
export const Fragment = REACT_FRAGMENT_TYPE;
export const Lazy = REACT_LAZY_TYPE;
export const Memo = REACT_MEMO_TYPE;
export const Portal = REACT_PORTAL_TYPE;
export const Profiler = REACT_PROFILER_TYPE;
export const StrictMode = REACT_STRICT_MODE_TYPE;
export const Suspense = REACT_SUSPENSE_TYPE;
export const SuspenseList = REACT_SUSPENSE_LIST_TYPE;

export default {
  isFragment,
  isElement,
  isValidElementType,
  typeOf,
  Fragment,
  Element,
};
