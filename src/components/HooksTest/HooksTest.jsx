import React,{useState,useEffect}from 'react'

function HoooksTest() {
    const [count,setCount] = useState(0)
    console.log(count,setCount)
    useEffect(()=>{
        console.log('更新')
    })
    return (
        <div style={{ margin: '20px', width: '80%', border: '2px solid #000' }}>
            <h3>我是HooksTest组件</h3> <br/>
            <button onClick={()=>{setCount(count - 1)}}>-</button>
            <span>{count}</span>
            <button onClick={()=>{setCount(count + 1)}}>+</button>
        </div>
    )
}

export default HoooksTest
