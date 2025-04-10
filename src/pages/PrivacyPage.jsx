import React from "react";
import "./PrivacyPage.css";

const PrivacyPage = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>

      <p className="privacy-paragraph">
        This Privacy Policy outlines how PHS Development
        ("we," "our," or "us") handles information related to the use of
        mobile applications. By using the App, you agree to the
        terms outlined in this policy.
      </p>

      <h2 className="privacy-subtitle">No Personal Data Collection</h2>
      <p className="privacy-paragraph">
        We do not collect or store any personally identifiable information, such
        as names, email addresses, or contact details. The app is fully
        functional without any form of registration or user authentication.
      </p>

      <h2 className="privacy-subtitle">Limited Non-Personal Data</h2>
      <p className="privacy-paragraph">
        We may collect non-personal information such as general device type,
        operating system, and anonymous usage statistics. This helps us
        understand how users interact with the app and improve performance.
      </p>

      <h2 className="privacy-subtitle">Third-Party Advertising (Google Ads)</h2>
      <p className="privacy-paragraph">
        We use Google Ads to display non-personalized advertisements. Google may
        collect limited device information (such as device ID and interaction
        data) for basic ad delivery and frequency capping. These ads are not
        based on your personal behavior or profile.
      </p>

      <h2 className="privacy-subtitle">No Tracking for Personalization</h2>
      <p className="privacy-paragraph">
        Quotely does not track users across apps or websites for advertising
        purposes. We have disabled personalized ads to ensure your data remains
        private.
      </p>

      <h2 className="privacy-subtitle">Data Security</h2>
      <p className="privacy-paragraph">
        We implement standard measures to ensure app performance and security.
        However, since we do not collect personal data, the risk of data
        exposure is minimal.
      </p>

      <h2 className="privacy-subtitle">Changes to This Privacy Policy</h2>
      <p className="privacy-paragraph">
        We may update this policy from time to time. Changes will be reflected
        within the app. We encourage users to review this page periodically.
      </p>

      <h2 className="privacy-subtitle">Contact Us</h2>
      <p className="privacy-paragraph">
        If you have any questions about this Privacy Policy, feel free to
        contact us at{" "}
        <a
          href="mailto:support@phsdevelopment.com"
          className="text-blue-600 underline"
        >
          support@phsdevelopment.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPage;
