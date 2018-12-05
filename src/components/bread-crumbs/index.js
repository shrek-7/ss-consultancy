import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

import './bread-crumbs.css';

export default class BreadCrumbs extends Component {
	constructor(){
		super()
		this.state = {
			
		};
	}

	renderBreadCrumbs() {
		return this.props.breadCrumbsList.map((element,index) => {
			return (
				<li key={index} className="bread-crumbs__list">
					<Link to={ element.link } className={element.disable?'bread-crumbs__link--disabled':''}>
						{element.value}
					</Link>
				</li>
			);
		});
	}
	render() {
        return(
        	<ul className="bread-crumbs">
        		{ this.renderBreadCrumbs() }
        	</ul>
        )
    }
}