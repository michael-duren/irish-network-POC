import type { DefaultProps } from '@/utils/types';
import styles from './button.module.css';

interface ButtonProps extends DefaultProps {
  buttonType: 'primary' | 'secondary' | 'dark';
}

export default function Button({ children, buttonType }: ButtonProps) {
  switch (buttonType) {
    case 'primary':
      return <button className={styles.primary}>{children}</button>;
    case 'secondary':
      return <button className={styles.secondary}>{children}</button>;
    case 'dark':
      return <button className={styles.dark}>{children}</button>;
  }
}
