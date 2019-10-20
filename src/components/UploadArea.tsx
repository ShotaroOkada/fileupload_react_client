import React from 'react'
import DropZone from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { postFiles } from '../actions/Files/FilesActionCreator';

const UploadArea: React.FC = () => {
    const dispatch = useDispatch();

    const onDrop = (acceptedFiles:File[]) => {
        dispatch(postFiles.request({files: acceptedFiles}))
        console.log(acceptedFiles)
    }

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