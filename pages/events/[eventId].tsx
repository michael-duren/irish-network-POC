import type { GetServerSideProps } from 'next';

import { getSingleEvent } from '@/utils/firebase-utils';
import { EventPreviewCardType } from '@/utils/types';

type EventPageProps = {
  selectedEvent?: EventPreviewCardType;
  errorMessage?: string;
};

export default function EventPage({
  selectedEvent,
  errorMessage,
}: EventPageProps) {
  if (selectedEvent) {
    const { title, excerpt } = selectedEvent;

    return (
      <>
        <h1>{title}</h1>
        <p>{excerpt}</p>
      </>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (typeof params?.eventId === 'string')
    try {
      const event = await getSingleEvent(params?.eventId);

      return {
        props: {
          selectedEvent: event,
        },
      };
    } catch (err) {
      return {
        props: {
          errorMessage: err,
        },
      };
    }
  else {
    return {
      props: {
        errorMessage: 'Incorrect URL',
      },
    };
  }
};
