function DogImage(props) {
    return(
        <div>
            <img
                src={props.source}
                key={props.dogKey}
                alt="dog_images"
                className='dog-image'
            />
        </div>
    )
}

export default DogImage;