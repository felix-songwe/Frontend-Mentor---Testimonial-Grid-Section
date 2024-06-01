# Frontend Mentor - Testimonials grid section

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

### The challenge

Users should be able to:
- View the optimal layout depending on their device's screen size

### Screenshot
Screenshot mobile: ![](./src/myScreenShots/testimonial%20grid%20challenge%20(mobile%20view).png)
Screenshot computer: ![](./src/myScreenShots/testimonial%20grid%20challenge%20(desktop%20view).png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [TailwindCSS] (https://tailwindcss.com)
- [VisualStudioCode] (https://code.visualstudio.com)

### What I learned

The are multiple things I learnt, but the main ones are:
- Tailwind: I used tailwindCSS over the regular CSS. I learnt how to configure it with HTML5 and get it to display in my browser (Brave) when I made changes using Visual Studio Code.
- CSS properties: learnt how to  use various CSS properties such as containers, div's, flex, content positioning (justify, align, item, and text). How to manipulate text (fonts, colors, size, text and typography).

```html
  <!-- main div -->
  <div class="flex-col grid gap-8 md:grid-cols-4 md:grid-flow-row">
  <!-- 1st testimonial -->
  <div class="p-8 bg-purple-800 rounded-xl md:col-span-2">
    <div class="flex items-center">
    <img class="rounded-full border-2 size-10" fill="black" src="./assets/images/image-daniel.jpg" alt="image">
    <span class="ml-6">
      <div class="capitalize font-bold text-white text-sm">daniel clifford</div>
      <div class="capitalize font-semibold text-gray-400 text-sm">verified graduate</div>
    </span>
    </div>

  </div>
</div>
```
The above code is how I achieved the grid layout.

### Continued development

  In the future I would like to solidify my skills with animations and advanced javascript concepts for web development.

Challenges faced: 
- Only had a small challenge with the grid order. But I managed to get the grid rows and columns to look the same.

## Author

- Website - [Felix Songwe](https://www.your-site.com)
- Frontend Mentor - [@@felix-songwe](https://www.frontendmentor.io/profile/felix-songwe)
- Github - [@felix-songwe](https://github.com/felix-songwe)
