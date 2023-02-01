import { ReactNode } from 'react';

// Component-Prop types

export interface DefaultProps {
  children?: ReactNode;
}

export type EventPreviewCardType = {
  title: string;
  date: string;
  time: string;
  location: string;
  excerpt: string;
  image: string;
  slug: string;
};
