import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import DropboxChooser from 'react-dropbox-chooser';
import React from "react";

const appKey = process.env.APP_KEY

function Request(){

    const navigate = useNavigate()

    const [request, setRequest] = useState({
        email:'',
        image: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        description:''
    })

    const [files, setFiles] = useState([])

    const onSuccess = (selectedFiles) => {
        console.log(selectedFiles)
    }

    const onCancel = () => {
        console.log("User canceled the operation")
    }

    async function handleSubmit(e) {
        e.preventDefault()
        
        await fetch(`http://localhost:5000/request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request),
        })
        console.log('failed to connect')
        navigate('/request')
    }

    return(
        <form id="form" onSubmit={handleSubmit}>
            <div className="aboutReq">If you would like a personalized drawing, please put in the requested information in the boxes below. Please add images that you would like to use for reference as well.</div>
            <div className="request">
                <div className="refMail">
                    <div className="email">
                        <h5>E-mail:</h5>
                        <textarea 
                            required
                            placeholder="E-mail"
                            type="text" 
                            className="mail" 
                            value={request.email}
                            onChange={e => setRequest({...request, email: e.target.value})}
                        />
                    </div>
                </div>
                <div>
                    <h5>Image:</h5>
                    <DropboxChooser 
                        appKey={appKey}
                        success={onSuccess}
                        cancel={onCancel}
                        multiSelect={true}
                    />    
                </div>
                <div>
                    <h5>Street Address:</h5>
                    <textarea 
                        placeholder="Street Address"
                        type='text'
                        value={request.address}
                        onChange={e => setRequest({...request, description: e.target.value}) }
                    />
                </div>
                <div>
                    <h5>City:</h5>
                    <textarea 
                        placeholder="City"
                        type='text'
                        value={request.city}
                        onChange={e => setRequest({...request, city: e.target.value})}
                    />
                </div>
                <div>
                    <h5>State:</h5>
                    <select placeholder="Select">
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Deleware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idaho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Massachusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>Noth Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utah</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                    </select>
                </div>
                <div>
                    <h5>Zip Code:</h5>
                    <textarea 
                    placeholder="Zip Code"
                    type="text"
                    value={request.zip}
                    onChange={e => setRequest({...request, description: e.target.value})}
                    />
                </div>
                <div className="description">
                    <h5>Description:</h5>
                    <textarea 
                        placeholder="Description"
                        type="text"
                        className="descrip" 
                        value={request.description}
                        onChange={e => setRequest({...request, description: e.target.value})}
                    />
                </div>
                <button className="submit" >Submit</button>
            </div>
        </form>
        
    )
}

export default Request;