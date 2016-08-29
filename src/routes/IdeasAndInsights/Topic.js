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
      
      let topic = this.state.topics[this.props.params.topic];
      let numPostsInCategory = this.props.wordpress.posts.filter((post) => {
        return post.categories.indexOf(topic.id) > -1;
      }).length;

      if (this.state.numShown >= numPostsInCategory) {
        this.props.actions.fetchNextEightPosts(numPostsInCategory);
      }
    }

    this.state = {
      numShown: 4,
      topics: {
        'career-insights': {
          id: 875,
          name: 'Career Insights'
        },
        'consulting': {
          id: 825,
          name: 'Consulting'
        },
        'current-events': {
          id: 876,
          name: 'Current Events'
        },
        'diversity-and-inclusion': {
          id: 862,
          name: 'Diversity & Inclusion'
        },
        'leadership-and-governance': {
          id: 877,
          name: 'Leadership & Governance'
        },
        'making-moves': {
          id: 878,
          name: 'Making Moves'
        },
        'opportunities': {
          id: 879,
          name: 'Opportunities'
        }
      }
    }
  }

  componentDidMount() {
    let topic = this.state.topics[this.props.params.topic]
    if (!topic) {
      console.log('this page does not exist. redirect error')
    }

    if (!this.props.wordpress.posts.length) {
      // fetch four latest articles in current category
      this.props.actions.fetchPosts(4, 0, 1) // COMMENT OUT
      // this.props.actions.fetchPosts(4, 0, 1, topic.id) // COMMENT IN
    } else {
      // look in existing array of articles and fetch only as needed
      let relevantArticles = this.props.wordpress.posts.filter((post) => {
        return post.categories.indexOf(topic.id) > -1;
      });
      if (relevantArticles.length < 4 && relevantArticles.length > 0) {
        this.props.actions.fetchPosts(4, 0, 1, topic.id);
      }
    }
  }

  render() {
    const topic = this.state.topics[this.props.params.topic].name;
    // const relevantArticles = this.props.wordpress.posts.filter((post) => {
    //   return post.categories.indexOf(topic.id) > -1;
    // }); // COMMENT IN
    const relevantArticles = this.props.wordpress.posts // COMMENT OUT

    let parsedArticles = [];
    if (relevantArticles.length) {
      for (let i = 0; i < relevantArticles.length; i++) {
        parsedArticles.push(utils.parseArticleData(relevantArticles[i]));
      }
    }

    let nextArticles = parsedArticles.slice(4);

    return (
      <div className={`${classes.ideasAndInsights} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
        <div className={`${classes.inner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.latestResearch} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.topicTitle}>{topic}</h4>
            <hr/>
            {
              parsedArticles.length ?
              <div>
                <div className={`${classes.imageDiv} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                  <img src={parsedArticles[0].imgSrc}/>
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

          <div className={`${classes.primaryArticles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h4 className={classes.subtitle}>MORE INSIGHTS</h4>
              <hr/>
            </div>
            {
              parsedArticles.length ?
              <div>
                <div className={`${classes.latestArticle} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                  <img src={parsedArticles[1].imgSrc}/>
                  <h5 className={classes.articleTitle}>{parsedArticles[1].title}</h5>
                  <p className={classes.articleSummary}><span className={classes.date}>{parsedArticles[1].date}</span> - {parsedArticles[1].excerpt}</p>
                </div>
                <div className={`${classes.nextArticles} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                  <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                    <img src={parsedArticles[2].imgSrc}/>
                    <h5 className={classes.articleTitle}>{parsedArticles[2].title}</h5>
                    <p className={classes.articleSummary}><span className={classes.date}>{parsedArticles[2].date}</span> - {parsedArticles[2].excerpt}</p>
                  </div>
                  <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                    <img src={parsedArticles[3].imgSrc}/>
                    <h5 className={classes.articleTitle}>{parsedArticles[3].title}</h5>
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
                      <img src={nextArticles[i].imgSrc}/>
                      <h5 className={classes.articleTitle}>{nextArticles[i].title}</h5>
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