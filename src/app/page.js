import Banner from '@/Component/Banner/Banner'
import Course from '@/Component/Course/Course'
import FreeEnrollMentCourse from '@/Component/EnrollMentCouse/FreeEnrollMentCourse'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Course></Course>
      <FreeEnrollMentCourse></FreeEnrollMentCourse>
    </main>
  )
}
