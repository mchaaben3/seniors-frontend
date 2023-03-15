import { useEffect, useRef, useState } from 'react';
import TinderCard from 'react-tinder-card';
import Cards from './Cards';

interface IPeople {
  _id: string;
  name: string;
  picture: string;

}

const MatchCards = (props: any) => {
  const [people, setPeople] = useState<IPeople[]>([])
  // const [loading, setLoading] = useState<Boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<any>(0)

  const currentIndexRef = useRef(currentIndex)

  useEffect(() => {
    setPeople(() => props?.users?.filter((user: any) => user._id !== props?.currentUser._id))
  }, [props?.currentUser._id, props?.users])

  useEffect(() => {
    setCurrentIndex(people?.length - 1)
  }, [people])



  useEffect(() => {
    currentIndexRef.current = currentIndex
    console.log('currentIndexRef.current', currentIndexRef.current)
    console.log('currentIndex', currentIndex)

  }, [currentIndex])




  const handleCancel = (user: any) => { }
  const handleSwipe = (dir: any, user: any) => {
    setPeople((people) => people.filter((person) => person._id !== user._id))

  }
  return (
    <div className="grid w-[70%]" >

      {people?.map((user: any, index: number) => {
        return (
          <TinderCard
            key={user._id}
            preventSwipe={['up', 'down']}
            flickOnSwipe={true}

            onSwipe={(dir: any) => {
              handleSwipe(dir, user)
            }}
            className={`row-start-1 col-start-1`}
            onCardLeftScreen={(e) => {
              console.log(e)
            }}


          >
            <Cards user={user} handleCancel={handleCancel} />

          </TinderCard>


        )
      }

      )}
      <div className="relative -top-full">
        <div className="flex justify-around  items-center space-x-4  pb-4">
          <span className="tno" onClick={() => {
            handleSwipe('left', people[currentIndexRef.current])
          }}>
            <i className="fas fa-times"></i>
          </span>


          <span className="tyes">
            <i className="fas fa-heart"></i>
          </span>
        </div>

      </div>

    </div>
  )
}
export default MatchCards