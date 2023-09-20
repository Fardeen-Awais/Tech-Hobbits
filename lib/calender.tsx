'use client'
import Head from 'next/head';
import { useEffect } from 'react';

const CalendarPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Head>
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      </Head>
      <div id="calendar-scheduling-button"></div>
    </div>
  );
};

export default CalendarPage;