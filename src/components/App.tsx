import React, { useEffect } from 'react';
import UploadArea from './UploadArea';
import { useDispatch } from 'react-redux';
import { getFiles } from '../actions/Files/FilesActionCreator';
import DisplayImageArea from './DisplayImageArea';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFiles.request())
  })
        
  return (
    <div className="App">
      <UploadArea/>
      <DisplayImageArea/>
    </div>
  );
}

export default App;
