/**
 * Digital-Marketing-SVGDC: Master Structured Curriculum Repository
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  const DATA = {
  "tracks": [
    {
      "id": "track-unit1",
      "title": "Unit 1: Foundations",
      "icon": "fa-solid fa-bullhorn"
    },
    {
      "id": "track-unit2",
      "title": "Unit 2: Web & SEO",
      "icon": "fa-solid fa-globe"
    },
    {
      "id": "track-unit3",
      "title": "Unit 3: Social & Analytics",
      "icon": "fa-solid fa-chart-pie"
    },
    {
      "id": "track-practicals",
      "title": "Practical Lab Activities",
      "icon": "fa-solid fa-flask"
    },
    {
      "id": "track-tests",
      "title": "Exams & Mock Tests",
      "icon": "fa-solid fa-graduation-cap"
    }
  ],
  "categories": [
    {
      "id": "cat-dm-unit1",
      "title": "Unit 1: Introduction to Digital Marketing",
      "track": "track-unit1",
      "icon": "fa-solid fa-bullhorn",
      "topics": [
        "dm-course-overview",
        "dm-intro-concept-components",
        "dm-benefits-digital-vs-traditional",
        "dm-platforms-overview",
        "dm-email-mobile-marketing",
        "dm-emerging-trends-ai",
        "dm-unit1-activities-rubrics"
      ]
    },
    {
      "id": "cat-dm-unit2",
      "title": "Unit 2: Website Design & SEO",
      "track": "track-unit2",
      "icon": "fa-solid fa-globe",
      "topics": [
        "web-design-fundamentals",
        "elements-good-website-responsive",
        "wordpress-architecture-content",
        "wordpress-plugins-ecosystem",
        "ui-ux-design-principles",
        "seo-fundamentals-web-search",
        "seo-keywords-mastery",
        "seo-onpage-html-tags",
        "seo-offpage-inbound-links",
        "display-ads-formats",
        "landing-pages-cro",
        "dm-unit2-activities-rubrics"
      ]
    },
    {
      "id": "cat-dm-unit3",
      "title": "Unit 3: Social Media & Analytics",
      "track": "track-unit3",
      "icon": "fa-solid fa-chart-pie",
      "topics": [
        "social-media-ecosystem",
        "smm-facebook-marketing",
        "smm-linkedin-b2b",
        "smm-blogging-medium",
        "smm-twitter-x-microblogging",
        "smm-youtube-video-marketing",
        "customer-lifecycle-funnel",
        "digital-media-measurement-metrics",
        "website-performance-analytics",
        "advertising-performance-attribution",
        "dm-unit3-activities-rubrics"
      ]
    },
    {
      "id": "cat-dm-practicals",
      "title": "Curricular Practical Activities (Labs 1 - 5)",
      "track": "track-practicals",
      "icon": "fa-solid fa-flask-vial",
      "topics": [
        "lab-01-frameworks-trends",
        "lab-02-wordpress-blog-creation",
        "lab-03-seo-website-audit",
        "lab-04-facebook-ads-campaign",
        "lab-05-ga4-setup-reporting"
      ]
    },
    {
      "id": "cat-dm-tests",
      "title": "Exams, Question Bank & Certification Tests",
      "track": "track-tests",
      "icon": "fa-solid fa-award",
      "topics": [
        "dm-comprehensive-question-bank",
        "dm-viva-practical-questions",
        "dm-mock-test-unit1",
        "dm-mock-test-unit2",
        "dm-mock-test-unit3",
        "dm-grand-mock-exam"
      ]
    }
  ],
  "topics": {
    "dm-course-overview": {
      "id": "dm-course-overview",
      "title": "Course Overview & Pedagogical Framework",
      "category": "cat-dm-unit1",
      "track": "track-unit1",
      "readTime": "5 min read",
      "lead": "Welcome to Digital Marketing (Semester-III Skill Enhancement Course w.e.f. AY 2025-26). Explore institutional course objectives, Bloom-aligned learning outcomes, credit distribution, prescribed reference textbooks, and assessment structure.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-graduation-cap\"></i> Institutional Framework &amp; Academic Syllabus</h2>\n        <p><strong>Course Title:</strong> Skill Enhancement Course (SEC): Digital Marketing<br>\n        <strong>Academic Year:</strong> w.e.f. AY 2025-26 (APSCHE Regulations)<br>\n        <strong>Target Students:</strong> Degree Undergraduates (B.Com / Multidisciplinary)<br>\n        <strong>Academic Department:</strong> Department of Physics, S.V.A. Govt. Degree College, Srikalahasti<br>\n        <strong>Instructional Hours:</strong> 2 Hours / Week &bull; <strong>Credits:</strong> 2 Credits</p>\n\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Course Objective &amp; Vision</div>\n                <div class=\"callout-text\">With the popularity of digital marketing rising steadily, the interest of individuals is also being awakened in this field. This course is aimed at creating awareness and knowledge application of various Digital Marketing tools to individuals from multidisciplinary backgrounds, preparing students for commercial careers, freelance consultancy, and digital entrepreneurship.</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Course Learning Outcomes (COs)</h2>\n        <p>Upon successful completion of the course, learners will possess verifiable cognitive and practical competencies:</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Outcome ID</th><th>Pedagogical Competency Statement</th><th>Bloom Cognitive Level</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>CO 1</strong></td><td>Know emerging trends in digital marketing and demonstrate applicable knowledge of diverse digital marketing platforms and tools.</td><td>Understand &amp; Analyze</td></tr>\n                    <tr><td><strong>CO 2</strong></td><td>Build a functional, responsive website utilizing WordPress and deploy on-page and off-page Search Engine Optimization (SEO) techniques.</td><td>Apply &amp; Create</td></tr>\n                    <tr><td><strong>CO 3</strong></td><td>Understand different types of Social Media Marketing techniques, run advertising campaigns, and measure performance via web analytics (GA4).</td><td>Apply, Evaluate &amp; Synthesize</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Curricular Modular Units Structure</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Unit</th><th>Title &amp; Instructional Scope</th><th>Hours</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Unit I</strong></td><td><strong>Introduction to Digital Marketing:</strong> Concept, Components, Need &amp; Scope, Benefits; Digital Marketing Platforms; Migrating from Traditional Channels; Digital Marketing Trends.</td><td>8 Hrs</td></tr>\n                    <tr><td><strong>Unit II</strong></td><td><strong>Website Design, WordPress &amp; SEO:</strong> Web Design Basics, Responsive Design; WordPress Content &amp; Plugins; UX/UI Design; Search Engine Optimization (Keywords, HTML Tags, Inbound Links); Display Ads; Landing Pages.</td><td>12 Hrs</td></tr>\n                    <tr><td><strong>Unit III</strong></td><td><strong>Social Media Marketing &amp; Measurement:</strong> SMM Platforms (Facebook, LinkedIn, Blogs, Twitter/X, YouTube); Customer Acquisition &amp; Retention; Performance Measurement (Media, Website &amp; Advertising).</td><td>10 Hrs</td></tr>\n                    <tr><td><strong>Practicals</strong></td><td><strong>Curricular Activities:</strong> 1. Frameworks Analysis &bull; 2. WordPress Blog Creation &bull; 3. SEO Audit &bull; 4. Facebook Ads Campaign &bull; 5. Google Analytics 4 (GA4) Reports.</td><td>Hands-On</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Authoritative Reference Books</h2>\n        <div class=\"callout-box academic\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-book\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">University Prescribed References</div>\n                <ul>\n                    <li><strong>B2B Digital Marketing</strong>, Michael Miller, 1st Edition, Pearson, 2014.</li>\n                    <li><strong>Digital Marketing</strong>, Vandana Ahuja, Oxford University Press, 2015.</li>\n                    <li><strong>Social Media Marketing</strong>, Michael R. Solomon &amp; Tracy Tuten, Pearson, 1st Edition, 2015.</li>\n                    <li><strong>E-Marketing</strong>, Judy Strauss &amp; Raymond Frost, Pearson, 2016.</li>\n                    <li><strong>Online Marketing &ndash; A Customer-Led Approach</strong>, Richard Gay, Alan Charlesworth &amp; Rita Esen, Oxford University Press, 2007.</li>\n                    <li><strong>Digital Marketing Analytics</strong>, Chuck Hemann &amp; Ken Burbary, Pearson, 2019.</li>\n                    <li><strong>The Art of Digital Marketing</strong>, Ian Dodson, Wiley, 1st Edition.</li>\n                </ul>\n            </div>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the official credit allocation and instructional duration for the APSCHE Digital Marketing Skill Enhancement Course?",
          "options": [
            "2 Credits (2 instructional hours/week)",
            "4 Credits (4 instructional hours/week)",
            "3 Credits (3 instructional hours/week)",
            "1 Credit (1 instructional hour/week)"
          ],
          "correctIndex": 0,
          "explanation": "According to the official APSCHE curriculum guidelines (w.e.f. AY 2025-26), Digital Marketing is a 2-credit Skill Enhancement Course allocated 2 hours per week."
        },
        {
          "type": "multiple-choice",
          "question": "Which of the following is NOT one of the 5 mandatory practical curricular activities prescribed in the syllabus?",
          "options": [
            "Assembly of desktop hardware motherboards and discrete RAM soldering",
            "Setting up a functional WordPress blog with pages, posts, and plugins",
            "Conducting an SEO audit of a live website or blog",
            "Running a 5-day campaign on Facebook Ads Manager from setup to optimization"
          ],
          "correctIndex": 0,
          "explanation": "Hardware assembly belongs to Computer Architecture/Hardware courses. The 5 digital marketing activities are: Framework Analysis, WordPress Blog Creation, SEO Audit, Facebook Ads Campaign, and GA4 Analytics."
        }
      ]
    },
    "dm-intro-concept-components": {
      "id": "dm-intro-concept-components",
      "title": "Concept, Components, Need & Scope of Digital Marketing",
      "category": "cat-dm-unit1",
      "track": "track-unit1",
      "readTime": "6 min read",
      "lead": "Understand what constitutes digital marketing in the 21st-century knowledge economy, unpack the POEM framework (Paid, Owned, Earned media), and examine why businesses must adopt digital transformation.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-bullhorn\"></i> Defining Digital Marketing</h2>\n        <p><strong>Digital Marketing</strong> is the strategic practice of promoting products, services, ideas, or personal brands using digital telecommunication technologies, primarily the Internet, alongside mobile devices, display advertising, and interactive electronic media.</p>\n        <p>Unlike traditional marketing that relies on passive broadcast signals (such as billboards, newspaper print, or broadcast television), digital marketing facilitates <strong>two-way, real-time, measurable communication</strong> between an organization and its target audience.</p>\n\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-quote-left\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Philip Kotler's Modern Perspective</div>\n                <div class=\"callout-text\">\"Marketing 4.0 and 5.0 combine online and offline interaction between companies and customers, merging machine intelligence with human creativity to deepen customer engagement across the entire buyer journey.\"</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>The POEM Framework: Core Media Components</h2>\n        <p>Every digital marketing strategy is constructed upon three interconnected media channels known as the <strong>POEM Model</strong> (Paid, Owned, and Earned Media):</p>\n\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Media Component</th><th>Definition &amp; Ownership</th><th>Channels &amp; Examples</th><th>Strategic Strengths &amp; Limitations</th></tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Owned Media</strong></td>\n                        <td>Digital communication channels completely controlled and maintained by the brand.</td>\n                        <td>Company Website, WordPress Blog, Mobile App, Email Newsletter List, Social Media Profiles.</td>\n                        <td><strong>Strength:</strong> Long-term asset value, zero media cost per view, complete brand control.<br><strong>Limitation:</strong> Takes substantial time to build organic authority.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Paid Media</strong></td>\n                        <td>Marketing channels where brand exposure is purchased by paying a third-party publisher or ad network.</td>\n                        <td>Google Search Ads (PPC), Facebook/Instagram Sponsored Ads, Display Banners, Influencer Sponsorships.</td>\n                        <td><strong>Strength:</strong> Instant visibility, precise demographic targeting, guaranteed traffic.<br><strong>Limitation:</strong> Traffic ceases immediately once ad budget runs out.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Earned Media</strong></td>\n                        <td>Organic customer publicity, word-of-mouth, and viral exposure generated without direct financial payment.</td>\n                        <td>Customer reviews, viral shares, mentions on forums (Reddit/Quora), unpaid press coverage, user-generated content (UGC).</td>\n                        <td><strong>Strength:</strong> Highest consumer trust and credibility.<br><strong>Limitation:</strong> Uncontrollable; can be positive or severely negative.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Need and Scope in the Modern Economy</h2>\n        <p>The rapid proliferation of smartphones, cheap 4G/5G mobile bandwidth (e.g. Jio revolution in India), and secure digital payments (UPI) has made digital marketing indispensable for every sector:</p>\n        <ul>\n            <li><strong>Ubiquitous Consumer Presence:</strong> Over 5 billion individuals worldwide and 800+ million Indians consume daily content online. If a business is absent online, it does not exist for the modern consumer.</li>\n            <li><strong>Micro-Targeting Precision:</strong> Traditional marketing sprays advertisements to broad masses. Digital marketing allows targeting users based on exact geographical coordinates (down to 1 km), age, gender, browsing interests, search intent, and purchase history.</li>\n            <li><strong>Level Playing Field for MSMEs:</strong> A small local business or college student in Srikalahasti can launch a professional e-commerce store with minimal budget and compete globally alongside multinational conglomerates.</li>\n            <li><strong>Direct Attribution &amp; Zero Guesswork:</strong> In digital marketing, analytics tools trace the exact click, ad impression, and rupee that yielded every customer purchase.</li>\n        </ul>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Under the POEM framework, which of the following is an example of 'Owned Media'?",
          "options": [
            "The official college website and self-hosted WordPress blog",
            "A sponsored Google PPC search advertisement",
            "A viral tweet written by an external customer praising a product",
            "A paid banner ad displayed on a news portal"
          ],
          "correctIndex": 0,
          "explanation": "Owned Media comprises digital assets that the organization completely owns and controls, such as its website, proprietary blog, and opt-in email list."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary operational advantage of Paid Media over Owned Media?",
          "options": [
            "Immediate traffic generation and instant hyper-targeted reach",
            "Zero financial expense and permanent brand retention",
            "Complete immunity from ad-blocking software",
            "Guaranteed positive viral word-of-mouth reviews"
          ],
          "correctIndex": 0,
          "explanation": "Paid media delivers immediate visibility and scalable reach on demand, whereas owned media requires months of consistent content creation to cultivate organic traffic."
        }
      ]
    },
    "dm-benefits-digital-vs-traditional": {
      "id": "dm-benefits-digital-vs-traditional",
      "title": "Benefits of Digital Marketing & Traditional vs. Digital Migration",
      "category": "cat-dm-unit1",
      "track": "track-unit1",
      "readTime": "6 min read",
      "lead": "Compare traditional marketing channels with digital marketing across cost, targeting, measurement, and reach. Analyze the strategic shift from the 4Ps to the 4Cs framework.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-scale-balanced\"></i> Traditional vs. Digital Marketing Comparative Matrix</h2>\n        <p>Traditional marketing relies on static physical channels (billboards, flyers, newspapers, radio, television), whereas digital marketing leverages dynamic interconnected internet protocols.</p>\n\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Comparison Factor</th><th>Traditional Marketing</th><th>Digital Marketing</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Medium &amp; Channels</strong></td><td>Print (newspapers, magazines), Billboards, Radio, TV broadcasts, Telemarketing.</td><td>Websites, Search Engines (Google), Social Media, Email, Mobile Apps, Video (YouTube).</td></tr>\n                    <tr><td><strong>Targeting Capability</strong></td><td>Broad mass targeting; high ad waste on uninterested populations.</td><td>Laser hyper-targeting by demographics, psychographics, behaviors, and real-time search intent.</td></tr>\n                    <tr><td><strong>Cost &amp; Entry Barrier</strong></td><td>Exorbitant capital required (e.g. \u20b950,000+ for local newspaper quarter-page; millions for TV slots).</td><td>Extremely low entry barrier; campaigns can start from \u20b9100/day on Meta or Google Ads.</td></tr>\n                    <tr><td><strong>Interactivity</strong></td><td>One-way broadcast communication; audience is passive.</td><td>Two-way interactive engagement; users comment, share, click, rate, and converse.</td></tr>\n                    <tr><td><strong>Measurement &amp; Tracking</strong></td><td>Imprecise estimations (TRP ratings, circulation figures); difficult ROI calculation.</td><td>Real-time quantitative tracking (Impressions, Clicks, Conversions, ROAS, Bounce Rate via GA4).</td></tr>\n                    <tr><td><strong>Campaign Flexibility</strong></td><td>Static; once printed or broadcast, errors cannot be corrected without reprinting costs.</td><td>Dynamic; ad copy, images, bids, and targeting can be edited in seconds mid-campaign.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>The Strategic Evolution: 4Ps to 4Cs</h2>\n        <p>Traditional marketing anchored on E. Jerome McCarthy's classic <strong>4Ps</strong> (Product, Price, Place, Promotion). In the digital era, Robert Lauterborn formulated the customer-centric <strong>4Cs</strong> framework:</p>\n\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Traditional 4Ps (Seller Focus)</th><th>Digital 4Cs (Customer Focus)</th><th>Strategic Digital Transformation</th></tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Product</strong></td>\n                        <td><strong>Customer Solution / Value</strong></td>\n                        <td>Instead of forcing a rigid product onto buyers, businesses build customized solutions that resolve acute customer pain points.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Price</strong></td>\n                        <td><strong>Cost to Satisfy</strong></td>\n                        <td>Encompasses not merely monetary retail cost, but the customer's total expenditure of time, effort, delivery charges, and cognitive friction.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Place</strong></td>\n                        <td><strong>Convenience to Buy</strong></td>\n                        <td>Physical retail shelves are replaced by omnichannel convenience: buy on mobile app, pay via UPI, get rapid doorstep delivery.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Promotion</strong></td>\n                        <td><strong>Communication / Conversation</strong></td>\n                        <td>One-way promotional shouting is replaced by an ongoing interactive dialogue through social media, email nurturing, and customer support chats.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Strategic Migration: Navigating the Shift</h2>\n        <p>Organizations transitioning from legacy traditional media to digital channels must implement a phased migration strategy:</p>\n        <ul>\n            <li><strong>Hybrid Omnichannel Approach:</strong> Traditional ads (e.g. newspaper ads or hoardings) now include QR codes, customized URLs, and hashtags to seamlessly bridge physical audiences into digital conversion funnels.</li>\n            <li><strong>Data Infrastructure Modernization:</strong> Transitioning from disconnected paper records to centralized CRM (Customer Relationship Management) platforms like HubSpot, Zoho, or Salesforce.</li>\n            <li><strong>Culture &amp; Agility:</strong> Shifting marketing departments from slow annual campaign planning cycles to rapid weekly A/B testing, data-driven optimization, and digital performance audits.</li>\n        </ul>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In Lauterborn's 4Cs model, which customer-centric concept replaces traditional 'Place'?",
          "options": [
            "Convenience",
            "Communication",
            "Cost to satisfy",
            "Customer solution"
          ],
          "correctIndex": 0,
          "explanation": "In the 4Cs framework, 'Place' is replaced by 'Convenience', emphasizing frictionless omnichannel purchasing access."
        },
        {
          "type": "multiple-choice",
          "question": "Why is John Wanamaker's famous advertising dilemma largely resolved by digital marketing?",
          "options": [
            "Digital analytics platforms track user clicks, conversions, and ad attribution in real time",
            "Traditional print newspapers have eliminated advertising fees",
            "Digital ads are guaranteed to convert 100% of all viewers",
            "Television broadcasters now offer free advertising slots to college graduates"
          ],
          "correctIndex": 0,
          "explanation": "Digital marketing provides exact attribution, tracking every impression, click, and transaction via tracking pixels and Google Analytics."
        }
      ]
    },
    "dm-platforms-overview": {
      "id": "dm-platforms-overview",
      "title": "Digital Marketing Platforms Overview (The 9 Core Pillars)",
      "category": "cat-dm-unit1",
      "track": "track-unit1",
      "readTime": "7 min read",
      "lead": "Examine the 9 distinct digital marketing platforms prescribed in the APSCHE syllabus: Website Marketing, SEM, Online Advertising, Email, Blogs, SMM, Audio/Video, Online PR, and Mobile Marketing.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-cubes\"></i> The 9 Core Digital Marketing Platforms</h2>\n        <p>A comprehensive digital marketing strategy orchestrates 9 specialized platforms, each fulfilling a unique role across the customer acquisition lifecycle:</p>\n\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>#</th><th>Platform</th><th>Operational Role</th><th>Core Technologies &amp; Tactics</th></tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>1</strong></td>\n                        <td><strong>Website Marketing</strong></td>\n                        <td>The central digital hub and conversion anchor for all traffic.</td>\n                        <td>WordPress CMS, responsive landing pages, Core Web Vitals, conversion forms, payment gateways.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>2</strong></td>\n                        <td><strong>Search Engine Marketing (SEM)</strong></td>\n                        <td>Capturing active commercial purchase intent on search engines.</td>\n                        <td>Google Ads, Pay-Per-Click (PPC), keyword auction bidding, quality score optimization, ad extensions.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>3</strong></td>\n                        <td><strong>Online Advertising (Display)</strong></td>\n                        <td>Visual brand awareness and retargeting across the web.</td>\n                        <td>Google Display Network (GDN), banner ads, interstitial creatives, programmatic RTB (real-time bidding).</td>\n                    </tr>\n                    <tr>\n                        <td><strong>4</strong></td>\n                        <td><strong>Email Marketing</strong></td>\n                        <td>High-ROI direct customer nurturing and retention.</td>\n                        <td>Drip automation workflows, newsletter broadcasts, list segmentation, Mailchimp/Sendinblue, CAN-SPAM.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>5</strong></td>\n                        <td><strong>Blog Marketing</strong></td>\n                        <td>Organic top-of-funnel inbound content authority.</td>\n                        <td>Long-form educational tutorials, thought leadership, internal linking architecture, keyword-targeted articles.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>6</strong></td>\n                        <td><strong>Social Media Marketing (SMM)</strong></td>\n                        <td>Community engagement, virality, and brand affinity.</td>\n                        <td>Meta Business Suite (Facebook, Instagram), LinkedIn B2B networking, X/Twitter real-time PR, TikTok/Reels.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>7</strong></td>\n                        <td><strong>Audio, Video &amp; Interactive</strong></td>\n                        <td>Immersive, high-retention multimedia storytelling.</td>\n                        <td>YouTube video optimization, Spotify podcasts, webinars, interactive polls, ROI calculators, AR lenses.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>8</strong></td>\n                        <td><strong>Online Public Relations (Online PR)</strong></td>\n                        <td>Reputation building and authoritative digital mentions.</td>\n                        <td>Digital press releases, influencer relations, guest column contributions, crisis reputation management.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>9</strong></td>\n                        <td><strong>Mobile Marketing</strong></td>\n                        <td>Personalized, location-aware handheld engagement.</td>\n                        <td>SMS marketing, WhatsApp Business API, push notifications, App Store Optimization (ASO), geofencing.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Multi-Platform Orchestration Synergy</h2>\n        <p>Successful marketing does not isolate these platforms in silos. They operate as an integrated ecosystem:</p>\n        <div class=\"callout-box academic\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-diagram-project\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">The Integrated Omnichannel Journey</div>\n                <p>1. User discovers an educational tutorial on your <strong>Blog</strong> via <strong>SEO</strong>.<br>\n                2. User downloads a free syllabus guide, entering your <strong>Email Marketing</strong> nurturing sequence.<br>\n                3. While browsing social networks, user is served a retargeting ad on <strong>Facebook (SMM / Paid Ads)</strong>.<br>\n                4. User receives an automated <strong>WhatsApp notification (Mobile Marketing)</strong> offering a direct consultation.<br>\n                5. User finalizes enrolment on your secure <strong>WordPress Website</strong>.</p>\n            </div>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which digital marketing platform captures users at the highest point of purchase intent when they actively search for a solution?",
          "options": [
            "Search Engine Marketing (SEM / Google Ads)",
            "Display Banner Advertising",
            "Audio Podcast Advertising",
            "Print Newspaper Classifieds"
          ],
          "correctIndex": 0,
          "explanation": "SEM captures pull-intent; users specifically type their immediate need into a search bar (e.g. 'best degree college near me')."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary function of Online Public Relations (Online PR) in a digital marketing strategy?",
          "options": [
            "Managing third-party media mentions, brand reputation, and authoritative digital press releases",
            "Creating physical plastic banner hoardings for highway flyovers",
            "Sending unsolicited bulk spam emails to scraped address lists",
            "Designing offline print brochures for postal delivery"
          ],
          "correctIndex": 0,
          "explanation": "Online PR focuses on securing reputable digital media coverage, managing public perception, building backlink authority, and addressing brand PR issues."
        }
      ]
    },
    "dm-email-mobile-marketing": {
      "id": "dm-email-mobile-marketing",
      "title": "In-Depth Email Marketing & Mobile Marketing Strategies",
      "category": "cat-dm-unit1",
      "track": "track-unit1",
      "readTime": "6 min read",
      "lead": "Explore two of the highest ROI direct channels: Email Marketing (drip campaigns, list hygiene, deliverability) and Mobile Marketing (WhatsApp Business API, SMS, Geofencing, ASO).",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-envelope-open-text\"></i> Email Marketing Architecture &amp; Lifecycle</h2>\n        <p>Industry benchmarks consistently demonstrate that <strong>Email Marketing delivers an average ROI of \u20b936 to \u20b942 for every \u20b91 invested</strong>. Because email reaches an owned list of verified subscribers, it remains immune to algorithmic changes on social media platforms.</p>\n\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Email Campaign Stage</th><th>Core Mechanism</th><th>Strategic Objective &amp; Best Practice</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>1. Opt-In &amp; List Building</strong></td><td>Lead magnets (ebooks, cheat sheets, discount codes) on landing pages.</td><td>Never buy email lists. Use Double Opt-In (DOI) to ensure legal compliance and verified user consent.</td></tr>\n                    <tr><td><strong>2. Segmentation</strong></td><td>Dividing contacts based on demographic, behavioral, or lifecycle stage.</td><td>Personalize content; e.g. send scholarship emails to students and placement reports to recruiters.</td></tr>\n                    <tr><td><strong>3. Drip Automation</strong></td><td>Triggered sequence of automated emails based on user actions.</td><td>Welcome sequence (Days 1, 3, 5), abandoned cart sequences, re-engagement campaigns.</td></tr>\n                    <tr><td><strong>4. Deliverability &amp; Hygiene</strong></td><td>SPF, DKIM, and DMARC DNS records; regular list cleaning.</td><td>Prune inactive subscribers every 90 days to maintain high domain sender reputation and avoid spam filters.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Mobile Marketing: WhatsApp Business, SMS &amp; Geofencing</h2>\n        <p>With mobile phones accounting for over 70% of global web traffic, handheld marketing strategies are paramount:</p>\n        <ul>\n            <li><strong>WhatsApp Business API:</strong> Boasts an astounding <strong>98% open rate</strong> and 45-60% click-through rate, outperforming traditional email by orders of magnitude in emerging markets like India. Used for transaction receipts, admission confirmations, and automated AI chatbots.</li>\n            <li><strong>Transactional vs. Promotional SMS:</strong>\n                <ul>\n                    <li><em>Transactional SMS:</em> OTP codes, order dispatch alerts; delivered 24/7 even to Do-Not-Disturb (DND) registered numbers.</li>\n                    <li><em>Promotional SMS:</em> Marketing offers, discounts; strictly regulated by telecom authorities (TRAI) and restricted to designated daytime hours.</li>\n                </ul>\n            </li>\n            <li><strong>Location-Based Geofencing:</strong> Setting up a virtual GPS perimeter around a physical location (e.g. a 2 km boundary around a competitive exam centre) to trigger localized push notifications to users entering the boundary.</li>\n            <li><strong>App Store Optimization (ASO):</strong> Optimizing title, keywords, screenshots, and ratings for mobile apps on Google Play Store and Apple App Store to maximize organic installation volume.</li>\n        </ul>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the typical industry-reported open rate for messages delivered via WhatsApp Business compared to traditional email?",
          "options": [
            "WhatsApp: ~98% open rate vs Email: ~20-25%",
            "WhatsApp: ~10% open rate vs Email: ~90%",
            "Both channels have identical open rates of 50%",
            "WhatsApp messages cannot be opened on mobile smartphones"
          ],
          "correctIndex": 0,
          "explanation": "WhatsApp Business messages boast open rates near 98%, whereas average industry email campaigns experience open rates between 18% and 25%."
        },
        {
          "type": "multiple-choice",
          "question": "Which DNS authentication protocols are essential to prevent digital marketing emails from landing in spam folders?",
          "options": [
            "SPF (Sender Policy Framework), DKIM, and DMARC",
            "HTML5, CSS3, and JavaScript",
            "HTTP and FTP only",
            "USB, HDMI, and VGA"
          ],
          "correctIndex": 0,
          "explanation": "SPF, DKIM, and DMARC are email authentication protocols that verify domain ownership and sender identity to prevent spoofing and spam classification."
        }
      ]
    },
    "dm-emerging-trends-ai": {
      "id": "dm-emerging-trends-ai",
      "title": "Digital Marketing Trends: AI, Voice Search & Omnichannel",
      "category": "cat-dm-unit1",
      "track": "track-unit1",
      "readTime": "6 min read",
      "lead": "Survey the technological frontier transforming marketing: Generative AI, Voice Search Optimization (VSO), Conversational Bots, Programmatic Ad Auctions, and Privacy-First Cookie Deprecation.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-wand-magic-sparkles\"></i> The AI Revolution in Digital Marketing</h2>\n        <p>Artificial Intelligence (AI) and Machine Learning (ML) have shifted from speculative concepts to the fundamental operational engine of digital marketing:</p>\n\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Emerging Trend</th><th>Technological Mechanism</th><th>Real-World Marketing Application</th></tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Generative AI &amp; LLMs</strong></td>\n                        <td>Large Language Models and diffusion image generators (GPT-4, Gemini, Midjourney).</td>\n                        <td>Generating personalized ad copy variations, creative banners, automated email drafts, and customer FAQs at instant scale.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Predictive Customer Analytics</strong></td>\n                        <td>Machine learning models analyzing historical transaction and browsing telemetry.</td>\n                        <td>Predicting customer churn before it occurs; calculating Customer Lifetime Value (CLV); recommending relevant cross-sell items.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Voice Search Optimization (VSO)</strong></td>\n                        <td>Natural Language Processing (NLP) powering Siri, Alexa, and Google Assistant.</td>\n                        <td>Optimizing for conversational, long-tail query phrases (e.g. <em>\"Where can I learn digital marketing near Srikalahasti?\"</em>) and FAQ schema markup.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Short-Form Video Dominance</strong></td>\n                        <td>Algorithmic vertical video feeds (YouTube Shorts, Instagram Reels).</td>\n                        <td>Hooking consumer attention within the first 3 seconds; micro-influencer product demonstrations; viral storytelling.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Privacy-First &amp; Cookieless Future</strong></td>\n                        <td>Deprecation of third-party cookies; GDPR and India's DPDP Act 2023.</td>\n                        <td>Shift toward collecting robust First-Party Data (direct email signups, phone numbers) and utilizing server-side tracking (Google Tag Manager).</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Programmatic Advertising &amp; Real-Time Bidding (RTB)</h2>\n        <p>Historically, purchasing website ad space required human negotiations, media buyers, and paper contracts. Today, over 85% of display advertising is <strong>Programmatic</strong>:</p>\n        <div class=\"callout-box academic\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-bolt\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">The 100-Millisecond Real-Time Ad Auction</div>\n                <p>When a student loads a news webpage, the publisher's site sends an auction request to an Ad Exchange. In under 100 milliseconds, automated algorithms calculate the visitor's profile, multiple advertisers place programmatic bids, the highest bid wins, and the tailored ad creative is rendered before the webpage completes loading.</p>\n            </div>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "How does Voice Search Optimization (VSO) differ fundamentally from traditional desktop keyword search?",
          "options": [
            "Voice searches use natural conversational sentences and question phrases rather than short disjointed keywords",
            "Voice searches require users to type binary code into microphones",
            "Voice searches cannot be indexed by Google or Bing search engines",
            "Voice search only works on offline landline telephone instruments"
          ],
          "correctIndex": 0,
          "explanation": "Voice searches are conversational, longer, and question-oriented (e.g., 'What are the admission dates for SVA college?') compared to short typed keywords ('SVA college admission')."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary driver behind the modern marketing shift toward 'First-Party Data'?",
          "options": [
            "Deprecation of third-party tracking cookies and stringent privacy regulations (GDPR, DPDP Act)",
            "Digital marketing databases have run out of hard drive storage capacity",
            "Governments have completely banned all commercial advertising on websites",
            "Internet browsers no longer allow images to be displayed on web pages"
          ],
          "correctIndex": 0,
          "explanation": "With third-party cookie deprecation and privacy laws, brands must directly collect and nurture first-party data (with user consent) to remain competitive."
        }
      ]
    },
    "dm-unit1-activities-rubrics": {
      "id": "dm-unit1-activities-rubrics",
      "title": "Unit 1: Review, Activities & Assessment Rubrics",
      "category": "cat-dm-unit1",
      "track": "track-unit1",
      "readTime": "5 min read",
      "lead": "Consolidate Unit 1 knowledge with revision summaries, practical classroom assignment prompts, real-world case analysis, and university assessment rubrics.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-clipboard-check\"></i> Unit 1 Comprehensive Summary &amp; Key Takeaways</h2>\n        <ul>\n            <li><strong>Digital Marketing Definition:</strong> Promotes brands using digital technologies, delivering two-way interactivity, micro-targeting, and real-time measurable attribution.</li>\n            <li><strong>POEM Triad:</strong> Paid Media (instant rented traffic), Owned Media (long-term digital assets), and Earned Media (organic customer advocacy).</li>\n            <li><strong>4Ps to 4Cs:</strong> Product &rarr; Customer Solution; Price &rarr; Cost to Satisfy; Place &rarr; Convenience; Promotion &rarr; Two-way Communication.</li>\n            <li><strong>The 9 Pillars:</strong> Website, SEM, Display Ads, Email, Blog, SMM, Audio/Video, Online PR, and Mobile Marketing.</li>\n            <li><strong>Modern Drivers:</strong> Generative AI, Voice Search, WhatsApp Business automation, and First-Party data privacy frameworks.</li>\n        </ul>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Unit 1 Curricular Activities &amp; Classroom Tasks</h2>\n        <div class=\"callout-box success\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-list-check\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Curricular Task 1: Traditional vs. Digital Migration Case Analysis</div>\n                <p><strong>Assignment Brief:</strong> Select a local enterprise in Srikalahasti or Tirupati (e.g. a traditional handloom store, a private coaching academy, or an organic agri-business). Prepare a 3-page structured report analyzing:</p>\n                <ol>\n                    <li>Their current marketing mix (Traditional vs Digital channels).</li>\n                    <li>Identification of their POEM media assets.</li>\n                    <li>A strategic proposal to migrate 40% of their print marketing budget into Google Search Ads and WhatsApp Business API.</li>\n                    <li>Projected ROI improvements and risk mitigation steps.</li>\n                </ol>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Academic Assessment Rubric (10 Marks)</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Criterion</th><th>Exemplary (9-10 Marks)</th><th>Proficient (6-8 Marks)</th><th>Developing (0-5 Marks)</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Conceptual Rigor</strong></td><td>Flawless distinction between POEM components and 4Ps vs 4Cs frameworks with clear terminology.</td><td>Adequate understanding with minor conflation of paid and earned media.</td><td>Weak conceptual definitions; lacks academic depth.</td></tr>\n                    <tr><td><strong>Practical Relevance</strong></td><td>Realistic local case study with concrete budget allocations and channel mapping.</td><td>Identifies a business but budget allocations are generalized.</td><td>Hypothetical scenario without local market relevance.</td></tr>\n                    <tr><td><strong>Analytical Depth</strong></td><td>Accurate estimation of ROI, conversion funnels, and measurable KPIs.</td><td>Mentions KPIs but omits numerical calculations.</td><td>No metrics or quantitative justification provided.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which of the following strategic recommendations represents a successful traditional-to-digital migration for a local degree college?",
          "options": [
            "Replacing expensive regional print flyers with an SEO-optimized WordPress portal and targeted Meta admission ads",
            "Stopping all marketing activities and relying purely on word-of-mouth without a website",
            "Purchasing 10,000 spam phone numbers to conduct midnight robocalls",
            "Printing more paper brochures and distributing them on street corners"
          ],
          "correctIndex": 0,
          "explanation": "Replacing expensive, unmeasurable print flyers with an SEO-optimized web portal and targeted Meta ads creates a cost-effective, measurable digital funnel."
        }
      ]
    },
    "web-design-fundamentals": {
      "id": "web-design-fundamentals",
      "title": "Basics of Website Design & Development Architecture",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Understand how the World Wide Web operates: Client-Server architecture, Domain Name Systems (DNS), Web Hosting tiers, Frontend vs Backend stacks, and CMS platforms.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-network-wired\"></i> How the Web Operates: Client-Server Architecture</h2>\n        <p>A website is an interconnected collection of digital files (HTML, CSS, JavaScript, media assets, databases) hosted on a publicly accessible server and delivered over HTTP/HTTPS protocols.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Component</th><th>Technical Function</th><th>Analogy &amp; Example</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Domain Name</strong></td><td>Human-friendly address registered via ICANN accredited registrars.</td><td>Like a telephone contact name (e.g. <code>svagdc.edu.in</code>).</td></tr>\n                    <tr><td><strong>DNS (Domain Name System)</strong></td><td>Translates domain names into machine-routable numerical IP addresses.</td><td>The global phonebook mapping <code>svagdc.edu.in</code> &rarr; <code>104.21.48.12</code>.</td></tr>\n                    <tr><td><strong>Web Hosting Server</strong></td><td>High-uptime server computers storing website code, images, and databases.</td><td>The physical land or commercial plot where the store is built (Shared, VPS, Cloud).</td></tr>\n                    <tr><td><strong>Web Browser (Client)</strong></td><td>Software rendering HTML/CSS code into an interactive visual page.</td><td>Chrome, Firefox, Safari, Edge executing frontend code.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Frontend vs. Backend Development &amp; CMS Systems</h2>\n        <p>Modern web engineering divides into two fundamental domains:</p>\n        <ul>\n            <li><strong>Frontend (Client-Side):</strong> Everything the visitor sees and interacts with directly. Built using <strong>HTML5</strong> (structural skeleton), <strong>CSS3</strong> (styling, typography, visual layouts), and <strong>JavaScript</strong> (dynamic interactivity, animations).</li>\n            <li><strong>Backend (Server-Side):</strong> The server engine processing logic, user authentication, and data transactions. Powered by languages like PHP, Python, Node.js, and databases like MySQL or PostgreSQL.</li>\n            <li><strong>Content Management Systems (CMS):</strong> Platforms that abstract coding so non-programmers can publish, edit, and manage dynamic websites. <strong>WordPress powers over 43% of all websites on the internet</strong>, far outstripping competitors like Drupal, Joomla, Wix, or Shopify.</li>\n        </ul>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary role of the Domain Name System (DNS) in web infrastructure?",
          "options": [
            "Translating human-readable domain names (e.g. svagdc.edu.in) into machine-routable IP addresses",
            "Encrypting credit card transactions during checkout",
            "Writing HTML code for web pages automatically",
            "Compressing video files for YouTube upload"
          ],
          "correctIndex": 0,
          "explanation": "DNS acts as the Internet's address book, translating domain names like svagdc.edu.in into numeric IP addresses that servers understand."
        },
        {
          "type": "multiple-choice",
          "question": "Approximately what percentage of all websites globally are powered by the WordPress CMS platform?",
          "options": [
            "Over 40% (around 43% of the top 10 million websites)",
            "Less than 2%",
            "Exactly 99.9%",
            "WordPress was discontinued in 2010"
          ],
          "correctIndex": 0,
          "explanation": "W3Techs data demonstrates that WordPress powers over 43% of all websites on the World Wide Web, making it the world's most dominant CMS."
        }
      ]
    },
    "elements-good-website-responsive": {
      "id": "elements-good-website-responsive",
      "title": "Elements of a Good Website & Responsive Web Design",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Master the essential elements of an effective commercial website: visual hierarchy, navigation, conversion triggers, Core Web Vitals, and mobile-first responsive design.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-laptop-code\"></i> Anatomy &amp; Elements of a High-Converting Website</h2>\n        <p>A website is not merely digital art; it is a 24/7 conversion engine. Outstanding websites balance visual appeal, usability, and speed:</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Website Element</th><th>Design Best Practice</th><th>Negative Anti-Pattern (To Avoid)</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Header &amp; Navigation</strong></td><td>Clean logo, sticky header, intuitive primary menu (max 5-7 items), prominent CTA button.</td><td>Cluttered dropdowns with 30 items; hidden contact info.</td></tr>\n                    <tr><td><strong>Hero Section</strong></td><td>Clear value proposition above the fold, strong headline, supporting subhead, high-contrast CTA.</td><td>Vague corporate slogans without explaining what the company actually offers.</td></tr>\n                    <tr><td><strong>Visual Hierarchy</strong></td><td>F-pattern and Z-pattern layout guiding eye movement from critical headline to conversion button.</td><td>Walls of uninterrupted small text without subheadings or visual breaks.</td></tr>\n                    <tr><td><strong>Social Proof &amp; Trust</strong></td><td>Accreditation badges, student testimonials, star ratings, verifiable client logos.</td><td>Anonymous claims without authentic names, photos, or verification.</td></tr>\n                    <tr><td><strong>Page Loading Speed</strong></td><td>Under 2.5 seconds LCP (Largest Contentful Paint); optimized WebP images, browser caching.</td><td>Bloated 10MB uncompressed PNG images stalling mobile rendering.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Responsive Web Design (RWD) &amp; Mobile-First Indexing</h2>\n        <p>In 2019, Google officially transitioned to <strong>Mobile-First Indexing</strong>: Googlebot primarily crawls and ranks web pages using their mobile smartphone viewport version.</p>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-mobile-screen\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">The Three Pillars of Responsive Web Design (Ethan Marcotte)</div>\n                <ul>\n                    <li><strong>1. Fluid Grid Layouts:</strong> Page dimensions use proportional units (<code>%</code>, <code>vw</code>, <code>rem</code>) instead of rigid static pixels (<code>px</code>).</li>\n                    <li><strong>2. Flexible Media:</strong> Images and videos scale dynamically with CSS (<code>max-width: 100%; height: auto;</code>) preventing layout overflow.</li>\n                    <li><strong>3. CSS3 Media Queries:</strong> Applying conditional stylesheets based on device screen widths (e.g. <code>@media (max-width: 768px)</code> for mobile and tablets).</li>\n                </ul>\n            </div>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What does Google's 'Mobile-First Indexing' mean for website designers and digital marketers?",
          "options": [
            "Googlebot primarily crawls, indexes, and ranks web pages based on their mobile rendering rather than desktop",
            "Websites can only be viewed on mobile phones and are blocked on desktop computers",
            "Mobile phone manufacturers must pay Google a royalty fee per website",
            "Desktop websites are completely removed from Google search results"
          ],
          "correctIndex": 0,
          "explanation": "Mobile-first indexing means Google predominantly uses the mobile version of a webpage for indexing and ranking determination."
        }
      ]
    },
    "wordpress-architecture-content": {
      "id": "wordpress-architecture-content",
      "title": "WordPress Architecture: Posts vs. Pages & Block Management",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Explore WordPress core architecture: Admin Dashboard navigation, the fundamental distinction between Posts and Pages, Gutenberg block editing, and media management.",
      "toolType": "wordpress",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-brands fa-wordpress\"></i> WordPress Core Architecture</h2>\n        <p>WordPress is an open-source CMS written in PHP and paired with a MySQL/MariaDB database. The admin interface allows instant content publishing without editing raw server code.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Feature</th><th>Posts (Blog Articles / News)</th><th>Pages (Static Content)</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Chronology</strong></td><td>Time-stamped; displayed in reverse chronological order.</td><td>Timeless / evergreen content; no mandatory publishing date displayed.</td></tr>\n                    <tr><td><strong>Taxonomy</strong></td><td>Organized via <strong>Categories</strong> (broad topics) and <strong>Tags</strong> (micro-keywords).</td><td>Hierarchical organization using Parent and Child pages (e.g. Academics &rarr; Physics).</td></tr>\n                    <tr><td><strong>Author &amp; Comments</strong></td><td>Author bio and interactive comment section enabled by default.</td><td>Comments usually disabled; authored by the organization.</td></tr>\n                    <tr><td><strong>Syndication</strong></td><td>Broadcast to readers via RSS Feeds and social syndication.</td><td>Excluded from RSS feed updates.</td></tr>\n                    <tr><td><strong>Use Cases</strong></td><td>\"Digital Marketing Trends 2026\", \"Guest Lecture on SEO\".</td><td>\"About Us\", \"Contact Us\", \"Privacy Policy\", \"Syllabus\".</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-cube\"></i> Modern Gutenberg Block Editor</h2>\n        <p>WordPress uses the Gutenberg modular block editor. Content is assembled like building blocks: Heading, Paragraph, Image, Cover, Columns, Table, and Buttons blocks. Each block carries its own styling, typography, and responsive controls.</p>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which of the following content assets should be created as a WordPress 'Page' rather than a 'Post'?",
          "options": [
            "The college 'About Us' and 'Contact Us' information page",
            "A weekly news update regarding campus sports day",
            "A trending editorial article on emerging AI tools",
            "A daily weather announcement"
          ],
          "correctIndex": 0,
          "explanation": "Static, timeless organizational content like 'About Us' or 'Contact Us' should always be built as Pages, whereas time-sensitive articles belong in Posts."
        }
      ]
    },
    "wordpress-plugins-ecosystem": {
      "id": "wordpress-plugins-ecosystem",
      "title": "WordPress Plugins: Installation, Activation & Functionality",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Understand how plugins extend WordPress functionality without modifying core source code. Deep dive into essential plugins for SEO, Lead Generation, Security, and Caching.",
      "toolType": "wordpress",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-plug\"></i> What are WordPress Plugins?</h2>\n        <p>A <strong>WordPress Plugin</strong> is a modular package of PHP code, CSS, and JavaScript functions that hooks into WordPress core actions and filters to add new capabilities, integrations, or security layers.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Plugin Category</th><th>Industry Standard Plugins</th><th>Critical Functionality</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Search Engine Optimization</strong></td><td><strong>Yoast SEO / Rank Math</strong></td><td>Generates XML sitemaps, manages meta title/description tags, implements Schema structured data, audits keyword density.</td></tr>\n                    <tr><td><strong>Lead Capture &amp; Forms</strong></td><td><strong>WPForms / Gravity Forms</strong></td><td>Drag-and-drop form creation for student inquiries, contact forms, appointment booking, and surveys.</td></tr>\n                    <tr><td><strong>Website Security</strong></td><td><strong>Wordfence / iThemes Security</strong></td><td>Endpoint Web Application Firewall (WAF), malware scanning, two-factor authentication, brute force shielding.</td></tr>\n                    <tr><td><strong>Speed &amp; Performance</strong></td><td><strong>WP Super Cache / WP Rocket</strong></td><td>HTML page caching, Gzip compression, database cleanup, WebP image lazy loading to optimize Core Web Vitals.</td></tr>\n                    <tr><td><strong>Visual Page Builders</strong></td><td><strong>Elementor / Beaver Builder</strong></td><td>Visual drag-and-drop frontend design with responsive column grids and pre-styled animation widgets.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Plugin Lifecycle &amp; Best Practices</h2>\n        <ul>\n            <li><strong>Installation Methods:</strong> Through the official WordPress repository (Dashboard &rarr; Plugins &rarr; Add New) or by uploading custom <code>.zip</code> packages.</li>\n            <li><strong>Security Vulnerability Management:</strong> Outdated plugins represent over 90% of WordPress security breaches. Plugins must be kept updated to patch zero-day vulnerabilities.</li>\n            <li><strong>Plugin Overhead Caution:</strong> Installing 40+ unoptimized plugins causes database bloat, conflicting scripts, and severe server latency. Aim for lean, high-reputation plugins.</li>\n        </ul>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which of the following plugins is primarily used to generate XML sitemaps and optimize meta tags for search engines?",
          "options": [
            "Yoast SEO / Rank Math",
            "WooCommerce",
            "Contact Form 7",
            "UpdraftPlus Backup"
          ],
          "correctIndex": 0,
          "explanation": "Yoast SEO and Rank Math are the premier plugins for managing on-page search engine optimization and automated XML sitemaps."
        }
      ]
    },
    "ui-ux-design-principles": {
      "id": "ui-ux-design-principles",
      "title": "User Experience (UX) & User Interface (UI) Design Principles",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Understand the symbiotic relationship between UX and UI design: user personas, wireframing, Nielsen's 10 usability heuristics, color psychology, and conversion-centered design.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-palette\"></i> UI vs. UX: The Critical Distinction</h2>\n        <p>While often used interchangeably, <strong>UI</strong> and <strong>UX</strong> represent distinct phases of product design:</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Dimension</th><th>UX Design (User Experience)</th><th>UI Design (User Interface)</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Focus</strong></td><td>How the website <em>works</em>, feels, and flows logically.</td><td>How the website <em>looks</em> visually and aesthetically.</td></tr>\n                    <tr><td><strong>Core Deliverables</strong></td><td>User research, journey maps, information architecture, low-fidelity wireframes.</td><td>Color palettes, typography hierarchies, button styling, icon sets, high-fidelity mockups.</td></tr>\n                    <tr><td><strong>Objective</strong></td><td>Eliminating friction; ensuring the user accomplishes their task effortlessly.</td><td>Creating emotional delight, visual brand cohesion, and aesthetic appeal.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Jakob Nielsen's Core Usability Heuristics</h2>\n        <p>In digital design, Jakob Nielsen's 10 Usability Heuristics serve as the universal benchmark for website UX:</p>\n        <ul>\n            <li><strong>Visibility of System Status:</strong> Keep users informed through timely feedback (e.g. progress bars, loading spinners, form submission confirmation alerts).</li>\n            <li><strong>Match Between System and Real World:</strong> Speak the user's language with familiar concepts rather than internal bureaucratic or technical jargon.</li>\n            <li><strong>Consistency and Standards:</strong> Follow established web conventions (e.g. underline links, shopping cart icon at top right, logo clicking back to homepage).</li>\n            <li><strong>Error Prevention &amp; Recovery:</strong> Prevent errors through clear field validation (e.g. password match indicator) and provide constructive, friendly error messages.</li>\n        </ul>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary objective of UX (User Experience) design on a commercial website?",
          "options": [
            "Minimizing user friction and ensuring effortless task completion",
            "Adding as many animated pop-up banners as possible",
            "Using bright neon colors to distract visitors",
            "Hiding the navigation menu so users cannot leave the page"
          ],
          "correctIndex": 0,
          "explanation": "UX design centers on user satisfaction, removing friction, and guiding the visitor to achieve their goal (e.g. learning, purchasing, submitting a form) with minimal cognitive effort."
        }
      ]
    },
    "seo-fundamentals-web-search": {
      "id": "seo-fundamentals-web-search",
      "title": "Search Engine Optimization (SEO) Importance & Web Search Architecture",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Understand how search engines discover and rank information: the 3-stage search cycle (Crawling, Indexing, Ranking), search intent, and the architecture of the Google SERP.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-magnifying-glass\"></i> The Business &amp; Academic Importance of SEO</h2>\n        <p><strong>Search Engine Optimization (SEO)</strong> is the art and science of optimizing a website to earn higher organic (unpaid) search visibility and qualified traffic on major search engines like Google and Bing.</p>\n        <p>Over <strong>68% of all trackable website traffic originates from organic and paid search</strong>. Unlike paid ads that shut down when budgets expire, organic SEO rankings provide enduring 24/7 visibility with zero ongoing cost per click.</p>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>How Search Engines Work: The 3-Stage Cycle</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Stage</th><th>Process Name</th><th>Technical Operation &amp; Mechanism</th></tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Stage 1</strong></td>\n                        <td><strong>Crawling</strong></td>\n                        <td>Automated search bot programs (such as <strong>Googlebot</strong>) continuously traverse the web by following hyperlinks from known pages to newly discovered URLs and inspecting <code>sitemap.xml</code> files.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Stage 2</strong></td>\n                        <td><strong>Indexing</strong></td>\n                        <td>The crawler parses the HTML code, text content, heading semantics, images, and schema data, storing the rendered page in a colossal global database called the <strong>Search Index</strong>.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Stage 3</strong></td>\n                        <td><strong>Ranking &amp; Serving</strong></td>\n                        <td>When a user inputs a query, search algorithms evaluate hundreds of ranking signals (relevance, backlinks, mobile-friendliness, Core Web Vitals) to order results on the <strong>SERP</strong> in milliseconds.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the automated crawler program used by Google to discover and fetch web pages across the internet called?",
          "options": [
            "Googlebot",
            "ChromeBrowser",
            "WindowsCrawler",
            "PageMaker"
          ],
          "correctIndex": 0,
          "explanation": "Googlebot is Google's web crawling software that discovers, downloads, and processes web pages for the Google search index."
        }
      ]
    },
    "seo-keywords-mastery": {
      "id": "seo-keywords-mastery",
      "title": "Keyword Research Mastery & Search Intent Classification",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Uncover how target audiences search: Short-tail vs. Long-tail keywords, Search Volume vs. Keyword Difficulty (KD), and the 4 fundamental Search Intents.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-key\"></i> The Strategic Value of Keyword Research</h2>\n        <p><strong>Keyword Research</strong> is the analytical process of discovering the exact words, phrases, and questions that prospective customers type into search engines when seeking products, services, or knowledge.</p>\n        <p>Targeting the wrong keywords wastes months of content creation on terms with either zero search volume or impossibly high commercial competition.</p>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Short-Tail vs. Long-Tail Keywords</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Dimension</th><th>Short-Tail (Head) Keywords</th><th>Long-Tail Keywords</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Word Count</strong></td><td>1 to 2 words (e.g. <em>\"marketing\"</em>, <em>\"degree college\"</em>).</td><td>3 to 5+ words (e.g. <em>\"digital marketing SEC course in Srikalahasti\"</em>).</td></tr>\n                    <tr><td><strong>Search Volume</strong></td><td>Massive (tens of thousands of searches monthly).</td><td>Lower individual volume (hundreds monthly), but accounts for 70%+ of all web searches.</td></tr>\n                    <tr><td><strong>Search Intent</strong></td><td>Ambiguous / vague (what exactly does the searcher want?).</td><td>Highly specific and focused.</td></tr>\n                    <tr><td><strong>Ranking Difficulty</strong></td><td>Extremely fierce; dominated by Wikipedia, Amazon, multinational corporations.</td><td>Significantly lower competition; easily dominated by targeted local and niche content.</td></tr>\n                    <tr><td><strong>Conversion Rate</strong></td><td>Low (0.5% - 1.5%).</td><td>High (3.0% - 10.0%+); users know exactly what they need.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>The 4 Archetypes of Search Intent</h2>\n        <ul>\n            <li><strong>1. Informational Intent (\"Know\"):</strong> User seeks answers, definitions, or educational guidance (e.g. <em>\"What is SEO in digital marketing?\"</em>). Best served by comprehensive blog guides and video tutorials.</li>\n            <li><strong>2. Navigational Intent (\"Go\"):</strong> User wants to reach a specific website or brand portal (e.g. <em>\"SVA Govt Degree College portal login\"</em>).</li>\n            <li><strong>3. Commercial Investigation (\"Compare\"):</strong> User is researching options before a purchase (e.g. <em>\"Best digital marketing courses in Andhra Pradesh 2026\"</em>). Best served by review comparisons and case studies.</li>\n            <li><strong>4. Transactional Intent (\"Buy\"):</strong> User is ready to make an immediate transaction or apply (e.g. <em>\"Enroll in B.Com digital marketing course fee\"</em>). Best served by dedicated landing pages with fast checkout/application forms.</li>\n        </ul>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which type of keyword query typically produces the highest conversion rate despite having lower search volume?",
          "options": [
            "Long-tail keywords with specific commercial or transactional intent",
            "Single-word broad head keywords like 'books' or 'shoes'",
            "Random misspelled dictionary words",
            "Queries with zero search intent"
          ],
          "correctIndex": 0,
          "explanation": "Long-tail keywords represent specific intent where users are actively ready to enroll, purchase, or act, yielding dramatically higher conversion rates."
        }
      ]
    },
    "seo-onpage-html-tags": {
      "id": "seo-onpage-html-tags",
      "title": "On-Page SEO: HTML Tags, Meta Data & Semantic Markup",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Optimize page structure directly in HTML: Title tags, Meta descriptions, Heading hierarchy (H1-H6), Image Alt attributes, Canonical tags, Open Graph, and Schema markup.",
      "toolType": "seo",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-code\"></i> Anatomy of On-Page HTML SEO Elements</h2>\n        <p><strong>On-Page SEO</strong> refers to optimizing visible content and underlying HTML source code elements on a webpage to improve search rankings and user experience.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>HTML Tag / Attribute</th><th>Code Syntax &amp; Implementation</th><th>SEO Best Practice &amp; Character Limits</th></tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Title Tag</strong></td>\n                        <td><code>&lt;title&gt;Page Title | Brand&lt;/title&gt;</code></td>\n                        <td>Primary ranking factor. Keep between <strong>50&ndash;60 characters</strong> (max 600px). Place target focus keyword near the front.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Meta Description</strong></td>\n                        <td><code>&lt;meta name=\"description\" content=\"...\"&gt;</code></td>\n                        <td>Indirect ranking signal; directly impacts Click-Through Rate (CTR). Optimal length: <strong>120&ndash;155 characters</strong>. Include CTA.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Heading Tags (H1-H6)</strong></td>\n                        <td><code>&lt;h1&gt;Main Title&lt;/h1&gt;</code>, <code>&lt;h2&gt;Subheading&lt;/h2&gt;</code></td>\n                        <td>Use exactly <strong>one &lt;h1&gt; per page</strong> containing primary keyword. Structure subtopics with logical &lt;h2&gt; and &lt;h3&gt; hierarchy.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Image Alt Attribute</strong></td>\n                        <td><code>&lt;img src=\"seo.webp\" alt=\"SEO diagram\"&gt;</code></td>\n                        <td>Essential for web accessibility (screen readers) and Google Image Search indexing. Describe image accurately using relevant keywords.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Canonical Tag</strong></td>\n                        <td><code>&lt;link rel=\"canonical\" href=\"https://...\"&gt;</code></td>\n                        <td>Prevents duplicate content penalties by indicating the authoritative master URL of the page.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Open Graph (OG) Tags</strong></td>\n                        <td><code>&lt;meta property=\"og:title\" content=\"...\"&gt;</code></td>\n                        <td>Controls how the webpage snippet, preview image, and title render when shared on Facebook, WhatsApp, or LinkedIn.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-laptop-code\"></i> Live Interactive SERP &amp; On-Page SEO Checker</h2>\n        <p>Input your target keyword, page title, URL slug, and meta description into our sandbox below to test pixel lengths and verify Google SERP compliance in real time:</p>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the recommended character length limit for an SEO Title tag to prevent truncation in Google search results?",
          "options": [
            "50 to 60 characters (approximately 600 pixels width)",
            "300 to 500 characters",
            "Exactly 10 words regardless of length",
            "There is no limit; titles can be 5 pages long"
          ],
          "correctIndex": 0,
          "explanation": "Google truncates titles exceeding 60 characters or ~600 pixels, replacing the excess with an ellipsis (...)."
        }
      ]
    },
    "seo-offpage-inbound-links": {
      "id": "seo-offpage-inbound-links",
      "title": "Off-Page SEO: Inbound Links, PageRank & Domain Authority",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Understand how external web signals dictate domain credibility: Larry Page's PageRank algorithm, Domain Authority (DA), Inbound Link equity, and white-hat link acquisition.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-link\"></i> Understanding Inbound Links (Backlinks)</h2>\n        <p>An <strong>Inbound Link (Backlink)</strong> is a hyperlink pointing from an external third-party website back to your domain. In Google's foundational algorithm (<strong>PageRank</strong>, formulated by Larry Page and Sergey Brin), each reputable inbound link functions as a vote of confidence in your content's authority.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Link Dimension</th><th>High-Quality Backlink (Positive Equity)</th><th>Low-Quality / Toxic Backlink (Penalty Risk)</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Domain Authority (DA)</strong></td><td>From reputable educational (.edu), government (.gov), or major industry portals.</td><td>From spammy link farms, automated directory scrapers, or private blog networks (PBNs).</td></tr>\n                    <tr><td><strong>Topical Relevance</strong></td><td>Link from a recognized marketing journal to a college marketing portal.</td><td>Link from a gambling or casino website pointing to an academic college page.</td></tr>\n                    <tr><td><strong>Anchor Text</strong></td><td>Natural, contextual variation (e.g. <em>\"read the digital marketing syllabus\"</em> or brand name).</td><td>Over-optimized, repetitive exact-match commercial anchors triggering algorithmic spam flags.</td></tr>\n                    <tr><td><strong>Rel Attribute</strong></td><td>Standard <code>dofollow</code> passing algorithmic link equity (\"link juice\").</td><td><code>rel=\"nofollow\"</code>, <code>rel=\"sponsored\"</code>, or <code>rel=\"ugc\"</code> (instructs crawlers not to endorse link equity).</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>White-Hat Link Building Strategies</h2>\n        <ul>\n            <li><strong>High-Value Digital PR &amp; Research:</strong> Publishing proprietary academic studies, industry surveys, or interactive calculators that journalists and bloggers naturally cite and reference.</li>\n            <li><strong>Guest Editorial Contributions:</strong> Writing authoritative guest articles on respected industry publications with an editorial backlink back to your educational portal.</li>\n            <li><strong>Broken Link Building:</strong> Finding broken 404 links on authoritative resource pages and suggesting your live, high-quality replacement resource to the webmaster.</li>\n        </ul>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary difference between a 'dofollow' backlink and a 'nofollow' backlink?",
          "options": [
            "A dofollow link passes search engine link equity (PageRank), whereas a nofollow link instructs search bots not to endorse the destination page",
            "A dofollow link cannot be clicked by human visitors",
            "A nofollow link is permanently illegal under cyber laws",
            "There is no functional or algorithmic difference between them"
          ],
          "correctIndex": 0,
          "explanation": "Dofollow links allow search engine crawlers to follow the link and pass algorithmic PageRank authority, while nofollow instructs crawlers not to transfer SEO equity."
        }
      ]
    },
    "display-ads-formats": {
      "id": "display-ads-formats",
      "title": "Display Advertising: Choosing Ad Formats & Creative Principles",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Master visual digital advertising: Google Display Network (GDN) dimensions, IAB standard ad units, Responsive Display Ads (RDA), and high-converting ad creative design.",
      "toolType": "social",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-rectangle-ad\"></i> Display Advertising on the Google Display Network</h2>\n        <p>While Search Ads capture active pull-demand, <strong>Display Ads</strong> generate visual push-demand across a network of over 3 million partner websites, news portals, and YouTube channels reaching 90%+ of global internet users.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>IAB Ad Format Name</th><th>Standard Dimensions (Pixels)</th><th>Typical Page Placement &amp; Performance</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Medium Rectangle</strong></td><td><code>300 &times; 250</code></td><td>Embedded within blog text or sidebar; highest inventory and conversion performance.</td></tr>\n                    <tr><td><strong>Leaderboard</strong></td><td><code>728 &times; 90</code></td><td>Prominently placed at the top header of desktop websites above main content.</td></tr>\n                    <tr><td><strong>Wide Skyscraper</strong></td><td><code>160 &times; 600</code></td><td>Sticky vertical banner anchored along the right or left margins of desktop articles.</td></tr>\n                    <tr><td><strong>Mobile Leaderboard</strong></td><td><code>320 &times; 50</code></td><td>Fixed banner docked at the top or bottom of smartphone browser viewports.</td></tr>\n                    <tr><td><strong>Responsive Display Ads</strong></td><td>Auto-scaling assets</td><td>Advertiser uploads raw headlines, descriptions, and images; Google AI automatically generates combinations for every screen.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Ad Creative Best Practices</h2>\n        <ul>\n            <li><strong>The 3-Element Visual Rule:</strong> Every effective display ad must feature a compelling visual focal point, a clear value proposition headline, and an unmistakable Call-to-Action button.</li>\n            <li><strong>Brand Recall:</strong> Always include the official college or enterprise logo to cultivate brand recognition even when users do not immediately click (view-through impressions).</li>\n        </ul>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which standard display banner dimension is widely recognized as the top-performing ad unit across both desktop and mobile web pages?",
          "options": [
            "300 x 250 (Medium Rectangle)",
            "10 x 10 micro icon",
            "1920 x 1080 full screen only",
            "50 x 50 square"
          ],
          "correctIndex": 0,
          "explanation": "The 300x250 Medium Rectangle is universally supported, yields the highest inventory availability, and blends naturally into content streams."
        }
      ]
    },
    "landing-pages-cro": {
      "id": "landing-pages-cro",
      "title": "Landing Page Architecture & Conversion Rate Optimization (CRO)",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "6 min read",
      "lead": "Design dedicated high-conversion post-click experiences: the 1:1 Attention Ratio, Lead Magnets, Trust Badges, and scientific A/B Split Testing methodology.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-bullseye\"></i> Landing Pages vs. Standard Homepages</h2>\n        <p>A <strong>Landing Page</strong> is a standalone web page engineered specifically for an advertising or marketing campaign. A general homepage has dozens of outgoing links, navigation menus, and diverse goals. A landing page has <strong>one singular conversion objective</strong> (e.g. submitting an admission application or downloading a syllabus).</p>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-crosshairs\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Oli Gardner's 1:1 Attention Ratio Rule</div>\n                <div class=\"callout-text\">The Attention Ratio is the number of interactive links on a page compared to the number of conversion goals. On a high-converting landing page, the Attention Ratio must be exactly <strong>1:1</strong>: remove main navigation headers, sidebar links, and footer directories so visitors have only two choices: convert or leave.</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Essential Architecture of a High-Converting Landing Page</h2>\n        <ol>\n            <li><strong>Above-the-Fold Hero Section:</strong> Powerful benefit-driven headline, sub-headline, and immediate CTA button.</li>\n            <li><strong>Lead Capture Form:</strong> Minimize input friction; ask only for essential fields (e.g. Name, Mobile/WhatsApp, Email). Every unnecessary form field drops conversion rates by 5-10%.</li>\n            <li><strong>Social Proof &amp; Credibility:</strong> Placement statistics, student success testimonials with verified photos, university accreditations.</li>\n            <li><strong>Urgency &amp; Scarcity (Ethical):</strong> Limited cohort seats, early-bird deadlines.</li>\n            <li><strong>A/B Split Testing Methodology:</strong> Diverting 50% of incoming paid traffic to Variant A (e.g. orange CTA button) and 50% to Variant B (green CTA button) to scientifically determine the highest-converting variation with statistical significance.</li>\n        </ol>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary rationale for eliminating standard website navigation menus on dedicated advertising landing pages?",
          "options": [
            "To maintain a 1:1 Attention Ratio, eliminating distraction links and focusing visitors exclusively on the conversion action",
            "Because web browsers do not support navigation links on landing pages",
            "To prevent search engines from finding the webpage",
            "To reduce hosting server electricity costs"
          ],
          "correctIndex": 0,
          "explanation": "Eliminating navigation links eliminates 'exit leaks', focusing 100% of user attention toward submitting the lead form or completing enrollment."
        }
      ]
    },
    "dm-unit2-activities-rubrics": {
      "id": "dm-unit2-activities-rubrics",
      "title": "Unit 2: Review, Activities & Assessment Rubrics",
      "category": "cat-dm-unit2",
      "track": "track-unit2",
      "readTime": "5 min read",
      "lead": "Synthesize Unit 2 competencies: complete On-Page SEO checklists, WordPress configuration exercises, landing page critiques, and assessment rubrics.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-clipboard-check\"></i> Unit 2 Master Summary</h2>\n        <ul>\n            <li><strong>Web Foundations:</strong> Client-Server model, DNS resolution, and WordPress CMS dominance (43%+ global share).</li>\n            <li><strong>WordPress Core:</strong> Time-sensitive Posts (categories/tags, RSS) vs Static Pages (hierarchical, timeless); modular Gutenberg block design.</li>\n            <li><strong>Core Plugins:</strong> Yoast/Rank Math (SEO), WPForms (Leads), Wordfence (WAF security), WP Super Cache (Speed).</li>\n            <li><strong>SEO Triad:</strong> Crawling &rarr; Indexing &rarr; Ranking. Search intent classification (Informational, Navigational, Commercial, Transactional).</li>\n            <li><strong>On-Page Tags:</strong> Title (50-60 chars), Meta Description (120-155 chars), single H1 tag, descriptive Alt tags.</li>\n            <li><strong>Off-Page &amp; Links:</strong> PageRank, Domain Authority, dofollow vs nofollow backlink equity.</li>\n            <li><strong>Landing Pages:</strong> 1:1 Attention Ratio, friction-free forms, and A/B split testing.</li>\n        </ul>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Curricular Activity 2 &amp; Classroom Exercise</h2>\n        <div class=\"callout-box success\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-list-check\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Curricular Task 2: On-Page SEO Optimization Audit</div>\n                <p><strong>Assignment Brief:</strong> Select any published academic or commercial webpage. Perform a complete On-Page SEO inspection:</p>\n                <ol>\n                    <li>Extract the existing Title tag, Meta description, and H1 tag.</li>\n                    <li>Verify character lengths against recommended desktop/mobile SERP limits.</li>\n                    <li>Check if images contain valid, descriptive Alt text attributes.</li>\n                    <li>Rewrite the Title and Meta Description to include high-volume commercial intent keywords and improve CTR.</li>\n                </ol>\n            </div>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which of the following describes an On-Page SEO violation that could harm organic Google ranking?",
          "options": [
            "Having three separate competing &lt;h1&gt; tags with zero keyword relevance and missing image Alt text attributes",
            "Having a clean, single &lt;h1&gt; tag with descriptive subheadings",
            "Writing a compelling 150-character meta description with a call-to-action",
            "Compressing website images to modern WebP format for rapid loading"
          ],
          "correctIndex": 0,
          "explanation": "Multiple conflicting H1 tags dilute topical focus, and missing Alt attributes violate accessibility and image search guidelines."
        }
      ]
    },
    "social-media-ecosystem": {
      "id": "social-media-ecosystem",
      "title": "Understanding Social Media: Social Graphs & Algorithmic Feeds",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Unpack the social media phenomenon: The Social Graph, algorithmic feed distribution, consumer psychology, social proof (Cialdini), and the organic reach decline.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-users\"></i> The Evolution of Social Media &amp; The Social Graph</h2>\n        <p><strong>Social Media</strong> refers to interactive digital platforms where users create, co-share, and participate in community discourse. Conceptually, social networks operate on Mark Zuckerberg's concept of the <strong>Social Graph</strong> &mdash; a digital mapping of personal relationships, professional affiliations, content preferences, and social ties.</p>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>How Social Media Algorithms Work</h2>\n        <p>Gone are the days of chronological feeds where posts appeared strictly in the order they were published. Modern social platforms use machine learning ranking algorithms (descendants of Facebook's <strong>EdgeRank</strong>) evaluating four primary signals:</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Algorithmic Signal</th><th>Evaluation Parameter</th><th>Impact on Post Distribution</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Inventory</strong></td><td>Total pool of available posts from friends, followed pages, and groups.</td><td>Forms the candidate pool of content competing for the user's attention.</td></tr>\n                    <tr><td><strong>Signals (Relevance)</strong></td><td>Who posted it, content type (video, text, image), time posted, device type.</td><td>Signals predict whether the user typically enjoys this creator or format.</td></tr>\n                    <tr><td><strong>Predictions (User Action)</strong></td><td>Probability that the user will comment, share, like, or watch to completion.</td><td>High-engagement actions (meaningful comments, shares) receive heavy algorithmic weight.</td></tr>\n                    <tr><td><strong>Relevancy Score</strong></td><td>Calculated composite numerical score for every single post.</td><td>Highest-scoring posts appear at the top of the user's feed.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>The Reality of Organic Reach Decline</h2>\n        <p>On Meta (Facebook/Instagram), <strong>unpaid organic reach has fallen to less than 2% to 4%</strong> of page followers. Social platforms operate as public commercial ad networks; organizations must employ a balanced <strong>\"Paid + Organic Hybrid Strategy\"</strong> &mdash; using organic content to nurture existing fans while deploying paid ad sets to acquire new followers and customers.</p>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which user behavior is typically awarded the highest algorithmic weight by modern social media ranking algorithms?",
          "options": [
            "Meaningful comments, active shares, and extended video watch time",
            "Scrolling past a post in under 0.1 seconds",
            "Passive unclicked feed impressions",
            "Reporting an ad as spam"
          ],
          "correctIndex": 0,
          "explanation": "Social algorithms prioritize 'meaningful social interactions'\u2014such as substantive discussions, shares, and high watch duration\u2014over passive impressions."
        }
      ]
    },
    "smm-facebook-marketing": {
      "id": "smm-facebook-marketing",
      "title": "Social Networking with Facebook & Meta Ads Manager",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Master the world's largest social platform: Meta Business Suite, Facebook Pages vs. Groups, organic engagement tactics, Meta Ads Manager hierarchy, and Pixel retargeting.",
      "toolType": "social",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-brands fa-facebook\"></i> Facebook Ecosystem Architecture</h2>\n        <p>With over 3 billion monthly active users, Facebook (Meta) is an unmatched global marketing engine for both brand building and transactional direct-response advertising.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Facebook Entity</th><th>Purpose &amp; Mechanism</th><th>Best Marketing Application</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Personal Profile</strong></td><td>Individual identity; maximum 5,000 friends.</td><td>Personal networking; strictly not for commercial business storefronts.</td></tr>\n                    <tr><td><strong>Facebook Business Page</strong></td><td>Official organizational profile with unlimited followers and analytics.</td><td>Brand publishing, running paid ad campaigns, hosting reviews, customer service messaging.</td></tr>\n                    <tr><td><strong>Facebook Groups</strong></td><td>High-engagement peer communities centered on shared passions.</td><td>Alumni networks, student study circles, niche hobby groups with superior organic reach.</td></tr>\n                    <tr><td><strong>Meta Business Suite</strong></td><td>Centralized backend dashboard for unified management.</td><td>Scheduling cross-posts across Facebook and Instagram, inbox automation, user permission roles.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Meta Ads Manager: The 3-Tier Campaign Hierarchy</h2>\n        <ol>\n            <li><strong>Tier 1: Campaign Level:</strong> Select the primary marketing objective: <em>Awareness</em>, <em>Traffic</em>, <em>Engagement</em>, <em>Leads</em>, <em>App Promotion</em>, or <em>Sales</em>.</li>\n            <li><strong>Tier 2: Ad Set Level:</strong> Configure audience targeting (geography, age, gender, detailed interests like 'Higher Education'), ad placements (Feeds, Stories, Reels), budget schedules, and bidding strategy.</li>\n            <li><strong>Tier 3: Ad Creative Level:</strong> Design the actual customer-facing creative: format (Single Image, Video, Carousel), primary ad copy, headline, destination URL, and CTA button.</li>\n        </ol>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In Meta Ads Manager, at which tier of the campaign hierarchy do you configure audience targeting, budget, and ad placements?",
          "options": [
            "Ad Set Level",
            "Campaign Level",
            "Ad Creative Level",
            "Billing Invoice Level"
          ],
          "correctIndex": 0,
          "explanation": "Targeting demographics, daily budget, schedule, and placements (Facebook/Instagram/Audience Network) are strictly defined at the Ad Set level."
        }
      ]
    },
    "smm-linkedin-b2b": {
      "id": "smm-linkedin-b2b",
      "title": "LinkedIn for B2B Marketing: Personal Branding & Lead Generation",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Leverage the premier professional network: Personal branding profiles, Company Pages, thought leadership content, LinkedIn Lead Gen Forms, and InMail campaigns.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-brands fa-linkedin\"></i> The B2B Power of LinkedIn</h2>\n        <p>With over 1 billion professionals globally and 100+ million in India, LinkedIn is the premier platform for <strong>Business-to-Business (B2B) marketing</strong>, professional career placement, and executive thought leadership.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Component</th><th>Strategic Best Practice</th><th>Career &amp; Marketing Value</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Personal Profile</strong></td><td>Professional headshot, custom banner, outcome-oriented headline (not just job title), detailed 'About' story, featured portfolio projects.</td><td>Establishes individual authority; prospective employers and B2B clients inspect profiles before engagement.</td></tr>\n                    <tr><td><strong>Company Page</strong></td><td>Official institutional profile detailing mission, career openings, faculty achievements, and corporate partnerships.</td><td>Acts as an institutional trust anchor and company hub.</td></tr>\n                    <tr><td><strong>Thought Leadership</strong></td><td>Publishing long-form articles, carousel document slides, and industry commentary.</td><td>Organic reach on LinkedIn remains dramatically higher than Facebook; quality professional posts frequently go viral.</td></tr>\n                    <tr><td><strong>Lead Gen Forms</strong></td><td>Pre-filled lead forms using verified LinkedIn profile data with 1-click submission.</td><td>Produces 2x to 3x higher conversion rates compared to routing users to external landing pages.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Why do LinkedIn Lead Gen Forms achieve significantly higher conversion rates for B2B inquiries than standard external landing pages?",
          "options": [
            "The form fields automatically pre-populate with the member's verified professional profile data (name, email, job title, company) with a single click",
            "LinkedIn pays users cash rewards for every form submitted",
            "LinkedIn forms cannot be submitted on mobile smartphones",
            "LinkedIn forms do not require any contact information"
          ],
          "correctIndex": 0,
          "explanation": "Pre-filled fields eliminate tedious typing on mobile devices, removing cognitive friction and doubling lead conversion rates."
        }
      ]
    },
    "smm-blogging-medium": {
      "id": "smm-blogging-medium",
      "title": "Blogging as a Social Medium: Content Strategy & Community Engagement",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Transform a blog from a personal journal into an institutional inbound powerhouse: Editorial calendars, content pillar architecture, social commentary, and monetization.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-pen-nib\"></i> The Dual Nature of Corporate &amp; Academic Blogging</h2>\n        <p>A <strong>Blog</strong> operates at the intersection of Owned Media and Social Media. While hosted on your own server, a blog acts socially through interactive comments, trackbacks, social sharing buttons, and community discussions.</p>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-chart-line\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">HubSpot Research Benchmark</div>\n                <div class=\"callout-text\">Businesses and colleges that prioritize active educational blogging generate <strong>55% more website visitors</strong> and <strong>67% more qualified leads</strong> monthly than organizations without blogs.</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Editorial Calendar &amp; Content Pillar Model</h2>\n        <ul>\n            <li><strong>Content Pillars (Hub-and-Spoke):</strong> Build a comprehensive \"Pillar Page\" (e.g. <em>\"Complete Guide to Digital Marketing 2026\"</em>) surrounded by 10 specific cluster blog posts (e.g. <em>\"SEO Checklist\"</em>, <em>\"How to Run Facebook Ads\"</em>) linking back to the pillar to build domain topical authority.</li>\n            <li><strong>Editorial Calendar:</strong> Pre-schedule blog publishing across seasonal academic cycles (e.g. admission season, exam prep, placement drives) with assigned authors, target keywords, and visual assets.</li>\n            <li><strong>Monetization Models:</strong> Educational blogs monetize through Google AdSense, affiliate marketing (courseware, tools), sponsored industry reviews, and direct student course enrollment.</li>\n        </ul>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In content marketing, what is the 'Hub-and-Spoke' (Topic Cluster) blogging model?",
          "options": [
            "Creating a central comprehensive pillar guide linked to multiple supporting sub-topic blog posts to establish search authority",
            "Posting the exact same sentence 50 times across Twitter",
            "Deleting old blog posts every Friday afternoon",
            "Writing blog articles exclusively in assembly machine code"
          ],
          "correctIndex": 0,
          "explanation": "The Hub-and-Spoke model establishes strong topical authority by linking sub-topic cluster posts back to a core pillar resource."
        }
      ]
    },
    "smm-twitter-x-microblogging": {
      "id": "smm-twitter-x-microblogging",
      "title": "Microblogging with Twitter / X: Real-Time PR & Community Management",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Master microblogging dynamics: 280-character constraints, threading, viral hashtag mechanics, real-time customer support, and crisis PR management.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-brands fa-x-twitter\"></i> Real-Time Microblogging Mechanics</h2>\n        <p><strong>Twitter (X)</strong> is the world's real-time public town square. Characterized by brevity (280 characters), immediate viral distribution, and public dialogues, it is the primary channel for breaking news, academic debates, and public relations.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Feature</th><th>Mechanism &amp; Operation</th><th>Marketing Best Practice</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Hashtags (#)</strong></td><td>Indexes posts under searchable public trend topics.</td><td>Use 1&ndash;2 highly relevant hashtags per post; avoid hashtag stuffing.</td></tr>\n                    <tr><td><strong>Threads</strong></td><td>Chained series of connected tweets telling a cohesive narrative.</td><td>Bypass character limits; publish educational breakdowns, case analyses, and step-by-step guides.</td></tr>\n                    <tr><td><strong>Social Customer Care</strong></td><td>Public mentions (@brand) requiring rapid corporate resolution.</td><td>Respond within 15 minutes; maintain polite corporate composure; resolve sensitive details via Direct Message (DM).</td></tr>\n                    <tr><td><strong>Crisis PR Management</strong></td><td>Brand reputation risks escalate within minutes on Twitter.</td><td>Acknowledge issues immediately; never delete valid customer criticism; publish transparent institutional updates.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the recommended practice for utilizing hashtags (#) on Twitter / X to maximize organic discoverability without appearing spammy?",
          "options": [
            "Use 1 to 2 targeted, highly relevant hashtags integrated naturally into the post",
            "Paste 30 irrelevant trending celebrity hashtags at the end of every tweet",
            "Never use any hashtags on any social platform",
            "Use full paragraphs written as a single continuous hashtag"
          ],
          "correctIndex": 0,
          "explanation": "Twitter's official guidelines advise using 1 to 2 relevant hashtags; excessive hashtags look spammy and diminish engagement."
        }
      ]
    },
    "smm-youtube-video-marketing": {
      "id": "smm-youtube-video-marketing",
      "title": "Social Video Marketing with YouTube: Video SEO & Retention",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Harness the world's second-largest search engine: Video SEO (Title, Description, Tags, Chapters), custom high-CTR thumbnails, Audience Retention curves, and YouTube Shorts.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-brands fa-youtube\" style=\"color: #ff0000;\"></i> YouTube: The Video Search Giant</h2>\n        <p>With over 2.5 billion monthly logged-in users, <strong>YouTube is both a social network and the world's 2nd largest search engine</strong> (trailing only its parent company, Google). Video content delivers the highest consumer trust, retention, and emotional recall of any digital medium.</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Video SEO Signal</th><th>Technical Best Practice</th><th>Algorithmic Impact</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Video Title</strong></td><td>Compelling, keyword-rich title under 60 characters with clear value.</td><td>Primary keyword indexing signal for search and suggested video algorithms.</td></tr>\n                    <tr><td><strong>Custom Thumbnail</strong></td><td>High-contrast, 1280&times;720px image with expressive human face and bold 3-4 word text.</td><td>Directly dictates <strong>Click-Through Rate (CTR)</strong> in browse and search feeds.</td></tr>\n                    <tr><td><strong>Audience Retention</strong></td><td>Engaging hook in first 15 seconds; dynamic editing; chapters/timestamps.</td><td><strong>Average Percentage Viewed (APV)</strong> is the #1 signal for viral recommendation.</td></tr>\n                    <tr><td><strong>YouTube Shorts</strong></td><td>Vertical 9:16 videos under 60 seconds; looping music/hook.</td><td>Accelerates rapid channel subscriber acquisition from the Shorts algorithmic shelf.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Channel Growth &amp; Institutional Promotion</h2>\n        <p>Colleges and academic departments use YouTube to showcase campus lectures, lab demonstrations, competitive exam shortcuts (as on our official channel <strong>The Competitive Edge</strong>), and student success interviews, transforming passive viewers into enrolled scholars.</p>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which metric is the single most influential ranking and recommendation signal in YouTube's recommendation algorithm?",
          "options": [
            "Audience Retention (Watch Time and Average Percentage Viewed)",
            "The file size of the uploaded MP4 file on the hard drive",
            "The number of characters in the video file name",
            "The color of the computer monitor used by the creator"
          ],
          "correctIndex": 0,
          "explanation": "YouTube's recommendation algorithm is engineered to maximize session time; videos with high Audience Retention and Watch Time receive maximum algorithmic promotion."
        }
      ]
    },
    "customer-lifecycle-funnel": {
      "id": "customer-lifecycle-funnel",
      "title": "Social Media for Customer Reach, Acquisition & Retention",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Guide prospects through the full customer lifecycle: from top-of-funnel social reach, through acquisition and onboarding, to post-purchase retention and brand advocacy (Flywheel).",
      "toolType": "funnel",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-arrows-spin\"></i> From the Sales Funnel to the Inbound Flywheel</h2>\n        <p>Traditional marketing viewed customer acquisition as a linear funnel that ended at the sale. Today's modern inbound methodology models the relationship as an ongoing <strong>Flywheel</strong> where happy customers fuel new customer acquisition:</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Lifecycle Stage</th><th>Marketing Objective</th><th>Social Media Channel Tactics</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>1. Reach (Attract)</strong></td><td>Building top-of-funnel brand awareness among unfamiliar prospects.</td><td>Viral Reels/Shorts, educational infographics, influencer partnerships, broad-reach Meta ads.</td></tr>\n                    <tr><td><strong>2. Acquisition (Convert)</strong></td><td>Capturing contact credentials (leads) and closing enrollment/sales.</td><td>Dedicated landing pages, webinar registrations, limited-time discount offers, remarketing ads.</td></tr>\n                    <tr><td><strong>3. Retention (Delight)</strong></td><td>Preventing churn; keeping existing customers engaged and satisfied.</td><td>Exclusive private WhatsApp/Telegram community groups, onboarding email drips, loyalty rewards.</td></tr>\n                    <tr><td><strong>4. Advocacy (Promote)</strong></td><td>Turning loyal customers into active brand ambassadors.</td><td>User-generated content (UGC), referral bonuses, video testimonial spotlights.</td></tr>\n                </tbody>\n            </table>\n        </div>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In the Inbound Marketing Flywheel model, why is the 'Delight' (Retention) phase considered equally critical as the initial acquisition phase?",
          "options": [
            "Satisfied, retained customers become advocates who generate high-trust referrals and organic word-of-mouth for new prospective buyers",
            "Retaining customers is 100 times more expensive than finding new ones",
            "Companies are legally forbidden from acquiring new customers after 1 year",
            "Delighted customers automatically take over managing company accounting"
          ],
          "correctIndex": 0,
          "explanation": "In the Flywheel model, delighted customers become brand promoters whose word-of-mouth referrals drive continuous organic business growth."
        }
      ]
    },
    "digital-media-measurement-metrics": {
      "id": "digital-media-measurement-metrics",
      "title": "Digital Media Performance Measurement & Ad Metrics Formulas",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "7 min read",
      "lead": "Master quantitative media measurement: Mathematical formulas for Reach, Impressions, Engagement Rate, CTR, CPC, CPM, CPA/CAC, ROAS, and net ROI.",
      "toolType": "ad_calc",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-calculator\"></i> Quantitative Digital Marketing Performance Metrics</h2>\n        <p>In digital marketing, intuition is replaced by rigorous financial and behavioral telemetry. Digital marketers must master these fundamental mathematical formulas:</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Metric Name &amp; Acronym</th><th>Mathematical Calculation Formula</th><th>Interpretation &amp; Industry Benchmark</th></tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>Reach vs. Impressions</strong></td>\n                        <td><code>Frequency = Total Impressions / Unique Reach</code></td>\n                        <td><strong>Reach:</strong> Unique individual people who saw ad.<br><strong>Impressions:</strong> Total count of times ad was displayed.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Click-Through Rate (CTR)</strong></td>\n                        <td><code>CTR = (Total Clicks / Total Impressions) &times; 100%</code></td>\n                        <td>Measures ad copy and creative relevance. Average benchmark: <strong>1.5% to 3.5%</strong>.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Cost Per Click (CPC)</strong></td>\n                        <td><code>CPC = Total Ad Spend / Total Clicks</code></td>\n                        <td>Direct cost of acquiring one website visitor from paid ads.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Cost Per Mille (CPM)</strong></td>\n                        <td><code>CPM = (Total Ad Spend / Total Impressions) &times; 1,000</code></td>\n                        <td>Cost to display an ad 1,000 times. Core metric for brand awareness campaigns.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Cost Per Acquisition (CPA / CAC)</strong></td>\n                        <td><code>CPA = Total Ad Spend / Total Conversions</code></td>\n                        <td>Customer Acquisition Cost. Must be significantly lower than Customer Lifetime Value (LTV).</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Return on Ad Spend (ROAS)</strong></td>\n                        <td><code>ROAS = Total Revenue Generated / Total Ad Spend</code></td>\n                        <td>Expressed as a multiplier (e.g. 4.0x means \u20b94 earned per \u20b91 spent). Benchmark target: <strong>&ge; 3.0x</strong>.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Return on Investment (ROI %)</strong></td>\n                        <td><code>ROI = [(Net Profit &minus; Ad Spend) / Ad Spend] &times; 100%</code></td>\n                        <td>Net financial profit efficiency percentage after all marketing expenses.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-chart-line\"></i> Interactive Ad Budget &amp; ROAS Calculator</h2>\n        <p>Experiment with budget, CTR, conversion rates, and order values to calculate live performance metrics below:</p>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "If an advertiser spends \u20b910,000 on Facebook Ads and generates 2,000 clicks to their website, what is the Cost Per Click (CPC)?",
          "options": [
            "\u20b95.00 per click",
            "\u20b90.20 per click",
            "\u20b920.00 per click",
            "\u20b950.00 per click"
          ],
          "correctIndex": 0,
          "explanation": "CPC = Total Spend / Total Clicks = \u20b910,000 / 2,000 clicks = \u20b95.00 per click."
        },
        {
          "type": "multiple-choice",
          "question": "If an e-commerce store invests \u20b950,000 in Google Ads and generates \u20b9200,000 in gross revenue, what is their Return on Ad Spend (ROAS)?",
          "options": [
            "4.0x (or 400%)",
            "0.25x",
            "10.0x",
            "1.5x"
          ],
          "correctIndex": 0,
          "explanation": "ROAS = Total Revenue / Total Ad Spend = \u20b9200,000 / \u20b950,000 = 4.0x."
        }
      ]
    },
    "website-performance-analytics": {
      "id": "website-performance-analytics",
      "title": "Analyzing Website Performance: Traffic, Bounce & Engagement",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Evaluate website visitor telemetry: Sessions vs. Users, Pageviews, Average Session Duration, Bounce Rate vs. GA4 Engagement Rate, and conversion funnels.",
      "toolType": "funnel",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-chart-simple\"></i> Essential Web Traffic Metrics</h2>\n        <p>Web analytics platforms (such as <strong>Google Analytics 4</strong>) track visitor journeys to uncover friction points and optimize marketing spend:</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Metric Name</th><th>Definition</th><th>Business Significance</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Users (Visitors)</strong></td><td>Unique individuals identified via client IDs/cookies within a selected timeframe.</td><td>Total reach and unique audience size.</td></tr>\n                    <tr><td><strong>Sessions</strong></td><td>A period of time during which a user actively engages with your site (expires after 30 mins of inactivity).</td><td>Frequency of visits and repeat engagement.</td></tr>\n                    <tr><td><strong>Pageviews</strong></td><td>Total number of web pages loaded or reloaded by users.</td><td>Overall site volume and content consumption depth.</td></tr>\n                    <tr><td><strong>Average Session Duration</strong></td><td>Total duration of all sessions divided by the total number of sessions.</td><td>Indicates user engagement and content stickiness.</td></tr>\n                    <tr><td><strong>Bounce Rate vs. GA4 Engagement Rate</strong></td><td><strong>Bounce Rate (Universal):</strong> % of single-page sessions without interaction.<br><strong>Engagement Rate (GA4):</strong> % of sessions lasting &gt;10 seconds, or with &ge;2 pageviews, or triggering a conversion.</td><td>GA4 shifted away from traditional bounce rate toward positive engagement rate (target: <strong>&ge; 60%</strong>).</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In Google Analytics 4 (GA4), how is an 'Engaged Session' officially defined?",
          "options": [
            "A session that lasts longer than 10 seconds, OR has 2 or more page views, OR completes a conversion event",
            "Any user who downloads a 50GB file",
            "A user who keeps a browser tab open for 72 consecutive hours",
            "A visitor who types their password into the search bar"
          ],
          "correctIndex": 0,
          "explanation": "GA4 defines an engaged session as one lasting 10+ seconds, viewing 2+ screens/pages, or triggering at least 1 conversion event."
        }
      ]
    },
    "advertising-performance-attribution": {
      "id": "advertising-performance-attribution",
      "title": "Advertising Performance Analysis & Attribution Modeling",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "6 min read",
      "lead": "Solve the multi-touch attribution puzzle: First-Click, Last-Click, Linear, Time-Decay, and GA4 Data-Driven Attribution (DDA) to allocate marketing budgets accurately.",
      "toolType": "funnel",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-code-branch\"></i> The Multi-Touch Attribution Dilemma</h2>\n        <p>A student rarely enrolls on their first visit. Consider a typical path: User sees a Meta Ad on Monday &rarr; searches Google Organic on Wednesday &rarr; clicks a YouTube video on Friday &rarr; opens an Email on Sunday to finalize enrollment. Which channel deserves credit for the revenue?</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Attribution Model</th><th>Credit Allocation Rule</th><th>Strategic Strength &amp; Weakness</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Last-Click (Non-Direct)</strong></td><td>100% of credit goes to the final touchpoint before conversion.</td><td><strong>Strength:</strong> Simple to understand.<br><strong>Weakness:</strong> Heavily biased toward bottom-of-funnel channels (Brand Search/Email); ignores awareness drivers.</td></tr>\n                    <tr><td><strong>First-Click</strong></td><td>100% of credit goes to the first touchpoint that introduced the user.</td><td><strong>Strength:</strong> Emphasizes customer discovery channels.<br><strong>Weakness:</strong> Ignores lead nurturing and closing tactics.</td></tr>\n                    <tr><td><strong>Linear Multi-Touch</strong></td><td>Equal fractional credit split evenly across every touchpoint.</td><td><strong>Strength:</strong> Balanced representation of the journey.<br><strong>Weakness:</strong> Treats an incidental impression with the same weight as a 30-minute webinar.</td></tr>\n                    <tr><td><strong>Time-Decay</strong></td><td>Exponentially greater credit given to touchpoints closer to the conversion date.</td><td><strong>Strength:</strong> Reflects accelerating purchase intent.<br><strong>Weakness:</strong> Devalues early discovery campaigns.</td></tr>\n                    <tr><td><strong>Data-Driven (GA4 Default)</strong></td><td>Machine learning algorithms calculate actual incremental lift.</td><td><strong>Strength:</strong> Mathematically objective and self-optimizing.<br><strong>Weakness:</strong> Requires substantial historical conversion volume.</td></tr>\n                </tbody>\n            </table>\n        </div>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which attribution model awards 100% of the conversion credit to the very final touchpoint before purchase, ignoring earlier discovery channels?",
          "options": [
            "Last-Click Attribution",
            "First-Click Attribution",
            "Linear Attribution",
            "Data-Driven Attribution"
          ],
          "correctIndex": 0,
          "explanation": "Last-Click attribution gives 100% credit to the final marketing channel with which the customer interacted immediately prior to conversion."
        }
      ]
    },
    "dm-unit3-activities-rubrics": {
      "id": "dm-unit3-activities-rubrics",
      "title": "Unit 3: Review, Activities & Assessment Rubrics",
      "category": "cat-dm-unit3",
      "track": "track-unit3",
      "readTime": "5 min read",
      "lead": "Consolidate Unit 3: Social Media strategy summaries, metrics calculation worksheets, campaign performance critiques, and assessment rubrics.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-clipboard-check\"></i> Unit 3 Master Summary</h2>\n        <ul>\n            <li><strong>Social Media Ecosystem:</strong> Social Graphs, machine learning feed algorithms, and the necessity of Paid + Organic hybrid distribution.</li>\n            <li><strong>Key Channels:</strong> Facebook (Meta Ads Manager 3-tier hierarchy), LinkedIn (B2B lead forms), Blogging (Hub-and-spoke topic clusters), Twitter/X (Real-time PR), YouTube (Video SEO and Audience Retention).</li>\n            <li><strong>Inbound Flywheel:</strong> Attract (Reach) &rarr; Engage (Acquire) &rarr; Delight (Retain) &rarr; Promote (Advocate).</li>\n            <li><strong>Core Math Formulas:</strong> CTR, CPC, CPM, CPA, ROAS, and ROI.</li>\n            <li><strong>Analytics &amp; Attribution:</strong> Sessions, GA4 Engagement Rate, and Multi-Touch vs Data-Driven Attribution.</li>\n        </ul>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Unit 3 Curricular Activity 3: Quantitative Ad Metrics Worksheet</h2>\n        <div class=\"callout-box success\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-calculator\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Curricular Task 3: Digital Campaign Mathematical Audit</div>\n                <p><strong>Assignment Problem Statement:</strong> An educational institute in Andhra Pradesh runs a 14-day digital campaign with a budget of \u20b940,000:</p>\n                <ul>\n                    <li>Total Impressions served: 200,000 views</li>\n                    <li>Total Clicks registered: 5,000 clicks</li>\n                    <li>Total Student Admission Inquiries submitted: 250 leads</li>\n                    <li>Total Paid Course Enrollments finalized: 25 students</li>\n                    <li>Course tuition fee per student: \u20b98,000</li>\n                </ul>\n                <p><strong>Calculate:</strong> (1) CTR (%), (2) CPC (\u20b9), (3) CPM (\u20b9), (4) Cost Per Lead (\u20b9), (5) Cost Per Enrolled Student (CPA / CAC) (\u20b9), (6) Total Revenue Generated (\u20b9), (7) Return on Ad Spend (ROAS x), and (8) Net Marketing ROI (%).</p>\n                <div class=\"callout-box info\" style=\"margin-top: 0.5rem;\">\n                    <strong>Solution Summary for Verification:</strong><br>\n                    CTR = 2.5% &bull; CPC = \u20b98.00 &bull; CPM = \u20b9200.00 &bull; Cost Per Lead = \u20b9160.00 &bull; CPA = \u20b91,600.00 &bull; Revenue = \u20b9200,000 &bull; ROAS = 5.0x &bull; Net ROI = +400%.\n                </div>\n            </div>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "If a campaign spends \u20b940,000 and yields \u20b9200,000 in tuition revenue, what is the Return on Ad Spend (ROAS)?",
          "options": [
            "5.0x",
            "2.5x",
            "10.0x",
            "0.20x"
          ],
          "correctIndex": 0,
          "explanation": "ROAS = Total Revenue / Total Spend = \u20b9200,000 / \u20b940,000 = 5.0x (five rupees returned per one rupee spent)."
        }
      ]
    },
    "lab-01-frameworks-trends": {
      "id": "lab-01-frameworks-trends",
      "title": "Practical Lab 1: Digital Marketing Frameworks & Trends Critique",
      "category": "cat-dm-practicals",
      "track": "track-practicals",
      "readTime": "8 min read",
      "lead": "Official Curricular Activity 1: Explain emerging trends in digital marketing and critically assess the use of digital marketing tools by applying relevant marketing theories and frameworks (4Ps vs 4Cs, RACE, Inbound Flywheel).",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-flask\"></i> Laboratory Aim &amp; Curricular Mandate</h2>\n        <p><strong>Curricular Mandate:</strong> Explain emerging trends in digital marketing and critically assess the use of digital marketing tools by applying relevant marketing theories and frameworks.</p>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-bullseye\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Core Objective</div>\n                <div class=\"callout-text\">Enable degree scholars to analyze real-world marketing campaigns through established academic frameworks: Smart Insights' <strong>RACE Framework</strong> (Reach, Act, Convert, Engage), Robert Lauterborn's <strong>4Cs</strong>, and HubSpot's <strong>Inbound Flywheel</strong>.</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>The RACE Strategic Planning Framework</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>RACE Stage</th><th>Customer Phase</th><th>Marketing Channels &amp; Activities</th><th>Key Performance Indicators (KPIs)</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>1. Reach</strong></td><td>Exploration / Discovery</td><td>SEO, Meta Ads, YouTube Shorts, PR mentions, influencer collaborations.</td><td>Impressions, Unique Visitors, Share of Voice (SOV).</td></tr>\n                    <tr><td><strong>2. Act</strong></td><td>Decision Making / Interaction</td><td>Blog tutorials, downloadable course syllabus, video case studies.</td><td>Bounce rate, Average time on page, Lead magnet downloads.</td></tr>\n                    <tr><td><strong>3. Convert</strong></td><td>Purchase / Enrollment</td><td>Dedicated landing pages, streamlined checkout/application forms.</td><td>Conversion Rate (CR %), Cost Per Acquisition (CPA), Total Revenue.</td></tr>\n                    <tr><td><strong>4. Engage</strong></td><td>Long-Term Loyalty</td><td>Email newsletters, WhatsApp student groups, onboarding webinars.</td><td>Customer Lifetime Value (LTV), Repeat purchase rate, Net Promoter Score (NPS).</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Step-by-Step Lab Procedure &amp; Student Deliverable</h2>\n        <ol>\n            <li><strong>Step 1:</strong> Select a prominent regional or national brand (e.g. <em>Zomato</em>, <em>Flipkart</em>, <em>Nykaa</em>, or a local educational institution).</li>\n            <li><strong>Step 2:</strong> Map their digital presence across all 4 stages of the RACE framework.</li>\n            <li><strong>Step 3:</strong> Critically assess their adoption of AI trends (e.g. AI chatbot assistance, personalized recommendation engines).</li>\n            <li><strong>Step 4:</strong> Submit a structured 4-page academic audit report with diagrams and concrete strategic recommendations.</li>\n        </ol>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In the Smart Insights RACE planning framework, what does the acronym RACE stand for?",
          "options": [
            "Reach, Act, Convert, Engage",
            "Radio, Advertising, Commercial, Email",
            "Read, Analyze, Calculate, Execute",
            "Retarget, Automate, Capitalize, Expand"
          ],
          "correctIndex": 0,
          "explanation": "RACE stands for Reach (building awareness), Act (persuading interaction), Convert (closing sale), and Engage (cultivating long-term advocacy)."
        }
      ]
    },
    "lab-02-wordpress-blog-creation": {
      "id": "lab-02-wordpress-blog-creation",
      "title": "Practical Lab 2: WordPress Blog Architecture & Deployment",
      "category": "cat-dm-practicals",
      "track": "track-practicals",
      "readTime": "8 min read",
      "lead": "Official Curricular Activity 2: Setting up a website on WordPress and creating a blog populated with pages, posts, menus, media, and core plugins (Yoast, WPForms, Wordfence).",
      "toolType": "wordpress",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-brands fa-wordpress\"></i> Laboratory Aim &amp; Curricular Mandate</h2>\n        <p><strong>Curricular Mandate:</strong> Setting up a website on WordPress and creating a blog populated with pages, posts, and plugins.</p>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-code\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Hands-on Technical Objective</div>\n                <div class=\"callout-text\">Students will install a local or cloud WordPress instance (e.g. using LocalWP or shared cPanel hosting), configure custom permalinks, publish static legal/informational pages, author SEO-optimized posts, and activate core production plugins.</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Detailed Step-by-Step Lab Execution Manual</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Stage</th><th>Action Items &amp; Technical Execution</th><th>Verification Criteria</th></tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><strong>1. Setup &amp; Environment</strong></td>\n                        <td>Download and install <strong>LocalWP</strong> (localwp.com) on lab computers. Create a new site named <code>studentname-digitalmarketing.local</code>. Set admin username and strong password.</td>\n                        <td>WordPress Dashboard renders at <code>http://localhost/wp-admin/</code>.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>2. General Settings &amp; Permalinks</strong></td>\n                        <td>Navigate to <strong>Settings &rarr; Permalinks</strong>. Change default URL structure from Plain (<code>?p=123</code>) to <strong>Post name</strong> (<code>/%postname%/</code>). Set site Title and Tagline.</td>\n                        <td>Clean, search-engine friendly URLs generated for all content.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>3. Pages Creation</strong></td>\n                        <td>Create 3 core Pages under <strong>Pages &rarr; Add New</strong>: <em>Home</em>, <em>About Department</em>, and <em>Contact Us</em>.</td>\n                        <td>Pages appear under primary top navigation menu.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>4. Posts &amp; Gutenberg Blocks</strong></td>\n                        <td>Author 2 comprehensive articles under <strong>Posts &rarr; Add New</strong> using Gutenberg blocks (Headings, Paragraphs, Images with Alt text, Table). Assign custom Categories (e.g. <em>SEO</em>, <em>SMM</em>) and Tags.</td>\n                        <td>Featured image displays properly; categories organized logically.</td>\n                    </tr>\n                    <tr>\n                        <td><strong>5. Plugins Installation</strong></td>\n                        <td>Navigate to <strong>Plugins &rarr; Add New</strong>. Install and activate: (1) <strong>Yoast SEO</strong>, (2) <strong>WPForms</strong>, and (3) <strong>Wordfence Security</strong>. Embed a contact form on the Contact page.</td>\n                        <td>Contact form submits successfully; Yoast SEO box displays green scores.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which WordPress permalink setting is strongly recommended by Google for optimal search engine optimization?",
          "options": [
            "Post name (/%postname%/)",
            "Plain query string (?p=123)",
            "Numeric ID (/archives/123)",
            "Random hexadecimal string"
          ],
          "correctIndex": 0,
          "explanation": "'Post name' produces clean, keyword-rich, human-readable URLs (e.g. /digital-marketing-guide/) that search engines prefer."
        }
      ]
    },
    "lab-03-seo-website-audit": {
      "id": "lab-03-seo-website-audit",
      "title": "Practical Lab 3: Live Website & Blog SEO Audit",
      "category": "cat-dm-practicals",
      "track": "track-practicals",
      "readTime": "8 min read",
      "lead": "Official Curricular Activity 3: Performing SEO on your blog or conducting a comprehensive SEO audit of a live website (On-page inspection, Lighthouse speed audit, backlink analysis).",
      "toolType": "seo",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-stethoscope\"></i> Laboratory Aim &amp; Curricular Mandate</h2>\n        <p><strong>Curricular Mandate:</strong> This involves performing SEO on your blog or conducting an SEO audit of a website.</p>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-magnifying-glass-chart\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Audit Scope</div>\n                <div class=\"callout-text\">Conducting a full technical and on-page SEO audit of an existing educational or commercial domain using industry diagnostics: Google Lighthouse, Schema Validator, and keyword research tools.</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Comprehensive 25-Point SEO Audit Checklist</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Audit Category</th><th>Inspection Checkpoint</th><th>Target Benchmark</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>On-Page Meta</strong></td><td>Title Tag length &amp; keyword presence</td><td>50&ndash;60 characters; primary keyword included near front.</td></tr>\n                    <tr><td><strong>On-Page Meta</strong></td><td>Meta Description length &amp; CTA</td><td>120&ndash;155 characters; compelling click-through trigger.</td></tr>\n                    <tr><td><strong>Semantic Hierarchy</strong></td><td>Heading structure (&lt;h1&gt; to &lt;h6&gt;)</td><td>Exactly one &lt;h1&gt; tag per URL; logical nested subheadings.</td></tr>\n                    <tr><td><strong>Accessibility</strong></td><td>Image Alt attributes</td><td>100% of non-decorative images must have descriptive Alt text.</td></tr>\n                    <tr><td><strong>Technical Speed</strong></td><td>Google Lighthouse Performance Score</td><td>&ge; 85/100 on Mobile; LCP &lt; 2.5s; CLS &lt; 0.1.</td></tr>\n                    <tr><td><strong>Security</strong></td><td>HTTPS / SSL Certificate</td><td>Valid SSL certificate; auto-redirect from HTTP to HTTPS.</td></tr>\n                    <tr><td><strong>Indexability</strong></td><td>Robots.txt and Sitemap.xml</td><td>Valid XML sitemap accessible at <code>/sitemap.xml</code>; no accidental disallow tags.</td></tr>\n                </tbody>\n            </table>\n        </div>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "During a technical SEO audit, which file tells search engine web crawlers which pages or subdirectories they are permitted or forbidden to crawl?",
          "options": [
            "robots.txt",
            "styles.css",
            "index.html",
            "favicon.ico"
          ],
          "correctIndex": 0,
          "explanation": "The robots.txt file provides directives to web robots (e.g. Disallow: /wp-admin/) instructing them on what to crawl or skip."
        }
      ]
    },
    "lab-04-facebook-ads-campaign": {
      "id": "lab-04-facebook-ads-campaign",
      "title": "Practical Lab 4: 5-Day Facebook Ads Campaign Execution",
      "category": "cat-dm-practicals",
      "track": "track-practicals",
      "readTime": "8 min read",
      "lead": "Official Curricular Activity 4: Run a 5-day campaign on Facebook Ads Manager to drive traffic to your blog or create engagement for your Facebook page. Learn end-to-end setup to optimization.",
      "toolType": "ad_calc",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-brands fa-facebook\"></i> Laboratory Aim &amp; Curricular Mandate</h2>\n        <p><strong>Curricular Mandate:</strong> Run a 5-day campaign on Facebook Ads Manager to drive traffic to either your blog/website or create engagement for your Facebook page. Learn how to run the campaign from end to end from setup to optimization.</p>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-bullhorn\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Campaign Objectives</div>\n                <div class=\"callout-text\">Students will master Meta Ads Manager: setting up an ad account, defining custom audience segments, setting a \u20b9100/day 5-day budget (\u20b9500 total), authoring high-converting ad copy with creative variants, and monitoring CTR, CPC, and reach daily.</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>5-Day Execution Blueprint &amp; Daily Milestones</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Day</th><th>Operational Milestone</th><th>Practical Action Items</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Day 1: Setup &amp; Audience</strong></td><td>Campaign Architecture</td><td>Create Meta Ads Manager account. Select 'Traffic' or 'Engagement' objective. Define target audience: Age 18&ndash;25, Radius: 25 km around Srikalahasti/Tirupati, Interests: <em>Education, Career Development</em>.</td></tr>\n                    <tr><td><strong>Day 2: Creatives &amp; Launch</strong></td><td>Ad Creative Assembly</td><td>Create 2 ad creative variants (Variant A: Single Image with Orange Headline; Variant B: Carousel). Set budget at \u20b9100/day. Submit for Meta policy review and launch.</td></tr>\n                    <tr><td><strong>Day 3: Learning Phase Monitoring</strong></td><td>Telemetry Inspection</td><td>Log into dashboard after 24 hours. Record Day 1 metrics: Impressions, Unique Reach, Link Clicks, Amount Spent. Check for learning phase status.</td></tr>\n                    <tr><td><strong>Day 4: Mid-Campaign Optimization</strong></td><td>A/B Split Test Analysis</td><td>Compare Variant A vs Variant B. If Variant A has CTR of 3.2% vs Variant B's 1.1%, allocate remaining budget toward Variant A to optimize spend efficiency.</td></tr>\n                    <tr><td><strong>Day 5: Post-Campaign Audit</strong></td><td>Executive Reporting</td><td>Campaign concludes. Export CSV report. Calculate aggregate CPC, CPM, CTR, and Cost Per Result. Prepare visual student presentation.</td></tr>\n                </tbody>\n            </table>\n        </div>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "If your 5-day Facebook Ad campaign spent \u20b9500 and generated 250 link clicks to your blog, what was your realized Cost Per Click (CPC)?",
          "options": [
            "\u20b92.00 per click",
            "\u20b95.00 per click",
            "\u20b90.50 per click",
            "\u20b910.00 per click"
          ],
          "correctIndex": 0,
          "explanation": "CPC = Total Ad Spend / Total Clicks = \u20b9500 / 250 = \u20b92.00 per click."
        }
      ]
    },
    "lab-05-ga4-setup-reporting": {
      "id": "lab-05-ga4-setup-reporting",
      "title": "Practical Lab 5: Google Analytics 4 (GA4) Setup & Insights",
      "category": "cat-dm-practicals",
      "track": "track-practicals",
      "readTime": "8 min read",
      "lead": "Official Curricular Activity 5: Analyze your blog using Google Analytics 4 (GA4). Connect data streams, configure custom events, generate acquisition reports, and present actionable executive insights.",
      "toolType": "funnel",
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-chart-pie\"></i> Laboratory Aim &amp; Curricular Mandate</h2>\n        <p><strong>Curricular Mandate:</strong> Learners will analyze their blog using Google Analytics 4. They will generate, read and present insights from Google Analytics reports.</p>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-gauge-high\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Core Competencies</div>\n                <div class=\"callout-text\">Deploying Google Tag Manager / Global Site Tag (gtag.js) on WordPress, generating measurement IDs (<code>G-XXXXXXXXXX</code>), interpreting Realtime telemetry, and building Acquisition and User Engagement dashboards.</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Key GA4 Reports &amp; What They Reveal</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>GA4 Report Name</th><th>Key Metrics Displayed</th><th>Strategic Insight Derived</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Realtime Overview</strong></td><td>Users in last 30 minutes, top active pages, geographic country/city map.</td><td>Verifies tracking code installation and measures instant response during live webinars or campaign launches.</td></tr>\n                    <tr><td><strong>Traffic Acquisition</strong></td><td>Sessions by Session Default Channel Group (Organic Search, Direct, Paid Social, Referral).</td><td>Reveals which marketing channels drive the highest volume of qualified visitors.</td></tr>\n                    <tr><td><strong>Pages and Screens</strong></td><td>Views, Users, Average Engagement Time, Event Count per page URL.</td><td>Identifies most popular blog posts and pages suffering from high drop-off.</td></tr>\n                    <tr><td><strong>Events &amp; Conversions</strong></td><td>Custom events: <code>form_submit</code>, <code>syllabus_download</code>, <code>scroll_90</code>.</td><td>Quantifies high-value business actions and computes lead conversion rates.</td></tr>\n                </tbody>\n            </table>\n        </div>\n        <div id=\"interactive_tool_mount\"></div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the unique format prefix used for measurement identifiers in Google Analytics 4 (GA4)?",
          "options": [
            "G- (e.g. G-XXXXXXX)",
            "UA- (e.g. UA-XXXXXXX)",
            "IP- (e.g. IP-XXXXXXX)",
            "HTTP- (e.g. HTTP-XXXXXXX)"
          ],
          "correctIndex": 0,
          "explanation": "Google Analytics 4 uses the 'G-' prefix for measurement IDs, replacing the legacy Universal Analytics 'UA-' prefix."
        }
      ]
    },
    "dm-comprehensive-question-bank": {
      "id": "dm-comprehensive-question-bank",
      "title": "APSCHE University Exam Question Bank & Model Answers",
      "category": "cat-dm-tests",
      "track": "track-tests",
      "readTime": "10 min read",
      "lead": "Official University Examination Question Bank: Section A (Short Answer Questions with model answers) and Section B (Long Essay Questions with structured evaluation outlines).",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-graduation-cap\"></i> University Examination Structure &amp; Blueprint</h2>\n        <p>In accordance with the Andhra Pradesh State Council of Higher Education (APSCHE) pattern for Skill Enhancement Courses (Credits: 2 | 50 Marks End-Semester Exam):</p>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>Section</th><th>Question Format</th><th>Choice Scheme</th><th>Marks Allocation</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>Section A</strong></td><td>Short Answer Questions (5 Marks each)</td><td>Answer any 4 out of 8 questions</td><td>4 &times; 5 = <strong>20 Marks</strong></td></tr>\n                    <tr><td><strong>Section B</strong></td><td>Long Essay Questions (10 Marks each)</td><td>Answer 3 questions (Internal Choice from each Unit)</td><td>3 &times; 10 = <strong>30 Marks</strong></td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Section A: High-Yield Short Answer Questions &amp; Model Points</h2>\n        <div class=\"callout-box academic\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-file-lines\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Q1: Explain the POEM Framework with examples. (5 Marks)</div>\n                <p><strong>Model Answer Points:</strong><br>\n                1. <em>Owned Media:</em> Channels completely owned and controlled by the organization (e.g. college website, official blog, email newsletter list). Provides long-term asset value and brand safety.<br>\n                2. <em>Paid Media:</em> Marketing channels where exposure is purchased by paying a platform (e.g. Google PPC ads, Facebook sponsored ads, display banners). Provides immediate targeted reach.<br>\n                3. <em>Earned Media:</em> Organic publicity generated voluntarily by customers and press (e.g. positive reviews, viral shares, unpaid media mentions). Delivers highest consumer credibility.</p>\n            </div>\n        </div>\n\n        <div class=\"callout-box academic\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-file-lines\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Q2: Distinguish between WordPress Posts and Pages. (5 Marks)</div>\n                <p><strong>Model Answer Points:</strong><br>\n                &bull; <em>Posts:</em> Time-sensitive blog articles displayed in reverse chronological order; categorized using Categories and Tags; included in RSS feeds; comments enabled.<br>\n                &bull; <em>Pages:</em> Timeless, evergreen static documents (e.g. About Us, Contact Us); organized hierarchically with parent/child attributes; excluded from RSS feeds; comments disabled.</p>\n            </div>\n        </div>\n\n        <div class=\"callout-box academic\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-file-lines\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Q3: Define CTR, CPC, and ROAS with mathematical formulas. (5 Marks)</div>\n                <p><strong>Model Answer Points:</strong><br>\n                1. <em>CTR (Click-Through Rate):</em> <code>(Total Clicks / Total Impressions) &times; 100%</code><br>\n                2. <em>CPC (Cost Per Click):</em> <code>Total Ad Spend / Total Clicks</code><br>\n                3. <em>ROAS (Return on Ad Spend):</em> <code>Total Revenue Generated / Total Ad Spend</code></p>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"pedagogy-section\">\n        <h2>Section B: Long Essay Questions &amp; Detailed Outlines</h2>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-pen-fancy\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Q4: Discuss the 9 platforms of Digital Marketing and explain traditional-to-digital migration. (10 Marks)</div>\n                <p><strong>Structure:</strong> (a) Introduction to Digital Marketing &bull; (b) Detailed analysis of the 9 platforms (Website, SEM, Display, Email, Blog, SMM, Audio/Video, Online PR, Mobile) &bull; (c) Comparison between 4Ps (Product, Price, Place, Promotion) and 4Cs (Customer Solution, Cost to Satisfy, Convenience, Communication) &bull; (d) Strategic omnichannel migration roadmap.</p>\n            </div>\n        </div>\n\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-pen-fancy\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Q5: Explain the complete Search Engine Optimization (SEO) lifecycle. (10 Marks)</div>\n                <p><strong>Structure:</strong> (a) How search engines work (Crawling &rarr; Indexing &rarr; Ranking) &bull; (b) Keyword research &amp; 4 search intents &bull; (c) On-Page SEO checklist (Title tags, meta descriptions, H1-H6, Alt attributes, schema) &bull; (d) Off-Page SEO, PageRank, and white-hat inbound link building.</p>\n            </div>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In the APSCHE examination blueprint for Digital Marketing, what is the total marks allocation for the End-Semester Examination?",
          "options": [
            "50 Marks (Section A: 20 Marks + Section B: 30 Marks)",
            "100 Marks with no internal choice",
            "10 Marks only",
            "25 Marks practical only"
          ],
          "correctIndex": 0,
          "explanation": "The 2-credit Skill Enhancement Course End-Semester examination carries 50 marks (20 marks short answers + 30 marks essays)."
        }
      ]
    },
    "dm-viva-practical-questions": {
      "id": "dm-viva-practical-questions",
      "title": "Digital Marketing Viva-Voce & Industry Interview Q&A",
      "category": "cat-dm-tests",
      "track": "track-tests",
      "readTime": "8 min read",
      "lead": "Master practical viva-voce exams and corporate job interviews: Top 30 rapid-fire questions covering WordPress, SEO tools, Meta Ads Manager, GA4, and marketing analytics.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-comments\"></i> Top Practical Viva-Voce &amp; Job Interview Questions</h2>\n        <div class=\"table-container\">\n            <table class=\"data-table\">\n                <thead>\n                    <tr><th>#</th><th>Viva Question</th><th>Crisp Technical Model Answer</th></tr>\n                </thead>\n                <tbody>\n                    <tr><td><strong>1</strong></td><td>What is the difference between SEO and SEM?</td><td>SEO is organic (unpaid) optimization to earn ranking over time. SEM includes paid search ads (Google Ads PPC) where visibility is purchased instantly.</td></tr>\n                    <tr><td><strong>2</strong></td><td>Why is the Title tag important in On-Page SEO?</td><td>It is the most critical on-page ranking signal and serves as the clickable headline in Google SERPs. Recommended length: 50&ndash;60 characters.</td></tr>\n                    <tr><td><strong>3</strong></td><td>What is the function of the WordPress <code>wp-config.php</code> file?</td><td>It connects the WordPress application to the MySQL database, storing database host, username, password, and security salt keys.</td></tr>\n                    <tr><td><strong>4</strong></td><td>What is a Meta Pixel (formerly Facebook Pixel)?</td><td>A snippet of JavaScript placed on a website to track visitor events, measure ad conversions, and build retargeting audiences on Meta.</td></tr>\n                    <tr><td><strong>5</strong></td><td>What does Bounce Rate mean compared to GA4 Engagement Rate?</td><td>Bounce rate is the percentage of single-page visits without interaction. GA4 Engagement Rate measures sessions lasting 10+ seconds, viewing 2+ pages, or converting.</td></tr>\n                    <tr><td><strong>6</strong></td><td>What is the difference between CPC and CPM?</td><td>CPC (Cost Per Click) charges advertisers only when someone clicks. CPM (Cost Per Mille) charges for every 1,000 ad impressions regardless of clicks.</td></tr>\n                    <tr><td><strong>7</strong></td><td>What is CAN-SPAM compliance in email marketing?</td><td>Legal regulations requiring legitimate header info, a visible physical postal address, and a functioning 1-click unsubscribe link in marketing emails.</td></tr>\n                    <tr><td><strong>8</strong></td><td>What is the difference between dofollow and nofollow links?</td><td>Dofollow links pass search engine PageRank equity (\"link juice\"), while nofollow tells crawlers not to endorse the link destination.</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary function of the Meta Pixel installed on an e-commerce website?",
          "options": [
            "Tracking website visitor actions to measure ad conversions and build custom retargeting audiences",
            "Speeding up the internet connection for the visitor",
            "Encrypting customer credit card numbers on the server",
            "Designing logos automatically"
          ],
          "correctIndex": 0,
          "explanation": "The Meta Pixel tracks visitor actions (PageViews, AddToCart, Purchase) to measure conversion ROI and enable precise ad retargeting."
        }
      ]
    },
    "dm-mock-test-unit1": {
      "id": "dm-mock-test-unit1",
      "title": "Unit 1 Certification Mock Exam: Foundations of Digital Marketing",
      "category": "cat-dm-tests",
      "track": "track-tests",
      "readTime": "15 min exam",
      "lead": "Test your mastery of Unit 1: Concepts, POEM components, benefits, 9 digital platforms, traditional migration, and emerging AI trends with instant grading and detailed explanations.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-file-signature\"></i> Unit 1 Online Certification Practice Examination</h2>\n        <p>This exam assesses your theoretical and practical comprehension of Unit 1. Answer each multiple-choice question below and click <strong>Verify Answer</strong> to review instant scores and comprehensive rationales.</p>\n        <div class=\"callout-box info\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Exam Guidelines</div>\n                <div class=\"callout-text\">Passing Grade: 70% &bull; Total Questions: Unit 1 Core Syllabus &bull; Immediate Feedback Enabled.</div>\n            </div>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which of the following media components in the POEM model is completely owned and controlled by an organization without ongoing per-click media fees?",
          "options": [
            "Owned Media (e.g. Official website, blog, opt-in email list)",
            "Paid Media (e.g. Google PPC ads)",
            "Earned Media (e.g. Unpaid viral tweets)",
            "Rented Billboards on highways"
          ],
          "correctIndex": 0,
          "explanation": "Owned Media represents permanent organizational digital assets such as proprietary websites and customer email lists."
        },
        {
          "type": "multiple-choice",
          "question": "In Lauterborn's 4Cs customer-centric framework, what replaces the traditional 4Ps element of 'Promotion'?",
          "options": [
            "Communication (Two-way interactive dialogue)",
            "Cost to satisfy",
            "Customer solution",
            "Convenience"
          ],
          "correctIndex": 0,
          "explanation": "Lauterborn replaced one-way 'Promotion' with collaborative two-way 'Communication'."
        },
        {
          "type": "multiple-choice",
          "question": "Which digital marketing platform is characterized by pull-intent where users actively search for immediate solutions?",
          "options": [
            "Search Engine Marketing (SEM / Google Ads)",
            "Display Banner Ads",
            "Direct Mail Postcards",
            "Radio Commercials"
          ],
          "correctIndex": 0,
          "explanation": "SEM captures users actively querying search engines with high commercial intent."
        },
        {
          "type": "multiple-choice",
          "question": "What is the typical industry-reported open rate for messages delivered via WhatsApp Business compared to email?",
          "options": [
            "~98% open rate for WhatsApp vs ~20-25% for email",
            "~5% open rate for WhatsApp vs ~95% for email",
            "Both have identical open rates of 50%",
            "WhatsApp messages cannot be tracked"
          ],
          "correctIndex": 0,
          "explanation": "WhatsApp Business messages boast open rates near 98%, making it the highest engagement direct channel."
        },
        {
          "type": "multiple-choice",
          "question": "What is 'Programmatic Advertising' in modern digital marketing?",
          "options": [
            "The automated, algorithmic buying and selling of digital ad impressions in real-time auctions (RTB)",
            "Manually negotiating billboard contracts over the phone",
            "Hiring student interns to hand out paper flyers",
            "Advertising only on computer programming websites"
          ],
          "correctIndex": 0,
          "explanation": "Programmatic advertising uses algorithms to purchase ad impressions in sub-100-millisecond real-time bidding auctions."
        }
      ]
    },
    "dm-mock-test-unit2": {
      "id": "dm-mock-test-unit2",
      "title": "Unit 2 Certification Mock Exam: Web Design, WordPress & SEO",
      "category": "cat-dm-tests",
      "track": "track-tests",
      "readTime": "15 min exam",
      "lead": "Test your mastery of Unit 2: Web architecture, WordPress Posts vs. Pages, Gutenberg blocks, core plugins, On-Page SEO tags, Inbound Links, and Landing Page CRO.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-file-signature\"></i> Unit 2 Online Certification Practice Examination</h2>\n        <p>This exam assesses your technical knowledge of website development, WordPress plugins, search engine ranking algorithms, and conversion design.</p>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which of the following is a defining characteristic of a WordPress 'Page' as compared to a 'Post'?",
          "options": [
            "Pages are timeless/evergreen static documents organized hierarchically with parent/child attributes",
            "Pages are displayed in reverse chronological order with date stamps",
            "Pages are automatically syndicated to public RSS feeds",
            "Pages must be deleted after 24 hours"
          ],
          "correctIndex": 0,
          "explanation": "Pages are static and timeless (e.g. About, Contact), organized hierarchically without tags or chronological feeds."
        },
        {
          "type": "multiple-choice",
          "question": "What is the recommended character length limit for an SEO Title tag to avoid truncation in Google SERPs?",
          "options": [
            "50 to 60 characters (approximately 600 pixels width)",
            "150 to 200 characters",
            "Exactly 1 word",
            "No limit exists"
          ],
          "correctIndex": 0,
          "explanation": "Google truncates titles exceeding 60 characters or ~600 pixels on desktop and mobile viewports."
        },
        {
          "type": "multiple-choice",
          "question": "Which essential WordPress plugin is deployed to create drag-and-drop lead capture forms for student inquiries?",
          "options": [
            "WPForms (or Gravity Forms)",
            "Yoast SEO",
            "Wordfence Security",
            "WP Super Cache"
          ],
          "correctIndex": 0,
          "explanation": "WPForms is the standard WordPress form builder for contact forms and lead capture."
        },
        {
          "type": "multiple-choice",
          "question": "What does a 1:1 Attention Ratio mean on a high-converting dedicated landing page?",
          "options": [
            "There is exactly one clickable conversion goal corresponding to the single purpose of the campaign",
            "One visitor views the page for exactly one second",
            "The page has equal numbers of images and paragraphs",
            "Every user must be accompanied by one supervisor"
          ],
          "correctIndex": 0,
          "explanation": "A 1:1 attention ratio means removing extraneous navigation links so visitors have only one focused conversion path."
        },
        {
          "type": "multiple-choice",
          "question": "Which HTML heading tag should appear exactly once per webpage and contain the primary focus keyword?",
          "options": [
            "&lt;h1&gt;",
            "&lt;h6&gt;",
            "&lt;p&gt;",
            "&lt;span&gt;"
          ],
          "correctIndex": 0,
          "explanation": "The <h1> tag represents the primary semantic title of the webpage and should be used exactly once per URL."
        }
      ]
    },
    "dm-mock-test-unit3": {
      "id": "dm-mock-test-unit3",
      "title": "Unit 3 Certification Mock Exam: Social Media & Analytics",
      "category": "cat-dm-tests",
      "track": "track-tests",
      "readTime": "15 min exam",
      "lead": "Test your mastery of Unit 3: Facebook Ads, LinkedIn B2B, YouTube Video SEO, Customer Inbound Flywheel, Ad metrics formulas (CTR, CPC, ROAS), and GA4 telemetry.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-file-signature\"></i> Unit 3 Online Certification Practice Examination</h2>\n        <p>This exam assesses your analytical mastery of social media marketing, advertising math, conversion tracking, and Google Analytics 4 reporting.</p>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the formula to calculate Click-Through Rate (CTR)?",
          "options": [
            "(Total Clicks / Total Impressions) * 100%",
            "(Total Spend / Total Clicks)",
            "(Total Conversions / Total Spend)",
            "(Total Revenue / Total Impressions)"
          ],
          "correctIndex": 0,
          "explanation": "CTR = (Clicks / Impressions) * 100%, expressing the percentage of viewers who clicked an ad or link."
        },
        {
          "type": "multiple-choice",
          "question": "If an advertiser invests \u20b920,000 on Facebook Ads and generates \u20b9100,000 in product sales, what is the Return on Ad Spend (ROAS)?",
          "options": [
            "5.0x",
            "2.0x",
            "0.20x",
            "10.0x"
          ],
          "correctIndex": 0,
          "explanation": "ROAS = Revenue / Ad Spend = \u20b9100,000 / \u20b920,000 = 5.0x."
        },
        {
          "type": "multiple-choice",
          "question": "In Meta Ads Manager, which campaign hierarchy level contains audience demographics, placements, and daily budget?",
          "options": [
            "Ad Set Level",
            "Campaign Level",
            "Ad Creative Level",
            "Page Admin Settings"
          ],
          "correctIndex": 0,
          "explanation": "Audience targeting, placements, and budgets are configured at the Ad Set level."
        },
        {
          "type": "multiple-choice",
          "question": "Which metric is the primary ranking factor in YouTube's recommendation algorithm?",
          "options": [
            "Audience Retention and Average Percentage Viewed (APV)",
            "The number of characters in the video title",
            "The computer hardware used to upload the video",
            "The duration of the video thumbnail file name"
          ],
          "correctIndex": 0,
          "explanation": "Audience Retention (how long viewers watch) is YouTube's #1 algorithmic ranking and recommendation signal."
        },
        {
          "type": "multiple-choice",
          "question": "Which attribution model awards 100% of conversion revenue credit to the initial touchpoint that first introduced the customer?",
          "options": [
            "First-Click Attribution",
            "Last-Click Attribution",
            "Linear Attribution",
            "Time-Decay Attribution"
          ],
          "correctIndex": 0,
          "explanation": "First-Click attribution assigns 100% credit to the discovery channel that initiated the customer journey."
        }
      ]
    },
    "dm-grand-mock-exam": {
      "id": "dm-grand-mock-exam",
      "title": "Grand Semester Comprehensive Examination (Full Syllabus)",
      "category": "cat-dm-tests",
      "track": "track-tests",
      "readTime": "25 min exam",
      "lead": "The ultimate comprehensive assessment: Full-syllabus final exam covering Unit 1, Unit 2, Unit 3, practical tools, and marketing formulas with complete answer rationale.",
      "toolType": null,
      "htmlContent": "\n    <section class=\"pedagogy-section\">\n        <h2><i class=\"fa-solid fa-award\" style=\"color: #f59e0b;\"></i> Grand Semester Comprehensive Final Examination</h2>\n        <p>This grand mock examination rigorously benchmarks your end-to-end knowledge of the entire APSCHE Digital Marketing Skill Enhancement Course. Test your understanding across all three academic units and practical lab applications.</p>\n        <div class=\"callout-box success\">\n            <div class=\"callout-icon\"><i class=\"fa-solid fa-certificate\"></i></div>\n            <div class=\"callout-content\">\n                <div class=\"callout-title\">Grading Scale &amp; Honors Certification</div>\n                <div class=\"callout-text\">Achieving &ge; 80% signifies University Distinction readiness &bull; Instant rationale provided for each response.</div>\n            </div>\n        </div>\n    </section>\n    ",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What are the three components of the POEM digital media framework?",
          "options": [
            "Paid Media, Owned Media, and Earned Media",
            "Product Media, Operational Media, and Electronic Media",
            "Public Media, Online Media, and Educational Media",
            "Postal Media, Outdoor Media, and Email Media"
          ],
          "correctIndex": 0,
          "explanation": "POEM stands for Paid Media (ads), Owned Media (websites/blogs), and Earned Media (organic word-of-mouth)."
        },
        {
          "type": "multiple-choice",
          "question": "In search engine mechanics, what is the process of automated bots discovering new and updated web pages by following hyperlinks called?",
          "options": [
            "Crawling",
            "Indexing",
            "Ranking",
            "Attribution"
          ],
          "correctIndex": 0,
          "explanation": "Crawling is the discovery phase where search engine spiders (Googlebot) traverse the web following hyperlinks."
        },
        {
          "type": "multiple-choice",
          "question": "Which of the following describes the core difference between WordPress Posts and WordPress Pages?",
          "options": [
            "Posts are time-stamped and organized by categories/tags; Pages are static, timeless documents organized hierarchically",
            "Posts are only for pictures; Pages are only for text",
            "Posts can only be written by administrators; Pages can only be viewed on smartphones",
            "There is no difference in functionality or database structure"
          ],
          "correctIndex": 0,
          "explanation": "Posts are chronological and categorized, while Pages are static and hierarchical (e.g. About, Contact)."
        },
        {
          "type": "multiple-choice",
          "question": "If an advertiser spends \u20b915,000 on an ad campaign that delivers 300,000 impressions, what is the Cost Per Mille (CPM)?",
          "options": [
            "\u20b950.00 per 1,000 impressions",
            "\u20b95.00 per 1,000 impressions",
            "\u20b90.05 per 1,000 impressions",
            "\u20b9500.00 per 1,000 impressions"
          ],
          "correctIndex": 0,
          "explanation": "CPM = (Spend / Impressions) * 1,000 = (\u20b915,000 / 300,000) * 1,000 = \u20b950.00."
        },
        {
          "type": "multiple-choice",
          "question": "Which Google Analytics 4 (GA4) metric replaces the legacy Universal Analytics 'Bounce Rate' to measure active engagement?",
          "options": [
            "Engagement Rate (sessions lasting >10s, with 2+ pages, or with a conversion)",
            "Click Rate",
            "Server Ping Latency",
            "Total RAM usage"
          ],
          "correctIndex": 0,
          "explanation": "GA4 introduced Engagement Rate to positively quantify sessions that actively engaged with content."
        },
        {
          "type": "multiple-choice",
          "question": "Which multi-touch attribution model assigns equal fractional credit to every single marketing channel across the customer journey?",
          "options": [
            "Linear Attribution Model",
            "First-Click Attribution Model",
            "Last-Click Attribution Model",
            "Time-Decay Attribution Model"
          ],
          "correctIndex": 0,
          "explanation": "The Linear model distributes 100% of conversion credit equally across all recorded touchpoints."
        }
      ]
    }
  }
};

  // Public API
  window.CurriculumData = {
    getTracks: () => DATA.tracks,
    getCategories: () => DATA.categories,
    getTopics: () => DATA.topics,
    getTopic: (id) => DATA.topics[id] || null,
    getOrderedTopicIds: () => ["dm-course-overview", "dm-intro-concept-components", "dm-benefits-digital-vs-traditional", "dm-platforms-overview", "dm-email-mobile-marketing", "dm-emerging-trends-ai", "dm-unit1-activities-rubrics", "web-design-fundamentals", "elements-good-website-responsive", "wordpress-architecture-content", "wordpress-plugins-ecosystem", "ui-ux-design-principles", "seo-fundamentals-web-search", "seo-keywords-mastery", "seo-onpage-html-tags", "seo-offpage-inbound-links", "display-ads-formats", "landing-pages-cro", "dm-unit2-activities-rubrics", "social-media-ecosystem", "smm-facebook-marketing", "smm-linkedin-b2b", "smm-blogging-medium", "smm-twitter-x-microblogging", "smm-youtube-video-marketing", "customer-lifecycle-funnel", "digital-media-measurement-metrics", "website-performance-analytics", "advertising-performance-attribution", "dm-unit3-activities-rubrics", "lab-01-frameworks-trends", "lab-02-wordpress-blog-creation", "lab-03-seo-website-audit", "lab-04-facebook-ads-campaign", "lab-05-ga4-setup-reporting", "dm-comprehensive-question-bank", "dm-viva-practical-questions", "dm-mock-test-unit1", "dm-mock-test-unit2", "dm-mock-test-unit3", "dm-grand-mock-exam"],
    getAdjacentTopics: (id) => {
      const list = ["dm-course-overview", "dm-intro-concept-components", "dm-benefits-digital-vs-traditional", "dm-platforms-overview", "dm-email-mobile-marketing", "dm-emerging-trends-ai", "dm-unit1-activities-rubrics", "web-design-fundamentals", "elements-good-website-responsive", "wordpress-architecture-content", "wordpress-plugins-ecosystem", "ui-ux-design-principles", "seo-fundamentals-web-search", "seo-keywords-mastery", "seo-onpage-html-tags", "seo-offpage-inbound-links", "display-ads-formats", "landing-pages-cro", "dm-unit2-activities-rubrics", "social-media-ecosystem", "smm-facebook-marketing", "smm-linkedin-b2b", "smm-blogging-medium", "smm-twitter-x-microblogging", "smm-youtube-video-marketing", "customer-lifecycle-funnel", "digital-media-measurement-metrics", "website-performance-analytics", "advertising-performance-attribution", "dm-unit3-activities-rubrics", "lab-01-frameworks-trends", "lab-02-wordpress-blog-creation", "lab-03-seo-website-audit", "lab-04-facebook-ads-campaign", "lab-05-ga4-setup-reporting", "dm-comprehensive-question-bank", "dm-viva-practical-questions", "dm-mock-test-unit1", "dm-mock-test-unit2", "dm-mock-test-unit3", "dm-grand-mock-exam"];
      const idx = list.indexOf(id);
      if (idx === -1) return { prev: null, next: null };
      return {
        prev: idx > 0 ? DATA.topics[list[idx - 1]] : null,
        next: idx < list.length - 1 ? DATA.topics[list[idx + 1]] : null
      };
    }
  };

})(window);
