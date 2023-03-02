import { Component } from 'solid-js';

export type CalendarEventProps = {
  type?: string;
  date?: number;
  month?: number;
  year?: number;
  iDate?: number;
  iMonth?: number;
  iYear?: number;
  title?: string;
  description?: string;
};

export const CalendarEvent: Component<CalendarEventProps> = ({
  type,
  date,
  month,
  year,
  iDate,
  iMonth,
  iYear,
  description = '',
}) => {
  console.log(type, date, iDate, month, iMonth);

  if (
    (type === 'yearly' && month === iMonth && date === iDate) ||
    (year === iYear && month === iMonth && date === iDate)
  ) {
    return (
      <div
        class="rounded p-2 truncate bg-blue-500 text-white flex items-center gap-2 cursor-pointer"
        onClick={() => {}}
      >
        <div class="w-4 h-4 bg-white rounded-full"></div>
        <div class="text-sm">{description}</div>
      </div>
    );
  }

  return <></>;
};

export default CalendarEvent;
