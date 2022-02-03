import DogImage from './DogImage';

function DogContainer(props) {
    return(
        <div className='dog-container'>
          { props.dogs !== [] &&
            props.dogs.map(dog => (
              <DogImage source={dog} dogKey={dog} />
            ))}
        </div>
    )
}

export default DogContainer;