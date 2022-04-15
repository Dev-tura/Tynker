import React from "react";
import headerlogo from "../Images/Headerlogo.png";
import { IoGameController } from "react-icons/io5";
import "../Whycode/Whycode.css";
import laptopboy from "../Images/laptopboy.png";
import forkids from "../Images/forkids.png";
import brainy from "../Images/brainy.png";
import dragon from "../Images/Dragon.png";
import threegames from "../Images/threegames.png";
import tetris from "../Images/Tetris.png";
import textcoding from "../Images/text-coding.png";
import codingwithminecraft from "../Images/coding-with-minecraft-book (1).png";
import community from "../Images/community.png";
import robotturtles from "../Images/robot-turtles.png";
import tutor from "../Images/tutor.png";
import questionn from "../Images/question mark.png";
import { NavLink } from "react-router-dom";

const Whycode = () => {
  return (
    <div className="landingpage">
      <div className="header">
        <img src={headerlogo} alt="" />
        <div className="header__h">
          <NavLink className="textdecor" to="/">
            {" "}
            <h3 className="whycode-h3">HOME</h3>
          </NavLink>
          <NavLink className="textdecor" to="/play">
            <h3 className="whycode-h3">
              <IoGameController /> PLAY
            </h3>
          </NavLink>
          <NavLink className="textdecor" to="/whycode">
            <h3 className="whycode-h3">WHY CODE?</h3>
          </NavLink>

          <NavLink className="textdecor" to="/faq">
            <h3 className="whycode-h3">FAQ</h3>
          </NavLink>
        </div>
        <div className="header__button">
          <button className="header__button1">JOIN FOR FREE</button>
          <button className="header__button2">LOG IN</button>
        </div>
      </div>
      <div className="heropage1">
        <div className="heropageHstyle">
          <h1>Coding for Kids [Updated 2021]</h1>
          <h2>The Ultimate Guide for Parents in 2021</h2>
        </div>
        <div className="heropagecard">
          <p className="color">Coding for kids</p>
          <p>Develop 21st century skills</p>
          <p>Girls who "make"</p>
          <p>Minecaft modding</p>
          <p>Electronic coding kits</p>
          <p>Coding connected toys</p>
        </div>
      </div>
      <div className="heropage2">
        <div className="heropagetext">
          <h1>What is coding?</h1>
          <p>
            Coding is the method of giving a computer instructions to perform a specific task. You
            may also hear coding referred to as <span className="italic">software programming</span>
            or
            <span className="italic"> computer programming.</span>
          </p>
          <p>
            These instructions are communicated using a language that computers can understand, like
            visual blocks, <span className="blue">JavaScript</span>, Python, HTML, and CSS
          </p>

          <p>
            Code fuels our world’s technology, from microprocessors in everyday items like
            refrigerators and water heaters to sophisticated programs thatoperate our cars and
            buildings.
          </p>
          <p>
            Learning to code has become an essential element of a child’s education and a great way
            for them to express their creativity.
          </p>
        </div>
        <img src={laptopboy} alt="" />
        <img src={forkids} alt="" />
      </div>
      <div className="heropage3">
        <h2>Table of Contents</h2>
        <p>
          Here’s what we cover in this article. If you see what you’re looking for, just click on
          the link to go directly to that section.
        </p>
        <ul>
          <li>What is coding for kids?</li>
          <li>Why should kids learn to code?</li>
          <li>Is it hard to learn code?</li>
          <li>How do kids learn to code?</li>
          <li>What are the best programming languages for kids?</li>
          <li>Kids can learn to code apps and games</li>
          <li>Learning to code online</li>
          <li>Where can my child learn to code with an instructor?</li>
          <li>Can my child learn programming online with an instructor?</li>
          <li>What offline resources can help my child to learn code?</li>
          <li>My child is more arrtistic. What can coding do for them?</li>
          <li>How can learning to code benefit my child?</li>
          <li>
            Do any coding companies have an in-depth standard curriculum fo high school students?
          </li>
        </ul>
      </div>
      <div className="heropage3">
        <h3>What is coding for kids?</h3>
        <div>
          <p>
            Learning to code at a young age is a great opportunity for kids and teens to develop
            their problem-solving and critical thinking skills, while building the necessary focus
            and organization to see projects through to completion.
          </p>
          <p>
            Coding usually begins with drag-and-drop visual programming in which kids connect blocks
            together to make programs. Visual programming teaches the fundamental concepts without
            typing or syntax by placing the focus on the logic behind the code.
          </p>
          <p>
            Once they’ve learned the basics, kids can transition to real-world programming languages
            like Python, <span className="blue">JavaScript</span>, and C.
          </p>
          <p>
            From online coding courses and games to offline learning, from in-person coding
            instruction to live online instruction, there are endless coding resources available.
          </p>
          <p>
            The best coding platforms and programs give kids of all ages and experience levels the
            ability to code while making the process fun and engaging.
          </p>
        </div>
      </div>
      <div className="heropage3">
        <h2>Why should kids learn to code?</h2>
        <p>
          As technology becomes more prevalent in our lives, coding is becoming a valuable if not
          necessary <span className="blue">21st century skill</span>, revolutionizing every aspect
          of today’s world – think self-driving cars, robot-assisted surgery, social media, banking,
          the environment, and more.
        </p>
        <p>
          Coding empowers kids of all ages to become makers of technology by tapping into their
          ability to bring their imagination to life.
        </p>
        <p>
          Kids and teens who code excel at school in math and science, even reading, while
          developing a skill that will prepare them for future job opportunities.
        </p>
        <img src={brainy} alt="" />
      </div>
      <div className="heropage3">
        <h2>Is it hard for kids to learn code?</h2>
        <p>
          With so many great services available, learning to code has never been easier! For
          example, Scratch and Tynker provide innovative visual coding languages that make coding
          fun.
        </p>
        <p>
          Tynker’s award-winning platform captivates young coders because its story-driven strategy
          motivates them to complete more and more lessons to find out what happens next.
        </p>
        <img src={dragon} alt="" />
      </div>
      <div className="heropage3">
        <h2>How do kids learn to code?</h2>
        <p>
          Kids of all ages – from pre-readers through high-schoolers – can learn to code. The same
          fundamental concepts such as sequencing, abstraction, repetition, conditional statements,
          loops, and functions can be introduced to kids of any age or experience level.
        </p>
        <p>
          The range of coding education solutions spans far and wide! There are apps, websites,
          camps, live online classes, and personal tutors, so it’s important to choose the method
          that works best for your child.
        </p>
        <p>
          Websites like <span className="blue">Scratch</span> have development environments,
          allowing kids to make amazing creations by learning from the community.
        </p>
        <img src={threegames} alt="" />
        <p>
          Kids who’d like more guidance can benefit from the structured and scaffolded coding
          curriculum offered by Tynker and Code.org. Those who prefer to learn with a tutor can
          learn to code at an after-school program at school, a Sylvan learning center, a summer
          camp, or live online.
        </p>
        <p>
          <span className="bluelink">Learning To Code With Tynker Is Fun And Easy!</span>
        </p>
        <p>
          <span className="bluelink">Explore Our Award Winning Courses</span>
        </p>
      </div>
      <div className="heropage3">
        <h2>What are the best programming languages for kids?</h2>
        <p>
          There are many popular programming languages available to kids. Your child can select one
          based on their age and experience level. Visual programming languages are a great place to
          start!
        </p>
        <p>
          We recommend kids begin to learn to code with a block coding language like those offered
          by <span className="blue">Tynker</span> and Scratch. Once they’ve learned the basics, they
          can transition to text-based coding. It should be noted that Tynker supports all coding
          languages.
        </p>
        <p>Tynker’s Game-Based courses Make Learning To Code Fun And engaging</p>
      </div>
      <div className="heropage3">
        <h2>Kids can learn to code apps and games</h2>
        <p>
          These days there’s an app for everything — including coding for kids — catering to both
          pre-readers and teenagers. Apps offer coding adventures and games to younger kids, as well
          as providing the opportunity for older kids to build their own apps and games.
        </p>
        <p>
          Picture-based block coding apps (Ages 5-7) - Play coding games and challenges or build
          simple apps in <span className="blue">Tynker Junior</span> and ScratchJr.
        </p>
        <p>
          <span className="black">Tynker’s Game-Based courses</span> Make Learning To Code Fun And
          engaging
        </p>
        <img src={tetris} alt="" />
        <p>
          <span className="black">Text-based block coding apps (Ages 8-11)</span> - Download
          Hopscotch or <span className="blue">Tynker</span> from the app store and learn to code by
          creating apps, games, and projects with text-based coding blocks.
        </p>
        <img src={textcoding} alt="" />
        <p>
          <span className="bluelink"> Explore Tynker’s Award-winning Courses</span>
        </p>
      </div>
      <div className="heropage3">
        <h2>Learning to code online</h2>
        <p>
          Enrolling in an online website that teaches code is an excellent starting point for
          independent learners. We recommend solutions focused on making learning to code fun and
          easy.
        </p>
        <p>
          <span className="black">Game-based learning</span> - Game-based platforms such as{" "}
          <span className="blue">Tynker</span> and the challenges on Code.org motivate kids to use
          code to complete game levels.
        </p>
        <p>
          <span className="black">Independent learning with Scratch</span> - Scratch from MIT is a
          great way of getting started with code. Although they don’t have courses, there’s a
          vibrant community to learn from.
        </p>
        <p>
          <span className="black">Online courses</span> - Enroll in a Python or{" "}
          <span className="blue">JavaScript</span> course on Codecademy or Tynker or learn to code
          with Processing on Khan Academy.
        </p>
        <p>
          <span className="black"> Build an app</span> - Learn to build your own iOS app using
          Swift. Start with these <span className="blue">Swift resources</span> and get the Swift
          Playgrounds app by Apple.
        </p>
        <p>
          <span className="black">Use a book</span> - Learn by following along with books like
          Mission Python, Super Scratch Programming Adventure, or Coding with Minecraft.
        </p>
        <img src={codingwithminecraft} alt="" />
        <p>
          <span className="black">Code with toys</span> - You can learn to code with toys such as a
          Parrot Mambo Drone, LEGO Mindstorms, or the Harry Potter Kano Coding Kit.
        </p>
        <p className="marginp">
          At Tynker, your child can <span className="blue">Learn to code with a drone!</span> Tynker
          and <span className="blue">Parrot</span> have joined forces to teach kids Computer Science
          fundamentals through hands-on experimentation.
        </p>
      </div>
      <div className="heropage3">
        <h2>Where can my child learn to code with an instructor?</h2>
        <p>
          If you prefer live instruction for your child, explore camp and tutoring options. Some
          schools offer opportunities for elementary and middle-schoolers to learn to code through
          in-class instruction or after-school coding classes.
        </p>
        <p>
          {" "}
          <span className="black">Schools</span> - Take advantage of your school’s coding programs.
          It’s a great way to get kids involved in computer science and STEM (Science, Technology,
          Engineering, and Mathematics) at a young age.
        </p>
        <p>
          <span className="black">Tutoring Centers</span> - Enroll your child in an after-school
          coding class at your school or nearest Sylvan learning center.
        </p>
        <img src={community} alt="" />
        <p>
          <span>Camps</span> - Participate in a summer camp such as IDTech, Camp Galileo, or a
          Tynker CodeMaker Camp.
        </p>
        <p>
          <span className="black">Tutoring Services</span> - Hire a personal tutor from services
          such as Wyzant or Juni Learning.
        </p>
      </div>
      <div className="heropage3">
        <h1>Can my child learn code with an instructor online?</h1>
        <p>
          Definitely. <span className="blue">iD Tech</span> has year-round online tutoring to help
          create a completely personalized project—all from the comfort of home.
        </p>
        <p>
          And <span className=""></span> offers online Break Camps. Whether you have a free day or
          week, their programs are ready to inspire your Pre-K - 8th grade innovator to imagine big
          ideas and turn them into reality.
        </p>
        <p>
          Tynker also has live online classes to accelerate your child’s progress from a beginner to
          an advanced level coder.
        </p>
        <p>
          And, for children who are already coding, Tynker has intermediate and advanced courses in
          real-world text languages like Python and JavaScript. Check out Tynker’s courses here:
        </p>
        <ul>
          <li>
            Game Design Track [3 Courses]: Perfect for ages 7+ who love to play video games. Courses
            start with simple block coding games and progress through more advanced game design,
            including augmented reality. New coders should start with Intro Game Design.
          </li>
          <li>
            Creative Coding Track [4 Courses]: This set of courses is great for ages 7+ who love
            music, art, and animation and are ready to code their own. Courses cover a vast
            selection of creativity and progress each week to more advanced code.
          </li>
          <li>
            Intro to Programming Track [3 Courses]: This is a fun course to learn the fundamentals
            of programming while immersed in a virtual game-like environment. Students will learn
            all the key coding concepts as they advance each week. New coders should start with
            Intro to Programming.
          </li>
          <li>
            Minecraft Modding Track [4 Courses]: If they love Minecraft, they’ll love this track!
            Minecraft for JavaScript is required. They can mod Minecraft and advance their
            creativity each week. More advanced coders can start with Minecraft Game Studio.
          </li>
          <li>
            Advanced Coding Track [4 Courses]: Students ages 12+ who have coding experience can
            really expand their knowledge with text coding language courses in JavaScript and Python
            Game Design.
          </li>
        </ul>
      </div>
      <div className="heropage3">
        <h2>What offline resources can help my child learn to code?</h2>
        <p>
          Kids can learn computing concepts without a computer or tablet. Hands-on activities using
          crayons, playing cards, and board games are excellent options to teach coding to kids.
        </p>
        <p>
          Unplugged learning - Activities found via CS Unplugged teach kids computing concepts
          offline.
        </p>
        <p>
          Board games - Preschoolers can learn to code using fun board games such as Robot Turtles!
        </p>
        <img src={robotturtles} alt="" />
      </div>
      <div className="heropage3">
        <h2>My child is more artistic. What can coding do for them?</h2>
        <p>
          With Scratch, your child can create animations and they can use Code.org for drawing
          projects.
        </p>
        <p>
          Whether they're interested in art, animation, character creation, story-telling, or even
          music, Tynker has powerful creativity tools:
        </p>
        <p>
          The Animation Tool: Does your child love writing stories and drawing characters? Well, now
          they can make their projects even better by creating their own animated artwork using
          still images called frames to create movement.
        </p>
        <p>
          The Onion Skin Tool: Drawing your own animation by hand? You can use the Onion Skin tool
          to show how nearby frames of animation look. This tool is like digital tracing paper!
        </p>
        <p>
          The Pen Blocks: Did you know that you can use Tynker to create colorful, original drawings
          with just a handful of code blocks using Tynker’s Pen.
        </p>
        <p>
          The Sound Blocks: Play music with code! Add custom sound effects, too. Tynker’s brand new
          music tool supports MIDI and MP3. Choose from over 100 new instruments with slick new
          interface keys. Then set the tempo in beats-per-minute with the all-new set tempo block.
          Plus, you can add pedal effects like Echo, Distortion, and Reverb.
        </p>
        <p>
          Tynker also has interest-based learning paths. Your child can select a programming level
          and course track from their dashboard to match their activities and interests. Currently,
          kids and teens can choose from 6 amazing tracks, including Art & Music and Game Design.
        </p>
        <p>
          Art & Music: Perfect for art and music lovers, this track offers a creative way to pursue
          interests in art, drawing, storytelling, animation, and music while reinforcing
          problem-solving, critical thinking, and STEM skills. In this track, coders will:
        </p>
        <ul>
          <li>Design animated characters</li>
          <li>Experiment with geometric math art</li>
          <li>Learn to compose music with code</li>
          <li>Create animated birthday cards and comics</li>
          <li>Recreate popular physics-based games</li>
        </ul>
        <p>
          Game Design: Coders learn what it takes to make their own video game worlds as they play
          immersive adventures, layout 2D game worlds, design heroes and villains, program motion,
          music, and game controls. In this track, they’ll:
        </p>
        <ul>
          <li>Build their own versions of classic arcade games</li>
          <li>Harness physics to simulate bouncing balls and realistic jumps</li>
          <li>Handle user input using touch, mouse and keyboard events</li>
          <li>Program fluid motion along x- and y-axes</li>
          <li>Keep score using variables and lists</li>
        </ul>
        <h2>How can learning to code benefit my child?</h2>
        <p>
          Learning to code has endless benefits! From developing your child’s soft skills and
          academic skills to preparing them for future job opportunities, the ability to code will
          transform your child from consumer to creator.
        </p>
        <p>
          Coding increases kids’ ability to focus on tasks for long periods of time and see projects
          through to completion while developing their critical thinking and problem-solving skills.
        </p>
        <p>
          Coding is the blueprint to the 21st century. Whether making the next big video game,
          designing a life-saving app, or developing a formula to recycle plastic, coding is a
          catalyst to having a positive impact on the world through technology.
        </p>
        <p>
          And, thanks to the growing awareness of the importance of learning to code, kids have
          plenty of options to choose from. Just find the best solution for your child and get them
          coding!
        </p>
      </div>
      <div className="heropage3">
        <h2>
          Do any coding companies have an in-depth standards curriculum for high school students?
        </h2>
        <p>
          Code.org has a year-long course in Computer Science Principles that introduces students to
          the foundational concepts of computer science and challenges them to explore how computing
          and technology can impact the world.
        </p>
        <p>
          Tynker has courses that align with subject standards like CCSS-ELA, CCSS-Math, NGSS and CS
          standards such as CSTA, ISTE, CA CS, UK National Curriculum, and several state-level
          standards like TEKS.
        </p>
        <p>
          Additionally, Tynker’s AP courses align with AP Curriculum Framework Standards: AP
          Computer Science Principles Curriculum Framework 2020-2021 and AP Computer Science A
          Course and Exam Description, Effective 2020.
        </p>
        <p>Tynker AP Courses:</p>
        <p>
          AP Computer Science A (grades 9+) - This is Tynker’s year-long course designed to
          introduce students to the Java programming language and prepare them for the AP CS A Exam.
        </p>
        <ul>
          <li>
            AP Computer Science A is an introductory college-level course taught in Java, a
            programming language for professional programmers. Tynker recommends that any
            academically prepared student take this introductory programming course. The only
            prerequisite is Algebra 1.
          </li>
          <p>
            AP Computer Science Principles (grades 9+) - An advanced year-long high school course
            designed to introduce students to the central ideas of computer science and prepare them
            for the AP CS Principles Exam.
          </p>
          <li>
            This course aligns with the College Board’s new 2020 Computer Science Principles
            framework covering Creative Development, Data, Computing Systems and Networks,
            Algorithms and Programming, and Computing's Impact on Society.
          </li>
          <p>
            <span className="bluelink">
              Click here to get your child on the fast track with a coding education fom Tynker
            </span>
          </p>
        </ul>
      </div>
      <div className="whycodequestion">
        <img src={questionn} alt="" />
      </div>
      <div className="static">
        <div className="staticdiv">
          <img src={tutor} alt="" />
          <p className="staticdiv__text">Live coding classes with a private teacher</p>
          <button className="staticdiv__button">SCHEDULE A FREE CLASS</button>
        </div>
      </div>
    </div>
  );
};

export default Whycode;
