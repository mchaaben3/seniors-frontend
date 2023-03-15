import Pics from "../components/carousel/Pics"
import ProfileInformation from "../components/Profile/ProfileInformation"
import ProfilePicture from "../components/Profile/ProfilePicture"

const Profile = (props: any) => {
  return (
    <>

      <section className="mt-28">

        <div className="container">
          <div className="mx-20 grid">
            {/* User Profile Tab Card  */}
            <div className="flex flex-row rounded-lg border border-gray-200/80 bg-white p-6">
              <ProfilePicture currentUser={props.currentUser} />
              {/* Meta Body  */}
              <div className="flex flex-col px-6">
                {/* Username Container */}
                <ProfileInformation currentUser={props.currentUser} />
                {/* Meta Badges  */}
                <div className="my-2 flex flex-row space-x-2">
                  {/* Badge Location */}
                  <div className="flex flex-row">
                    <i className="fa fa-map-marker"></i>
                    <span className="text-sm text-gray-100">

                      Sousse
                    </span>
                  </div>
                </div>
                {/* Mini Cards  */}
                <div className="mt-2 flex flex-row items-center space-x-5">
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80" >
                    <div className="flex flex-row items-center justify-center">
                      <i className="uil uil-comment-dots"></i>

                      <span className="font-bold text-gray-600">
                        {' '}

                      </span>
                    </div>

                    <div className="mt-2 text-sm text-gray-400">Posts</div>
                  </a>
                  {/* Projects  */}
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <i className="uil uil-users-alt"></i>

                      <span className="font-bold text-gray-600"> 10</span>
                    </div>

                    <div className="mt-2 text-sm text-gray-400">Groups</div>
                  </a>
                  {/* Projects  */}
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <i className="uil uil-schedule"></i>
                      <span className="font-bold text-gray-600"> 2</span>
                    </div>

                    <div className="mt-2 text-sm text-gray-400">Events</div>
                  </a>
                </div>
              </div>
              {/* Right Actions Container  */}
              <div className="w-100 flex flex-grow flex-col items-end justify-start">
                <div className="flex flex-row space-x-3">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Pics image={props?.currentUser?.image} />
        </div>
      </section>
    </>
  )
}

export default Profile