import React from 'react'
import SignupBar from '../../../components/SignupBar';
import splashImage from '../assets/city.png'
import classes from './HomeView.scss';
import moment from 'moment';
import {Link} from 'react-router';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../../actions/posts';
import {connect} 							from 'react-redux';
import utils from '../../utils';
import * as data from './data';



class HomeView extends React.Component {
  constructor(props) {
		super(props);
	}

  componentWillMount() {
    if (!this.props.wordpress.posts.length) {
      this.props.actions.fetchPosts(4, 0, 1);
      this.props.actions.fetchFeaturedOnHomepage('Home Page - Insight');
      this.props.actions.fetchFeaturedOnHomepage('Home Page - Perspective');
    }

    if (!this.props.wordpress.profiles.length) {
      this.props.actions.fetchProfiles();
    }
  }

  componentWillReceiveProps() {
    if (!this.props.wordpress.posts.length) {
      this.props.actions.fetchPosts(4, 0, 1);
      this.props.actions.fetchFeaturedOnHomepage('Home Page - Insight');
      this.props.actions.fetchFeaturedOnHomepage('Home Page - Perspective');
    }

    if (!this.props.wordpress.profiles.length) {
      this.props.actions.fetchProfiles();
    }
  }

  render() {
    const posts = this.props.wordpress.posts;
    let mostRecentPosts;
    if (posts.length) {
      mostRecentPosts = posts.slice(0, 3);
      mostRecentPosts.forEach(p => {
        for (let c in p.categories) {
          let theseDontCount = ['Article', 'Home Page - Insight', 'Home Page - Perspective', 'Featured Article'];
          if ( theseDontCount.indexOf(c) === -1 ) {
            p.mainCategory = c;
          }
        }
      })
    }

    const featuredArticleOnHomepage = this.props.wordpress.featuredArticleOnHomepage;
    let featuredMainArticle;
    if (featuredArticleOnHomepage.length) {
      featuredMainArticle = featuredArticleOnHomepage[0];
    }

    const featuredPerspectiveOnHomepage = this.props.wordpress.featuredPerspectiveOnHomepage;
    let featuredPerspectives;
    if (featuredPerspectiveOnHomepage.length) {
      featuredPerspectives = featuredPerspectiveOnHomepage.slice(0, 3);
    }

    const featuredProfiles = this.props.wordpress.featuredProfilesOnHomepage;


    return (
      <div className={classes.home}>
        {
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <hr className={classes.hr}/>
            <img
              className={classes.splashImage}
              src={splashImage}/>
          </div>
          <div className={`${classes.banner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <hr/>
            <div className={classes.center}>
              <h3>Well-Established. Well-Connected. Well-Informed.</h3>
            </div>
          </div>
          <div className={`${classes.signupDiv} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <SignupBar/>
          </div>
          <div className={`${classes.featured} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.featuredArticles} col-lg-9 col-md-9 col-sm-9 col-xs-12`}>
              <h4 className={classes.subtitle}>Featured Insights</h4>
              <hr />
              {
                featuredMainArticle ?
                <div>
                  <div className={`${classes.imageContainer} col-lg-8 col-md-8 col-sm-8 col-xs-12`}>
                    <Link to={`/article/${featuredMainArticle.ID}`}>
                      <img className={classes.featuredImage} src={featuredMainArticle.post_thumbnail.URL}/>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <Link to={`/article/${featuredMainArticle.ID}`}>
                      <h4 className={classes.articleTitle}>{utils.decodeEntities(featuredMainArticle.title)}</h4>
                    </Link>
                    <p className={classes.date}>{moment(featuredMainArticle.date).format('MMMM YYYY')}</p>
                    <p className={classes.excerpt}>{utils.decodeEntities(featuredMainArticle.excerpt)}</p>
                  </div>
                </div>
                : ""
              }
            </div>
            <div className={`${classes.mostRecent} col-lg-3 col-md-3 col-sm-3 col-xs-12`}>
              <h4 className={classes.subtitle}>Most Recent</h4>
              <hr/>
              {
                mostRecentPosts ?
                mostRecentPosts.map((post, i) => {
                  return (
                    <div className={classes.article} key={i}>
                      <p className={classes.topicPreview}>{post.mainCategory}</p>
                      <Link to={`/article/${post.ID}`}>
                        <h4 className={classes.articleTitle}>{utils.decodeEntities(post.title)}</h4>
                      </Link>
                    </div>
                  )
                }) : ""
              }
            </div>
          </div>
          <div className={`${classes.featuredProfiles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h4 className={classes.subtitle}>Featured Profiles</h4>
              <hr />
            </div>
            {
              featuredProfiles.length ?
              featuredProfiles.map((profile, i) => {
                return (
                  <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`} key={i}>
                    <Link to={`/profile/${profile.id}-${utils.formatTitle(profile.title)}`}>
                      <img src={profile.post_thumbnail.URL}/>
                    </Link>
                    <Link to={`/profile/${profile.id}-${utils.formatTitle(profile.title)}`}>
                      <h5 className={classes.name}>{profile.title}</h5>
                    </Link>
                    <h5 className={classes.position}>{profile.position}</h5>
                    <h5 className={classes.company}>{profile.current_firm}</h5>
                  </div>
                )
              }) : ""
            }
          </div>
          <div className={`${classes.perspectives} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.perspectivesHeader} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h4 className={classes.subtitle}>New Perspectives</h4>
              <hr/>
            </div>
            {
              featuredPerspectives ?
              featuredPerspectives.map((article, i) => {
                return (
                  <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`} key={i}>
                    <Link to={`/article/${article.ID}`}>
                      <img className={classes.perspectiveImage} src={article.post_thumbnail.URL}/>
                      <h6>{utils.decodeEntities(article.title)}</h6>
                    </Link>
                  </div>
                )
              }) : ""
            }
          </div>
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wordpress: state.wordpress
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);