import clsx from 'clsx';

export function cn(...classes) {
  return clsx(classes);
}

export function externalProps(label = 'external link') {
  return {
    target: '_blank',
    rel: 'noreferrer',
    'aria-label': label
  };
}
