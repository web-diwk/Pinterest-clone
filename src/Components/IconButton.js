import { FiberPinRounded } from '@material-ui/icons';
import { useState } from 'react';
import {BsThreeDots} from 'react-icons/bs'

export function IconButton({ backGroundColor, textColor, name, style }){
var [op, setOp] = useState(false);

    if(op)
    {
        return(
            <button onMouseLeave={()=>{setOp(false)}}  style={{
                backgroundColor: "gray",
                color: textColor,
                borderRadius: 15,
                height: 25,
                border: 'none',
                position: 'absolute',
                padding: 2,
                opacity:op,
                paddingLeft: 10,
                paddingRight: 10,
                fontFamily: 'sans-serif',
                ...style,
            }}><BsThreeDots/></button>
        )
    }
    else{
    return (
        <button onMouseEnter={()=>{setOp(true)}}  onMouseLeave={()=>{setOp(1)}} style={{
            backgroundColor: backGroundColor,
            color: textColor,
            borderRadius: 15,
            height: 25,
            border: 'none',
            position: 'absolute',
            padding: 2,
            opacity:op,
            paddingLeft: 10,
            paddingRight: 10,
            fontFamily: 'sans-serif',
            ...style,
        }}><BsThreeDots/></button>
);
    }
}