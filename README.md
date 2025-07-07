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
  ## searchbar logic used for optimization:
  applied debouncing using 200ms, clear the timeout
  when remove/erase/backspace the searchbar keyword, no API call is made
  when typing the past keyward (eg. in past i types india n again typing india) no api call will make, as it was cached in redux.
  when searcing anything on searchbar,it opens in new /result page with new search results,resuign components
  when i click on outisde of teh searchbar the drop suggestion shoul hide.only shows when i cluck inside the searchbar
  when i select from the suggestion dropdown iyt shoudl refill in teh searchbar and then on hit ythe search it shoudl display results
  store the search history on search bar when click enter before typing, as soon as typing starts it shows suggestions
  when click on the remove button which is in front of the history it will remove it.
  recursion on the comment section(live chat)
  infinite scroll on home
  No API call will be made when navigating back to the video list page (like Home or Search Results page) from a single video watch page, as long as the video data already exists in the Redux state.The component’s useEffect is set up to fetch videos only if the Redux state is empty. So navigating back will simply reuse the cached video data from Redux without triggering a new API call.
  debouncing on searchbar
  Shimmer UI
  to make constants file for paths

  make suggestion dropdown component n use it then,make it optimised, add views beside the time upload
  

  write test cases
 
  add Accessibility checks(keyboard navigation and screen reader compatibility, ARIA roles |
  axe, Lighthouse, and React a11y to audit your apps)
  add project on firebase hositing
  check g-matrix, lighthouse dev tool,
  add g-tag inside code for google anayltics
 
  

  
  

  
  ## Live Chat: (will do live chat for multiple users using firebase)
    challenges: get live data, how you update the UI on the page
    uses: websockets
 
  use typescript later
  make the custom hook and its usecase

  id user is not intreste din some videos or type of content he can hide it while typing keywords, then whenever he will search ut wont show those keywords havign videos


  ## check later:
  add time stamp on the vidoes of search(not in api)
  use live api for comments as per video ID(api havign one level of comments for dev api)
