import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getText } from '../redux/text/textSlice';

function Form() {
    const [val, setVal] = useState(1);
    const [status, setStatus] = useState('html')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setVal(Number(e.target.value));
        dispatch(getText({ count: val + 1, status }))

    };
    const handleChange2 = (e) => {
        setStatus(e.target.value);
        dispatch(getText({ count: val + 1, status }))
    };
    return (
        <div >
            <form className='form'>
                <div>
                    <div>Paragraphs </div>
                    <input required value={val} placeholder='Count...' onChange={(e) => handleChange(e)} type="number" />
                </div>

                <div className='div2'>
                    <div>Include HTML</div>
                    <select onChange={(e) => handleChange2(e)} value={status} id="dropdown">
                        <option value="html">No</option>
                        <option value="text">Yes</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
export default Form