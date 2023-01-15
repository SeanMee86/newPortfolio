import React, {useEffect, useState} from "react";
import TypeWriter from './typewriter';
import PropTypes from 'prop-types';

const TypeOut = (props) => {
    const typeWriter = new TypeWriter(props.children, props.delay, useState);

    useEffect(() => {
        typeWriter.createLines();
        return () => clearInterval(typeWriter.intervalRef());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={props.className} style={{height: props.textHeight}}>
            {typeWriter.typeLines()}
        </div>
    )
};

TypeOut.defaultProps = {
    delay: 70,
    textHeight: "auto"
};

TypeOut.propTypes = {
    delay: PropTypes.number,
};

export default TypeOut;
