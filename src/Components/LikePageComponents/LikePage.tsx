import '../../Styles/LikePageCSS/LikePage.css'

const LikePage = ({likepage,setlikepage}) => {

  const likeclose=(id)=>{
    if (String(id).includes('like-close')) {
      setlikepage(false)
    }else{
      return
    }
  }
  return (
    <div id='like-close' onClick={(e)=>likeclose(e.target.id)} className={`like-page-main-container ${likepage?'noslide':'slide'}`}>
      <div id='like-not-close' onClick={(e)=>likeclose(e.target.id)}  className={`like-page-item-main-box ${likepage?'likezoom':'nolikezoom'}`}></div>
    </div>
  )
}

export default LikePage
