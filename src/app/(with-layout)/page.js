import Banner from '@/Component/Banner/Banner'
import Course from '@/Component/Course/Course'
import FreeEnrollMentCourse from '@/Component/EnrollMentCouse/FreeEnrollMentCourse'
import OtherCourseEnrollment from '@/Component/EnrollMentCouse/OtherCourseEnrollMent'
import Navbar from '@/Component/Header/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <Course></Course>
      <FreeEnrollMentCourse></FreeEnrollMentCourse>
      <OtherCourseEnrollment></OtherCourseEnrollment>
    </main>
  )
}
