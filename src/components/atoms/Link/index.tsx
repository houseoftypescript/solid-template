import { A } from '@solidjs/router';
import { Component, JSX } from 'solid-js';

const isProd: boolean = process.env.NODE_ENV === 'production';
const base: string = isProd ? '/solid-template' : '';

export type LinkProps = {
  href?: string;
  className?: string;
  children?: JSX.Element;
};

export const Link: Component<LinkProps> = ({
  href = '/',
  className = '',
  children = <></>,
}) => {
  return (
    <A href={`${base}${href}`} class={className}>
      {children}
    </A>
  );
};

export default Link;
