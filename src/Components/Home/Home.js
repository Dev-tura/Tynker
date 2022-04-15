import React from "react";
import "../Home/Home.css";
import tynker from "../Images/tynker-byjus-logo-white.png";
import website from "../Images/website-hero-winter-2022.webp";
import learning from "../Images/learning-path.png";
import iconaps from "../Images/icon-apcsa.png";
import fivestarr from "../Images/fivesta.jpg";
import icontutor from "../Images/icon-tutor.svg";
import fivestar from "../Images/fivesta.jpg";
import byjus from "../Images/byjus.jpeg";
import fourstar from "../Images/fourstar.jpg";
import forparents from "../Images/for-parents.png";
import forteachers from "../Images/for-teachers.png";
import graphics from "../Images/graphic-mobile.png";
import iconjunior from "../Images/icon-junior.png";
import iconapp from "../Images/icon-app.png";
import iconmod from "../Images/icon-mod.png";
import graphicsbbc from "../Images/graphic-bbc.png";
import apple from "../Images/logo-apple.png";
import googleedu from "../Images/logo-googleedu.png";
import microsoft from "../Images/logo-microsoft.png";
import pbs from "../Images/logo-pbs.png";
import bbc from "../Images/logo-bbc-learning.png";
import facebook from "../Images/logo-facebook.png";
import lego from "../Images/logo-lego.png";
import minecraft from "../Images/logo-mc.png";
import mattel from "../Images/logo-mattel.png";
import hotwheels from "../Images/logo-hotwheels.png";
import barbie from "../Images/logo-barbie.png";
import sixtymillion from "../Images/million.png";
import billion from "../Images/billion.png";
import thousand from "../Images/thousand.png";
import testimonial from "../Images/testimonial-student-cropped.png";
import parents from "../Images/testimonial-parent-cropped.png";
import teacher from "../Images/testimonial-teacher-cropped.png";
import questionn from "../Images/questionmark.png";
import common from "../Images/common.png";
import award from "../Images/award-aasl.png";
import smart from "../Images/award-smart-media.png";
import parentchoice from "../Images/award-parents-choice-gold@2x.png";
import twi from "../Images/twilly.png";
import parenting from "../Images/parenting.png";
import moms from "../Images/award-moms-choice.png";
import digital from "../Images/digital.png";
import picksaward from "../Images/picksaward.png";
import kidsafe from "../Images/kidsafe.png";

import tutor from "../Images/tutor.png";
import { GoThreeBars } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mainbg">
      <section class="herobody">
        <header>
          <div class="headerlogo">
            <img src={tynker} alt="tynker" />
          </div>
          <div class="headernavs">
            <NavLink className="textdecor" to="/play">
              <h3>PLAY</h3>
            </NavLink>
            <NavLink className="textdecor" to="/whycode">
              <h3>WHY CODE?</h3>
            </NavLink>
            <h3>EDUCATORS</h3>
            <NavLink className="textdecor" to="/faq">
              <h3 className="why">FAQ</h3>
            </NavLink>
          </div>
          <div class="headerbutton1">
            <button class="btn111">JOIN FOR FREE</button>
            <button class="btn2">LOG IN</button>
          </div>
        </header>
        <div class="body2">
          <div class="body2text">
            <h1>Coding Made Easy</h1>
            <p>
              The fun way to learn programming and develop <br></br> problem-solving & critical
              thinking skills! Ages 5-18
            </p>
            <button>GET STARTED FOR FREE</button>
            <p>
              At-home plans from <span className="stylee">$7.50 per month</span>
            </p>
          </div>

          <div class="body2img">
            <img src={website} alt="" />
          </div>
        </div>
      </section>
      <svg className="Wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,128L60,128C120,128,240,128,360,149.3C480,171,600,213,720,229.3C840,245,960,235,1080,213.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <section class="herobody2">
        <div class="herobody2txt">
          <h4>The #1 Coding Platform for Kids</h4>
          <p>
            Tynker powers the creativity of over<span className="black"> 60 million kids</span> and
            serves thousands of schools and educators worldwide.<br></br>
            <br></br>
            Our interactive story-based learning allows kids to learn the basics with easy
            block-based coding challenges before seamlessly transitioning to real-world{" "}
            <span className="blue">text-based languages</span> like{" "}
            <span className="black">JavaScript</span> and <span className="black">Python</span>.
            <br></br>
            <br></br>
            With 65+ award-winning courses, there’s a learning path for every kid, no matter their
            age or level. We have over 5,000 learning modules, backed by hundreds of built-in
            tutorials and hands-on projects.
          </p>
          <button>START CODING NOW</button>
        </div>
        <div class="herobody2img">
          <img src={learning} alt="learning" />
        </div>
      </section>
      <section class="hero3">
        <div class="h1hero">
          <h1>Tynker has been busy. Good Busy. Check out what’s NEW!</h1>
        </div>
        <div class="iconswithtext">
          <div class="icontext1">
            <div class="onlyicon1">
              <img src={iconaps} alt="" />
            </div>
            <div class="text1">
              <h1>AP Computer Science</h1>
              <p>2 New AP® CS courses endorsed by the College Board.</p>
              <button class="buttons">learn more</button>
            </div>
          </div>
          <div class="icontext2">
            <div class="onlyicon2">
              <img src={icontutor} alt="" />
            </div>
            <div class="text2">
              <h1>Live Classes</h1>
              <p>Live coding classes with a private teacher</p>
              <button class="buttons">learn more</button>
            </div>
            <div class="trial">
              <div class="icontext3">
                <div class="onlyicon3">
                  <img src={byjus} alt="" />
                </div>
                <div class="text3">
                  <h1>Tynker + BYJU’S</h1>
                  <p>Tynker has joined the BYJU’S family of brands.</p>
                  <button class="buttons">learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bluebackground">
        <div class="imagediv">
          <img src={forparents} alt="" />
        </div>
        <div class="bluetext">
          <h1>Parents</h1>
          <p>
            Coding is quickly becoming an essential skill, one that will prepare <br></br> your kids
            to succeed in an increasingly digital world.<br></br>
            <br></br>
            Tynker offers a range of options to learn coding: Your children can learn to code with
            our self-paced, <span>immersive game-like courses</span> , and then advance to learning
            real-world Python and JavaScript.<br></br>
            <br></br>
            Select the option that’s best for your child!
          </p>
          <button>LEARN MORE</button>
        </div>
      </section>
      <section class="bluebackground2">
        <div class="bluetext2">
          <h1>Educators</h1>
          <p>
            Join over 100,000 schools that use Tynker to engage students with <br></br> coding and
            connect with other educators who love to code! <br></br>
            <br></br>
            Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can{" "}
            <span>create a free account</span>, set up your virtual classroom, and assign ready-made
            lesson plans! <br></br>
            <br></br>
            Tynker empowers K-12 educators with free PD, standards-aligned curricula,
            cross-curricular STEM coding, AP Computer Science courses, and many great coding
            resources.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div class="imagediv2">
          <img src={forteachers} alt="" />
        </div>
      </section>
      <div class="standh1">
        <h1>3 Highly-Rated Mobile Apps for Learning Code</h1>
        <p>Download Tynker apps and learn to code on the go.</p>
        <button>LEARN MORE</button>
      </div>
      <section class="threeimage">
        <div class="myimg">
          <img src={graphics} alt="" />
        </div>
        <div class="mytext2">
          <div class="imgtext1">
            <div class="imgg">
              <img src={iconjunior} alt="" />
            </div>
            <div className="textt">
              <h3>Tynker Junior</h3>
              <p>
                Tap-Tap picture coding with voice-overs. Pre-<br></br>readers solve story-based
                puzzles and build their<br></br> first programs in coding sandboxes. Ages 5-7
                <br></br>
                <br></br>
              </p>
              <div className="fivestarr">
                <img src={fivestar} alt="" />
                <p>4.52 200+ reviews</p>
              </div>
            </div>
          </div>

          <div class="imgtext2">
            <div class="imgg2">
              <img src={iconapp} alt="" />
            </div>
            <div class="textt2">
              <h3>Tynker</h3>
              <p>
                Drag-and-drop block coding with a full-featured<br></br> workshop. Build games and
                apps, compose music<br></br> and art, control smart devices, and much, much<br></br>{" "}
                more. Ages 6-11<br></br>
                <br></br>
              </p>
              <div className="fivestar">
                <img src={fivestar} alt="" />
                <p>4.710 400+ reviews</p>
              </div>
            </div>
          </div>
          <div class="imgtext3">
            <div class="imgg3">
              <img src={iconmod} alt="" />
            </div>
            <div class="textt3">
              <h3>Mod Creator</h3>
              <p>
                Drag-and-drop Minecraft modding. Design skins,<br></br> blocks and items. Modify mob
                behaviors. Create<br></br> mods and add ons. Explore worlds! Ages 6-11<br></br>
                <br></br>
              </p>
              <div className="fourstar">
                <img src={fourstar} alt="" />
                <p>4.03 300+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="wireheadtext">
        <h1>A Mini-Computer for the Internet of Things!</h1>
      </div>
      <section class="wireheadbody">
        <div class="wireheadbodytext">
          <p>
            The BBC Doctor Who HiFive Inventor is a visually<br></br> stunning IoT-enabled
            hand-shaped mini-computer<br></br> designed to teach kids how to control robots or
            <br></br> interface with IoT systems to investigate the world<br></br> around them.
            <br></br>
            <br></br>
            Younger students will begin their learning journey with<br></br> visual block coding and
            advanced students with<br></br> Micropython. The HiFive Inventor was developed by Tynker
            in<br></br> collaboration with BBC Learning and SiFive, a fabless<br></br> RISC-V
            semiconductor company.<br></br>
            <br></br>
            Learn More:
          </p>
          <a href="#">www.HiFiveInventor.com</a>
        </div>
        <div class="wirebodyimg">
          <img src={graphicsbbc} alt="" />
        </div>
      </section>

      <section class="onlytextsection">
        <h1>Why Should Kids Learn to Code with Tynker?</h1>
        <p>
          Because technology is so integrated into virtually every aspect of our lives, learning
          about it is more <br></br> important than ever. For kids, our coding platform makes it
          convenient and fun to gain knowledge <br></br> that will serve them well throughout their
          lives. You can count on our trusted methods to help them <br></br> develop and grow their
          capabilities with computers. <br></br>
          <br></br>
          Tynker isn’t just for schools and coding camps, though. Parents who value STEM education
          and want <br></br> their children to know how to learn to code should know that our kids
          programming platform can be <br></br> used at home, too. There are individual and family
          home plans, and our online coding classes for kids <br></br> are a great way for them to
          gain the supplemental STEM skills needed for the world of the future.
        </p>
      </section>
      <div className="onlytextsectionbackground">
        <section class="onlytextsection2">
          <div class="box1">
            <h3>CODING BENEFITS</h3>
            <li>
              <ul>Top 10 Reasons to Code</ul>
              <ul>Kids Coding Basics</ul>
              <ul>Develop 21st Century Skills</ul>
              <ul>Download eBooks on Coding</ul>
            </li>
          </div>
          <div class="box2">
            <h3>CODING GUIDES</h3>
            <li>
              <ul>What is Coding for Kids</ul>
              <ul>Coding with Minecraft</ul>
              <ul>Coding with Electronic Kits</ul>
              <ul>Coding with Connected Toys</ul>
              <ul>More Coding Resources</ul>
            </li>
          </div>
          <div class="box3">
            <h3>TYNKER HIGHLIGHTS</h3>
            <li>
              <ul>What’s New in Tynker?</ul>
              <ul>COVID-19 Impact report</ul>
              <ul>Meet our Featured Makers</ul>
              <ul>Seasonal Coding Projects</ul>
              <ul>Celebrating Women in STEM</ul>
            </li>
          </div>
          <div class="box4">
            <h3>CODING IN SCHOOLS</h3>
            <li>
              <ul>K-12 School Plans</ul>
              <ul>AP Computer Science Principles</ul>
              <ul>AP Computer Science A</ul>
              <ul>Remote Learning</ul>
              <ul>K-12 Success Stories</ul>
            </li>
          </div>
        </section>

        <section class="Trustedbody">
          <h1>Trusted by Leading Brands</h1>
          <p>
            Our methods for learning to code all are provided within a safe, moderated community
            that is built <br></br> around encouraging students to gain confidence in their
            abilities and do so without fear of failure.
          </p>
        </section>
        <div class="trustedimg1">
          <img class="icons" src={apple} alt="" />
          <img class="icon" src={googleedu} alt="" />
          <img class="icon" src={microsoft} alt="" />
          <img class="icon" src={pbs} alt="" />
          <img class="icon" src={bbc} alt="" />
          <img class="icon" src={facebook} alt="" />
        </div>
        <div class="trustedimg2">
          <img src={lego} alt="" />
          <img src={minecraft} alt="" />
          <img src={mattel} alt="" />
          <img src={hotwheels} alt="" />
          <img src={barbie} alt="" />
        </div>
        <section class="tynkersglobal">
          <h1>Join Tynker's Global Community</h1>
          <button>SIGN UP FREE</button>
          <div class="dots1">
            <div class="img60">
              <img class="img60" src={sixtymillion} alt="" />
            </div>
          </div>
          <div class="dots2">
            <div class="img260">
              <img class="img260" src={billion} alt="" />
            </div>
          </div>
          <div class="dots3">
            <div class="img360">
              <img class="img360" src={thousand} alt="" />
            </div>
          </div>
          <div class="mapboxes">
            <div class="boxdiv1">
              {/* <img src={quote} alt=""/> */}
              <p>
                I thought a game was going to be extremely hard to make, but Tynker made it really
                easy.
              </p>
              <div class="boxdiv11">
                <span className="black">Tynker Featured Maker</span>
                <img src={testimonial} alt="" />
              </div>
            </div>
            <div class="boxdiv2">
              {/* <img src={quote2} alt=""/> */}
              <p>
                There's so much opportunity once they understand how coding works. It's amazing to
                see them create incredible things themselves.
              </p>
              <div class="boxdiv22">
                <span className="black">
                  Charlotte R.<br></br>
                </span>
                <p>
                  Parent | Melbourne,<br></br> Australia
                </p>
                <img src={parents} alt="" />
              </div>
            </div>
            <div class="boxdiv3">
              {/* <img src={quote2} alt=""/> */}
              <p>
                Tynker has made programming fun, exciting, and simple and will help lead kids into
                their future.
              </p>
              <div class="boxdiv33">
                <span className="black">
                  Valerie S.<br></br>
                </span>
                <p>5th Grade Teacher | California, US</p>
                <img src={teacher} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="finalimage">
        <div className="style">
          <img src={common} alt="" />
          <img src={award} alt="" />
          <img src={smart} alt="" />
          <img src={parentchoice} alt="" />
          <img src={twi} alt="" />
          <img src={parenting} alt="" />
          <img src={moms} alt="" />
          <img src={digital} alt="" />
          <img src={picksaward} alt="" />
        </div>
      </div>
      <div className="Homequestion">
        <img src={questionn} alt="" />
      </div>
      <div class="footer">
        <div class="content">
          <h3 className="grey">ABOUT </h3>
          <p className="grey">
            {" "}
            Tynker is the world’s leading K-12 creative coding platform, enabling students of all
            ages to learn to code at home, school, and on the go. Tynker’s highly successful coding
            curriculum has been used by one in three U.S. K-8 schools, 100,000 schools globally, and
            over 60 million kids across 150 countries.
          </p>
        </div>
        <div class="r">
          <h3 className="grey">RESOURCES</h3>
          <p className="grey">Blog</p>
          <p className="grey">About Us</p>
          <p className="grey">Press</p>
          <p className="grey">Jobs</p>
          <p className="grey">Mobile Apps</p>
          <p className="grey">Coding eBooks</p>
          <p className="grey">Scholarship</p>
          <p className="grey">Forum</p>
          <p className="grey">Store</p>
          <p className="grey">CS Authors</p>
        </div>
        <div class="p">
          <h3 className="grey">PARENTS</h3>
          <p className="grey">Overview</p>
          <p className="grey">Live Coding Classes</p>
          <p className="grey">Give a Gift</p>
          <p className="grey">Jobs</p>
          <p className="grey">Redeem</p>
          <p className="grey">Why Coding</p>
          <p className="grey">Featured Makers</p>
        </div>

        <div class="e">
          <h3 className="grey">EDUCATORS </h3>
          <p className="grey">Overview</p>
          <p className="grey">Elementary</p>
          <p className="grey">Middle School</p>
          <p className="grey">High School</p>
          <p className="grey">AP CS Courses</p>
          <p className="grey"> PD</p>
          <p className="grey">Hour of Code</p>
          <p className="grey">STEM Projects</p>
          <p className="grey">Request a Quote</p>
        </div>

        <div class="b">
          <h3 className="grey">PARENT NEWSLETTER</h3>
          <div class="B2">
            <div>
              <form>
                <label>
                  Enter your email:
                  <input type="text" />
                </label>
              </form>
            </div>{" "}
          </div>
        </div>
      </div>

      <div class="line">
        <div class="lib">
          <img src={kidsafe} alt="" />
          <p>© 2022 Neuron Fuel</p>
          <p>Terms & Conditions</p>
          <p class="s">| PRIVACY POLICY</p>
          <p class="s">| Kids & Online Safety</p>
          <p class="s">| About Us</p>
          <p class="s">| Contact Us</p>
        </div>
      </div>

      <footer className="last">
        <img src={tutor} alt="" />
        <h2>Live coding classes with a private teacher</h2>
        <button>SCHEDULE A FREE CLASS</button>
      </footer>

      {/* <div className= 'headerholder' >
                <img src={logo} alt="logo"/>
            
            </div> */}
    </div>
  );
};

export default Header;
