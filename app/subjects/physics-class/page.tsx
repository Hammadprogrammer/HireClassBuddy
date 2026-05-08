import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/physics/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/physics/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/physics/Content_section_one/Content_section_one'

import CallActionSection from '@/container/all-subject/physics/call_action/call_acition'

import Stats_section from '@/container/all-subject/physics/stats_section/stats_section'

import Content_section_two from '@/container/all-subject/physics/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/physics/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Physics Class Takers, Hire Someone to Take My Physics Class",
  description: "Want someone to take your Physics class for you? Hire professional physics class takers and complete assignments, quizzes, and discussions stress-free. Sign up Now and get 50% Discount.",
  alternates: {
    canonical: "/subjects/physics-class",
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
