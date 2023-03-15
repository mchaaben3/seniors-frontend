
const Info = (props: any) => {
  return (
    <>
      <p className="font-semibold hover:text-gray-500 cursor-pointer" onClick={
        () => {
          window.location.href = `/profile/${props.name}`
        }
      }>{props.name}</p>
      <div className="text-sm leading-normal text-gray-400 flex justify-center items-center">
        <svg viewBox="0 0 24 24" className="mr-1" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        Los Angeles, California
      </div>
    </>
  )
}

export default Info