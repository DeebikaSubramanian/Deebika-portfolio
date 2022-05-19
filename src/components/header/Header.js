// import React, { useState } from "react"
// import "./header.css"
// import { Link, animateScroll as scroll } from "react-scroll";



// const Header = () => {
//   // // fixed Header
//   // window.addEventListener("scroll", function () {
//   //   const header = document.querySelector(".header")
//   //   header.classList.toggle("active", window.scrollY > 100)
//   // })
//   // Toogle Menu
//   const [Mobile, setMobile] = useState(false)
//   return (
//     <>
//       <header className='header'>
//         <div className='container d_flex'>
//                <div className='navlink'>
//             <ul  className= {Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
//                         {console.log(Mobile)}
//                          <li>
//                 <Link to='home'>home</Link>
//               </li>
//               <li>
//                 <Link to='skills'>skill</Link>
//               </li>
//               <li>
//                 <Link to='project'>project</Link>
//               </li>
//               <li>
//                 <Link to='resume'>resume</Link>
//               </li>
//                          <li>
//                 <Link to='contact'>contact</Link>
//               </li>
//                 </ul>

//             <button className='toggle' onClick={() => setMobile(!Mobile)}>
//               {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
//             </button>
//           </div>
//         </div>
//       </header>
    
//     </>
//   )
// }

// export default Header


import React, { useState } from "react"
import "./header.css"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
 // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
               <div className='navlink'>
            <ul  className= {Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                       {console.log(Mobile)}
                         <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#aboutme'>about me</a>
              </li>
              <li>
                <a href='#skills'>skill</a>
              </li>
              <li>
                <a href='#project'>project</a>
              </li>
              
                         <li>
                <a href='#contact'>contact</a>
              </li>
                </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    
    </>
  )
}

export default Header