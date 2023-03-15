
const ProfilePicture = (props: any) => {
  return (
    <div className="relative">
      <img
        className="h-40 w-40 rounded-full object-cover"
        src={props?.currentUser?.image}
        alt="User"
      />
    </div>
  )
}

export default ProfilePicture