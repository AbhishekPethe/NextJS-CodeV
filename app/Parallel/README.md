__Parallel Routes__

- Parallel routes are an advanced routing mechanism that allows for the simultaneous rendering of multiple pages within the same layout

- Parallel routes in Next.js are defined using a feature known as slots
- Slots help structure our content in a modular fashion
- To define a slot, we use the '@folder naming convention
- Each slot is then passed as a prop to its corresponding layout.tsx file so no need to import

- A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable
    
--Independent route handling--
- Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states
- This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter     unique errors

--Sub-navigation in routes--
- Each slot of your dashboard can essentially function as a mini-application,
  complete with its own navigation and state management
- This is especially useful in a complex application such as our dashboard where
  different sections serve distinct purposes.


__UNMATCHED ROUTES__

- lets say we are on /Parallel/dashboard/archived path .. The other slots become unmatched, means if we refresh on the current link ,
  we get 404 error

--Navigation from the UI--
- In the case of navigation within the UI, Next.js retains the previously active state of
  a slot regardless of changes in the URL.

--Page reload--
- Next.js immediately searches for a default.ts file within each unmatched slot
- The presence of this file is critical, as it provides the default content that Next.js
  will render in the user interface
- If this default.ts file is missing in any of the unmatched slots for the current route,
  Next.js will render a 404 error.

--Default.tsx--
- The 'default.tsx file in Next.js serves as a fallback to render content when the framework cannot retrieve a slot's 
  active state from the current URL
- You have complete freedom to define the Ul for unmatched routes: you can either
  mirror the content found in page.tsx or craft an entirely custom view


__INTERCEPT ROUTES__

- Intercepting routes allow you to intercept or stop the default routing behaviour to
  present an alternate view or component when navigating through the Ul, while still
  preserving the intended route for scenarios like page reloads

- This can be useful if you want to show a route while keeping the context of the
  current page.
  Let's say there is page loca...../parallel/f1/f2
  we can go to f2 from f1 through link
  When we go above like this , from f1 to f2 , the intercepted page is shown i.e (.)f2 page means when in the context of previous page , the intercepted page is shown.
  but when we directly access the f2 link , we see the regular f2 page  

- Check the dots for file access , example (.) same level , (..) one level above , (..)(..) two levels above , (...) root directory, so on.