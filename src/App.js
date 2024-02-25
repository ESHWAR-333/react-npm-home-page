import React from 'react'
import img1 from './img1.png'
import { IoSearchOutline } from "react-icons/io5";
import { SiNpm } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { TbBrandNpm } from "react-icons/tb";

import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="header">
        <div className="header-left-container">
          <span className="heart-image">❤</span>
          <button className="random-npm-button Buttons">Neat! Picked Muskrat!</button>
        </div>
        <div className="header-right-container">
          <button className='Buttons'>Pro</button>
          <button className='Buttons'>Teams</button>
          <button className='Buttons'>Pricing</button>
          <button className='Buttons'>Documentation</button>
        </div>

      </div>
      <div className='header-search-container'>
        <button className='Buttons'>
          <TbBrandNpm className='npm-logo-image'/>
        </button>
        <div className='input-container'>
          <IoSearchOutline className='search-icon' />
          <input type="text" className='search-input' placeholder="Search packages" />
          <button type="submit" className="submit-button">Search</button>
        </div>
        <button className='signup-button'>Sign Up</button>
        <button className='signin-button'>Sign In</button>
      </div>
      <div className='banner-section'>

        <h1 className='banner-section-heading'>Build amazing things</h1>
        <div>
          <div className='banner-section-description'>We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</div>
          <h2 className='banner-section-heading-2'>Take your JavaScript development up a notch</h2>
          <div className='banner-section-description'>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</div>
          <div className='banner-section-buttons-container'>
            <button className='banner-section-button left-button'>Sign up for free</button>
            <button className='banner-section-button right-button'>Learn about Pro</button>
          </div>
        </div>

      </div>
      <div className='home-container'>
        <img src={img1} alt='' className='home-image' />
        <h2 className='home-heading'>Bring the best of open source to you, your team, and your company</h2>
        <div className='home-description'>Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</div>
      </div>
      <div className='footer-section'>
        <div className='footer-support-container'>
          <div className='footer-support-images'>
            <SiNpm size={60} className='footer-image footer-image-1'/>
            <BsGithub size={60} className='footer-image'/>
          </div>
          <div className='footer-support'>
            <ul className='footer-list'>
              <li className='footer-heading'>Support</li>
              <li>Help</li>
              <li>Advisories</li>
              <li>Status</li>
              <li>Contact npm</li>
            </ul>
          </div>
        </div>
        <div className='footer-company-section' >
        <ul className='footer-list'>
              <li className='footer-heading'>Company</li>
              <li>About</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
        </div>
        <div className='footer-terms-section'>
        <ul className='footer-list'>
              <li className='footer-heading'>Terms & Policies</li>
              <li>Policies</li>
              <li>Terms of Use</li>
              <li>Code of Conduct</li>
              <li>Privacy</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
