
require('./like.css');
import React from 'react'; 
import axios from 'axios';

class LikeComponent extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			stores: []
		}	
	}

	componentDidMount() {
		axios.get(this.props.source)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			console.log(data)
			if(data.status) {
				this.setState({
					stores: data.data,
				});
			}else {
				console.log(data.msg);
			}
		})
		.catch(() => {
			console.log("fetch encounter error!");
		});
	}

	render() {
		let countId = 0;
		return (
			<div id="like">
				<p>猜你喜欢</p>
				{
					this.state.stores.map((item) => {
						return <div className="like_content" key={"like" + countId++}>
									<div className="like_link">
										<a href={ item.url }>
											<img src={ item.icon } alt=""/>
										</a>
									</div>
									<div className="like_desc">
										<span>
											{ item.desc }		
										</span>
									</div>
									<div className="like_price">
										<span>¥{ item.price }</span>
										<div><a href={ item.more }>看相似</a></div>
									</div>
								</div>
					})
				}
			</div>
		);
	}
}

module.exports = LikeComponent;
