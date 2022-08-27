import {useState} from 'react'

function Detective () {
    const [sherlock, setSherlock] = useState('психопат')
    const handleClick = () => {
        setSherlock('высокоактивный социопат')
    }

    return (
        <>
        <p>
            Шерлок - {sherlock}
        </p>
        <div>
            <button onClick={handleClick}>узнать правду</button>
        </div>
        </>
    )
};

export default Detective;