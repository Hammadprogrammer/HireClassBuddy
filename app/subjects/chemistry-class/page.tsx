import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/chemistry/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/chemistry/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/chemistry/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/chemistry/call_action/call_acition'
import Stats_section from '@/container/all-subject/chemistry/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/chemistry/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/chemistry/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Online Chemistry Class, Pay Someone Take My Chemistry Class",
  description: "Struggling with Your Chemistry Class? Hire our online chemistry class takers for hire and take online chemistry class help and excel with ease. Get 50% Discount on sign up today.",
  alternates: {
    canonical: "/subjects/chemistry-class",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection/>
      <ContentSectionThree/>
    </>
  )
}

export default page
