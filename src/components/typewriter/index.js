import React, {useEffect} from "react";
import TypeWriter from './typewriter';

const TypeContainer = (props) => {
    const typeWriter = new TypeWriter(props.lines, props.delay ? props.delay : 70);

    useEffect(() => {
        typeWriter.createLines();
        return () => clearInterval(typeWriter.intervalRef());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {typeWriter.typeLines()}
        </div>
    )
};

export default TypeContainer;