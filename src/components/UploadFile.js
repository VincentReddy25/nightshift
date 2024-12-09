import React, { useState } from 'react';
import image from '../assets/mythical-dragon-beast-anime-style.jpg';

export default function UploadFile() {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) setFileName(file.name);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) setFileName(file.name);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <section>
                <img src={image} alt="Mythical Dragon Beast" />
                <div className="container">
                    <div className="upload">
                        <h2>Upload user with User Story</h2>
                        <p>Drag and drop or select a file</p>
                        <form>
                            <div className="inputfile-box" onDrop={handleDrop} onDragOver={handleDragOver} >
                                <div className='flexbox'>
                                    <input type="file" id="file" className="inputfile" onChange={handleFileChange} />
                                    <label htmlFor="file">
                                        <span className='filebox'></span>
                                        <span className="file-button"> Attach File</span>
                                    </label>
                                    <input type="submit" value="Submit" />
                                </div>
                                <p>Limit 200MB per file</p>
                                <p> <span id="file-name" className="file-box"> {fileName || 'No file selected'}</span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
