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
      let initialShown = this.state.numShown;
      this.setState({ numShown: this.state.numShown += 8 });
      if (this.state.numShown >= this.props.wordpress.posts.length) {
        // this.props.actions.fetchNextEightPosts(this.props.wordpress.offset);
        this.props.actions.fetchPosts(8, initialShown);
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

  componentWillReceiveProps() {
    if (!this.props.wordpress.posts.length) {
      this.props.actions.fetchPosts(4, 0, 1);
    }
  }

  render() {
    const { mediaType } = this.props;
    const baseurl = '/ideas-and-insights';
    const posts = this.props.wordpress.posts;

    let nextArticles = posts.slice(4);

    let mobile = mediaType === 'extraSmall' ? classes.mobile : '';

    return (
      <div className={`${classes.ideasAndInsights} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
        <div className={`${classes.inner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.latestResearch} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.subtitle}>LATEST PERSPECTIVE</h4>
            <hr/>
            {
              posts.length ?
              <div>
                <div className={`${classes.imageDiv} col-lg-6 col-md-6 col-sm-12 col-xs-12 ${mobile}`}>
                  <Link to={`/article/${posts[0].ID}`}>
                    <img src={posts[0].post_thumbnail.URL}/>
                  </Link>
                </div>
                <div className={`${classes.desc} col-lg-6 col-md-6 col-sm-12 col-xs-12 ${mobile}`}>
                  <Link to={`/article/${posts[0].ID}`}>
                    <h3 className={classes.articleTitle}>{utils.decodeEntities(posts[0].title)}</h3>
                  </Link>
                  <p className={classes.articleSummary}><span className={classes.date}>{moment(posts[0].date).format('MMMM YYYY')}</span> - {utils.decodeEntities(posts[0].excerpt)}</p>
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
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/private-equity`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>Private Equity
                </Link>
              </p>
              <p className={`${classes.topic} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
                <Link to={`${baseurl}/reading`}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>What We're Reading
                </Link>
              </p>
            </div>
            <h4 className={classes.subtitle}>INSIGHTS</h4>
            <hr/>
          </div>
          <div className={`${classes.primaryArticles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            {
              posts.length ?
                <div>
                  <div className={`${classes.latestArticle} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                    <Link to={`/article/${posts[1].ID}`}>
                      <img src={posts[1].post_thumbnail.URL}/>
                    </Link>
                    <Link to={`/article/${posts[1].ID}`}>
                      <h5 className={classes.articleTitle}>{utils.decodeEntities(posts[1].title)}</h5>
                    </Link>
                    <p className={classes.articleSummary}><span className={classes.date}>{moment(posts[1].date).format('MMMM YYYY')}</span> - {utils.decodeEntities(posts[1].excerpt)}</p>
                  </div>
                  <div className={`${classes.nextArticles} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                    <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                      <Link to={`/article/${posts[2].ID}`}>
                        <img className={mobile} src={posts[2].post_thumbnail.URL}/>
                      </Link>
                      <Link to={`/article/${posts[2].ID}`}>
                        <h5 className={classes.articleTitle}>{utils.decodeEntities(posts[2].title)}</h5>
                      </Link>
                      <p className={classes.articleSummary}><span className={classes.date}>{moment(posts[2].date).format('MMMM YYYY')}</span> - {utils.decodeEntities(posts[2].excerpt)}</p>
                    </div>
                    <div className={`${classes.nextArticle} col-lg-6 col-md-6 col-sm-6 col-xs-12`}>
                      <Link to={`/article/${posts[3].ID}`}>
                        <img className={mobile} src={posts[3].post_thumbnail.URL}/>
                      </Link>
                      <Link to={`/article/${posts[3].ID}`}>
                        <h5 className={classes.articleTitle}>{utils.decodeEntities(posts[3].title)}</h5>
                      </Link>
                      <p className={classes.articleSummary}><span className={classes.date}>{moment(posts[3].date).format('MMMM YYYY')}</span> - {utils.decodeEntities(posts[3].excerpt)}</p>
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
                        <img className={mobile} src={nextArticles[i].post_thumbnail.URL}/>
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
  wordpress: state.wordpress,
  mediaType: state.browser.mediaType
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeasAndInsights);