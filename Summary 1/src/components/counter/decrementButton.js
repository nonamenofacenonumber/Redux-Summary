import { decrement } from '../../store/slice/counterSlice';
import { useDispatch } from 'react-redux';

export default function DecrementButton() {
    const dispatch = useDispatch();

    const decrementHandler = () => dispatch(decrement());

    return (
        <button onClick={decrementHandler}>decrement</button>
    )
}