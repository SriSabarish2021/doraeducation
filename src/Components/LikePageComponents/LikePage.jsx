import '../../Styles/LikePageCSS/LikePage.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LikePage = ({sethashget,likepage,setlikepage,course,removelike,setcartpage,starcalc}) => {

  const likeclose=(id)=>{
    if (String(id).includes('like-close')) {
      setlikepage(false)
    }else{
      return
    }
  }

  const likearray=Array.from(course).filter((likeitems)=>likeitems.Like==true)


 

  

  return (
    <div id='like-close' onClick={(e)=>likeclose(e.target.id)} className={`like-page-main-container ${likepage?'noslide':'slide'}`}>
      <div id='like-not-close' onClick={(e)=>likeclose(e.target.id)}  className={`like-page-item-main-box ${likepage?'likezoom':'nolikezoom'}`}>
       <div className='like-page-title-bar'>
        <p>Favorite Courses</p>
        <div className='like-close-btn' onClick={()=>setlikepage(false)}>
                <div className='like-close-btn-x-one'></div>
                <div className='like-close-btn-x-two'></div>
        </div>
       </div>
       <div className='like-pagae-main-list-bar'>
        {likearray&&likearray.length?
         likearray.map((indilike)=>
        <div className='like-items'>
          <div className='like-item-inner'>
            <div className='like-item-image-box' style={{backgroundImage:`url(${indilike.courseIMG})`}}><FaHeart className='heart-icon-like-img'/></div>
            <div className='like-item-content-box'>
              <Link onClick={()=>{setlikepage(false),sethashget(indilike.courseName)}} style={{textDecoration:'none'}} to={{ pathname: "mindspire-course", hash: `#${indilike.courseName}` }} className='like-item-para-one'>{window.innerWidth<450?String(indilike.courseTitle).slice(0,15)+'...':indilike.courseTitle }
              <div className='like-item-underline'></div>
              </Link>
              {
                Math.floor(Number(Number(Number(starcalc(indilike.id))/Number((Number(indilike.CourseReview.length)*5)))*5).toFixed(0))==5? <p className='like-item-star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>: 
                   Math.floor(Number(Number(Number(starcalc(indilike.id))/Number((Number(indilike.CourseReview.length)*5)))*5).toFixed(0))==4?<p className='like-item-star'><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>:
                  Math.floor(Number(Number(Number(starcalc(indilike.id))/Number((Number(indilike.CourseReview.length)*5)))*5).toFixed(0))==3?<p className='like-item-star'><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></p>:
                  Math.floor(Number(Number(Number(starcalc(indilike.id))/Number((Number(indilike.CourseReview.length)*5)))*5).toFixed(0))==2?<p className='like-item-star'><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>:
                  Math.floor(Number(Number(Number(starcalc(indilike.id))/Number((Number(indilike.CourseReview.length)*5)))*5).toFixed(0))==1?<p className='like-item-star'><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>:<p className='like-item-star'><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>
                  }
              <p className='like-item-amt'>${indilike.CourseAMT}.00</p>
            </div>
            <div className='like-item-close-box'><IoCloseCircleOutline className='icon-close-like' onClick={()=>removelike(indilike.id)}/></div>
          </div>
        </div>
        ): <p className='no-like-courses'><span className='no-like'> No courses in Your WhishList</span><span className='start-like'>click to&nbsp;&nbsp;<Link onClick={()=>setlikepage(false)} to={"Providing-Education's-in-Mindspire-Institute"} className='start-learning-click'>Start learning&nbsp;</Link> </span></p> }
        
        
       </div>
       <div className='like-page-view-cart-bar'>
        <button onClick={()=>{setlikepage(false),setcartpage(true)}} className='like-page-btn'>View Cart
          <div className='like-page-to-cart-page-btn-design'></div>
        </button>
        
       </div>
      </div>
    </div>
  )
}

export default LikePage
