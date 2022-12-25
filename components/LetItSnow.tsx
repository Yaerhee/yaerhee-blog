import Snowfall from "react-snowfall";
import React from 'react';

export default function LetItSnow() {
    if (typeof document === 'undefined') {
        // server-side : document 'undefined' -> useLayoutEffect (X) / useEffect (O)
        React.useLayoutEffect = React.useEffect
    }

    return (
        <Snowfall
            color="#98b0d7"
            snowflakeCount={50}
            radius={[0.0, 1.0]}
            speed={[0.5, 1.0]}
            wind={[0.0, 0.0]}
            />
    )
}