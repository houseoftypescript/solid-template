import Container from '@suid/material/Container';
import Paper from '@suid/material/Paper';
import { Component } from 'solid-js';
import Calendar from '../../../components/organisms/Calendar';
import LayoutTemplate from '../../../templates/LayoutTemplate';

export const CalendarPage: Component = () => {
  return (
    <LayoutTemplate>
      <Container class="py-8">
        <Paper class="border">
          <Calendar
            events={[
              {
                type: 'yearly',
                date: 1,
                month: 1,
                description: 'New Year',
              },
              {
                type: 'yearly',
                date: 30,
                month: 4,
                description: 'Reunification Day',
              },
              {
                type: 'yearly',
                date: 1,
                month: 5,
                description: 'Labour Day',
              },
              {
                type: 'yearly',
                date: 2,
                month: 9,
                description: 'National Day',
              },
              {
                type: 'yearly',
                date: 24,
                month: 12,
                description: 'Christmas Eve',
              },
              {
                type: 'yearly',
                date: 25,
                month: 12,
                description: 'Christmas',
              },
              {
                type: 'yearly',
                date: 31,
                month: 12,
                description: 'New Year Eve',
              },
            ]}
          />
        </Paper>
      </Container>
    </LayoutTemplate>
  );
};

export default CalendarPage;
