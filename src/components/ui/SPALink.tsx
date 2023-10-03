'use client';

import React from 'react';
import NextLink from 'next/link';
import { Link, LinkProps } from '@nextui-org/link';

type Props = Omit<LinkProps, 'as'>;

const SPALink: React.FC<Props> = (props) => {
  return (
    <Link {...props} as={NextLink}>
      {props.children}
    </Link>
  );
};

export default SPALink;
