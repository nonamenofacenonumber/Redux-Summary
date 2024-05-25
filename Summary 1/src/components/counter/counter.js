import IncrementButton from "./incrementButton"
import DecrementButton from "./decrementButton"
import { useSelector } from 'react-redux';

export default function Counter() {
    const counter = useSelector(state => state.counter.value )

    return (
        <>
            <h3>Your Number is : {counter}</h3>
            <div className="flex">
                <IncrementButton />
                <DecrementButton />
            </div>
        </>
    )
}