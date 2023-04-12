import React from 'react'
import anokha_home_logo from './utils/anokha_home_logo.png'
import "./styles/footer.css"
import { RiFacebookBoxFill, RiHeartFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiYoutubeFill, } from 'react-icons/ri'

export default function Footer1() {
  return (
      <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-slack"></i>
          <img src={anokha_home_logo} className="max-w-xs" alt="logo"></img>
        </div>
        <div className="media-icons">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/anokhatechfest/"><RiInstagramFill size={50} /></a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/anokha.amrita/"><RiFacebookBoxFill size={50} /></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/school/anokha-amrita/"><RiLinkedinBoxFill size={50} /></a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/anokha_techfest"><RiTwitterFill size={50} /></a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@AnokhaTechfest"><RiYoutubeFill size={50} /></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          
        </ul>
        <ul className="box">
          <li><a href="/#about">About</a></li>
          <li><a href="#">Events & Workshops</a></li>
        </ul>
        <ul className="box">
          <li><a href="#">Eventide</a></li>
          <li><a href="#">My Profile</a></li>
        </ul>
        <ul className="box">
          <li><a href="#">TechFair</a></li>
          <li><a href="#">The Team</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Contact Us</li>
          <li><a href='mailto:anokhapr@cb.amrita.edu'>anokhapr@cb.amrita.edu</a></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright &copy; 2023 <a href="#">ASE.</a></span>
        <span>Made with <RiHeartFill color='red' className='inline' /> by WMD</span>
        <span className="policy_terms">
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
  )
}