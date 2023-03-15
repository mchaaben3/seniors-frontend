/* eslint-disable jsx-a11y/img-redundant-alt */

const UserCard = (props: any) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="profile" href="#" >
      <div >

        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img alt="User Card Picture" src={props?.currentUser?.image} className="h-12 w-12 rounded-full object-cover" />
      </div>
      <div className="handle">
        <h3 className="font-bold text-sm">{props?.currentUser?.name}</h3>

      </div>


    </a>
  )
}

export default UserCard