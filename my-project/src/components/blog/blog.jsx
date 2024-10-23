import PropTypes from 'prop-types'; // ES6
const Blog = ({blog, handleTheBookmarks, handleMarkAsRead}) => {
    const {title, cover, author_img, author, reading_time, posted_date, hashtags} = blog
    
    return (
        <div className='mb-20'>
            <img className='w-full my-2' src={cover} alt={`Cover pikture of the tittle ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-12 h-12' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=''>
                    <span className='flex'>{reading_time} min read <img onClick={() => handleTheBookmarks(blog)} className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/128/3106/3106777.png" alt="" /></span>
                </div>
            </div>
            <h2 className='font-bold text-5xl'>{title}</h2>
            <p className=''>{
                hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }</p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='btn-link text-[#6047EC] my-2 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
    handleTheBookmarks: PropTypes.func
}
export default Blog;