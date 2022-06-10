import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

function Meta({ meta, title }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data) => (
        <Helmet
          meta={[
            {
              name: `description`,
              content: data.site.siteMetadata.description,
            },
          ].concat(meta)}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        >
          <html lang="en" />
        </Helmet>
      )}
    />
  );
}

Meta.propTypes = {
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};

Meta.defaultProps = {
  title: `Home`,
  meta: [],
};

export default Meta;
