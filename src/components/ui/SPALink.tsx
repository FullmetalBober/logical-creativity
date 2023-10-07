import React from 'react';
import { Link, LinkProps } from '@nextui-org/link';
import NextLink from 'next/link';

type Props = Exclude<LinkProps, 'as'>;

const SPALink: React.FC<Props> = (props) => {
  return (
    <Link {...props} as={NextLink}>
      {props.children}
    </Link>
  );
};

export default SPALink;
