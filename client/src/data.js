import andrena from '../src/components/views/common/dataimage/andrena.JPG'
import login_out from '../src/components/views/common/dataimage/login_out.jpg'
import moiveapp from '../src/components/views/common/dataimage/movieapp.jpg'
import naverclone from '../src/components/views/common/dataimage/naverclone.jpg'
import webpage from '../src/components/views/common/dataimage/webpage.jpg'
import youtubeclone from '../src/components/views/common/dataimage/youtubeclone.jpg'
import ordersystem from '../src/components/views/common/dataimage/ordersystem.jpg'

const projects = [
  {
    id: 1,
    title: 'personal webpage',
    language: 'MERN',
    img: webpage,
    desc: `This projects is about making a personal webpage for myself. The goal of this project is showing personal information in web enviroment with coding together so that
            many people can see and get information about me easily`,
    completion : 'yes'
  },

  {
    id: 2,
    title: 'youtube clone coding',
    language: 'MERN',
    img: youtubeclone,
    desc: `This project is a kind of training project that I make a similar frontend and backend system of youtube webpage. 
            The final expected result of this project is feeling comfortable to handle MERN stack libraries in order to make a full stack application`,
    completion : 'yes'

  },

   {
    id: 3,
    title: 'movie application',
    language: 'MERN',
    img: moiveapp,
    desc: `This project is aiming to make a web service that user can see the manay different movies in their flavor.Furthermore user can get information about movies like run time, actors, genre.
            Final expected result of this project is feeling comforatlbe to handle MERN stack libraries in order to make a full stack application`,
    completion : 'yes'
  },

   {
    id: 4,
    title: 'Login & out boilerplate',
    language: 'MERN',
    img: login_out,
    desc: `This project is aiming to make a login and out boilerplate so that it can be used almost every webpage which needs login functionality.To finish this project it's really 
            important to understand the process of authentication and authorization of login system`,
    completion : 'yes'
  },

   {
    id: 5,
    title : 'naver clone coding',
    language: 'React',
    img: naverclone,
    desc : `Naver is one of the biggest web portal in south korea. So it's very useful to clone well made webpage.This project focus on making a similar HTML & CSS environment with React like naver webpage
            Final expected result of this project is feeling comfortable to handle HTML & CSS with React libraries in order to make UI environment`,
    completion : 'yes'
  },

  {
    id: 6,
    title : 'scurm project wih andrena objects',
    language: 'Java',
    img: andrena,
    desc : `In this project developer has to make a web sudoku service based on preference of product owner and scrum master together. This project focus on how to do Test driven development(TDD),
            clean code, refactoring, UI testing`,
    completion : 'yes'
  },

  {
    id: 7,
    title : 'order system with spring boot',
    language: 'Java',
    img: ordersystem,
    desc : `This project is aiming to make a backend framework for ordering system with spring boot`,
    completion : 'yes'
  }
];
export default projects; 