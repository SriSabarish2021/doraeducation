import '/src/Styles/StudentPage.css'

const StudentPage = () => {
  return (
    <div className="student-page-container">
        <div className='student-page-inner-container'>
            <div className="student-page-image-container">
                <img  className='student-page-image-one' src='./StydentPage/stupage-img-one.webp' alt="Student Image"/>
                <img  className='student-page-image-two' src='./StydentPage/stu-img-two.webp' alt="Student Image"/>
            </div>
            <div className="student-page-content-container">
                <div className='student-page-title-bar'>
                    <p className='student-page-top-tit'>Guarenteed & <span className='stud-main-cont-top-tit-span'>Certified</span></p>
                    <div className='student-page-title'>
                        <p className='main-tit-one-stud-page'>Develop Your Skills</p>
                        <p  className='main-tit-two-stud-page'>With Experience Staffs</p>
                    </div>
                </div>
                <div className='student-page-main-content'>
                    <div className='image-bar-in-main-content'>
                        <div className='content-image-bar-in-main-cont'></div>
                        <div className='stud-enroll-image-bar-in-main-cont'>
                            <div className='stu-enroll-image'>
                                <div className='stu-img stu-img-one'></div>
                                <div className=' stu-img  stu-img-two'></div>
                                <div className='stu-img  stu-img-three'></div>
                            </div>
                            <div className='stu-enroll-num'>
                                <p className='stu-enroll-para-one'>Joined <span className='span-in-stud-num'>120+</span></p>
                                <p className='stu-enroll-para-two'>People already</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-bar-in-main-content'>
                        <div  className='stud-content-main-para'>
                            <p className='conatent-bar-main-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem dolorum a illum veritatis ut incidunt molestias provident, adipisci tempora.</p>
                        </div>
                        
                        <div className='analysis-student-container'>
                            <div className='tot-stu-analysis'>
                                <div className='tot-stu-analysis-image'>
                                    <img className='img-for-main-analysis-one' src="./StydentPage/group.png" alt="" />
                                </div>
                                <div className='tot-stu-analysis-content'>
                                    <p  className='tot-stu-analysis-para-one'>20K</p>
                                    <p  className='tot-stu-analysis-para-two'>Total Students</p>
                                </div>
                            </div>
                            <div className='stu-thinking-analysis'>
                                <div className='stu-thinking-one'>
                                    <div className='stu-thinking-image'>
                                        <div className='stu-thinking-img'>
                                            <img className='img-for-main-analysis-two' src="./StydentPage/light-bulb.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='stu-thinking-content'>
                                        <p className='stu-thinking-main-para'>Building Trust</p>
                                        <p className='stu-thinking-sub-para'>Lorem ipsum dolor sit amet consectetur a</p>
                                    </div>
                                </div>
                                <div className='stu-thinking-two'>
                                    <div className='stu-thinking-image'>
                                        <div className='stu-thinking-img'>
                                            <img className='img-for-main-analysis-two' src="./StydentPage/diploma.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='stu-thinking-content'>
                                        <p className='stu-thinking-main-para'>Building Trust</p>
                                        <p className='stu-thinking-sub-para'>Lorem ipsum dolor sit amet consectetur a</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='stud-content-main-btn'>
                            <button className='stud-analysis-btn'>View Programs</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default StudentPage
