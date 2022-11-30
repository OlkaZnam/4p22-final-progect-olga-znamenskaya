import React from 'react'
import { FaPaperclip } from 'react-icons/fa'
import './FileAttachStyles.css'

const FileAttach = (props) => {
    const {
        onChange
    } = props

    return (
        <div className="file-attach">
            <label className="file-attach__body">
                <FaPaperclip className='file-attach__icon' />
                <span>Add your file</span>
                <input
                    className="visually-hidden"
                    type="file"
                    onChange={onChange}
                />
            </label>
        </div>

    )
}

export default FileAttach