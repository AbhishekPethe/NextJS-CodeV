Specific notes inside each folders

__SPECIAL FILES__

- page.tsx
- layout.tsx
- template.tsx
- not-found.tsx
- loading.tsx
- error.tsx


__ERROR__

error.tsx
- Automatically wrap a route segment and its nested children in a React Error Boundary
- Create error Ul tailored to specific segments using the file-system hierarchy to adjust granularity
- Isolate errors to affected segments while keeping the rest of the application functional
- Add functionality to attempt to recover from an error without a full page reload


__COMPONENT HIERARCHY__

layout->template->error->loading->not-found->page


__ERROR HANDLING__

- Error handling is a crucial task
- we use error.tsx for particular routes
- we can use reset in error to try again

--nested route errors--
- Errors bubble up to the closest parent error boundary
- An error.ts file will cater to errors for all its nested child segments
- By positioning error.ts files at different levels in the nested folders of a route, you
  can achieve a more granular level of error handling.

