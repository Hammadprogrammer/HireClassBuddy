import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/economics/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/economics/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/economics/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/economics/call_action/call_acition'
import Stats_section from '@/container/all-subject/economics/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/economics/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/economics/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Take My Economics Class, Pay Someone Do My Economics Class",
  description: "Stuck with your difficult online economics class? Get help with online economics class and skyrocket your grades with ease. Get 50% discount on your economics class help by sign up today.",
  alternates: {
    canonical: "/subjects/economics-class",
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
