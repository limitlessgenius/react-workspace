import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
	//console.log(video)
	//const video = props.video
	const imageUrl = video.snippet.thumbnails.default.url

	// const selectedVideoFunc = (e) => {
	// 	const selectedVideoPath = video.snippet.thumbnails.high.url
	// 	console.log('CLICK')
	// 	//selectedVideo.setState({ selectedVideo : selectedVideoPath })
	// 	//How to change state properly
	// }

	return (
		<li className="list-group-item" onClick={() => onVideoSelect(video)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>	
			</div>
		</li>

	)
}

export default VideoListItem















