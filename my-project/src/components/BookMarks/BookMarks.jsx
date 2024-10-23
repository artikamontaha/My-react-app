import PropTypes from 'prop-types';
import BookMark from "../bookmark/BookMark";
const BookMarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 text-black rounded-xl ml-2">
            <div className="p-5 bg-[#7a65f0] blur-xl rounded-xl text-center text-white">
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="font-bold text-2xl mt-4 flex justify-center">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark = {bookmark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default BookMarks;