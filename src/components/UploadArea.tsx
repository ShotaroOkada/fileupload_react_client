import React from 'react'
import DropZone from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { postFiles } from '../actions/Files/FilesActionCreator';
import { postFilesParams } from '../apis/Files/PostFilesClient';
import "../styles/UploadArea.css"


const UploadArea: React.FC = () => {
    const dispatch = useDispatch();

    const onDrop = (acceptedFiles: File[]) => {
        let urls:postFilesParams = [];
        acceptedFiles.forEach(file => {
            console.log(`file:${JSON.stringify(file.type)}`)
            const url = URL.createObjectURL(file);
            urls.push({url, file})
        })
        dispatch(postFiles.request(urls))
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