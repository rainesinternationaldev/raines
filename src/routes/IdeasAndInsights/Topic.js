import React from 'react';
import {Link} from 'react-router';
import {ViewMore} from './ViewMore';
import classes from './IdeasAndInsights.scss';

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.displayMoreArticles = () => {
      console.log('fetching more articles')
    }

    this.state = {
      topics: {
        'financial-markets': 'Financial Markets',
        'natural-resources': 'Natural Resources',
        'technology-innovation': 'Technology & Innovation',
        'labor-markets': 'Labor Markets',
        'productivity': 'Productivity, Competitiveness & Growth'
      }
    }
  }

  componentDidMount() {
    if (!this.state.topics[this.props.params.topic]) {
      console.log('this page does not exist. redirect error')
    }
  }

  render() {
    const topic = this.state.topics[this.props.params.topic];

    return (
      <div className={`${classes.ideasAndInsights} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
        <div className={`${classes.inner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.latestResearch} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <Link to="/ideas-and-insights"><p>Back to Ideas & Insights</p></Link>
            <h4 className={classes.subtitle}>{topic}</h4>
            <hr/>
            <div className={`${classes.imageDiv} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
            </div>
            <div className={`${classes.desc} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
              <h3 className={classes.articleTitle}>Why investors may need to lower their sights</h3>
              <p className={classes.articleSummary}><span className={classes.date}>April 2016</span> - The forces that have driven exceptional investment returns over the past 30 years are weakening, and even reversing. It may be time for investors to lower their expectations.</p>
            </div>
          </div>

          <div className={`${classes.primaryArticles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.subtitle}>MORE INSIGHTS</h4>
            <hr/>
            <div className={`${classes.latestArticle} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
              <p className={classes.articleSummary}><span className={classes.date}>April 2016</span> - The forces that have driven exceptional investment returns over the past 30 years are weakening, and even reversing. It may be time for investors to lower their expectations...</p>
            </div>
            <div className={`${classes.nextArticles} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
              <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
                <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
                <p className={classes.articleSummary}><span className={classes.date}>April 2016</span> - The forces that have driven exceptional investment returns over the past 30 years are weakening, and even reversing. It may be time for investors to lower their expectations...</p>
              </div>
              <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
                <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
                <p className={classes.articleSummary}><span className={classes.date}>April 2016</span> - The forces that have driven exceptional investment returns over the past 30 years are weakening, and even reversing. It may be time for investors to lower their expectations...</p>
              </div>
            </div>
          </div>
          <ViewMore viewMore={this.displayMoreArticles}/>
          <div className={`${classes.nextArticles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.nextArticle} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
            </div>
            <div className={`${classes.nextArticle} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
            </div>
            <div className={`${classes.nextArticle} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
            </div>
            <div className={`${classes.nextArticle} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
            </div>
            <div className={`${classes.nextArticle} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
            </div>
            <div className={`${classes.nextArticle} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
            </div>
            <div className={`${classes.nextArticle} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
            </div>
            <div className={`${classes.nextArticle} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}