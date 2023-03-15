
const SearchBar = () => {
  return (
    <div className="relative hidden sm:block flex-shrink flex-grow-0">
      <input type="text" className="bg-purple-white bg-gray-100 rounded-lg border-0 p-3 w-full" placeholder="Search somthing..." style={{ minWidth: '400px' }} />
      <div className="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  )
}

export default SearchBar