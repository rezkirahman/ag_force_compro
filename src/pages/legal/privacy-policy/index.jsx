import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function Index() {
    return (
        <>
            <div className="bg-slate-100 space-y-6 relative">
                <Head>
                    <title>AG Force | Privacy Policy</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className='bg-primary'>
                    <div className='text-white container mx-auto flex items-end justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-6'>
                        <div className=''>
                            <h3 className='text-2xl font-bold'>AG Force</h3>
                            <h3 className='tracking-normal text-lg'>Privacy Policy.</h3>
                        </div>
                        <Link href='/legal/terms-of-service'>
                            <button className='py-2 px-4 rounded-xl font-semibold border-2 border-white border-opacity-50 hover:bg-white hover:border-transparent hover:bg-opacity-20 text-[14px] transition-all'>
                                Terms of Service
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="container bg-white mx-auto space-y-8 px-4 py-6 sm:px-6 md:px-8 lg:px-10 shadow-lg">
                        <div>
                            <strong className="text-xl text-primary">1. Introduction</strong>
                            <p className="mt-2">Welcome to <strong>PT Artha Inovasi Gemilang</strong>.</p>
                            <p><strong>PT Artha Inovasi Gemilang</strong> (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates <strong>AG Force</strong> (hereinafter referred to as <strong>&ldquo;Service&rdquo;</strong>).</p>
                            <p>Our Privacy Policy governs your visit to <strong>AG Force</strong>, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
                            <p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
                            <p>Our Terms and Conditions (<strong>&ldquo;Terms&rdquo;</strong>) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (<strong>&ldquo;agreement&rdquo;</strong>).</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">2. Definitions</strong>
                            <p className="mt-2"><strong>SERVICE</strong> means the AG Force website operated by PT Artha Inovasi Gemilang.</p>
                            <p><strong>PERSONAL DATA</strong> means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
                            <p><strong>USAGE DATA</strong> is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).</p>
                            <p><strong>COOKIES</strong> are small files stored on your device (computer or mobile device).</p>
                            <p><strong>DATA CONTROLLER</strong> means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>
                            <p><strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong> means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>
                            <p><strong>DATA SUBJECT</strong> is any living individual who is the subject of Personal Data.</p>
                            <p><strong>THE USER</strong> is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">3. Information Collection and Use</strong>
                            <p className="mt-2">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                        </div>
                        <div className='space-y-2'>
                            <strong className="text-xl text-primary ">4. Types of Data Collected</strong>
                            <div>
                                <p><strong>Personal Data</strong></p>
                                <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (<strong>&ldquo;Personal Data&rdquo;</strong>). Personally identifiable information may include, but is not limited to:</p>
                                <ul className='list-decimal ml-6 my-2'>
                                    <li>Email address</li>
                                    <li>First name and last name</li>
                                    <li>Phone number</li>
                                    <li>Address, Country, State, Province, ZIP/Postal code, City</li>
                                    <li>Cookies and Usage Data</li>
                                </ul>
                                <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.</p>
                            </div>
                            <div>
                                <p><strong>Usage Data</strong></p >
                                <p>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (<strong>&ldquo;Usage Data&rdquo;</strong>).</p>
                                <p>This Usage Data may include information such as your computer&rsquo;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                <p>When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.</p>
                            </div>
                            <div>
                                <p><strong>Location Data</strong></p >
                                <p>We may use and store information about your location if you give us permission to do so (<strong>&ldquo;Location Data&rdquo;</strong>). We use this data to provide features of our Service, to improve and customize our Service.</p>
                                <p>You can enable or disable location services when you use our Service at any time by way of your device settings.</p>
                            </div>
                            <div>
                                <p><strong>Tracking Cookies Data</strong></p >
                                <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
                                <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.</p>
                                <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                                <p>Examples of Cookies we use:</p>
                                <ul className='list-decimal ml-6 my-2'>
                                    <li><strong>Session Cookies:</strong> We use Session Cookies to operate our Service.</li>
                                    <li><strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                                    <li><strong>Security Cookies:</strong> We use Security Cookies for security purposes.</li>
                                    <li><strong>Advertising Cookies:</strong> Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>
                                </ul>
                                <p><strong>Other Data</strong></p >
                                <p>While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, <a href="https://policymaker.io/non-disclosure-agreement/">NDA agreements</a >, information on bonuses and compensation, information on marital status, family members, social security(or other taxpayer identification) number, office location and other data.</p >
                            </div>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">5. Use of Data</strong>
                            <p className="mt-2">PT Artha Inovasi Gemilang uses the collected data for various purposes:</p>
                            <ul className='list-decimal ml-6 my-2'>
                                <li>to provide and maintain our Service;</li>
                                <li>to notify you about changes to our Service;</li>
                                <li>to allow you to participate in interactive features of our Service when you choose to do so;</li>
                                <li>to provide customer support;</li>
                                <li>to gather analysis or valuable information so that we can improve our Service;</li>
                                <li>to monitor the usage of our Service;</li>
                                <li>to detect, prevent and address technical issues;</li>
                                <li>to fulfil any other purpose for which you provide it;</li>
                                <li>to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</li>
                                <li>to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;</li>
                                <li>to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</li>
                                <li>in any other way we may describe when you provide the information;</li>
                                <li>for any other purpose with your consent.</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">6. Retention of Data</strong>
                            <p className="mt-2">We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                            <p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">7. Transfer of Data</strong>
                            <p className="mt-2">Your information, including Personal Data, may be transferred to &ndash; and maintained on &ndash; computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
                            <p>If you are located outside Indonesia and choose to provide information to us, please note that we transfer the data, including Personal Data, to Indonesia and process it there.</p>
                            <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                            <p>PT Artha Inovasi Gemilang will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">8. Disclosure of Data</strong>
                            <p className="mt-2">We may disclose personal information that we collect, or you provide:</p>
                            <ul className='list-decimal ml-6 my-2 space-y-2'>
                                <li><strong>Disclosure for Law Enforcement.</strong><br />Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.</li>
                                <li><strong>Business Transaction.</strong><br />If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.</li>
                                <div>
                                    <li><strong>Other cases. We may disclose your information also:</strong></li>
                                    <ul className='list-disc ml-4'>
                                        <li>to our subsidiaries and affiliates;</li>
                                        <li>to contractors, service providers, and other third parties we use to support our business;</li>
                                        <li>to fulfill the purpose for which you provide it;</li>
                                        <li>for the purpose of including your company&rsquo;s logo on our website;</li>
                                        <li>for any other purpose disclosed by us when you provide the information;</li>
                                        <li>with your consent in any other cases;</li>
                                        <li>if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.</li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">9. Security of Data</strong>
                            <p className="mt-2">The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">10. Your Data Protection Rights Under General Data Protection Regulation (GDPR) </strong>
                            <p className="mt-2">If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.</p>
                            <p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
                            <p>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at <strong>admin.mail@aig-id.com</strong>.</p>
                            <p>In certain circumstances, you have the following data protection rights:</p>
                            <ul className='list-decimal ml-6 my-2'>
                                <li>the right to access, update or to delete the information we have on you;</li>
                                <li>the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</li>
                                <li>the right to object. You have the right to object to our processing of your Personal Data;</li>
                                <li>the right of restriction. You have the right to request that we restrict the processing of your personal information;</li>
                                <li>the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</li>
                                <li>the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</li>
                            </ul>
                            <p>Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>
                            <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">11. Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</strong>
                            <p className="mt-2">CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law&rsquo;s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.</p>
                            <p>According to CalOPPA we agree to the following:</p>
                            <ul className='list-decimal ml-6 my-2'>
                                <li>users can visit our site anonymously;</li>
                                <li>our Privacy Policy link includes the word &ldquo;Privacy&rdquo;, and can easily be found on the home page of our website;</li>
                                <li>users will be notified of any privacy policy changes on our Privacy Policy Page;</li>
                                <li>users are able to change their personal information by emailing us at <strong>admin.mail@aig-id.com</strong>.</li>
                            </ul>
                            <p>Our Policy on &ldquo;Do Not Track&rdquo; Signals:</p>
                            <p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>
                            <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">12. Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</strong>
                            <p className="mt-2">If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:</p>
                            <ul className='list-decimal ml-6 my-2'>
                                <li>
                                    <strong>What personal information we have about you. If you make this request, we will return to you:</strong>
                                    <ul className='list-disc ml-4'>
                                        <li>The categories of personal information we have collected about you.</li>
                                        <li>The categories of sources from which we collect your personal information.</li>
                                        <li>The business or commercial purpose for collecting or selling your personal information.</li>
                                        <li>The categories of third parties with whom we share personal information.</li>
                                        <li>The specific pieces of personal information we have collected about you.</li>
                                        <li>A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.</li>
                                        <li>A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.</li>
                                    </ul>
                                    <p>Please note, you are entitled to ask us to provide you with this information up to two times in a rolling twelve-month period. When you make this request, the information provided may be limited to the personal information we collected about you in the previous 12 months.</p>
                                </li>
                                <li><strong>To delete your personal information. If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.</strong></li>
                                <li><strong>To stop selling your personal information. We don&rsquo;t sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some circumstances, a transfer of personal information to a third party, or within our family of companies, without monetary consideration may be considered a &ldquo;sale&rdquo; under California law. You are the only owner of your Personal Data and can request disclosure or deletion at any time.</strong></li>
                            </ul>
                            <p>If you submit a request to stop selling your personal information, we will stop making such transfers.</p>
                            <p>Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.</p>
                            <p>To exercise your California data protection rights described above, please send your request(s) by email: <strong>admin.mail@aig-id.com</strong>.</p>
                            <p>Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">13. Service Providers</strong>
                            <p className="mt-2">We may employ third party companies and individuals to facilitate our Service (<strong>&ldquo;Service Providers&rdquo;</strong>), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>
                            <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">14. Analytics</strong>
                            <p className="mt-2">We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">15. CI/CD tools</strong>
                            <p className="mt-2">We may use third-party Service Providers to automate the development process of our Service.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">16. Behavioral Remarketing</strong>
                            <p className="mt-2">We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">17. Payments</strong>
                            <p className="mt-2">We may provide paid products and/or services within Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p>
                            <p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>
                        </div>
                        <div>
                            <strong className="text-xl text-primary">18. Links to Other Sites</strong>
                            <p className="mt-2">Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party&rsquo;s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                            <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                            <p>For example, the outlined <a href="https://policymaker.io/privacy-policy/">privacy policy</a > has been made using <a href="https://policymaker.io/" >PolicyMaker.io</a >, a free tool that helps create high - quality legal documents.PolicyMaker & rsquo;s <a href="https://policymaker.io/privacy-policy/">privacy policy generator</a > is an easy - to - use tool for creating a <a href="https://policymaker.io/blog-privacy-policy/">privacy policy for blog</a>, website, e - commerce store or mobile app.</p >
                        </div>
                        <div>
                            <strong className="text-xl text-primary">19. Children&rsquo;s Privacy</strong>
                            <p className="mt-2">Our Services are not intended for use by children under the age of 18 (<strong>&ldquo;Child&rdquo;</strong> or <strong>&ldquo;Children&rdquo;</strong>).</p >
                            <p>We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.</p >
                        </div>
                        <div>
                            <strong className="text-xl text-primary">20. Changes to This Privacy Policy</strong>
                            <p className="mt-2">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p >
                            <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update &ldquo;effective date&rdquo; at the top of this Privacy Policy.</p >
                            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p >
                        </div>
                        <div>
                            <strong className="text-xl text-primary">21. Contact Us</strong>
                            <p className="mt-2">If you have any questions about this Privacy Policy, please contact us by email: <strong>admin.mail@aig-id.com</strong></p >
                        </div>
                    </div>
                </div >
                <div className="bg-white py-4">
                    <div className="container w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6">
                        <div>
                            <Link href='/'>
                                <Image src={'/logo.png'} width={132} height={132} alt="logo" className='mx-auto ' />
                            </Link>
                        </div>
                    </div>
                    <h3 className='text-[12px] text-center'>Copyright© 2022 AG Force. All Rights Reserved.</h3>
                </div>
            </div >
        </>
    )
}