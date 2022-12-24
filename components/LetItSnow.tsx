import Snowfall from "react-snowfall";

export default function LetItSnow() {
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