import { increment } from './../../store/slice/counterSlice';
import { useDispatch } from 'react-redux';

export default function IncrementButton() {
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment());
    }

    return (
        <button onClick={incrementHandler}>increment</button>
    )
}