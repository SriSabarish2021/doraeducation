
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/WebsiteComponents/HomePage'
import Nav from './Components/NavBar/Nav'
import AboutPage from './Components/WebsiteComponents/AboutPage'
import CoursePage from './Components/WebsiteComponents/CoursePage'
import ContactPage from './Components/WebsiteComponents/ContactPage'
import ReviewMainPage from './Components/WebsiteComponents/ReviewMainPage'
import CourseOverview from './Components/CourseOverviewPage/CourseOverview'
import { useEffect, useState } from 'react'

function App() {

  const [course,setcourse]=useState(
    [
    {
      id:1,
      courseIMG:'https://perfectelearning.com/uploads/blogs/1696666667.jpg',
      courseName:'JavaScript',
      courseTitle:'JavaScript Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'1:25',
      totalLesson:10,
      totalEnroll:20,
      Category:'Front-End',
      rating:4,
      CourseIntroVid:'https://www.youtube.com/watch?v=DHjqpvDnNGE',
      CourseFullVid:'https://www.youtube.com/watch?v=toymwoKBtbM&t=24948s',
      CourseIntro:'Master JavaScript from the ground up with this complete tutorial',
      CoursePara:"Dive into the world of JavaScript with this complete tutorial designed for beginners and aspiring developers.Learn everything from the fundamentals to advanced concepts with hands-on examples and clear explanations.",
      CourseSummaryList:['Introduction to JavaScript Programming','Variables, Data Types, and Operators','Objects and Arrays in Depth','ES6+ Features and Modern Syntax','Building Interactive Web Projects','Real-World Design Projects'],
      Like:false,
      Enroll:false,
      CourseAMT:150,
      Access:'Full-LifeTime',
      Certification:'Yes',
      LastUpdate:'12 September 2021',
      Published:'02/January/2022',
      Audio:['Tamil'],
      DownloadResourses:['2','3','23'],
      SubtitlesNUM:10,
      WhatLearn:['Understand the core concepts of JavaScript like variables, data types, and operators.','Write dynamic programs using conditional statements and loops.','Work with arrays and objects to store and manipulate data.','Manipulate the DOM to dynamically update web pages.','Handle user interactions through event listeners and form inputs.','Build reusable code with functions and manage scope effectively.'],
      Tutor:{
        TutorIMG:'https://images.unsplash.com/photo-1649705433263-5c80d699b5f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBST0ZFU1NPUiUyMGltQUdFfGVufDB8fDB8fHww',
        TutorName:'David Ranga',
        TutorQualification:'Trained FullStack Developer',
        TutorRating:4.5,
        TutorReview:13,
        NumOfTeaching:6,
        TotStudUnder:2560,
        TeacherAbout:'Our dedicated tech staff brings a wealth of knowledge and hands-on experience in the fields of software development, UI/UX design, and emerging technologies.They are passionate educators who stay updated with the latest industry trends to deliver practical, real-world insights.With strong backgrounds in both academic and professional settings, they ensure a well-rounded learning experience.Their commitment to mentorship and innovation empowers students to thrive in today’s fast-paced tech landscape.',
        TeacherFBlink:'https://www.facebook.com/srisabarish003',
        TeacherTwitterlink:'https://x.com/SriSabarish2003',
        TeacherLinkedinlink:'https://www.linkedin.com/in/sri-sabarish-b922222a5/',
        TeacherInstalink:'',


      },
      CourseContent:[
        {
          CourseContentID:1,
          ContentTitle:'Course Introduction',
          ContentItem:'Introduction Lesson Of JavaScript',
          VideoDuration:'10:5',
        },
         {
          CourseContentID:2,
          ContentTitle:'Basic Setup',
          ContentItem:'Vs Code Setup for JavaScript',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:3,
          ContentTitle:'Get Into First Step',
          ContentItem:'Variables, Data Types, and Operators',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:4,
          ContentTitle:'JavaScript Intermediare',
          ContentItem:'Function, Objects and Arrays in Depth',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:5,
          ContentTitle:'Asynchronous JavaScript',
          ContentItem:'Callbacks, Promises & Async/Await',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:6,
          ContentTitle:'JavaScript OOPS Concept',
          ContentItem:'Get into the JavaScript main Concept OOPS',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:7,
          ContentTitle:'Advanced Concepts in JavaScript',
          ContentItem:'ES6+ Features and Modern Syntax',
           VideoDuration:'10:5',
        },

      ],
      CourseReview:[
        {
          ReviewId:1,
          ReviewerIMG:'https://images.unsplash.com/photo-1667996112761-3e14e3795e9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fFBST0ZFU1NPUiUyMGltQUdFfGVufDB8fDB8fHww',
          ReviewerName:'David Josh Kanna',
          ReviewerContent:'Dive into the world of JavaScript with this complete tutorial designed for beginners and aspiring developers.Learn everything from the fundamentals to advanced concepts with hands-on examples and clear explanations',
          ReviewedDate:'July 20 2020',
          RaatingNUM:5
        } ,
         {
          ReviewId:2,
          ReviewerIMG:'https://images.unsplash.com/photo-1667996112761-3e14e3795e9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fFBST0ZFU1NPUiUyMGltQUdFfGVufDB8fDB8fHww',
          ReviewerName:'David Josh Kanna',
          ReviewerContent:'Dive into the world of JavaScript with this complete tutorial designed for beginners and aspiring developers.Learn everything from the fundamentals to advanced concepts with hands-on examples and clear explanationsDive into the world of JavaScript with this complete tutorial designed for beginners and aspiring developers.Le',
          ReviewedDate:'July 20 2020',
          RaatingNUM:1
        },
        {
          ReviewId:3,
          ReviewerIMG:'https://images.unsplash.com/photo-1667996112761-3e14e3795e9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fFBST0ZFU1NPUiUyMGltQUdFfGVufDB8fDB8fHww',
          ReviewerName:'David Josh Kanna',
          ReviewerContent:'Dive into the world of JavaScript with this complete tutorial designed for beginners and aspiring developers.Learn everything from the fundamentals to advanced concepts with hands-on examples and clear explanations',
          ReviewedDate:'July 20 2020',
          RaatingNUM:1
        },
        {
          ReviewId:4,
          ReviewerIMG:'https://images.unsplash.com/photo-1667996112761-3e14e3795e9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fFBST0ZFU1NPUiUyMGltQUdFfGVufDB8fDB8fHww',
          ReviewerName:'David Josh Kanna',
          ReviewerContent:'Dive into the world of JavaScript with this complete tutorial designed for beginners and aspiring developers.Learn everything from the fundamentals to advanced concepts with hands-on examples and clear explanations',
          ReviewedDate:'July 20 2020',
          RaatingNUM:1
        }

      ]
      
    },
    {
      id:2,
      courseIMG:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8yqrl-koc3U1HD7SYlyAw4FPY1T-tIVZFA&s',
      courseName:'HTML',
      courseTitle:'HTML Full Toturial',
      studyLevel:'InterMediate',
      CourseDuration:'5:00',
      totalLesson:20,
      totalEnroll:50,
      rating:4.5,
      CourseIntro:'Learn the building blocks of the web with this complete HTML tutorial!',
      CoursePara:"This complete HTML tutorial is your guide to mastering the foundation of web development.You'll begin with the basics—understanding tags, elements, and attributes—and gradually move to more advanced concepts.",
      Like:false,
      Enroll:false,
      CourseAMT:89,
    },
    {
      id:3,
      courseIMG:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRLoIFznmiPXt3Vge1UR2LuOfhQi8Jz9e9w&s',
      courseName:'CSS',
      courseTitle:'CSS Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'6:15',
      totalLesson:35,
      totalEnroll:60,
      rating:3.5,
      CourseIntro:'Gain the art of styling websites with this complete CSS tutorial — from basics to advanced',
      CoursePara:"This full tutorial covers everything from the basics of selectors and layouts to advanced animations and media queries.Perfect for beginners and those looking to level up their frontend design skills.",
      Like:false,
      Enroll:false,
      CourseAMT:100
    },
    {
      id:4,
      courseIMG:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJKRrVc9cw6LYxeczOeDJIw0C9udQI3LSfA&s',
      courseName:'SASS',
      courseTitle:'SASS Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'2:25',
      totalLesson:18,
      totalEnroll:35,
      rating:4.5,
      CourseIntro:'Learn SASS from scratch in this full tutorial covering variables, functions and so on...',
      CoursePara:"This SASS full tutorial will guide you step-by-step from the basics to advanced concepts.You'll learn how to use variables, nesting, mixins, functions, and more to write clean, reusable styles.By the end, you'll be able to apply SASS in real-world projects with efficient and scalable CSS architecture.",
      Like:false,
      Enroll:false,
      CourseAMT:80
    },
    {
      id:5,
      courseIMG:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRUbY53JQZrTWE0GimBgZjNtxhJmU5nUduh7qoaec2mSQ0fDWklBeD6vwrHnD_2SnHIo&usqp=CAU',
      courseName:'ReactJS',
      courseTitle:'ReactJS Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'3:10',
      totalLesson:32,
      totalEnroll:70,
      rating:5,
      CourseIntro:'Learn complete React tutorial—from basics to advanced concepts',
      CoursePara:" This complete React tutorial is your go-to guide for mastering modern web development.You'll learn everything from the fundamentals like components and state to advanced concepts like hooks and routing.Perfect for building fast, dynamic, and scalable web applications with ease.",
      Like:false,
      Enroll:false,
      CourseAMT:160
    },
    {
      id:6,
      courseIMG:'https://img-c.udemycdn.com/course/480x270/5517248_5d7d_8.jpg',
      courseName:'TypeScript',
      courseTitle:'JavaScript Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'4:25',
      totalLesson:30,
      totalEnroll:40,
      rating:4.5,
      CourseIntro:'Master TypeScript from the ground up with this complete tutorial.',
      CoursePara:"Dive into the world of TypeScript with this comprehensive tutorial designed for beginners and experienced developers alike.Learn everything from basic types and interfaces to advanced concepts like generics, classes, and type inference.Build real-world projects and strengthen your code with the power of static typing and modern JavaScript features.",
      Like:false,
      Enroll:false,
      CourseAMT:170
    },
    {
      id:7,
      courseIMG:'https://img-c.udemycdn.com/course/480x270/5699308_0c7f_3.jpg',
      courseName:'NextJS',
      courseTitle:'NextJS Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'2:50',
      totalLesson:21,
      totalEnroll:36,
      rating:3.5,
      CourseIntro:'Learn how to build fast, scalable web applications with this hands-on Next.js tutorial.',
      CoursePara:"Master the fundamentals of building fast and scalable web applications with Next.js.This tutorial covers essential topics like file-based routing, data fetching, and dynamic rendering.By the end, you'll be ready to build and deploy powerful full-stack apps with ease.",
      Like:false,
      Enroll:false,
      CourseAMT:199
    }
    ,
    {
      id:8,
      courseIMG:'https://i.pinimg.com/736x/84/bb/85/84bb85088005568a075a7f8d87e85207.jpg',
      courseName:'PhotoShop',
      courseTitle:'PhotoShop Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'2:45',
      totalLesson:18,
      totalEnroll:25,
      rating:4,
      CourseIntro:'Learn Adobe Photoshop with easy, step-by-step tutorials perfect for beginners.',
      CoursePara:"Unlock the power of Adobe Photoshop with our easy-to-follow tutorials.Whether you're a beginner or looking to sharpen your skills, we've got you covered.From basic tools to advanced techniques, start creating stunning designs today.",
      Like:false,
      Enroll:false,
      CourseAMT:120
    }
    ,
    {
      id:9,
      courseIMG:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tymWD1WODsexDxLiD1nq9az3wYmHoNSLog&s',
      courseName:'Figma',
      courseTitle:'Figma Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'1:25',
      totalLesson:10,
      totalEnroll:20,
      rating:4,
      CourseIntro:'Learn to design stunning user interfaces from scratch with this beginner-friendly Figma tutorial.',
      CoursePara:"Dive into the world of UI/UX design with this beginner-friendly Figma tutorial.Learn how to create sleek, modern interfaces from scratch using powerful design tools.Whether you're a developer or designer, this guide will help you bring your ideas to life visually.",
      Like:false,
      Enroll:false,
      CourseAMT:130
    }
  ])

  useEffect(() => {
    
    console.log(course);
    
  
  }, [])

  const LikeCourse=(courseID)=>{
    const getIDcourse=Array.from(course).map((indicourse)=>
      Number(indicourse.id)==Number(courseID)?{...indicourse,Like:!indicourse.Like}:{...indicourse}
    )
    setcourse(getIDcourse)
    
    
  }
  


  return (
    
    <div className='website-main-container'>
      <Nav/>
      <div className='edu-main-page'>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage course={course} LikeCourse={LikeCourse}/>}/>
            <Route path='About-Mindspire-Institute' element={<AboutPage/>}/>
            <Route path="Providing-Education's-in-Mindspire-Institute" element={<CoursePage course={course} LikeCourse={LikeCourse}/>}/>
            <Route path="Contact-with-Mindspire-Institute" element={<ContactPage/>}/>
            <Route path="Mindspire-Institute-Student-Review-Page" element={<ReviewMainPage/>}/>
            <Route path="mindspire-course" element={<CourseOverview course={course} LikeCourse={LikeCourse} setcourse={setcourse}/>}/>
            <Route path="/Providing-Education's-in-Mindspire-Institute/mindspire-course" element={<CourseOverview course={course} LikeCourse={LikeCourse} setcourse={setcourse}/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
   
    
    
  )
}

export default App
