import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl } = this.props;
        let defaultImg = 'https://external-preview.redd.it/WwRvhw1lvF6-49k0cB-CnFpGPg7NVMpmQcDuedrvzRA.jpg?auto=webp&s=50b0a3d7766e72798f3134ff5a85c3c497882a1c';
        return (

            <div>
                <div className="card">
                    <img src={imageUrl ? imageUrl : defaultImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} </p>
                        <a href="noreferrer" target="_blank" className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div >

        )
    }
}

export default NewsItem;
