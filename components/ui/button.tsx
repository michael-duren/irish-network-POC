import Link from 'next/link';
import classNames from 'classnames';

import type { DefaultProps } from '@/utils/types';
import styles from './button.module.css';

interface ButtonProps extends DefaultProps {
  buttonType: 'primary' | 'secondary' | 'dark';
  linkTo: string;
}

export default function Button({ children, linkTo, buttonType }: ButtonProps) {
  let buttonStyle;

  switch (buttonType) {
    case 'primary':
      buttonStyle = styles.primary;
      break;
    case 'secondary':
      buttonStyle = styles.secondary;
      break;
    case 'dark':
      buttonStyle = styles.dark;
      break;
  }

  return (
    <button className={classNames(buttonStyle, styles.button)}>
      <Link href={linkTo}>{children}</Link>
    </button>
  );
}
