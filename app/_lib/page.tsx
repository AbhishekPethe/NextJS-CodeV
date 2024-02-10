import React from 'react'

const page = () => {
  return (
      <div>
          You cant see this page in browser
          <p>folder name that starts with _underscore is ignored by routing system</p>
      </div>
      
  )
}

export default page


// You can create URL segments that start with an underscore by prefixing the folder name with %5F (the URL-encoded form of an underscore): %5FfolderName.
// %5Flib
// http://localhost:3000/_lib  , now we can get to the page.tsx file in the lib folder