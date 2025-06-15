
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
import CartPage from './Components/CartPageComponent/CartPage'
import LikePage from './Components/LikePageComponents/LikePage'

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
      CourseDuration:'5:30',
      totalLesson:20,
      totalEnroll:50,
      Category:'Front-End',
      rating:4.5,
      CourseIntroVid:'https://www.youtube.com/watch?v=ok-plXXHlWw',
      CourseFullVid:'https://www.youtube.com/watch?v=tfN9gPFmUfA&t=102s',
      CourseIntro:'Learn the building blocks of the web with this complete HTML tutorial!',
      CoursePara:"This complete HTML tutorial is your guide to mastering the foundation of web development.You'll begin with the basics—understanding tags, elements, and attributes—and gradually move to more advanced concepts.",
      CourseSummaryList:['Introduction to HTML','HTML Document Structure','Text Formatting and Headings','Forms and Input Elements','HTML5 Features and APIs','Project-Based HTML Practice'],
      Like:false,
      Enroll:false,
      CourseAMT:89,
      Access:'Full-LifeTime',
      Certification:'Yes',
      LastUpdate:'12 July 2019',
      Published:'02/January/2020',
      Audio:['Tamil','English'],
      DownloadResourses:['2','3','23'],
      SubtitlesNUM:15,
      WhatLearn:['Understand the Structure of an HTML Document.','Use Headings, Paragraphs, and Text Formatting Tags.','Build Lists: Ordered, Unordered, and Nested Lists.','Design Forms with Inputs, Labels, Buttons, and More.','Organize Content Using Divs and Semantic Elements.','Build a Complete Web Page Using Only HTML.'],
      Tutor:{
        TutorIMG:'https://images.unsplash.com/photo-1649705433263-5c80d699b5f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBST0ZFU1NPUiUyMGltQUdFfGVufDB8fDB8fHww',
        TutorName:'Velu Mani',
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
          ContentTitle:'Getting Started with HTML',
          ContentItem:'Introduction to HTML and How the Web Works',
          VideoDuration:'10:5',
        },
         {
          CourseContentID:2,
          ContentTitle:'HTML Document Structure',
          ContentItem:'Understanding the HTML Boilerplate and Tags',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:3,
          ContentTitle:'Embedding Media Content',
          ContentItem:'Adding Audio, Video, and External Resources',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:4,
          ContentTitle:'Links and Images',
          ContentItem:'Adding Hyperlinks and Embedding Images',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:5,
          ContentTitle:'Working with Lists',
          ContentItem:'Creating Ordered, Unordered, and Nested Lists',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:6,
          ContentTitle:'Tables in HTML',
          ContentItem:'Building Tables to Display Structured Data',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:7,
          ContentTitle:'Forms and Input Elements',
          ContentItem:'Creating Forms with Input Fields, Checkboxes, and Buttons',
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
      id:3,
      courseIMG:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRLoIFznmiPXt3Vge1UR2LuOfhQi8Jz9e9w&s',
      courseName:'CSS',
      courseTitle:'CSS Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'6:15',
      totalLesson:35,
      totalEnroll:60,
      Category:'Front-End',
      rating:3.5,
      CourseIntroVid:'https://www.youtube.com/watch?v=OEV8gMkCHXQ',
      CourseFullVid:'https://www.youtube.com/watch?v=GlEY28YLffs&t=20149s',
      CourseIntro:'Gain the art of styling websites with this complete CSS tutorial — from basics to advanced',
      CoursePara:"This full tutorial covers everything from the basics of selectors and layouts to advanced animations and media queries.Perfect for beginners and those looking to level up their frontend design skills.",
      CourseSummaryList:['Understanding what CSS is, how it works with HTML, and different ways to apply it','Using basic and advanced selectors','Padding, margin, border, and content','Building responsive 1D layouts using flex containers','Creating 2D layouts using rows and columns, grid areas','Real-World CSS Projects and Best Practices'],
      Like:false,
      Enroll:false,
      CourseAMT:100,
      Access:'Full-LifeTime',
      Certification:'Yes',
      LastUpdate:'12 September 2021',
      Published:'02/January/2022',
      Audio:['English','Tamil'],
      DownloadResourses:['2','3','23'],
      SubtitlesNUM:10,
      WhatLearn:['Understanding CSS Syntax and Selectors.','Applying Colors, Fonts, and Text Styles.','Working with Margins, Padding, and Borders.','Building Responsive Layouts with Flexbox and Grid.','Styling Links, Buttons, and Forms.','Organizing Code with External, Internal, and Inline CSS.'],
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
          ContentTitle:'CSS Introduction',
          ContentItem:'What is CSS and How It Works',
          VideoDuration:'10:5',
        },
         {
          CourseContentID:2,
          ContentTitle:'Basic Styling Setup',
          ContentItem:'Using Inline, Internal, and External CSS',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:3,
          ContentTitle:'Selectors and Properties',
          ContentItem:'Element, Class, ID, and Attribute Selectors',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:4,
          ContentTitle:'Box Model and Layout',
          ContentItem:'Margin, Padding, Border, and Content Explained',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:5,
          ContentTitle:'Flexbox in Depth',
          ContentItem:'Responsive Layouts using Flexbox',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:6,
          ContentTitle:'CSS Grid System',
          ContentItem:'Creating Complex Layouts with Grid',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:7,
          ContentTitle:'Advanced CSS & Animation',
          ContentItem:'Transitions, Transforms, and Keyframe Animations',
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
      id:4,
      courseIMG:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJKRrVc9cw6LYxeczOeDJIw0C9udQI3LSfA&s',
      courseName:'SASS',
      courseTitle:'SASS Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'2:25',
      totalLesson:18,
      totalEnroll:35,
      Category:'Front-End',
      rating:4.5,
      CourseIntroVid:'https://www.youtube.com/watch?v=akDIJa0AP5c',
      CourseFullVid:'https://www.youtube.com/watch?v=_a5j7KoflTs&t=3186s',
      CourseIntro:'Learn SASS from scratch in this full tutorial covering variables, functions and so on...',
      CoursePara:"This SASS full tutorial will guide you step-by-step from the basics to advanced concepts.You'll learn how to use variables, nesting, mixins, functions, and more to write clean, reusable styles.By the end, you'll be able to apply SASS in real-world projects with efficient and scalable CSS architecture.",
      CourseSummaryList:['Introduction to Sass and Its Advantages','Installing Sass and Project Setup','Variables and Nesting in Sass','Partials and @import / @use / @forward','Mixins and Functions','Best Practices and Optimization Techniques'],
      Like:false,
      Enroll:false,
      CourseAMT:80,
      Access:'Full-LifeTime',
      Certification:'Yes',
      LastUpdate:'12 September 2022',
      Published:'02/January/2023',
      Audio:['Tamil','English'],
      DownloadResourses:['2','3','23'],
      SubtitlesNUM:10,
      WhatLearn:['Introduction to SASS and How It Enhances CSS.','Installing and Setting Up SASS in Your Projects.','Nesting Selectors for Cleaner Styles.','Using Variables to Manage Colors, Fonts, and Spacing.','Creating and Using Mixins for Reusable Styles.','Organizing Code with Partials and the @use / @import Rules.'],
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
          ContentTitle:'Introduction to Sass',
          ContentItem: 'What is Sass and Why Use It?',
          VideoDuration:'10:5',
        },
         {
          CourseContentID:2,
          ContentTitle: 'Setting Up Sass',
          ContentItem: 'Installing Sass and Configuring Your Project',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:3,
          ContentTitle:'Nesting in Sass',
          ContentItem:'Understanding and Using Nested Selectors',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:4,
          ContentTitle:'Variables in Sass',
          ContentItem:'Reusing Values with Sass Variables',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:5,
          ContentTitle:'Mixins and Functions',
          ContentItem:'Reusable Styles with Mixins and Functions',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:6,
          ContentTitle:'Inheritance and Extends',
          ContentItem:'Using @extend for Style Inheritance',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:7,
          ContentTitle:'Operators and Conditions',
          ContentItem:'Using If-Else and Arithmetic in Sass',
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
      id:5,
      courseIMG:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRUbY53JQZrTWE0GimBgZjNtxhJmU5nUduh7qoaec2mSQ0fDWklBeD6vwrHnD_2SnHIo&usqp=CAU',
      courseName:'ReactJS',
      courseTitle:'ReactJS Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'3:10',
      totalLesson:32,
      totalEnroll:70,
      Category:'Front-End',
      rating:5,
      CourseIntroVid:'https://www.youtube.com/watch?v=Tn6-PIqc4UM',
      CourseFullVid:'https://www.youtube.com/watch?v=Uv7cKlZFXU8&t=4469s',
      CourseIntro:'Learn complete React tutorial—from basics to advanced concepts',
      CoursePara:" This complete React tutorial is your go-to guide for mastering modern web development.You'll learn everything from the fundamentals like components and state to advanced concepts like hooks and routing.Perfect for building fast, dynamic, and scalable web applications with ease.",
      CourseSummaryList:['Introduction to React and JSX','Components and Props','State and Lifecycle in React','Handling Events and Forms','Conditional Rendering and Lists','Real-World Projects and Optimization'],
      Like:false,
      Enroll:false,
      CourseAMT:160,
      Access:'Full-LifeTime',
      Certification:'Yes',
      LastUpdate:'12 September 2021',
      Published:'02/January/2022',
      Audio:['Tamil'],
      DownloadResourses:['2','3','23'],
      SubtitlesNUM:10,
      WhatLearn:['Understand the Fundamentals of React and JSX Syntax.','Build Reusable Components and Manage Props.','Use State and Lifecycle Methods for Dynamic UI.','Handle User Events and Form Inputs Efficiently.','Manage Complex State with React Hooks (useState, useEffect, etc.).','Optimize Performance with Memoization and Lazy Loading.'],
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
          ContentTitle:'React Introduction',
          ContentItem:'What is React and Why Use It?',
          VideoDuration:'10:5',
        },
         {
          CourseContentID:2,
          ContentTitle:'Environment Setup',
          ContentItem:'Installing Node, NPM, and Creating a React App',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:3,
          ContentTitle:'JSX and Components',
          ContentItem:'Understanding JSX and Creating Functional Components',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:4,
          ContentTitle:'Props and State',
          ContentItem:'Managing Data with Props and useState',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:5,
          ContentTitle:'Event Handling & Conditional Rendering',
          ContentItem:'Handling Events and Rendering Conditionally',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:6,
          ContentTitle:'useEffect Hook',
          ContentItem:'Side Effects, Fetching Data and Cleanup',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:7,
          ContentTitle:'Final Mini Project',
          ContentItem:'Build a Functional To-Do App Using Everything Learned',
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
          RaatingNUM:2
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
      id:6,
      courseIMG:'https://img-c.udemycdn.com/course/480x270/5517248_5d7d_8.jpg',
      courseName:'TypeScript',
      courseTitle:'TypeScript Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'4:25',
      totalLesson:30,
      totalEnroll:40,
      Category:'Full-Stack',
      rating:4.5,
      CourseIntroVid:'https://www.youtube.com/watch?v=zQnBQ4tB3ZA',
      CourseFullVid:'https://www.youtube.com/watch?v=30LWjhZzg50&t=31s',
      CourseIntro:'Master TypeScript from the ground up with this complete tutorial.',
      CoursePara:"Dive into the world of TypeScript with this comprehensive tutorial designed for beginners and experienced developers alike.Learn everything from basic types and interfaces to advanced concepts like generics, classes, and type inference.Build real-world projects and strengthen your code with the power of static typing and modern JavaScript features.",
      CourseSummaryList:['Introduction to TypeScript and Its Benefits.','Working with Static Types and Type Annotations.','Mastering Interfaces and Type Aliases.','Understanding Union, Intersection, and Advanced Types.','Functions with Typed Parameters and Return Types.','TypeScript with React, Node.js, and Real-World Projects.'],
      Like:false,
      Enroll:false,
      CourseAMT:170,
      Access:'Full-LifeTime',
      Certification:'Yes',
      LastUpdate:'12 September 2021',
      Published:'02/January/2022',
      Audio:['Tamil'],
      DownloadResourses:['2','3','23'],
      SubtitlesNUM:10,
      WhatLearn:["Understanding what TypeScript is, why it's used, and how it enhances JavaScript.",'Installing TypeScript, configuring tsconfig.json, and integrating with build tools.','Defining typed functions, default parameters, return types, and function overloads.','Creating reusable shapes for objects and defining contracts for code structures.','Writing flexible, type-safe code using generic types for functions, interfaces, and classes.','Organizing code using ES modules, importing/exporting types and functions.'],
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
          ContentTitle:'Introduction to TypeScript',
          ContentItem:'Why TypeScript? Benefits and Overview',
          VideoDuration:'10:5',
        },
         {
          CourseContentID:2,
          ContentTitle:'Setting Up TypeScript',
          ContentItem:'Installing TypeScript and Configuring tsconfig.json',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:3,
          ContentTitle:'Basic Types in TypeScript',
          ContentItem:'Number, String, Boolean, Arrays, Tuples, and Enums',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:4,
          ContentTitle:'Functions in TypeScript',
          ContentItem:'Function Parameters, Return Types and Type Inference',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:5,
          ContentTitle:'Interfaces and Type Aliases',
          ContentItem:'Structuring Objects with Interfaces and Types',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:6,
          ContentTitle:'Classes and OOP in TypeScript',
          ContentItem:'Access Modifiers, Inheritance and Implements',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:7,
          ContentTitle:'Working with TypeScript in React',
          ContentItem:'Typing Props, State, and Components in React',
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
      id:7,
      courseIMG:'https://img-c.udemycdn.com/course/480x270/5699308_0c7f_3.jpg',
      courseName:'NextJS',
      courseTitle:'NextJS Full Toturial',
      studyLevel:'Beginner',
      CourseDuration:'2:50',
      totalLesson:21,
      totalEnroll:36,
      Category:'Back-End',
      rating:3.5,
      CourseIntroVid:'https://www.youtube.com/watch?v=Sklc_fQBmcs',
      CourseFullVid:'https://www.youtube.com/watch?v=ETV17M4SauU',
      CourseIntro:'Learn how to build fast, scalable web applications with this hands-on Next.js tutorial.',
      CoursePara:"Master the fundamentals of building fast and scalable web applications with Next.js.This tutorial covers essential topics like file-based routing, data fetching, and dynamic rendering.By the end, you'll be ready to build and deploy powerful full-stack apps with ease.",
      CourseSummaryList:['Introduction to Next.js and Its Core Features','Project Structure and File-Based Routing','Pages, Layouts, and Nested Routes','Data Fetching Methods: SSR, SSG, ISR, and Client-Side','API Routes and Backend Integration','Styling in Next.js: CSS Modules, Tailwind, and Styled Components'],
      Like:false,
      Enroll:false,
      CourseAMT:199,
      Access:'Full-LifeTime',
      Certification:'Yes',
      LastUpdate:'12 September 2021',
      Published:'02/January/2022',
      Audio:['Tamil'],
      DownloadResourses:['2','3','23'],
      SubtitlesNUM:10,
      WhatLearn:['Learn what makes Next.js powerful — SSR, SSG, file-based routing, and performance optimization.','Understand the folder structure (pages/, app/, components/) and how routing works automatically in Next.js.','Explore how to build dynamic pages, custom layouts, and manage nested routes with app/ directory.','Learn how to create serverless functions in /api and connect to databases or external APIs.','Use the <Image /> and <Font /> components for optimized media and typography loading.','Implement user authentication (e.g. with NextAuth.js) and protect routes using middleware.'],
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
          ContentTitle:'Introduction to Next.js',
          ContentItem:'What is Next.js and Why Use It?',
          VideoDuration:'10:5',
        },
         {
          CourseContentID:2,
          ContentTitle:'Pages and Routing in Next.js',
          ContentItem:'File-based Routing and Dynamic Routes',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:3,
          ContentTitle:'Data Fetching Techniques',
          ContentItem:'getStaticProps, getServerSideProps, and API Routes',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:4,
          ContentTitle:'Styling in Next.js',
          ContentItem:'Using CSS Modules, Tailwind CSS, and Styled Components',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:5,
          ContentTitle:'API Routes and Backend Logic',
          ContentItem:'Building Serverless Functions in Next.js',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:6,
          ContentTitle:'Deployment and Optimization',
          ContentItem:'Deploying with Vercel and Image Optimization',
           VideoDuration:'10:5',
        }

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
      Category:'User-InterFace',
      rating:4,
      CourseIntroVid:'https://www.youtube.com/watch?v=61mkx_OV61s',
      CourseFullVid:'https://www.youtube.com/watch?v=Rx3FquN30TE',
      CourseIntro:'Learn Adobe Photoshop with easy, step-by-step tutorials perfect for beginners.',
      CoursePara:"Unlock the power of Adobe Photoshop with our easy-to-follow tutorials.Whether you're a beginner or looking to sharpen your skills, we've got you covered.From basic tools to advanced techniques, start creating stunning designs today.",
      CourseSummaryList:['Introduction to Adobe Photoshop','Understanding Layers and Layer Masks','Basic Photo Editing Techniques','Selection Tools and Techniques','Color Correction and Image Adjustments','Exporting and Saving for Web, Print, and Social Media'],
      Like:false,
      Enroll:false,
      CourseAMT:120,
      Access:'Full-LifeTime',
      Certification:'Yes',
      LastUpdate:'12 September 2021',
      Published:'02/January/2022',
      Audio:['Tamil'],
      DownloadResourses:['2','3','23'],
      SubtitlesNUM:10,
      WhatLearn:['Get familiar with the interface, tools, panels, and workspace customization.','Learn how to use layers, masks, adjustment layers, and blending modes effectively.','Explore cropping, resizing, retouching, and correcting images with tools like Spot Healing and Clone Stamp.','Master selection tools such as Lasso, Quick Selection, and the Pen Tool for precise editing.','Add and style text, apply text effects, and integrate type with imagery.','Use Levels, Curves, Hue/Saturation, and more for color grading and enhancing images.'],
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
          ContentTitle:'Getting Started with Photoshop',
          ContentItem:'Introduction to Photoshop Interface and Tools',
          VideoDuration:'10:5',
        },
         {
          CourseContentID:2,
          ContentTitle:'Workspace Customization',
          ContentItem:'Setting Up and Customizing Your Photoshop Workspace',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:3,
          ContentTitle:'Working with Layers',
          ContentItem:'Understanding Layers, Groups, and Layer Management',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:4,
          ContentTitle:'Basic Image Editing',
          ContentItem:'Crop, Resize, and Adjust Image Colors',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:5,
          ContentTitle:'rop, Resize, and Adjust Image Colors',
          ContentItem:'Using Marquee, Lasso, Magic Wand, and Quick Selection',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:6,
          ContentTitle:'Photo Retouching Techniques',
          ContentItem:'Removing Blemishes, Healing, and Cloning Tools',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:7,
          ContentTitle:'Advanced Editing with Masks',
          ContentItem:'Layer Masks and Clipping Masks in Practice',
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
      Category:'UI/UX',
      rating:4,
      CourseIntroVid:'https://www.youtube.com/watch?v=RNmbN-r84ms',
      CourseFullVid:'https://www.youtube.com/watch?v=kbZejnPXyLM',
      CourseIntro:'Learn to design stunning user interfaces from scratch with this beginner-friendly Figma tutorial.',
      CoursePara:"Dive into the world of UI/UX design with this beginner-friendly Figma tutorial.Learn how to create sleek, modern interfaces from scratch using powerful design tools.Whether you're a developer or designer, this guide will help you bring your ideas to life visually.",
      CourseSummaryList:['Getting Started with Figma and Adobe XD','Understanding Frames, Artboards, and Pages','Mastering Vector Tools and Pen Tool','Designing UI Elements and Components','Using Grids, Layouts, and Constraints','Prototyping and Interactive Design'],
      Like:false,
      Enroll:false,
      CourseAMT:130,
      Access:'Full-LifeTime',
      Certification:'Yes',
      LastUpdate:'12 September 2021',
      Published:'02/January/2022',
      Audio:['Tamil'],
      DownloadResourses:['2','3','23'],
      SubtitlesNUM:8,
      WhatLearn:['Introduction to UI/UX design tools, interface overview, and setup.','Learn how to organize designs using frames in Figma and artboards in Adobe tools.','Design custom shapes, icons, and paths using vector editing tools.','Create buttons, cards, navbars, and reusable components using auto layout and variants.',' Learn responsive design techniques to adapt UI to different screens.','Apply color theory practically, using Figma styles and Adobe’s asset libraries.'],
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
          ContentTitle:'Introduction to Figma',
          ContentItem:'What is Figma and Why Designers Use It',
          VideoDuration:'10:5',
        },
         {
          CourseContentID:2,
          ContentTitle:'Figma Interface Basics',
          ContentItem:'Exploring the Workspace, Panels, and Tools',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:3,
          ContentTitle:'Working with Frames and Layouts',
          ContentItem:'Designing Responsive Frames and Grids',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:4,
          ContentTitle:'Shapes and Vector Tools',
          ContentItem:'Drawing and Editing with Figma’s Vector Tools',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:5,
          ContentTitle:'Typography and Color Styles',
          ContentItem:'Setting Consistent Text and Color Styles',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:6,
          ContentTitle:'Components and Variants',
          ContentItem:'Creating Reusable UI Elements in Figma',
           VideoDuration:'10:5',
        },
         {
          CourseContentID:7,
          ContentTitle:'Collaborating and Sharing Designs',
          ContentItem:'Live Collaboration, Comments, and Sharing Options',
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
  const removelike=(likeitemid)=>{
    
    const removelike=Array.from(course).map((likeid)=>likeid.id==likeitemid?{...likeid,Like:false}:{...likeid})
    setcourse(removelike)
    
  }
  
  const[cartpage,setcartpage]=useState(false)
  const[likepage,setlikepage]=useState(false)

  

  return (
    
    <div className='website-main-container'>
      <Nav setcartpage={setcartpage} setlikepage={setlikepage}/>
      <div className='edu-main-page'>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage  course={course} LikeCourse={LikeCourse}/>}/>
            <Route path='About-Mindspire-Institute' element={<AboutPage/>}/>
            <Route path="Providing-Education's-in-Mindspire-Institute" element={<CoursePage course={course} LikeCourse={LikeCourse}/>}/>
            <Route path="Contact-with-Mindspire-Institute" element={<ContactPage/>}/>
            <Route path="Mindspire-Institute-Student-Review-Page" element={<ReviewMainPage/>}/>
            <Route path="mindspire-course" element={<CourseOverview likepage={likepage} cartpage={cartpage} setcartpage={setcartpage} course={course} LikeCourse={LikeCourse} setcourse={setcourse}/>}/>
            <Route path="/Providing-Education's-in-Mindspire-Institute/mindspire-course" element={<CourseOverview likepage={likepage} cartpage={cartpage} setcartpage={setcartpage} course={course} LikeCourse={LikeCourse} setcourse={setcourse}/>}/>
          </Route>
        </Routes>
      </div>
      <CartPage cartpage={cartpage} course={course} setcartpage={setcartpage}/>
      <LikePage setcartpage={setcartpage} removelike={removelike} course={course}  setlikepage={setlikepage} likepage={likepage}/>
      <Footer/>
    </div>
   
    
    
  )
}

export default App
