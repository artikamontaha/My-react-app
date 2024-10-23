import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/header/header'

function App() {
  const [bookmarks, setbookmarks] = useState([])

  const handleTheBookmarks = blog => {
    const NewBookMarks = [...bookmarks, blog]
    setbookmarks(NewBookMarks)
    
  }

  return (
    <div className='container mx-auto'>
    <Header></Header>
    <div className='md:flex'>
    <Blogs handleTheBookmarks={handleTheBookmarks}></Blogs>
    <BookMarks bookmarks = {bookmarks}></BookMarks>
    </div>
    </div>
  )
}

export default App
