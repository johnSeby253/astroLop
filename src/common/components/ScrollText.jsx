const ScrollText = ({ children }) => {
  return (
    <div className="overflow-x-auto cursor-grab w-full  whitespace-nowrap light-scrollbar scroll-smooth">
      {children}
    </div>
  )
}

export default ScrollText