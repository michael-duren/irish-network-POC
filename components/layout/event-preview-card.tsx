import Image from 'next/image';
import Link from 'next/link';
import { IoLocationOutline, IoCalendarNumberOutline } from 'react-icons/io5';

import type { EventPreviewCardType } from '@/utils/types';
import styles from './event-preview-card.module.css';

type EventPreviewCardProps = {
  event: EventPreviewCardType;
};

export default function EventPreviewCard({
  event: { title, date, time, location, excerpt, image, slug },
}: EventPreviewCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>
          <Link href={`/events/${slug}`}>{title}</Link>
        </h2>
        <div className={styles.date}>
          <div className={styles.dateIcon}>
            <IoCalendarNumberOutline />
          </div>
          {date} @ {time}
        </div>
        <address className={styles.address}>
          <IoLocationOutline />
          {location}
        </address>
        <p>{excerpt}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          height={300}
          width={400}
          alt={`Event Image for ${title}`}
        />
      </div>
    </div>
  );
}
