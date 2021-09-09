import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    articles
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        console.log('cdm');
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1df9a8941d894128bc77512e97de1c01";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    render() {
        console.log('render');
        return (
            <div className='container my-3'>
                <h1>NewsMonkey - Top HeadDlines</h1>

                <div className="row my-2">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url} >
                            <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ""} imageUrl={element.urlToImage
                            } newsUrl={element.url} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News;
