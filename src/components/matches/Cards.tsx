
const Cards = (props: any) => {
  return (
    <div className="flex flex-col justify-start h-[650px] bg-gray-900 backdrop-blur-3xl">
      <div className="flex flex-row justify-center">
        <div className="w-full h-[500px] relative bg-yellow-100/90 rounded-sm">

          <div className="absolute w-full h-full top-0 left-0 0
           pointer-events-none peer-checked:scale-95  transition-all duration-300
           overflow-hidden"
          >
            <div className="relative h-full"
              style={{
                backgroundImage: `url(${props.user.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'

              }}>

            </div>
          </div>
          <div className="absolute w-full h-full top-0 pointer-events-none flex flex-col">


          </div>
          <div className="bg-black/30 h-full w-full absolute top-0 pointer-events-none 
       peer-checked:scale-95 ransition-all duration-300 peer-checked:bg-black/0">
            <div className="flex flex-col justify-end h-full pl-4 pb-4">
              <span className="text-white text-4xl font-bold ">{props.user.name}</span>

            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default Cards;









