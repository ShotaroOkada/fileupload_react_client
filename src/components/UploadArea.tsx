import React from 'react'
import DropZone from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { postFiles } from '../actions/Files/FilesActionCreator';

const UploadArea: React.FC = () => {
    const dispatch = useDispatch();

    const onDrop = (acceptedFiles: File[]) => {
        let fileURL = ''
        const filePaths: string[] = acceptedFiles.map((file) => {
        // blob形式に変換
        fileURL = URL.createObjectURL(file);
        return fileURL
        })
        dispatch(postFiles.request(filePaths))
        console.log(filePaths)
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