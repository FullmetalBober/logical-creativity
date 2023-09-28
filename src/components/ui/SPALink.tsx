'use client';

import { useRouter } from 'next/navigation';
import { Link, LinkProps } from '@nextui-org/link';

const SPALink: React.FC<LinkProps> = (props) => {
  const router = useRouter();
  const href = props.href || '';

  const pressHandler = () => router.push(href);

  return (
    <Link {...props} onPress={pressHandler}>
      {props.children}
    </Link>
  );
};

export default SPALink;
