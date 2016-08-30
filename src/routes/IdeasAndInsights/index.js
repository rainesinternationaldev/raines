import React from 'react';
import {Link} from 'react-router';
import {ViewMore} from './ViewMore';
import classes from './IdeasAndInsights.scss';
import moment from 'moment';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../actions/posts';
import {connect} 							from 'react-redux';
import utils from '../utils';

class IdeasAndInsights extends React.Component {
  constructor(props) {
    super(props);
    this.displayMoreArticles = () => {
      console.log('fetching more articles');
      this.setState({ numShown: this.state.numShown += 8 });
      if (this.state.numShown >= this.props.wordpress.posts.length) {
        this.props.actions.fetchNextEightPosts(this.props.wordpress.offset);
      }
    }

    this.state = {
      numShown: 4
    }
  }

  componentWillMount() {
    if (!this.props.wordpress.posts.length) {
      this.props.actions.fetchPosts(4, 0, 1);
    }
  }

  render() {
    const baseurl = '/ideas-and-insights';
    const posts = this.props.wordpress.posts;

    let parsedArticles = [];
    if (posts.length) {
      for (let i = 0; i < posts.length; i++) {
        parsedArticles.push(utils.parseArticleData(posts[i]));
      }
    }
    let nextArticles = parsedArticles.slice(4);

    return (
      <div className={`${classes.ideasAndInsights} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
        <div className={`${classes.inner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.latestResearch} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.subtitle}>LATEST RESEARCH</h4>
            <hr/>
            {
              parsedArticles.length ?
              <div>
                <div className={`${classes.imageDiv} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Link to={`/article/${parsedArticles[0].id}-${parsedArticles[0].title}`}>
                    <img src={parsedArticles[0].imgSrc}/>
                  </Link>
                </div>
                <div className={`${classes.desc} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Link to={`/article/${parsedArticles[0].id}-${parsedArticles[0].title}`}>
                    <h3 className={classes.articleTitle}>{parsedArticles[0].title}</h3>
                  </Link>
                  <p className={classes.articleSummary}><span className={classes.date}>{parsedArticles[0].date}</span> - {parsedArticles[0].excerpt}</p>
                </div>
              </div>
              : ""
            }
          </div>
          <div className={`${classes.insights} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.subtitle}>TOPICS</h4>
            <hr/>
            <div className={classes.topicList}>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/career-insights`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Career Insights
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/consulting`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Consulting
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/current-events`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Current Events
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/diversity-and-inclusion`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Diversity & Inclusion
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/leadership-and-governance`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Leadership & Governance
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/making-moves`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Making Moves
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/opportunities`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Opportunities
                </Link>
              </p>
            </div>
            <h4 className={classes.subtitle}>INSIGHTS</h4>
            <hr/>
          </div>
          <div className={`${classes.primaryArticles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            {
              parsedArticles.length ?
                <div>
                  <div className={`${classes.latestArticle} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                    <Link to={`/article/${parsedArticles[1].id}-${parsedArticles[1].title}`}>
                      <img src={parsedArticles[1].imgSrc}/>
                    </Link>
                    <Link to={`/article/${parsedArticles[1].id}-${parsedArticles[1].title}`}>
                      <h5 className={classes.articleTitle}>{parsedArticles[1].title}</h5>
                    </Link>
                    <p className={classes.articleSummary}><span className={classes.date}>{parsedArticles[1].date}</span> - {parsedArticles[1].excerpt}</p>
                  </div>
                  <div className={`${classes.nextArticles} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                    <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                      <Link to={`/article/${parsedArticles[2].id}-${parsedArticles[2].title}`}>
                        <img src={parsedArticles[2].imgSrc}/>
                      </Link>
                      <Link to={`/article/${parsedArticles[2].id}-${parsedArticles[2].title}`}>
                        <h5 className={classes.articleTitle}>{parsedArticles[2].title}</h5>
                      </Link>
                      <p className={classes.articleSummary}><span className={classes.date}>{parsedArticles[2].date}</span> - {parsedArticles[2].excerpt}</p>
                    </div>
                    <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                      <Link to={`/article/${parsedArticles[3].id}-${parsedArticles[3].title}`}>
                        <img src={parsedArticles[3].imgSrc}/>
                      </Link>
                      <Link to={`/article/${parsedArticles[3].id}-${parsedArticles[3].title}`}>
                        <h5 className={classes.articleTitle}>{parsedArticles[3].title}</h5>
                      </Link>
                      <p className={classes.articleSummary}><span className={classes.date}>{parsedArticles[3].date}</span> - {parsedArticles[3].excerpt}</p>
                    </div>
                  </div>
                </div> : ""
            }
          </div>
          <div className={`${classes.moreArticles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            {
              nextArticles.length ? 
                nextArticles.map((article, i) => {
                  return (
                    <div className={`${classes.nextArticle} col-lg-3 col-md-3 col-sm-6 col-xs-12`} key={i}>
                      <Link to={`/article/${nextArticles[i].id}-${nextArticles[i].title}`}>
                        <img src={nextArticles[i].imgSrc}/>
                      </Link>
                      <Link to={`/article/${nextArticles[i].id}-${nextArticles[i].title}`}>
                        <h5 className={classes.articleTitle}>{nextArticles[i].title}</h5>
                      </Link>
                    </div>
                  )
                }) : ""
            }
          </div>
          <ViewMore viewMore={this.displayMoreArticles}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  wordpress: state.wordpress
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeasAndInsights);