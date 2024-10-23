import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/header/header'

function App() {
  const [bookmarks, setbookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleTheBookmarks = blog => {
    const NewBookMarks = [...bookmarks, blog]
    setbookmarks(NewBookMarks)
  }

  const handleMarkAsRead = time => {
    const newReadingTime = setReadingTime(readingTime + time)
    console.log(newReadingTime)
  }

  return (
    <div className='container mx-auto'>
    <Header></Header>
    <div className='md:flex'>
    <Blogs handleTheBookmarks={handleTheBookmarks} handleMarkAsRead = {handleMarkAsRead}></Blogs>
    <BookMarks bookmarks = {bookmarks} readingTime={readingTime}></BookMarks>
    </div>
    </div>
  )
}

export default App
