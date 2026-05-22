import React from 'react';
import { Metadata } from 'next';
import TermsAndConditions from '@/container/terms-and-conditions/terms-and-conditions';

export const metadata: Metadata = {
  title: 'Terms and Conditions – Hire Class Buddy',
  description: 'Please read our Terms and Conditions carefully before booking an order or any transaction with Hire Class Buddy. We have very strict policies and terms of use agreement to provide the best quality services.',
  alternates: {
    canonical: "/terms-and-conditions",
  }
};

const Page = () => {
  return (
    <main>
      <TermsAndConditions />
    </main>
  );
}

export default Page;