import clsx from 'clsx';

export function cn(...classes) {
  return clsx(classes);
}

export function externalProps(label = 'external link') {
  return {
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': label
  };
}
