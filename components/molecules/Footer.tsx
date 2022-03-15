const Footer = () => (
  <footer className="grid grid-cols-2 md:grid-cols-4 gap-y-10 px-12 md:px-32 py-14 bg-gray-100 text-gray-600">
    <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">MADE BY</h5>
        <p>Walison developer</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">MY LINKEDIN</h5>
        <a href="https://www.linkedin.com/in/walisonteodoro/" target="_blank" rel="noopener noreferrer">
          <p className="cursor-pointer mt-4 animate-bounce font-bold">Linkedin</p>
        </a>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">MY GITHUB</h5>
        <a href="https://github.com/Wtheodoro" target="_blank" rel="noopener noreferrer">
          <p className="cursor-pointer mt-4 animate-bounce font-bold">Github</p>
        </a>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">AND</h5>
        <p className="cursor-pointer mt-4 animate-bounce font-bold">Made with 🖤</p>
      </div>
  </footer>
)

export default Footer