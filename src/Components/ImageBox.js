import {Button} from './Button';
import {IconButton} from './IconButton';
import {useState} from 'react';
export function ImageBox({ link }) {
var [hover,setHover] = useState(true)

    if(hover){
        return(
            <img onMouseEnter={()=>{
                setHover(false);
            }} style={{ borderRadius: 20,width:"100%", }} src={link} alt="Image" /> 
        );
    }
    else
    {
    return(
        <>
      <div style={{position:'relative'}} onMouseLeave={
          ()=>{
          setHover(true);
          }
      } >
      <img style={{ borderRadius: 20, opacity: 0.6,width:"100%",}} src={link} alt="Image" />
      <Button name='save' backGroundColor='red' textColor="white" style={{top:5,right:13}} />
      <Button name='Share' backGroundColor='white' textColor="black" style={{bottom:8, left:66}} />
      <IconButton name={'linke me'} backGroundColor='white' textColor="black" style={{bottom:8, left:130}} />
      <Button name='Link' backGroundColor='white' textColor="black" style={{bottom:8, left:13}} />
      </div>
      </>
    );
    }
}
