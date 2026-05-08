import React from 'react';
import { Metadata } from 'next';
import AboutUs from '@/container/about-us/about-us';

export const metadata: Metadata = {
  title: 'Hire Class Buddy – Online Class Help and Exam Help USA',
  description: 'Get expert online class help, exam help, assignments, quizzes and proctored exam support in the USA. Hire Class Buddy helps students succeed with trusted academic assistance.',
  alternates: {
    canonical: '/about-us',
  },
};

const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default page;