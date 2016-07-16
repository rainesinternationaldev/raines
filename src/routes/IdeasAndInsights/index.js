import React from 'react';
import classes from './IdeasAndInsights.scss';

export default class IdeasAndInsights extends React.Component {
  render() {
    return (
      <div className={`${classes.ideasAndInsights} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
        <div className={`${classes.inner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.latestResearch} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.subtitle}>LATEST RESEARCH</h4>
            <hr/>
            <div className={`${classes.imageDiv} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
            </div>
            <div className={`${classes.desc} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
              <h3 className={classes.articleTitle}>Why investors may need to lower their sights</h3>
              <p className={classes.articleSummary}><span className={classes.date}>April 2016</span> - The forces that have driven exceptional investment returns over the past 30 years are weakening, and even reversing. It may be time for investors to lower their expectations.</p>
            </div>
          </div>
          <div className={`${classes.insights} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.subtitle}>INSIGHTS</h4>
            <hr/>
            <p>Topics</p>
            <div className={classes.topicList}>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>Financial Markets
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>Natural Resources
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>Technology & Innovation
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>Labor Markets
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>Productivty, Competitiveness & Growth
              </p>
            </div>
            <hr/>
          </div>
          <div className={classes.primaryArticles}>
            <div className={`${classes.latestArticle} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
              <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
              <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
              <p className={classes.articleSummary}><span className={classes.date}>April 2016</span> - The forces that have driven exceptional investment returns over the past 30 years are weakening, and even reversing. It may be time for investors to lower their expectations...</p>
            </div>
            <div className={`${classes.nextArticles} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
              <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
                <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
                <p className={classes.articleSummary}><span className={classes.date}>April 2016</span> - The forces that have driven exceptional investment returns over the past 30 years are weakening, and even reversing. It may be time for investors to lower their expectations...</p>
              </div>
              <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                <img src="https://images.unsplash.com/photo-1414496213569-23220f1033cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4799ea6a2039b3422d8cb83ea40eed73"/>
                <h5 className={classes.articleTitle}>Exploding digital flows in a deeply connected world</h5>
                <p className={classes.articleSummary}><span className={classes.date}>April 2016</span> - The forces that have driven exceptional investment returns over the past 30 years are weakening, and even reversing. It may be time for investors to lower their expectations...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}