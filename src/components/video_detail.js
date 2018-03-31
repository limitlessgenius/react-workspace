import React from 'react'

const VideoDetail = ({video}) => {

	if(!video) return <div>Loading...</div>

	const url = video.snippet.thumbnails.high.url

	return (
		<div className="video-detail col-md-8">
			<div>
				<img src={url}/>
			</div>
			
			<div className="details">.
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoDetail


/*<div className="embed-responsive embede-responsive-16by9">
	<iframe className="embed-responsive-item" src={url}></iframe>
</div>*/








