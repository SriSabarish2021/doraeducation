import '../../Styles/LikePageCSS/LikePage.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdCloseFullscreen } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LikePage = ({likepage,setlikepage,course,removelike,setcartpage}) => {

  const likeclose=(id)=>{
    if (String(id).includes('like-close')) {
      setlikepage(false)
    }else{
      return
    }
  }

  const likearray=Array.from(course).filter((likeitems)=>likeitems.Like==true)

  if(likearray){
    console.log(likearray);
    
  }

  

  return (
    <div id='like-close' onClick={(e)=>likeclose(e.target.id)} className={`like-page-main-container ${likepage?'noslide':'slide'}`}>
      <div id='like-not-close' onClick={(e)=>likeclose(e.target.id)}  className={`like-page-item-main-box ${likepage?'likezoom':'nolikezoom'}`}>
       <div className='like-page-title-bar'>
        <p>Favorite Courses</p>
        <p onClick={()=>setlikepage(false)}><MdCloseFullscreen className='like-page-close-icon'/></p>
       </div>
       <div className='like-pagae-main-list-bar'>
        {likearray&&likearray.length?
         likearray.map((indilike)=>
        <div className='like-items'>
          <div className='like-item-inner'>
            <div className='like-item-image-box' style={{backgroundImage:`url(${indilike.courseIMG})`}}><FaHeart className='heart-icon-like-img'/></div>
            <div className='like-item-content-box'>
              <p className='like-item-para-one'>{indilike.courseTitle}</p>
              <p className='like-item-star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
              <p className='like-item-amt'>${indilike.CourseAMT}.00</p>
            </div>
            <div className='like-item-close-box'><IoCloseCircleOutline className='icon-close-like' onClick={()=>removelike(indilike.id)}/></div>
          </div>
        </div>
        ): <p className='no-like-courses'><span className='no-like'> No courses in Your WhishList</span><span className='start-like'>click to&nbsp;&nbsp;<Link onClick={()=>setlikepage(false)} to={"Providing-Education's-in-Mindspire-Institute"} className='start-learning-click'>Start learning&nbsp;</Link> </span></p> }
        
        
       </div>
       <div className='like-page-view-cart-bar'>
        <button onClick={()=>{setlikepage(false),setcartpage(true)}} className='like-page-btn'>View Cart</button>
       </div>
      </div>
    </div>
  )
}

export default LikePage
