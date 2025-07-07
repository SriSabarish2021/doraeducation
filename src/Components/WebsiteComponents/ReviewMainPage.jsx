import { useEffect } from 'react'
import '../../Styles/ReviewPageCSS/ReviewPage.css'
import ReviewPage from '../ReviewPage/ReviewPage'
const ReviewMainPage = ({course}) => {
   useEffect(() => {
      
      window.scrollTo(0,0)
    
      
    }, [])
  return (
    <div className='review-page-main-container'>
      <ReviewPage course={course}/>
    </div>
  )
}

export default ReviewMainPage
