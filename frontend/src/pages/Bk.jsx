import React from 'react'
import { NavLink } from 'react-router-dom'
import vid from '../Image/vid.mp4'
import header_logo from '../Image/logo2.png'
import blue from '../Image/room3.jpg'
import '../css/bk.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineNumbers } from "react-icons/md";
import { FaBed } from "react-icons/fa";


const Bk = () => {
  return (
    <div>
    <div className='container-fluid'>

        <div className='container-fluid' id='Header'>
        <div className='row' id='nav-menu-bar'>
            <div className='col-3 m-0 p-0' id='header-img'>
                <img src={header_logo} alt="Cafe de l'empire"></img>
            </div>

            <div className='col-9 p-4'>
                <div class="nav-links float-right">
                <a href="/" class="nav-link" id='header-nav-item1'> Home </a>
                    <a href="about" class="nav-link" id='header-nav-item2'> About</a>
                    <a href="Rl" class="nav-link" id='header-nav-item3'> Rooms </a>
                    <a href="signup" class="nav-link" id='header-nav-item3'> SignUp </a>
                    <a href="contact" class="nav-link" id='header-nav-item4'>Contact </a>
                    <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                    Recipes
                    </button>
                        <div class="dropdown-menu" id='menu-bar'>
                            <a class="dropdown-item" href="AllRecipe.html">All Recipes</a>
                            <a class="dropdown-item" href="tag-template.html">Best rated</a>
                            <a class="dropdown-item" href="StarterMenu.html">à la carte</a>
                            <a class="dropdown-item" href="NonVeg.html">Non-Veg</a>
                            <a class="dropdown-item" href="VegMenu.html">Veg</a>
                        </div>
                </div>
            </div>
        </div>
        </div>

    <section className='home'>
        
        <div classname ="bg"><video src={vid} muted autoPlay loop type="video/mp4"></video>
        
            <div className='smalltext'>
                <h1 classname ="b">BOOK DOWN BELOW!</h1>
                <form>
  <label>
    Name: <br/>
    <input type="text" placeholder='Enter Your Name...' name="name" />
  </label> <MdDriveFileRenameOutline />

  
  <br/>
  <label>
    Phone Number <br/>
    <input type="text"  placeholder='Enter Your Ph. No.' name="name" />
  </label> <FaPhoneAlt className='icon'/>
  <br/>
  <label>
    Room Type: <br/>
        <select className='hehe'>
            <option value="1">Classic</option>
            <option value="2">Deluxe</option>
            <option value="3">Premium</option>
            <option value="4">Quad</option>
        </select>  <FaBed />
  </label>

  <br/>
  <label>
    Number of Rooms: <br/>
    <input type="number"  placeholder='Enter Rooms Needed' name="name" />
  </label> <MdOutlineNumbers />

  <br/>
  <label>
    Number of People: <br/>
    <input type="text"  placeholder='Enter Number of People' name="name" />
  </label> <IoIosPeople />

</form>






            </div>

        </div>
    </section>

        <div className='container-fluid' id='tiramisu'>
                <div className='row'>
                    <div className='col-7' >
                        <img src={blue}></img>
                    </div>

                    <div className='col-5'>
                        <article class="recipe-info">
                            <h2>Premium Room</h2>
                            <p>
                            The large, spacious and well-furnished premium room with no view. On entering Denzong Shangrila, you will immediately sense its special intimate atmosphere that makes you feel like being in your own home. Each detail has been passionately chosen and each room deserves a visit.
                            </p> 
                            <div class="recipe-icons text-center d-flex p-5">
                                <article className='p-4'>
                                    <i class="fas fa-bed"></i>
                                    <h5>Bed</h5>
                                    <p>For 2 ppl</p>
                                </article>
                                <article className='p-4'>
                                    <i class="fas fa-wifi"></i>
                                    <h5>Free</h5>
                                    <p>Internet Acces</p>
                                </article>
                            <article className='p-4'>
                                <i class="fas fa-car"></i>
                                <h5>Parking</h5>
                                <p>Avaiable</p>
                            </article>
                        </div>
                        
                        </article>
                        <a class="btn" href="#" role="button">Book Now</a>
                    </div>
                </div>
            </div>

           

        <div className='container-fluid'>
        <section class="formdown">
            <h2>Contact Us for your Suggestions</h2>
            <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your name"></input>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email"></input>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="subscribe"></input>
                    <label class="form-check-label" for="subscribe">Subscribe to our newsletter</label>
                </div>
                <button type="submit" class="btn mt-3" id='submit'>Submit</button>
            </form>
        </section>
        </div>
        <br/>
    </div>
    </div>
  )
}

export default Bk