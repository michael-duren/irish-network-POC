import Link from 'next/link';
import classNames from 'classnames';

import type { DefaultProps } from '@/utils/types';
import styles from './button.module.css';

interface ButtonProps extends DefaultProps {
  buttonType: 'primary' | 'special' | 'plain';
  function: 'link' | 'click';
  linkTo?: string;
  onClickHandler?: () => void;
}

export default function Button({
  children,
  linkTo,
  buttonType,
  onClickHandler,
}: ButtonProps) {
  let buttonStyle;

  switch (buttonType) {
    case 'primary':
      buttonStyle = styles.primary;
      break;
    case 'special':
      buttonStyle = styles.special;
      break;
    case 'plain':
      buttonStyle = styles.plain;
      break;
  }

  if (linkTo) {
    return (
      <Link className={classNames(buttonStyle, styles.button)} href={linkTo}>
        {children}
      </Link>
    );
  }
  return (
    <div
      onClick={onClickHandler}
      className={classNames(buttonStyle, styles.button)}
    >
      {children}
    </div>
  );
}
