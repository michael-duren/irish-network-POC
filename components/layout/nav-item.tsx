import Link from 'next/link';
import classNames from 'classnames';
import styles from './nav-item.module.css';

export default function NavItem({
  link,
  currentRoute,
  name,
}: {
  link: string;
  currentRoute: string;
  name: string;
}) {
  const isActiveClass = (path: string, route: string) => {
    const isActive = route === path ? styles.active : styles.inActive;

    const navClassName = classNames(styles.link, isActive);
    console.log(navClassName);
    return navClassName;
  };

  const className = isActiveClass(link, currentRoute);

  return (
    <li>
      <Link className={className} href={link}>
        {name}
      </Link>
    </li>
  );
}
