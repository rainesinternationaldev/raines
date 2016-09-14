import React from 'react';
import {Link} from 'react-router';
import {ViewMore} from './ViewMore';
import classes from './IdeasAndInsights.scss';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../actions/posts';
import {connect} 							from 'react-redux';
import moment from 'moment';
import utils from '../utils';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.displayMoreArticles = () => {
      console.log('fetching more articles');
      this.setState({ numShown: this.state.numShown += 8 });
      
      const url = this.props.location.pathname.slice(20);
      const topic = this.state.topics[url];
      let numPostsInCategory = this.props.wordpress.posts.filter((post) => post.categories.topic).length;

      if (this.state.numShown > numPostsInCategory) {
        this.props.actions.fetchPosts(8, numPostsInCategory, 0, topic); 
      }
    }

    this.state = {
      numShown: 4,
      topics: {
        'career-insights': 'Career Insights',
        'consulting': 'Consulting',
        'current-events': 'Current Events',
        'diversity-and-inclusion': 'Diversity & Inclusion',
        'leadership-and-governance': 'Leadership & Governance',
        'making-moves': 'Making Moves',
        'opportunities': 'Opportunities',
        'private-equity': 'Private Equity',
        'reading': 'What We\'re Reading'
      }
    }
  }

  componentDidMount() {
    const url = this.props.location.pathname.slice(20);
    const topic = this.state.topics[url];
    if (!this.props.wordpress.posts.length) {
      // fetch four latest articles in current category
      this.props.actions.fetchPosts(4, 0, 1, topic)
    } else {
      // look in existing array of articles and fetch only as needed
      let relevantArticles = this.props.wordpress.posts.filter((post) => {
        return post.categories[topic];
      });
      console.log('the relevant articles', relevantArticles)
      if (relevantArticles.length < 4) {
        console.log('fetching some more because there arent enough')
        this.props.actions.fetchPosts(4, 0, 1, topic);
      }
    }
  }

  render() {
    const url = this.props.location.pathname.slice(20);
    const topic = this.state.topics[url];
    let relevantArticles = this.props.wordpress.posts.filter((post) => post.categories[topic]);

    let nextArticles = relevantArticles.slice(4);

    return (
      <div className={`${classes.ideasAndInsights} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
        <div className={`${classes.inner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.latestResearch} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.topicTitle}>{topic}</h4>
            <hr/>
            {
              relevantArticles.length ?
              <div>
                <div className={`${classes.imageDiv} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Link to={`/article/${relevantArticles[0].ID}`}>
                    <img src={relevantArticles[0].post_thumbnail.URL}/>
                  </Link>
                </div>
                <div className={`${classes.desc} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Link to={`/article/${relevantArticles[0].ID}`}>
                    <h3 className={classes.articleTitle}>{utils.decodeEntities(relevantArticles[0].title)}</h3>
                  </Link>
                  <p className={classes.articleSummary}><span className={classes.date}>{moment(relevantArticles[0].date).format('MMMM YYYY')}</span> - {utils.decodeEntities(relevantArticles[0].excerpt)}</p>
                </div>
              </div>
              : ""
            }
          </div>

          <div className={`${classes.primaryArticles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h4 className={classes.subtitle}>MORE INSIGHTS</h4>
              <hr/>
            </div>
            {
              relevantArticles.length ?
              <div>
                <div className={`${classes.latestArticle} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Link to={`/article/${relevantArticles[1].ID}`}>
                    <img src={relevantArticles[1].post_thumbnail.URL}/>
                  </Link>
                  <Link to={`/article/${relevantArticles[1].ID}`}>
                    <h5 className={classes.articleTitle}>{utils.decodeEntities(relevantArticles[1].title)}</h5>
                  </Link>
                  <p className={classes.articleSummary}><span className={classes.date}>{moment(relevantArticles[0].date).format('MMMM YYYY')}</span> - {utils.decodeEntities(relevantArticles[1].excerpt)}</p>
                </div>
                <div className={`${classes.nextArticles} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                  <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                    <Link to={`/article/${relevantArticles[2].ID}`}>
                      <img src={relevantArticles[2].post_thumbnail.URL}/>
                    </Link>
                    <Link to={`/article/${relevantArticles[2].ID}`}>
                      <h5 className={classes.articleTitle}>{utils.decodeEntities(relevantArticles[2].title)}</h5>
                    </Link>
                    <p className={classes.articleSummary}><span className={classes.date}>{moment(relevantArticles[0].date).format('MMMM YYYY')}</span> - {utils.decodeEntities(relevantArticles[2].excerpt)}</p>
                  </div>
                  <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                    <Link to={`/article/${relevantArticles[3].ID}`}>
                      <img src={relevantArticles[3].post_thumbnail.URL}/>
                    </Link>
                    <Link to={`/article/${relevantArticles[3].ID}`}>
                      <h5 className={classes.articleTitle}>{utils.decodeEntities(relevantArticles[3].title)}</h5>
                    </Link>
                    <p className={classes.articleSummary}><span className={classes.date}>{moment(relevantArticles[0].date).format('MMMM YYYY')}</span> - {utils.decodeEntities(relevantArticles[3].excerpt)}</p>
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
                      <Link to={`/article/${nextArticles[i].ID}`}>
                        <img src={nextArticles[i].post_thumbnail.URL}/>
                      </Link>
                      <Link to={`/article/${nextArticles[i].ID}`}>
                        <h5 className={classes.articleTitle}>{utils.decodeEntities(nextArticles[i].title)}</h5>
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

export default connect(mapStateToProps, mapDispatchToProps)(Topic);