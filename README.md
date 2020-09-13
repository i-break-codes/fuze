
![Fuze - CSS Gradient Animator Banner](https://github.com/i-break-codes/fuze/blob/master/public/img/fuze-banner.jpg)
<p align="center"><strong>CSS Gradient Animator Tool</strong></p>

![Travis (.org)](https://img.shields.io/travis/i-break-codes/fuze?style=flat-square) ![GitHub](https://img.shields.io/github/license/i-break-codes/fuze?color=d42274&style=flat-square)  ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/i-break-codes/fuze?color=d42274&style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/i-break-codes/fuze?color=d42274&style=flat-square) ![Depfu](https://img.shields.io/depfu/i-break-codes/fuze?color=d42274&style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/i-break-codes/fuze?color=d42274&style=flat-square)  

A simple CSS Gradient Animator tool powered by VueJS, VueX and SASS. Idea behind building this tool is to quickly generate the CSS Gradient Animations which will help the developer have a quick preview of the selected color palettes instantly. Also, the animation code can be quickly copied by pressing the <kbd>c</kbd> key.

---

### Quick Preview
<img src="https://github.com/i-break-codes/fuze/blob/master/public/img/fuze-demo.gif" alt="Fuze - CSS Gradient Animator Movie">

---

### Live Demo
<a href="https://fuze.8bit.codes"><img src="https://github.com/i-break-codes/fuze/blob/master/public/img/try-it-out.jpg" width="150"></a>

---

### Features
- Select Color Palettes from the Color Picker
- Customize Gradient Angle and Speed of the Animation
- Copy code via Code Modal or by pressing <kbd>c</kbd> key
- Generate random Gradients by pressing the <kbd>space bar</kbd> key

---

### Upcoming Features
- Save Gradients
- Download Gradients as a wallpaper
- Distraction free mode
- Color suggestions
- Customizable Background Position in Animation
- Offline Availability
- Re-order Selected color Palettes

---

### Setup
#### Via Container:
Install [docker-compose](https://docs.docker.com/compose/) and run:

```
docker-compose up
```
Access app at `http://localhost:8080`

#### Manually:
The following setup assumes that you've Node installed on your system using NVM (preferred). App is supported on Node v12 LTS +

Install Node Modules
```
yarn install
```

Once you are done installing the node modules, you can start serving the App either by using Vue UI or by running the following command after navigating it to the directory.

```
yarn serve
```

You can also the linting of the app by running
```
yarn lint
```
In-order to customize further, you can refer to the [Vue CLI configuration reference](https://cli.vuejs.org/config/)

You can refer to [Libraries & Plugins](#libraries--plugins) for configuration info around the Color Picker & Range Slider configuration.

---

### Libraries & Plugins

Following are the Libraries and Plugins used to develop the app
- [Vue](https://github.com/vuejs/vue)
- [Vuex](https://github.com/vuejs/vuex)
- [Pickr](https://github.com/Simonwep/pickr) (Color Palette Plugin)
- [Sliders](https://github.com/NightCatSama/vue-slider-component) (Range Slider Plugin)

---

<p align="center">an 👽release</p>
