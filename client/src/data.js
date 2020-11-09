import andrena from '../src/components/views/common/dataimage/andrena.jpg'
import login_out from '../src/components/views/common/dataimage/login_out.jpg'
import moiveapp from '../src/components/views/common/dataimage/movieapp.jpg'
import webpage from '../src/components/views/common/dataimage/webpage.jpg'
import youtubeclone from '../src/components/views/common/dataimage/youtubeclone.jpg'
import ordersystem from '../src/components/views/common/dataimage/ordersystem.jpg'
import awsdocker from '../src/components/views/common/dataimage/awsdocker.jpg'
import deeplearning from '../src/components/views/common/dataimage/deeplearning.jpg'
const projects = [
  {
    id: 1,
    title: 'portfolio webpage',
    stack: 'Node.js, ExpressJS, React, MongoDB',
    img: webpage,
    desc: `Portfolio webpage is one of the best way to introduce myself in internet environment.So this project focus on the way how I can present about me with the efficient and simple method
           like introduction video and career & project page. This project include differnt backend and frontend technique. For example video upload built-in function, like & dislike function, comment function 
           frontend libraries React with ant-design tool `,
    completion : 'done',
    link : 'https://github.com/deutschkihun/PersonalWebPage-MERN-stack'
  },

  {
    id: 2,
    title: 'youtube clone coding',
    stack: 'Node.js, ExpressJS, React, MongoDB',
    img: youtubeclone,
    desc:  `Clone coding is one of the best practical project that beginner can improve their programming skill.So this project aims to make a youtube interface and 
            video upload backend system as similar as possible.For example subscrition,like&dislike,comment functionalities .
            Expectation after this prject is that novice can have a chance to learn frontend & backend framework together`,
    completion : 'done',
    link : 'https://github.com/deutschkihun/YoutubeClone-MERN-stack'
  },

   {
    id: 3,
    title: 'TMDb movie application',
    stack: 'Node.js, ExpressJS, React',
    img: moiveapp,
    desc: `The Movie Database(TMDb) is one of the popular movie database that use can access to get movie information. This webpage is editable by user. This website provide API key that 
            everyone can get source from TMDb. This project aims to make a own movie introduction webpage by using TMDb API key. Expectation after this project is that novice have diverse 
            experience how to use external API key to make a web application` ,
    completion : 'done',
    link : 'https://github.com/deutschkihun/MovieApp-MERN-stack'
  },

   {
    id: 4,
    title: 'Login & out boilerplate',
    stack: 'Node.js, ExpressJS, React, MongoDB',
    img: login_out,
    desc: `Boilerplate is a base application so that it can be used any advanced application or projects. This project aims to make a boilerplate for login and out.
           Because login and out system is needed almost every webpage or system. So this project include basic priciple of login and out system, authentication, authorization,
           token, cookie,session. Expectation after this project is that novice feel comfortable how to make login and out system`,
    completion : 'done',
    link : 'https://github.com/deutschkihun/Boilerplate-Loginform-javascript'
  },

  {
    id: 5,
    title : 'Application deployment with AWS and docker ',
    stack: 'Elastic Beanstalk, docker, travis CI ',
    img: awsdocker,
    desc : `Docker enables users to separate your applications from your infrastructure so you can deliver software quickly. With Docker, users can manage their infrastructure 
            in the same ways users manage their applications. This project aim how user can implement docker system with AWS cloud (Elastic Beanstalk) to deploy their own service in internet environment`,
    completion : 'in progress',
    link : ''
  },

  {
    id: 6,
    title : 'scurm project wih andrena objects',
    stack: 'Spring boot, Typescript',
    img: andrena,
    desc : `Andrena objects is a IT-compnay in Karlsruhe. They're mainly doing agile software engineering for many differnt field of customer. They offered scrum project for student in Okt.2020 
            In this project student had to build a sudoku web application for their virtual customer. student had to fulfilled the expectation of product owner and scrum master. This project aims to learn
            Test driven development, Refactoring,UI tests and front & backend system functionality.`,
    completion : 'done',
    link : 'https://drive.google.com/file/d/1e9xVoGmGm_URno6UVj0ZIlp8h6Rf6wUE/view?usp=sharing'
  },

  {
    id: 7,
    title : 'order system with spring boot',
    stack: 'Spring boot, h2 database, JPA, gradle ',
    img: ordersystem,
    desc : `Spring boot is most popular and solid framework for big backend system. This project is a traininig project making backend system by using spring boot from Java. This project consist of 3 big part 
            which are user register & list, product register & list, ordering & order search`,
    completion : 'done',
    link: 'https://github.com/deutschkihun/ordersystem-Springboot'
  },
  {
    id: 8,
    title : 'Seminar: Nummererkennung in Stahlindustrie" ',
    stack: 'OpenCV, Tensorflow, Python',
    img: deeplearning,
    desc : `Seminar thesis "Nummbererkennung in Stahlindustrie(steel industry) is handling practical data science issue. In this seminar students have to make a deep learning model,
            so that this model can recognize number on the Product of from steel industry like Pfannennummer.`,
    completion : 'in progress',
    link: ''
  },
  
];
export default projects; 