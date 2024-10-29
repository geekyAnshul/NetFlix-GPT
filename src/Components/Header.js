
import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { CONST_LANGUAGES } from '../utils/constants';
import { changeLang } from '../utils/configSlice';
import { toggleGpt } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
   const showGptSearch = useSelector((store) => store.gpt.showGpt)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearch = ( ) => {
    dispatch(toggleGpt());
 }

  const handleLang = (e) => {
    dispatch(changeLang(e.target.value)); // Dispatch language change
  };
  //console.log(showGptSearch)
  return (
    <div className='absolute w-[100vw] px-10 z-30 bg-gradient-to-b from-black flex justify-between items-center'>
      <img
        className='w-40 cursor-pointer transition-all delay-100 hover:scale-105'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'
      />

      {user && (
        <div className='flex justify-center items-center gap-1'>
          {
            showGptSearch && <select
            className='title z-50 px-5 py-1 mr-2 text-base font-medium text-red-600 rounded-sm p-2'
            onChange={handleLang}
          >
            {CONST_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          }
          <div class="wrap z-10 absolute right-5 -bottom-[500px]">
       <button class="button" onClick={handleGptSearch}>{showGptSearch ? "Home" : "NETFLIX-gpt"}</button>
         </div>

          <img
            className='w-9 h-9 rounded-sm object-cover cursor-pointer transition-all delay-100 hover:rounded-full hover:w-10 hover:h-10'
            alt="userImage"
            src={user?.photoURL}
          />
          
          <div
            className='title font-medium text-md px-[12px] py-[6px] text-white bg-black cursor-pointer'
            onClick={handleSignOut}
          >
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
