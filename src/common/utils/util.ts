import { format } from 'date-fns';

export const formatDate = (dateString: string, formatString: string) => {
  return format(new Date(dateString), formatString);
};

export const formatTime = (timeString: string, formatString: string) => {
  return format(new Date(`2000-01-01T${timeString}`), formatString);
};

export const formatDateTime = (dateTime: string, formatString: string) => {
  return format(new Date(dateTime), formatString);
};
