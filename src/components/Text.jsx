import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getText } from '../redux/text/textSlice';

function Form() {
    const data = useSelector(state => state.textReducer.items)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getText());
    }, [dispatch])
    return (
        <div className='text'>
            {data}
        </div>
    )
}

export default Form