import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../states';

const DisplayImageArea: React.FC = () => {
    const files = useSelector((state: RootState) => state.files) 
    return(
        <div>
        {Object.values(files).map(file => {
           return <img key={file} src={file} alt=""/>
        })}
        </div>
    )
}

export default DisplayImageArea