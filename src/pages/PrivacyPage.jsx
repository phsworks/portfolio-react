import React from "react";
import "./PrivacyPage.css";


const PrivacyPage = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>

      <p className="privacy-paragraph">
        Welcome to Quotely! This Privacy Policy outlines how PHS Development
        ("we," "our," or "us") collects, uses, and protects the information of
        users ("you") who interact with our mobile application, Quotely ("App").
        By using our App, you agree to the collection and use of information as
        described in this policy.
      </p>

      <h2 className="privacy-subtitle">Personal Identification Information</h2>
      <p className="privacy-paragraph">
        We may collect personal information such as your email address when you
        register or interact with certain features of the App. This helps us
        provide a better experience and improve our services. Providing this
        information is optional, and you can request deletion of your data by
        contacting us at{" "}
        <a
          href="mailto:support@phsdevelopment.com"
          className="text-blue-600 underline"
        >
          support@phsdevelopment.com
        </a>
        .
      </p>

      <h2 className="privacy-subtitle">
        Non-Personal Identification Information
      </h2>
      <p className="privacy-paragraph">
        We may collect non-personal information such as device type, operating
        system, and usage statistics to enhance the performance and
        functionality of the App. This data helps us understand how users engage
        with Quotely.
      </p>

      <h2 className="privacy-subtitle">Third-Party Services</h2>
      <p className="privacy-paragraph">
        We may use third-party services for analytics, advertising, and app
        improvements. These third parties may collect data through tracking
        technologies such as cookies or SDKs. We encourage you to review their
        privacy policies for more details.
      </p>

      <h2 className="privacy-subtitle">Data Security</h2>
      <p className="privacy-paragraph">
        Your privacy is important to us. We implement industry-standard security
        measures to protect your data. However, no method of transmission over
        the internet is 100% secure, so we cannot guarantee absolute security.
      </p>

      <h2 className="privacy-subtitle">Changes to This Privacy Policy</h2>
      <p className="privacy-paragraph">
        We may update this policy from time to time. Any changes will be
        reflected within the App. We encourage users to review the policy
        periodically.
      </p>

      <h2 className="privacy-subtitle">Contact Us</h2>
      <p className="privacy-paragraph">
        If you have any questions or concerns about this Privacy Policy, feel
        free to contact us at{" "}
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
