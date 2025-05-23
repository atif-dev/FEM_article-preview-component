# Frontend Mentor - Article Preview Component

![Design preview for the Article Preview Component coding challenge](./design/desktop-preview.jpg)


## Welcome! 👋

This is a solution to the [Article Preview Component on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
  - [My process](#my-process)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- Build out article preview component and get it looking as close to the design as possible.
- View the optimal layout for the component depending on their device's screen size.
- Through JavaScript, initiate the share options when someone clicks the share icon.

### Screenshots

![PC View](https://github.com/atif-dev/FEM_article-preview-component/blob/main/screenshots/Desktop%201440%20x%20900.png?raw=true)
![Mobile view](https://github.com/atif-dev/FEM_article-preview-component/blob/main/screenshots/iPhone%208(375px%20width).png?raw=true)

### Links

- Frontend Mentor solution url: https://www.frontendmentor.io/solutions/article-preview-component-TV6VVD5sUa  
- Live Site URL: https://atif-dev.github.io/FEM_article-preview-component/

## My process

  - Built with HTML Semantic Elements.
  - Checked and verify good looking behavior for multiple screens of LT Browser.
  - Added two extra features:
    - Nice dots under social links while clicking or navigating through keyboard.
    - Except share icon and tooltip click anywhere on screen to hide tooltip.
  - Used ChatGPT and GROK.
    
### Continued development

  Recently, with the help of GROK AI I have found two screen readers(NVDA and VoiceOver). In future I will explore how to check/test accessibility. 

### Useful resources

- [CSS flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Nice visual representation to understand CSS flexbox. 
- [Conquering Responsive Layouts](https://courses.kevinpowell.co/conquering-responsive-layouts) - This is nice short free course for learning responsiveness.
- https://youtu.be/pJ0GPI7BMIs?si=yDHIb3L1jQYq-JDg
- [Nice Guide about alt attribute of html img tag](https://axesslab.com/alt-texts/) - Find this useful guide after watching [Kevin Powell's video about accessibility](https://youtu.be/pJ0GPI7BMIs?si=hjscnii9942umsjT)
- [Learn CSS Grid the easy way](https://youtu.be/rg7Fvvl3taU?si=OeJGCoDQq0sy_FRK) - This is nice tutorial to understand css grid line numbers using inspection. 
- [Check responsiveness](https://www.lambdatest.com/mobile-view-website) - NICE website for checking responsiveness and taking good looking screen shots.
- [CSS Tooltip](https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom) - CSS tooltip from w3schools.
- [ChatGPT](https://chat.openai.com/) - Nice to understand code and getting help related to code.


## Author

- [atif-dev @ Frontendmentor](https://www.frontendmentor.io/profile/atif-dev)

## Acknowledgments

I have used chatGPT to find out:
 - vw unit
   - vw unit is used to increase the font size when we stretch the screen in inpection mode. Using vw unit is nice to display proper text in larger screens but on the other hand we should use it carefully by keeping in mind smaller screens. 
 - Physical pixels and CSS pixels
   - In LT browser let's say we see a device size as: iPhone 8 (750 x 1334 | 4.7 in). In previous sentence 750 are physical pixels and if we are seeeing 750 in responsive mode of chrome then these 750 are CSS pixels that we use in CSS. 
 - window.innerWidth
   - window.innerWidth is used in JS to find out screen width. 
 - document.addEventListener('click', (event) => { //perform an action})
   - Perform an action by clicking on DOM document.
 
**This time I have also used GROK AI for code review. It's good to try different AI's to find out which is producing better code reviews for us.** 
