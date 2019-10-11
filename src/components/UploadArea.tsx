import React from 'react'
import DropZone from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { postFiles } from '../actions/Files/FilesActionCreator';

const onDrop = (Files:File[]) => {
    const dispatch = useDispatch();
    dispatch(postFiles.request({files: Files}))
    console.log(Files)
}

const UploadArea: React.FC = () => {
    return (
        <div>
            <DropZone onDrop={onDrop}>
                {({getRootProps, isDragActive}) => (
                    <div {...getRootProps()}>
                        {isDragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
                    </div>
                )}
            </DropZone>
        </div>
    )
}

export default UploadArea