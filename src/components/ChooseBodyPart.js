import React from 'react';

const ChooseBodyPart = () => {
    const [bodyPart, setBodyPart] = useState('');

    const handleBodyPart = (e) => {
        setBodyPart(e.target.id);
    }

    return (
        <div>
            <h1>Choose Body Part</h1>
            <button className="btn btn-ghost normal-case text-xl" id="chest" onClick={(e) = handleBodyPart()}>Chest</button>
            <button className="btn btn-ghost normal-case text-xl" id="back" onClick={(e) = handleBodyPart()}>Back</button>
            <button className="btn btn-ghost normal-case text-xl" id="legs" onClick={(e) = handleBodyPart()}>Legs</button>
            <button className="btn btn-ghost normal-case text-xl" id="arms" onClick={(e) = handleBodyPart()}>Arms</button>
            <button className="btn btn-ghost normal-case text-xl" id="shoulders" onClick={(e) = handleBodyPart()}>Shoulders</button>
            <button className="btn btn-ghost normal-case text-xl" id="extra" onClick={(e) = handleBodyPart()}>Extra</button>
        </div>
    );
}

export default ChooseBodyPart;