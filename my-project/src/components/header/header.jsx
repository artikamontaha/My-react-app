import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between border-b-2 m-4'>
        <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
        <img className='mb-6' src={Profile} alt="" />

        </header>
    );
};

export default Header;