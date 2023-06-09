import React,{useRef,useEffect} from 'react';
import logo from "../../assets/images/logo-1.png";
import "./Header.css";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  
  const stickyHeaderFun = () => {
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        headerRef.current.classList.add('sticky__header');
      }
      else{
        headerRef.current.classList.remove('sticky__header');
      }
    })
  }
  useEffect(()=>{
   stickyHeaderFun()

   return window.removeEventListener('scroll',stickyHeaderFun);
  },[]);

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;
    
    window.scrollTo({
      top:location-80,
      left:0
    })
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  return (
    <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
      <div className="container">
            <div className="flex items-center justify-between">
              {/* logo */}
              <div className="flex items-center gap-[10px]">
                  <a className="cursor-pointer"href="#"><img className="w-[40px] h-[40px] flex items-center justify-center" src={logo} alt="logo" /></a>
                  

                  <div className="leading-[20px]">
                    <h2 className="text-xl text-smallTextColor font-[700]">Annam Raghu Pavan</h2>
                    <p className="text-smallTextColor text-[14px] font-[500]">Personal</p>
                  </div>
              </div>  
                              {/* logo end */}
                              {/* Menu starts */}
              <div className="menu" ref={menuRef} onClick={toggleMenu}>
                <ul className='flex items-center gap-10 '>
                  <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#about">About</a></li>
                  <li><a onClick={handleClick} className='text-smallTextColor font-[600]'href="#skills">Skills</a></li>
                  <li><a onClick={handleClick} className='text-smallTextColor font-[600]'href="#portfolio">Projects</a></li>
                  <li><a onClick={handleClick} className='text-smallTextColor font-[600]'href="#contact">Contact</a></li>
                </ul>
              </div>
                              {/* Menu ends */}

                              {/* Menu Right */}
              <div className="flex items-center gap-4">
                <a href="#contact">
                <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-2 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
                hover:text-white hover:font-[500] ease-in duration-300'>
                  <i className='ri-send-plane-line'></i><p id="icon">Let's Talk</p>
                </button>
                </a>

                <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
                  <i className='ri-menu-line'></i>
                  </span>
              </div>
                              {/* Menu Ends */}
            </div>
      </div>
    </header>
  )
}

export default Header