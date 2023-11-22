import React from 'react'
import "./Video.css"
import { useSearchParams } from 'react-router-dom'

function Video() {
    // const { videoId } = useParams()
    let [searchParams, setSearchParams] = useSearchParams();
    let videoId= searchParams.get("videoid")
    return (
        <>
        {
            console.log("videoid",videoId)
        }
            <video className='video' width={"1500px"} height={"600px"} controls autoPlay>
                <source src={videoId} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

        </>
    )
}

export default Video