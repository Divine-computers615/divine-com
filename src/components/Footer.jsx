import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      &copy; {new Date().getFullYear()} Divine Computer. All rights reserved.
    </footer>
  )
}

export default Footer