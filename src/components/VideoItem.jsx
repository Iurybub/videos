import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div class="item video-item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
            <div className="content">
                <div className="header"> {video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem
