import React from 'react';
import { graphql, navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n';

class RedirectAbout extends React.Component {
  constructor(args) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata.languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      const homeUrl = withPrefix(`/${langKey}/`);

      navigate(homeUrl);
    }
  }
  render() {
    return (
      <div> ABOUT</div>
    )
  }
}

export default RedirectAbout;

// export const pageQuery = graphql`



// `;