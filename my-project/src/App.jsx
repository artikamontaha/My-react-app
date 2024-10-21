import './App.css'
import Blogs from './components/blogs/blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/header/header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
    <Blogs></Blogs>
    <BookMarks></BookMarks>
    </div>
    </>
  )
}

export default App
