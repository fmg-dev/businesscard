import React from 'react'

export default function Info () {
    return (
      <div>
        <img className='info--img' src="./me.jpg" alt="" />
        <h1 className='info--name'>Fatih Mehmet Gün</h1>
        <h3 className='info--job'>Frontend Developer</h3>
        <h4 className='info--website'><a href="#">fmg.dev</a></h4>
        <div className='info--buttons'><button className='info--email'>
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:fmgdev0@gmail.com">Email</a></button>
        <button className='info--linkedin'>
        <i class="fa-brands fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/fatih-mehmet-g%C3%BCn-81ab761b8/" target="_blank">LinkedIn</a></button></div>
        
      </div>
    )
}
