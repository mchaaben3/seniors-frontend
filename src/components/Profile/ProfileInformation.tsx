

const ProfileInformation = (props: any) => {



  return (
    <div className="flex h-8 flex-row ">
      {/* Username */}
      <span className="relative pr-10">
        <h2 className="font-semibold hover:text-gray-500 cursor-pointer" onClick={
          () => {
            window.location.href = `/profile/${props?.currentUser?.name}`
          }
        }>
          {props?.currentUser?.name}
        </h2>
        <div
          className="absolute right-5  h-4 w-4 rounded-full border-4 border-white bg-green-400 sm:invisible sm:top-1 md:visible"
          title="User is online"
        ></div>
      </span>
      {/*online or nor*/}
      {/* Online Status Dot  */}
    </div>

  )
}

export default ProfileInformation