import React from 'react';

function Footer(props) {
  return (
    <footer className="cr-footer" role="contentinfo">
      <div className="footer-links">
        <div className="footer-links__list">
          <h2>Speak to a nurse</h2>
          <ul>
            <li><a href="https://www.cancerresearchuk.org/about-cancer/utilities/contact-us/send-a-question/?secure=true">Ask one of our nurses a question</a></li>
            <li><a href="tel://0808 800 4040">Call 0808 800 4040</a></li>
          </ul>
        </div>
        <div className="footer-links__list">
          <h2>Quick links</h2>
          <ul className="links">
            <li className="0 first"><a href="https://www.cancerresearchuk.org/get-involved/find-a-shop">Find local shops</a></li>
            <li className="1"><a href="https://shop.cancerresearchuk.org/?utm_source=cruk_footer">Shop online</a></li>
            <li className="2"><a href="https://www.cancerresearchuk.org/about-us/contact-us">Contact us</a></li>
            <li className="3 last"><a href="https://www.cancerresearchuk.org/about-us/charity-jobs">Jobs</a></li>
          </ul>
        </div>
        <div className="footer-links__icons">
          <h2>Follow us</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/cancerresearchuk/">
                <img
                  src="https://ccp-s3.rel.cruk.org/images/social_icons/facebook_icon.svg"
                  alt="Like Cancer Research UK on Facebook"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/CR_UK">
                <img
                  src="https://ccp-s3.rel.cruk.org/images/social_icons/twitter_icon.svg"
                  alt="Follow Cancer Research UK on Twitter"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cr_uk/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://ccp-s3.rel.cruk.org/images/social_icons/instagram_icon.svg"
                  alt="Follow Cancer Research UK on Instagram"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/cancer-research-uk/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://ccp-s3.rel.cruk.org/images/social_icons/linkedin_icon.svg"
                  alt="Connect with Cancer Research UK on LinkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/cancerresearchuk" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://ccp-s3.rel.cruk.org/images/social_icons/youtube_icon.svg"
                  alt="Subscribe to Cancer Research UK on YouTube"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-links__list--horizontal">
          <ul className="links">
            <li className="0 first">
              <a href="https://www.cancerresearchuk.org/about-cancer/about-our-information">About our information</a>
            </li>
            <li className="1">
              <a href="https://www.cancerresearchuk.org/about-us/utilities/terms-and-conditions">Terms and conditions</a>
            </li>
            <li className="2">
              <a href="https://www.cancerresearchuk.org/about-us/utilities/privacy-statement">Privacy</a>
            </li>
            <li className="3">
              <a href="https://www.cancerresearchuk.org/modern-slavery-transparency-statement">Modern Slavery Statement</a>
            </li>
            <li className="4">
              <a href="https://www.cancerresearchuk.org/about-us/utilities/cookies-policy">Cookies</a>
            </li>
            <li className="5">
              <a href="https://www.cancerresearchuk.org/about-us/utilities/accessibility">Accessibility</a>
            </li>
            <li className="6 last">
              <a href="https://www.cancerresearchuk.org/sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="awards" className="footer-secondary-content">
        <a href="https://www.fundraisingregulator.org.uk/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ccp-s3.rel.cruk.org/images/fund-reg.svg"
            alt="Registered with Fundraising Regulator (logo)"
            width="165"
            height="52"
          />
        </a>
      </div>
      <div className="footer-secondary-content">
        Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666) and the Isle of Man (1103). A company limited by guarantee. Registered company in England and Wales (4325234) and the Isle of Man (5713F). Registered address: Angel Building, 407 St John Street, London EC1V 4AD.
      </div>
    </footer>
  );
}

export default Footer;
