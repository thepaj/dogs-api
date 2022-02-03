function Search(props) {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className='number-input'>
                    <label>How many pictures would you like to see?</label>
                    <input 
                    type='number' 
                    min='1'
                    className='numberInput' 
                    placeholder='How many images would you like to see'
                    value={props.value}
                    onChange={props.onInputChange}
                    />
                </div>
                <div className='breed-input'>
                    <label>What breed would you like?</label>
                    <select onChange={props.handleOptionChange}>
                        <option value="" disabled selected>Select a breed</option>
                        {props.breeds.map(breed => (
                            <option
                            key={breed} 
                            className='breed-btn'
                            >
                            {breed}
                            </option>
                        ))}
                    </select>
                </div>
                <button className='submit-btn' type='submit' onClick={props.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Search;