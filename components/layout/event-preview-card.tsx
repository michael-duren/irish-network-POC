import Image from 'next/image';

import type { EventPreviewCardType } from '@/utils/types';

type EventPreviewCardProps = {
  event: EventPreviewCardType;
};

export default function EventPreviewCard({
  event: { title, date, time, location, excerpt, image },
}: EventPreviewCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {date} @ {time}
      </div>
      <address>{location}</address>
      <p>{excerpt}</p>
      <Image
        src={image}
        height={300}
        width={300}
        alt={`Event Image for ${title}`}
      />
    </div>
  );
}
