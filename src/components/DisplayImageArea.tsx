import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../states';
import '../styles/DisplayImageArea.css'

const DisplayImageArea: React.FC = () => {
    const files = useSelector((state: RootState) => state.files) 
    return(
        <div className='displayImageAreaContainer'>
            <div className='displayAreaTitle'>Uploded files</div> 
            <div className='displayImageContainer'>
        {Object.values(files).map(file => {
           return <img className='image' key={file} src={file} alt=""/>
        })}
        </div>
        </div>
    )
}

export default DisplayImageArea