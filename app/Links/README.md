__LINKS__


- replace property in Link component forgets about the navigation history and goes back to the home page after clicking on the link
- Even if you are nested deep , it will go back to home page


- usePathname() hook is used for getting the url.
    for ex.
    localhost:3000/Link/psw                 => Link/psw
    localhost:3000/dashboard?v=2            => /dashboard
    localhost:3000/blog/hello-world	        => /blog-hello-world


__TEMPLATES__

- Templates are similar to layouts in that they wrap each child layout or page
  But, with templates, when a user navigates between routes that share a template,
  a new instance of the component is mounted, DOM elements are recreated, state
  is not preserved, and effects are re-synchronized.

- With layout , opposite happens , when we go to the shared link , the state is preserved

- A template can be defined by exporting a default React component from a
  template.js or template.tsx file

- Similar to layouts, templates also should accept a children prop which will render
  the nested segments in the route.