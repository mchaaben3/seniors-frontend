import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'rsuite';
import Left from '../components/Left/Left';
import MainComponent from '../components/Main.component';
import MatchCards from '../components/matches/MatchCards';
import { useGetUsersQuery } from '../redux/features/api/usersApi';

const Home = (props: any) => {
  const navigate = useNavigate();
  const { data, isError, isSuccess, isLoading } = useGetUsersQuery('');
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    }

  }, [navigate])



  return (
    <>

      <main>
        <div className="container-app">
          <Left currentUser={props?.currentUser} />

          <div className='middle'>

            <MainComponent>
              {
                isLoading && (
                  <div className="flex justify-center items-center w-full" >

                    <Loader size="lg" />

                  </div>
                )

              }
              {
                isError && (
                  <div className="flex justify-center items-center w-full" >
                    error ...
                  </div>
                )
              }
              {
                isSuccess && (
                  <MatchCards users={data} currentUser={props?.currentUser} />
                )
              }
            </MainComponent>
          </div>

        </div>
      </main>


    </>
  )
}

export default Home