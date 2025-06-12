import { useEffect } from 'react'
import '../../Styles/ReviewPageCSS/ReviewPage.css'
import ReviewPage from '../ReviewPage/ReviewPage'
const ReviewMainPage = () => {
   useEffect(() => {
      
      window.scrollTo(0,0)
    
      
    }, [])
  return (
    <div className='review-page-main-container'>
      <ReviewPage/>
    </div>
  )
}

export default ReviewMainPage
