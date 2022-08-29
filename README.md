
# MyPortfolio By Abanoub Magdy

### MyPortfolio made by (React JS) front-end using Single Page Application(SPA) technology. Along with some styling. In total 11 components 

# About The Project 
## [Demo]
| [![]()]() |  
|:---:|
| *Home*  |
| [![screenShot_Portfolio](https://i.ibb.co/mqj7fT9/image.png)](http://abanoub.tk/)

# 👉🏻[Here's the website [abanoub.tk]](http://abanoub.tk/)

## [Sections of Page]

* *Home(Intro)* <br/> - [Bio of me (summary)]

* *Services* <br/> - [the language & technologies I've worked with... also u can find and download-button to Download My Resume]

* *Experience* <br/> - [Completed Projects - Freelance Work - years Experience]

* *Portfolio* <br/> - [Recent Porjects]

* *Contact* <br/> - [will send to me a direct message to my gmail]


<!-- ROADMAP -->
## [Roadmap]

#### *Portfolio*
- [ ]  1.add a timeline about my career path
- [x]  2.Recent Porjects(progaming projects)
  - [ ] update projects Demo(video - pic - gif) & zoom-in effect when hover on card
  - [ ] Add btns(web, playStore, AppStore, even video(demo if necessary)) when hover of the card of any project/freelance-work
- [ ]  3.Add My IT-skills  
- [ ]  4.Add some-skills [Creative Mindset, Problem-Solving]
----
 #### *Contact*
-plan A
- [ ]  1.validation if (input text is empty)
- [ ]  2.reset all inputs after submit the message

-plan B
<br/>
- [ ]  1.send direct message to WhatsApp


## [Built With]

* [![React][React.js]][React-url]
* 1.[react scroll] [👉🏻[1.Navbar_Component] to add smooth scroll to the app (using import { Link } from 'react-scroll')
* 2.[iconscout] [👉🏻[1.1.Toggle_Component] (Sun & Moon) icons]
* 3.[useContext Hook]=>React-library [👉🏻[in all of application
   <br> (1.Navbar(img_logo),
   <br> (0.App.js(background-color)),
   <br> [2.Intro,3.Services,6.Portfolio (span-color)] ] for dark mode theme.. and also for changing (logo) when changing the theme to be a dynamic] 
  * 4.[css] 👉🏻[in all of application]
* 5.[framer-motion] [👉🏻[2.Intro_Component & 3.Services_Component] (for animtion of imgs such as Sunglass-emoji-img)]
* 6.[react-particle-image] [👉🏻[3.Services_Component] (for react-logo-img (humble.png) )]
* 7.[Swiper js library]  [👉🏻[6.Portfolio_Component] for slider to (cards aka container)]
* 8.[React Email js library] [👉🏻[7.Contact_Component] for sending email]
* 9.[useState Hook]=>React-library [👉🏻[7.Contact_Component] (when sending email... will appear a msg to user that ur email have been sent successfully)] 
* 10.[font-awesome] [👉🏻[2.Intro_Component & Footer_Component] [to fa-brands (fa-linkedin, fa-github, fa-whatsapp)] ]



## [Download And installation]

Download this template from [Github](https://github.com/Abanoub5015/Portfolio/archive/refs/heads/main.zip)

* ## Install dependencies
```
npm install
```
* Run locally
```
npm start
```



* ## other Commands
```
npm install -g
```  

```
[index.html inside [<head> tag]
    <style>
      @font-face {
        font-family: Gumela;
        src: url('../src/fonts/*');
      }
      *{
        font-family: 'Gumela';
        font-weight: normal;
        font-size: 20px;
      }
      body{
        margin: 0;
      }
    </style>
]
[index.css
  @font-face {
    font-family: Gumela;
    src: url('../src/fonts/Gumela\ Regular.otf');
   }
]
```

```
1. npm add react-scroll  
```

```
2. npm add @iconscout/react-unicons
2. npm install --save @iconscout/react-unicons
```

```
5. npm install framer-motion 
```

```
6. npm install --save react-particle-image  
```

```
7. npm add swiper
```

```
8. npm add emailjs
8. npm add @emailjs/browser
```

```
10.npm install --save font-awesome
 [index.html inside [<head> tag]
     <!--load all Font Awesome styles -->
      <link href="./fontawesome-free-6.1.1-web/css/all.css" rel="stylesheet">
      <script src="./fontawesome-free-6.1.1-web/js/all.js" data-auto-a11y="true" ></script>
     <!--load all Font Awesome styles -->
 ]
```




* ## git Commands [// means once]
```
//git init
  git add *
  git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/Abanoub5015/Portfolio.git
  git push origin main
git pull origin main 
```

* ## git (deploy-page) Commands [// means once]
```
[1] npm run build  
[2] //npm install gh-pages --save-dev
[3] npm run deploy
```


* ## after every update:
```
-----------------------------
git add *
git commit -m "first commit"
git push origin main

npm run deploy
-----------------------------
```



[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[react scroll]: https://www.npmjs.com/package/react-scroll
[iconscout]: https://iconscout.com/unicons/explore/line#_=_
[useContext Hook]: https://reactjs.org/docs/context.html#examples
[css]: https://www.w3schools.com/css/
[framer-motion]: https://www.framer.com/docs/animation/#overview
[react-particle-image]: https://www.npmjs.com/package/react-particle-image
[Swiper js library]: https://swiperjs.com/demos
[React Email js library]: https://www.emailjs.com/docs/examples/reactjs/
[useState Hook]: https://reactjs.org/docs/hooks-state.html
[font-awesome]:https://fontawesome.com/search?q=linkedin&s=brands
