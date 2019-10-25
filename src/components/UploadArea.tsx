import React from 'react'
import DropZone from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { postFiles } from '../actions/Files/FilesActionCreator';
import "../styles/UploadArea.css"


const UploadArea: React.FC = () => {
    const dispatch = useDispatch();

    const onDrop = (acceptedFiles: File[]) => {
        const formData = new FormData();
        acceptedFiles.forEach(file => {
            console.dir(file)
            formData.append('Files', file)
        })
        
        console.log(formData)
        dispatch(postFiles.request(formData))
    }

    return (
        <div>
            <DropZone  onDrop={onDrop}>
                {({getRootProps, isDragActive}) => (
                    <div className={isDragActive ? 'uploadContainerOnDrag' : 'uploadContainer'} {...getRootProps()}>
                        {isDragActive ? "Drop it like it's hot!" : 'Drag a file to upload!'}
                    </div>
                )}
            </DropZone>
        </div>
    )
}

export default UploadArea