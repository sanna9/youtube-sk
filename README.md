# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

==============

## tailwind postcss issue with vite is because need to use .mjs extension with vite.config due to depreciation of cjs/js extension

# install redux toolkit

-npm i @reduxjs/toolkit && npm i react-redux

- Head
- Body
  - Sidebar
  -        MenuItems
  - MainContainer
  -        ButtonList
  -        VideoContainer
  -            VideoCard



  ===================
  searchbar logic used for optimization:
  applied debouncing using 200ms, clear the timeout
  when remove/erase/backspace the searchbar keyword, no API call is made
  when typing the past keyward (eg. in past i types india n again typing india) no api call will make, as it was cached in redux.
  when searcing anything on searchbar,it opens in new /result page with new search results,resuign components
  when i click on outisde of teh searchbar the drop suggestion shoul hide.only shows when i cluck inside the searchbar
   when i sleect f orm teh suggestion dropdown iyt shoudl refill in teh searchbar and then on hit ythe search it shoudl display results
store the search history on search bar when click enter before typing, as soon as typing starts it shows suggestions

  when click on the remove button which is in front of the history it will remove it.
  add time stamp on the vidoes of search

  make suggestion dropdown comooent n use it then,make it optimised