import Image from 'next/image';

import styles from './banner.module.css';

type BannerProps = {
  imagePath: string;
  title?: string;
  titleColor?: 'white' | 'green';
  height?: number;
  width?: number;
};

export default function Banner({
  imagePath,
  title,
  titleColor,
  height = 3000,
  width = 4000,
}: BannerProps) {
  let chosenColor;

  switch (titleColor) {
    case 'white':
      chosenColor = styles.white;
      break;
    case 'green':
      chosenColor = styles.green;
      break;
    default:
      chosenColor = styles.black;
      break;
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.landingImage}
        src={imagePath}
        alt={`${title} background image`}
        height={height}
        width={width}
      />
      {title && (
        <h1 style={{ color: `${titleColor}` }} className={styles.landingText}>
          {title}
        </h1>
      )}
    </div>
  );
}
