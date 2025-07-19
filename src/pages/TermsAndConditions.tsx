import React from "react";

const tncSections = [
  {
    title: "Agreement to Terms",
    content: `These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and WanderLustify (“we,” “us” or “our”), concerning your access to and use of the WanderLustify website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS and CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.

Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the Site after the date such revised Terms are posted.`
  },
  {
    title: "Intellectual Property Rights",
    content: `Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.`
  },
  {
    title: "User Representations",
    content: `By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not under the age of 13; (5) not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (6) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (7) you will not use the Site for any illegal or unauthorized purpose; and (8) your use of the Site will not violate any applicable law or regulation.`
  },
  {
    title: "User Registration",
    content: `You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.`
  },
  {
    title: "Prohibited Activities",
    content: `You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to: ... (see full text for all prohibited activities)`
  },
  {
    title: "User Generated Contributions",
    content: `The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). ... (see full text for all details)`
  },
  {
    title: "Contribution License",
    content: `By posting your Contributions to any part of the Site ... (see full text for all details)`
  },
  {
    title: "Guidelines for Reviews",
    content: `We may provide you areas on the Site to leave reviews or ratings. ... (see full text for all details)`
  },
  {
    title: "Mobile Application License",
    content: `If you access the Site via a mobile application, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the mobile application ... (see full text for all details)`
  },
  {
    title: "Social Media",
    content: `As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers ... (see full text for all details)`
  },
  {
    title: "Submissions",
    content: `You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. ... (see full text for all details)`
  },
  {
    title: "Third-Party Websites and Content",
    content: `The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). ... (see full text for all details)`
  },
  {
    title: "Advertisers",
    content: `We allow advertisers to display their advertisements and other information in certain areas of the Site, such as sidebar advertisements or banner advertisements. ... (see full text for all details)`
  },
  {
    title: "Site Management",
    content: `We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; ... (see full text for all details)`
  },
  {
    title: "Privacy Policy",
    content: `We care about data privacy and security. Please review our Privacy Policy. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. ... (see full text for all details)`
  },
  {
    title: "DMCA Notice and Policy",
    content: `Notifications ... (see full text for all details)`
  },
  {
    title: "Term and Termination",
    content: `These Terms of Use shall remain in full force and effect while you use the Site. ... (see full text for all details)`
  },
  {
    title: "Modifications and Interruptions",
    content: `We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. ... (see full text for all details)`
  },
  {
    title: "Governing Law",
    content: `These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of [name of state] ... (see full text for all details)`
  },
  {
    title: "Dispute Resolution",
    content: `Option 1: Any legal action of whatever nature brought by either you or us ... (see full text for all details)`
  },
  {
    title: "Corrections",
    content: `There may be information on the Site that contains typographical errors, inaccuracies, or omissions ... (see full text for all details)`
  },
  {
    title: "Disclaimer",
    content: `THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. ... (see full text for all details)`
  },
  {
    title: "Limitations of Liability",
    content: `IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ... (see full text for all details)`
  },
  {
    title: "Indemnification",
    content: `You agree to defend, indemnify, and hold us harmless ... (see full text for all details)`
  },
  {
    title: "User Data",
    content: `We will maintain certain data that you transmit to the Site for the purpose of managing the Site ... (see full text for all details)`
  },
  {
    title: "Electronic Communications, Transactions, and Signatures",
    content: `Visiting the Site, sending us emails, and completing online forms constitute electronic communications. ... (see full text for all details)`
  },
  {
    title: "California Users and Residents",
    content: `If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit ... (see full text for all details)`
  },
  {
    title: "Miscellaneous",
    content: `These Terms of Use and any policies or operating rules posted by us on the Site constitute the entire agreement and understanding between you and us. ... (see full text for all details)`
  },
  {
    title: "Contact Us",
    content: `In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: wanderlustify2025@gmail.com`
  }
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Mobile App Terms & Conditions</h1>
        <div className="space-y-10">
          {tncSections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-semibold text-green-700 mb-4">{section.title}</h2>
              <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 