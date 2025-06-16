import '../../Styles/ReviewPageCSS/ReviewPage.css'
import Testimonial from '../HomePageComponents/Testimonial/Testimonial'
const ReviewPage = ({course}) => {
  return (
    <div className='review-page-container'>
      <Testimonial course={course}/>  
    </div>
  )
}

export default ReviewPage
