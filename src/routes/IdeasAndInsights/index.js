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
      console.log('fetching more articles')
    }
  }

  componentWillMount() {
    if (!this.props.wordpress.posts.length) {
      this.props.actions.fetchPosts();
    }
  }

  render() {
    const baseurl = '/ideas-and-insights';
    const posts = this.props.wordpress.posts;

    let parsedArticles = [];
    if (posts.length) {
      for (let i = 0; i < 4; i++) {
        parsedArticles.push(parseArticleData(posts[i]));
      }
      console.log('the parsed articles', parsedArticles)
    }

    /**
     * Convert raw data from WP API to readable form
     */
    function parseArticleData(article) {
      let articleData = {};
      let contentStr = article.content.rendered;
      let el = el = $('<div></div>');
      el.html(contentStr);
      let featuredImg = $('img', el)[0];
      let imgSrc = featuredImg 
        ? featuredImg.src
        : "https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80";

      articleData.id = article.id;
      articleData.imgSrc = imgSrc;
      articleData.title = utils.decodeEntities(article.title.rendered);
      articleData.date = moment(article.date).format('MMMM YYYY');
      articleData.excerpt = utils.decodeEntities(article.excerpt.rendered);
      return articleData;
    }


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
          <div className={`${classes.insights} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.subtitle}>INSIGHTS</h4>
            <hr/>
            <p>Topics</p>
            <div className={classes.topicList}>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/financial-markets`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Financial Markets
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/natural-resources`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Natural Resources
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/technology-innovation`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Technology & Innovation
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/labor-markets`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Labor Markets
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/productivity`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Productivty, Competitiveness & Growth
                </Link>
              </p>
            </div>
            <hr/>
          </div>
          <div className={`${classes.primaryArticles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
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

const mapStateToProps = (state) => ({
  wordpress: state.wordpress
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeasAndInsights);