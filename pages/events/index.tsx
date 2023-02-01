import EventPreviewCard from '@/components/layout/event-preview-card';
import Banner from '@/components/ui/banner';

import styles from '../../styles/events.module.css';

import type { DefaultProps, EventPreviewCardType } from '@/utils/types';

// interface EventsPageProps extends DefaultProps {
//   eventsList: EventPreviewCardType[];
// }

export default function Events() {
  const DUMMY_DATA = [
    {
      title: 'Irish Fair',
      date: 'February 3rd, 2023',
      time: '3:00 PM',
      location: 'Dunn Bros, 234 Grand Ave, St. Paul, MN',
      excerpt:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eaque, et dicta ratione eveniet mollitia dolor tenetur hic totam ipsa.',
      image: '/images/event-example.jpg',
    },
    {
      title: 'Irish Day',
      date: 'January 3rd, 2023',
      time: '3:00 PM',
      location: 'Dunn Bros, 234 Grand Ave, St. Paul, MN',
      excerpt:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eaque, et dicta ratione eveniet mollitia dolor tenetur hic totam ipsa.',
      image: '/images/event-example.jpg',
    },
    {
      title: 'Irish Fair',
      date: 'March 3rd, 2023',
      time: '3:00 PM',
      location: 'Dunn Bros, 234 Grand Ave, St. Paul, MN',
      excerpt:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eaque, et dicta ratione eveniet mollitia dolor tenetur hic totam ipsa.',
      image: '/images/event-example.jpg',
    },
  ];

  return (
    <>
      <Banner
        titleColor="white"
        imagePath="/images/stools.jpg"
        title="Upcoming Events"
      />
      <div className={styles.eventlist}>
        {DUMMY_DATA.map((event) => {
          return <EventPreviewCard key={event.title} event={event} />;
        })}
      </div>
    </>
  );
}
