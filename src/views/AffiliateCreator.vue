<template>
	<div>
		<v-container>
			<v-row v-if="!user.email">
				<v-col cols="12">
					<login-account></login-account>
				</v-col>
			</v-row>
			<v-row v-if="user.email">
				<v-container>
				<v-card class="pa-5">
					<v-card-title>
						Personal Information
					</v-card-title>
					<v-card-text>
					<v-row>
						<v-col cols="12">
							<v-text-field
								readonly
								v-model="user.firstName"
								label="First name"
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								readonly
								v-model="user.lastName"
								label="Last name"
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								readonly
								v-model="user.email"
								label="Email"
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								readonly
								v-model="user.userName"
								label="Username"
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								v-model="streetAddress"
								:rules="streetAddressRules"
								label="Street address"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								v-model="additionalAddress"
								:rules="additionalAddressRules"
								label="Additional address"
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								v-model="city"
								:rules="cityRules"
								:counter="20"
								label="City"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-autocomplete
								:items="states"
								v-model="state"
								:filter="customFilter"
								item-text="name"
								label="State"
								required
							></v-autocomplete>
						</v-col>
						<v-col cols="12">
							<v-text-field
								v-model="phoneNumber"
								:rules="phoneNumberRules"
								:counter="10"
								label="Phone number"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								v-model="zipCode"
								:rules="zipCodeRules"
								:counter="5"
								label="Zip Code"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-autocomplete
								v-model="country"
								:items="countries"
								:filter="customFilter"
								item-text="name"
								label="Country"
								required
							></v-autocomplete>
						</v-col>
					</v-row>
					</v-card-text>
					</v-card>
				</v-container>
				<v-col cols="12">
					<v-card class="pa-5">
						<v-card-title>
							Commission Payment
						</v-card-title>
						<v-card-text>
							<v-select
								:items="commissionPaymentMethod"
								v-model="selectedPaymentMethod"
								label="Commission Payment Method"
								required
							></v-select>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card
						height="500"
						class="scroll pa-5"
					>
						<v-card-title>
							Terms and Conditions
						</v-card-title>
						<v-card-text>
							<p>
								To be an authorized affiliate of Shiaqga.com, you agree to abide by the terms and conditions contained in this agreement.
							</p>
							<p>
								Please read this agreement carefully before registering and using the Shiaqga.com affiliate service as an affiliate.  By signing up for the Shiaqga.com affiliate program, you indicate your acceptance of this agreement and its terms and conditions.
							</p>
							<p>
								************************
								Shiaqga Affiliate Program Agreement
							</p>
							<p>
								This Agreement and the Publisher Membership Agreement (the "PMA") between you and Shiaqg.com contain the terms and conditions that apply to your participation as an Affiliate in Shiaqga.com Affiliate Program, and the establishment of links from our www.Shiaqga.com website and any website you control.
							</p>
							<p>
								As used in this Agreement, "we," "us" and "our" refer to the Shiaqga company; "you" and "your" refer to the person or entity participating, or desiring to participate, as an affiliate in the Program (an "Affiliate"); "Network" refers to the iDevAffiliate Network; "Site" means a World Wide Web site and, depending on the context, refers to our website or to the website that you will link to our website (and which you will identify in your Affiliate Application); "include" or "including" means "including, without limitation"; and "Shiaqga's Content" means content that we provide to you under this Agreement.
							</p>
							<p>
								By submitting your Affiliate Application and participating in the Program you are confirming that you have read this Agreement and you agree to be bound by the following terms and conditions.
							</p>
							<p>
								1. Enrollment in the Program.
								To begin the enrollment process, you must submit a complete Affiliate Application via our Site through the Network.  We will evaluate your application and will notify you of your acceptance or rejection for participation in the Program.  We may reject your application for the Program for any reason but specifically if you or any of your website does the following:
							</p>
							<p>
								– Promote violence or hate toward any persons or groups.
							</p>
							<p>
								– Promote unlawful discrimination, including discrimination based on race, sex, age, religion, nationality, disability or sexual orientation.
							</p>
							<p>
								– Promote or engage in illegal, unethical, obscene or immoral activities.
							</p>
							<p>
								– Contain material that is defamatory, fraudulent or harassing.
							</p>
							<p>
								– Misrepresent themselves as the Shiaqga website by using the "look and feel" of or text from our Site.
							</p>
							<p>
								– Include Shiaqga or variations or misspellings thereof in their domain names (e.g., ".com," ".net," ".org," ".uk," etc.). For example, a URL such as Shiaqga.mydomain.com would not be acceptable.
							</p>
							<p>
								– Otherwise violate our intellectual property rights or those of our affiliates.
							</p>
							<p>
								– Are otherwise are considered offensive or inappropriate.
							</p>
							<p>
								– Link to or provide a portion of their commission or affiliate benefits to Sites or organizations that are described in any of the above criteria.
							</p>
							<p>
								You also should note that if we accept you to participate in the Program and we thereafter determine (in our sole discretion) that your site is unsuitable based on our criteria for the Program, we may terminate this Agreement immediately and without penalty or prior notice. If any information in your Affiliate Application changes, you must promptly notify us of the change and we reserve the right to terminate this Agreement, immediately and without penalty or prior notice, in our sole discretion.
							</p>
							<p>
								2. Links on Your Site.
								Upon acceptance into the Program, we will make available to you links that, subject to the terms and conditions of this Agreement, you may display as often and in as many areas on your Site as you like.  All such links that you will use in the Program will be provided to you from the Network. If you choose to display graphic images we provide, you will display in your Site only those graphic we provided in the form and appearance provided, without alteration. We will track only valid links generated by the Network for purposes of determining referral fees that you may be eligible to receive on sales of products generated through your Site.
							</p>
							<p>
								You acknowledge that, by participating in the Program and placing a link to our Site (or any page therein) on your Site, we may receive information from or about visitors to your Site or communications between your Site and those visitors. Your participation in the Program constitutes your specific and unconditional consent to, and authorization for our access to, receipt, storage, use, and disclosure of any and all such information, consistent with the policies and procedures set forth in our Privacy Policy.
							</p>
							<p>
								3. Your Obligations.
								As a condition to your acceptance and participation in the Program, you will comply at all times with all federal, state, provincial and foreign laws, statutes, ordinances, rules, regulations, orders, judgments and decrees applicable to you, your Sites, your business and your participation in the Program. In addition, you will not:
							</p>
							<p>
								a) use the name Shiaqga, or any variation thereof, in any manner not expressly authorized by this Agreement;
							</p>
							<p>
								b) use or otherwise incorporate the word Shiaqga or variations or misspellings thereof in the domain names of your Site, on any meta tags of Web pages comprising your Site, in hidden text or source code, or in searchable keywords;
							</p>
							<p>
								c) engineer your Site in such a manner that pulls or diverts internet traffic away from our Site;
							</p>
							<p>
								d) attempt to modify or alter our Site or any Site with which we are affiliated in any way;
							</p>
							<p>
								e) make any representations, either express or implied, or create an appearance, that a visitor to your Site is visiting our Site (for example, "framing" our Site), without our express prior written approval;
							</p>
							<p>
								f) "scrape" or "spider" our Site or any other Shiaqga Site for content (such as images, logos or text);
							</p>
							<p>
								g) wrap or frame our Site in any manner without first obtaining in advance our express prior written approval. Requests for approval under clause 5) above or this clause 7) must be made by sending an email to admin@shiaqga.com;
							</p>
							<p>
								h) generate or send any email messages using or containing our name or logo, or any variation thereof, any of our Trademarks (as defined below) or any of our products, without our express prior written permission;
							</p>
							<p>
								i) forward, redistribute, or otherwise repurpose any email communications or newsletters that we send to our affiliates or customers;
							</p>
							<p>
								j) generate or send any unsolicited email (spam) under this Agreement;
							</p>
							<p>
								k) modify price information regarding our products or offers on your Site; or
							</p>
							<p>
								l) create, link to or host any type of shopping cart between our Site and your Site.
							</p>
							<p>
								Violation of this Agreement may result in, among other things, the immediate termination of this Agreement and the commencement of an action by us against you seeking, without limitation, injunctive relief and recovery of actual, statutory and punitive damages.
							</p>
							<p>
								We have the right in our sole and absolute discretion to monitor your Site at any time and from time to time to determine whether you are in compliance with the terms of this Agreement, and you agree to provide us with unrestricted access to your Site for that purpose.
							</p>
							<p>
								4. Responsibility for Your Site.
								You acknowledge that by entering into this Agreement we do not assume, and should not be exposed to, the business and operational risks associated with your business or any aspects of the operation or content of your Site. You will be solely responsible for the development, operation and maintenance of your Site and for all content (other than Shiaqga's Content that appears on your Site). These responsibilities include:
							</p>
							<p>
								– the technical operation of your Site and all related equipment;
							</p>
							<p>
								– the accuracy, timeliness and appropriateness of material posted on your Site (including all product-related materials);
							</p>
							<p>
								– ensuring that your Site complies with all copyright and other laws;
							</p>
							<p>
								– ensuring that materials posted on your Site (other than Shiaqga's Content that is used as permitted hereunder) do not violate or infringe upon the rights of any third party (including copyrights, trademarks, privacy, or other personal or proprietary rights);
							</p>
							<p>
								– ensuring that content (other than Vitamin World's Content that is used as permitted hereunder) posted on your Site is not libelous or otherwise illegal; and
							</p>
							<p>
								– notifying us and the Network of any link malfunctioning or other problems with your participation in the Program thereunder the terms of the Offer (as defined below) and this Agreement.
							</p>
							<p>
								We disclaim all liability for all matters (other than Shiaqga's Content).  Your Site will not, in any way, copy or resemble the design of our Site, nor will your Site falsely create the impression that your Site is our Site or is part of our Site.
							</p>
							<p>
								The information provided on our Site and in our online advertisements is intended for a consumer's general knowledge only and is not a substitute for professional medical advice or treatment for specific medical conditions.  Consumers should always seek the advice of a physician or other qualified health care provider with any questions regarding medical conditions. The information on our Site and in our online advertisements has not been evaluated by the United States Food and Drug Administration and is not intended to diagnose, treat, cure or prevent any disease. Consumers should never disregard medical advice or delay in seeking it because of something they have read on our Site or in our online advertisements. Your Site will not represent our Site, our online advertisements or our products in any way that will conflict with these statements.
							</p>
							<p>
								Your Site will not copy, reproduce, display, or contain any content obtained or derived from our Site or any materials which are proprietary to us, except (i) with our prior written permission, or (ii) materials which are obtained by you via iDevAffiliate under the provisions of this Agreement or the policies or instructions related to this material. You will not purchase or otherwise contract with a third party to exploit any of our proprietary materials for the purpose of causing your Site to appear as a search result or for any other reason.
							</p>
							<p>
								5. Order Processing.
								We will process product orders placed by customers who link from your Site to our Site under our policies and applicable legal requirements.
							</p>
							<p>
								We reserve the right to reject orders that do not comply with any reasonable requirements that we periodically establish. We will be responsible for all aspects of order processing and fulfillment. Among other things, we will prepare order forms, process payments, cancellations and returns and handle customer service.
							</p>
							<p>
								We will track sales made to customers who purchase products through a link from your Site to our Site that you will generate using the Network's technology. Reports summarizing this sales activity will be available to you through the Network. The form, content, and frequency of the reports are limited to those reports and capabilities available through the Network and may vary from time to time in our and the Network's reasonable discretion.
							</p>
							<p>
								We are not responsible for any changes that iDevAffiliate may make in their reporting format, timing, or types of reports available to members of the Network and our Affiliates, nor for the accuracy or completeness of any reports prepared by iDevAffiliate.  To permit accurate tracking, reporting and fee accrual, you must ensure that the links between your Site and our Site are properly formatted. We are not responsible for improperly formatted links regardless of whether you have made amendments to the code or not. In addition, we are unable to track or provide credit for sales from customers that are referred to us with browsers that do not have their cookies setting enabled.
							</p>
							<p>
								6. Offers.
							</p>
							<p>
								a. From time to time, we may post on the Network specific offers ("Offers") to pay members of the Network a specified referral fee on sales of Qualifying Products (as defined below) to third parties through a Qualifying Link. "Qualifying Link" means a link from your Site to our Site using one of the URLs or graphic links specified in the Offer and provided by us (through the Network) for use in the Program if it is the last link to our Site that the customer uses before purchasing a product on our Site.
							</p>
							<p>
								b. The terms of an Offer, as posted on the Network or otherwise communicated to you, will be governed by the terms and conditions of this Agreement. However, in the event of any inconsistency between the terms of the specific Offer and the terms of this Agreement, the terms of the Offer will govern.
							</p>
							<p>
								c. At any time prior to your providing a Qualifying Link, we may, with or without notice, (a) change, suspend or discontinue any aspect of an Offer, or (b) remove, alter, or modify any graphic or banner ad provided to you pursuant to an Offer. You agree to promptly implement any request from us to remove, alter or modify any graphic or banner ad submitted by you that is being used in connection with an Offer.
							</p>
							<p>
								7. Referral Fees.
							</p>
							<p>
								You will earn referral fees ("Commissions") on certain product sales to third parties generated from our Site only. For a product sale to generate a Commission, the customer must
							</p>
							<p>
								– use a browser that has its cookies setting enabled;
							</p>
							<p>
								– follow a Qualifying Link (in the format specified by us) from your Site to our Site (provided it is the last link to our Site that the customer uses before making the purchase);
							</p>
							<p>
								– purchase the product using our online ordering system;
							</p>
							<p>
								– accept delivery of the product at the shipping destination;
							</p>
							<p>
								– remit full payment to us; and
							</p>
							<p>
								– not purchase products for resale.
							</p>
							<p>
								Unless otherwise specified in the terms of your LinkShare offer, you will not earn Commissions on any products that are added to a customer's shopping cart after the customer has re-entered our Site (other than through a Qualifying Link from your Site), even if the customer previously followed a link from your Site to our Site, or product sales by customers using promotional codes exclusive to our other marketing channels, such as e-mail or print promotions. Customer service invoice adjustments and reorders are not eligible to earn Commissions. Products that are entitled to earn Commissions under the rules set forth above are hereinafter referred to as "Qualifying Products."
							</p>
							<p>
								8. Computation of Fees; Fee Schedule.
								You will earn Commissions based on the Net Price of Qualifying Products, according to fee schedules established by us. "Net Price" means the sale price listed on our Site (less any coupon or customer discount) and excludes amounts collected by us for taxes, shipping, handling, insurance, rebates, gift-wrapping and similar ancillary services, and amounts due to credit card fraud, bad debt, and any other orders we determine, in our sole discretion, to be unacceptable. The number of completed valid purchases will be attributable to your commission payout.  The current fee schedule to which you agree is listed in your iDevaAffiliate offer. We may amend the fee schedule at any time, and from time to time, in our sole discretion.
							</p>
							<p>
								9. Fee Payment.
								You will be paid your earned Commissions on a monthly basis through the Network as set forth per standard payment procedure stated in your iDevAffiliate offer terms. You are solely responsible for any and all tax obligations, if any, due to all taxing authorities arising from or in connection with your participation in the Program, including taxes resulting from payment of Commissions to you. We reserve the right to withhold payment pending an investigation of suspected fraud or misrepresentation of associated Commissions for orders or referrals that were obtained fraudulently or through misrepresentation. We are obligated by U.S. federal law to obtain tax information from Affiliates who are U.S. citizens, U.S. residents or U.S. corporations and from Affiliates who are not U.S. citizens or residents but whose businesses are taxable in the U.S. If we believe you are an Affiliate from whom we are obligated to obtain tax information and you do not provide this information to us after we have requested it, we may withhold your Commissions until you provide this information or otherwise satisfy us that you are not a person from whom we are required to obtain tax information.
							</p>
							<p>
								10. Policies and Pricing.
								Customers who buy products through the Program will be deemed to be our customers, without affecting their status as your customer. Accordingly, only our rules, policies and operating procedures concerning customer orders, customer service and sales will apply to those customers. We may change our policies and operating procedures at any time in our sole discretion. For example, we will determine the prices to be charged for products sold under the Program in accordance with our own pricing policies. Product prices and availability may vary from time to time. We will use commercially reasonable efforts to present accurate information, but we cannot guarantee the availability or price of any particular product or the error-free or uninterrupted operation of our Site.
							</p>
							<p>
								11. Term of this Agreement.
								a. The term of this Agreement will begin upon our acceptance of your Program application and will end when terminated by either party. Either you or we may terminate this Agreement at any time, with or without cause, by giving the other party prior written notice of termination. In addition, we reserve the right to terminate this Agreement immediately if you breach any provision of this Agreement, or if we determine, in our sole discretion, that your Site is unsuitable for the Program.
							</p>
							<p>
								b. Either party may terminate an Offer at any time by deleting its acceptance of the Offer through the Network. Termination of a specific Offer will not be deemed to terminate any other Offers. Termination of this Agreement will also terminate any outstanding Offer.
							</p>
							<p>
								c. Upon termination of this Agreement, you will immediately cease use of, and remove from your Site, all links to our Site and all Licensed Materials (as defined below) and related content.
							</p>
							<p>
								d. You are only eligible to earn Commissions on sales of Qualifying Products occurring during the term of this Agreement, and Commissions earned through the date of termination will remain payable only if the related orders are not canceled or returned by a customer. In addition, we may invoice you for Commissions that were paid to you before termination if those Commissions relate to Qualifying Products that are subsequently canceled or returned by a customer. If any other overpayment is made by us, you agree to promptly remit such excess payment upon notification by us. We may withhold your final payment for a reasonable time to ensure that the correct amount is paid.
							</p>
							<p>
								e.  All rights or remedies arising out of a breach of any terms of this Agreement will survive any such termination of this Agreement.
							</p>
							<p>
								12. Publicity.
								You will not create, publish, distribute, or permit any written material (e.g., press releases, marketing material or screen shots) that makes reference to us without first submitting such material to us and receiving our prior written consent, which we may withheld, delayed or conditioned in our sole discretion.
							</p>
							<p>
								13. Limited License and Use of the Shiaqga Trademarks.
								a. We grant you a personal, non-exclusive, non-transferable, non-sublicensable, fully revocable license, subject to the terms of this Agreement, to (i) access our Site through the Qualifying Links solely in accordance with the terms of this Agreement and (ii) solely in connection with such links, to use our logos, trade names, trademarks, service marks and similar identifying material designated in an Offer (collectively, the "Licensed Materials”), only as provided to you through the Network and solely for the purpose of generating the sale of our products from your Site. You acknowledge that this Agreement does not provide you with any intellectual property rights in the Licensed Materials other than the limited rights contained herein.  We reserve all our rights in the Licensed Materials and all our other proprietary rights. You may not sublicense, assign or transfer any such licenses for the use of the Licensed Materials, and any attempt at such sublicense, assignment or transfer is void.  We may terminate your license to use the Licensed Materials for any reason, at any time, in our sole and absolute discretion.
							</p>
							<p>
								b. You will not make any specific use of any Licensed Materials for purposes other than generating the sale of our products from your Site, without first submitting a sample of such use to us and obtaining our prior written consent, which we may withhold in our sole and absolute discretion.
							</p>
							<p>
								c. The license granted herein does not apply to any trademarks, trademark variations and misspellings, and service marks belonging to us that are not included within the Licensed Materials.
							</p>
							<p>
								d. Your license to use the Licensed Materials is also subject to the following guidelines:
							</p>
							<p>
								– You may use the Licensed Materials only for purposes expressly authorized by us in this Agreement or otherwise in writing.
							</p>
							<p>
								– You may not alter, modify, or change the Licensed Materials in any way; for example, you may not change the proportion, color, or font of any trademark.
							</p>
							<p>
								– You may not display the Licensed Materials in any manner that implies our sponsorship or endorsement of your products, services or Site outside of your involvement in the Program.
							</p>
							<p>
								– You may not use the Licensed Materials to disparage us, our products or services, or in a manner which, in our sole judgment, may diminish or otherwise damage the goodwill in our name and the Licensed Materials.
							</p>
							<p>
								– Each of our trademarks must appear by itself and must be surrounded by sufficient empty space on all sides in order to avoid unintended associations with any other objects (including type, photography, borders and edges).
							</p>
							<p>
								– You will not use the Licensed Materials as a feature or design element of any other logo.
							</p>
							<p>
								– Your use of the "Shiaqga” name or logo will be in a manner that is clearly less prominent than that of your products, trademarks, logos and Site name.
							</p>
							<p>
								– You may not copy any image on our Site, except for those links specifically provided to you under this Agreement.
							</p>
							<p>
								– You will not purchase keywords including Shiaqga and Shiaqga.com from any third party without our express prior written consent.
							</p>
							<p>
								– You will not purchase or otherwise contract with a third party to exploit any of our marks for the purpose of causing your Site to appear as a search result or for any other reason.
							</p>
							<p>
								– You may not bid on our Trademarks, trademark variations and misspellings, or company slogans on any Pay per Click Search Engine (PPCSEs). This includes Google, Yahoo! Marketing, MSN, and second- and third-tier search engines.
							</p>
							<p>
								e. We reserve the right, in our sole discretion, to modify these guidelines at any time upon prior written notice and the right to take action against any use that does not conform to these guidelines.
							</p>
							<p>
								f. You grant to us a non-exclusive license to utilize your names, titles, trademarks and logos as the same may be amended from time to time, to advertise, market, promote, and publicize in any manner our rights hereunder; provided, however, that we are not required to so advertise, market, promote, or publicize.
							</p>
							<p>
								g. The licenses granted by you and us under this Section 13 will terminate upon the effective date of the expiration or termination of this Agreement.
							</p>
							<p>
								14. Disclaimers.
								a. We do not make, and expressly disclaim, all express or implied warranties or representations with respect to this Agreement, the Network, and any products promoted through the Network (including warranties of fitness, merchantability, non-infringement, accuracy, completeness, or any implied warranties arising out of the course of performance, dealing, or trade usage). In addition, we do not make, and expressly disclaim, any warranties and representations that the operation of our Site will be uninterrupted or error free, and we will not be liable for the consequences of any interruptions or errors. Access to our Site is provided "as is, where is" and "as available."
							</p>
							<p>
								b. We disclaim all liability for all matters relating to the development, operation, maintenance and content on your Site.
							</p>
							<p>
								c. We do not warrant or guarantee the availability or price of any particular product or that participating in the Program will result in any specified amount of Commissions.
							</p>
							<p>
								d. Each party agrees and represents that this Agreement does not in any way constitute approval, endorsement, or acceptance, in any way, of the content of the other party's webpages or Sites. Each party disclaims any and all responsibility for the content of the other party's Sites, including claims related to intellectual property infringement, content accuracy, defamation, and other unlawful content. Each party reserves the right to place a disclaimer on its Site or in promotional materials to reflect the disclaimers set forth herein.
							</p>
							<p>
								15. Representations and Warranties.
								You hereby represent and warrant to us as follows:
							</p>
							<p>
								a. This Agreement has been duly authorized and accepted by you, and constitutes your legal, valid, and binding obligation, enforceable against you in accordance with its terms. You agree not to contest the validity or enforceability of this Agreement under the provisions of applicable law relating to whether certain agreements are to be in writing or signed by the party to be bound thereby.
							</p>
							<p>
								b. No consent, approval, or authorization of, or exemption by, or filing with, any governmental authority or any third party is required to be obtained or made by you in connection with the execution, delivery, and performance of this Agreement or the taking by you of any other action contemplated hereby. You have full right and authority to grant the licenses and perform your obligations hereunder and you are the sole owner of your trademarks.
							</p>
							<p>
								c. There is no pending or, to the best of your knowledge, threatened claim, action, or proceeding against you, or any affiliate of yours, with respect to the execution, delivery, or consummation of this Agreement, or with respect to your Affiliate Trademarks, and, to the best of your knowledge, there is no basis for any such claim, action, or proceeding.
							</p>
							<p>
								d. Any material displayed on your Site will not: (i) infringe on any third party's copyright, patent, trademark, trade secret or other proprietary rights or right of publicity or privacy; (ii) violate any applicable law, statute, ordinance or regulation; (iii) be defamatory or libelous; (iv) be lewd, pornographic or obscene; (v) violate any laws regarding unfair competition, anti-discrimination or false advertising; (vi) promote violence or contain hate speech; (vii) promote discrimination based on race, age, sex, religion, nationality, sexual orientation or disability; or (viii) contain viruses, trojan horses, worms, time bombs, cancelbots or other similar harmful or deleterious programming routines.
							</p>
							<p>
								e. You will comply with all applicable local, state and federal laws, statutes, orders, ordinances and regulations relating to performance of the program.
							</p>
							<p>
								f. You have the legal right to conduct any business conducted by you, including in respect of any of your Sites participating in the Program.
							</p>
							<p>
								g. The information you supply to us in your Affiliate Application or otherwise is accurate, complete and correct.
							</p>
							<p>
								h. You are either an adult of at least 18 years of age or an entity.
							</p>
							<p>
								i. You are not a resident of, North Carolina or Connecticut.
							</p>
							<p>
								16. Relationship of Parties.
								You and we are independent contractors, and nothing in this Agreement will create any partnership, joint venture, agency, franchise, sales representative, or employment relationship between you and us. You will have no authority to make or accept any offers or representations on our behalf. You will not make any statement, whether on your Site or otherwise, that reasonably would contradict anything in this Section.
							</p>
							<p>
								17. Confidentiality.
								Except as otherwise provided in this Agreement or with our prior written consent, you agree that all information, including the terms of this Agreement, our business and financial information, our customer lists, vendor lists and our pricing and sales information, will remain strictly confidential and will not be disclosed to any third party and will not be utilized, directly or indirectly, by you for your own business purposes or for any other purpose, except and solely to the extent that any such information is generally known or available to the public through a source or sources other than you or your affiliates. Notwithstanding the foregoing, you may deliver a copy of any such information (a) pursuant to a subpoena issued by a court of competent jurisdiction or administrative agency, (b) to your accountants, attorneys, or other agents on a confidential basis, and (c) otherwise as required by applicable law, rule, regulation or legal process, provided you give us reasonable advance notice of such delivery and use your reasonable efforts to ensure that any such information is accorded confidential treatment by the person to whom it is delivered.
							</p>
							<p>
								18. Limitation of Liability.
								We will not be liable (whether in contract or based on warranty, negligence, tort, strict liability or otherwise) for indirect, special, exemplary, consequential or incidental damages, or any loss of revenue, profits or data, arising in connection with this Agreement, the Program or the Network, even if we have been advised of the possibility of such damages. Further, our aggregate liability arising with respect to this Agreement and the Program will not exceed the total Commissions paid or payable to you under this Agreement. You recognize and acknowledge that this limitation of damages is fair and reasonable, in light of the fact that we are providing the Program to you at no charge to you.
							</p>
							<p>
								19. Indemnification.
								You hereby agree to indemnify and hold harmless us, our affiliates and subsidiaries, and their respective directors, officers, employees, agents, shareholders and members, from and against any and all claims, actions, demands, liabilities, losses, damages, judgments, settlements, costs and expenses (including court costs and reasonable attorney's fees), even if such claims are groundless, fraudulent or false (any or all of the foregoing hereinafter referred to as "Losses") insofar as such Losses (or actions in respect thereof) arise out of, are based on or connected with (i) any breach or alleged breach of any representation, warranty, covenant or agreement made by you herein, including claims for unsolicited email (spamming) or other violations of rights of privacy, (ii) any of the content (other than Shiaqga 's Content) or activities of your Site (including without limitation any activities or aspects thereof or commerce conducted thereon) or your business, (iii) your misuse, unauthorized modification or unauthorized use of the services or materials provided by us or IDevAffiliate hereunder, (iv) the development, operation or maintenance of your Site, or (v) any actual or alleged infringement by you of any intellectual property rights or other rights of any person or entity.
							</p>
							<p>
								In our sole discretion, we may assume the exclusive defense and control of any matter otherwise subject to indemnification by you. We may participate in the defense of all claims as to which we do not assume defense and control, and you will not settle any such claim without our prior written consent
							</p>
							<p>
								We hereby agree to defend, indemnify and hold you and your affiliates and their respective officers, directors, employees and agents, harmless from all claims, damages, and expenses (including attorneys' fees and costs of litigation) relating to your use of any Shiaqga 's Content in accordance with the terms of this Agreement, and the development, operation, maintenance or content of our Site and its business.
							</p>
							<p>
								20. Modification.
								We may modify any of the provisions of this Agreement, at any time and in our sole discretion, by posting a change notice or a new agreement on the Network or otherwise communicating such change to you.  Modifications may include, for example, changes in the scope of available referral fees, fee schedules, payment procedures or Program rules.  If any modification is unacceptable to you, your only recourse is to terminate this Agreement. Your continued participation in the Program following our posting of a change notice or new agreement on the Network will constitute binding acceptance of the change.
							</p>
							<p>
								21. Independent Investigation.
								You acknowledge that you have read this Agreement and agree to all terms and conditions in this Agreement. You understand that we may at any time (directly or indirectly) solicit customer referrals on terms that may differ from those contained in this Agreement or operate sites that are similar to or compete with your Site. You have independently evaluated the desirability of participating in the Program and are not relying on any representation, guarantee or statement other than as set forth in this Agreement.
							</p>
							<p>
								22. General.
								a. Governing Law; Venue; Legal Fees; Waiver of Jury Trial. This Agreement will be governed by and construed in accordance with the laws of the State of Missouri, without regard to its principles of conflicts of laws. Any legal proceeding arising out of the terms of this Agreement will be commenced in the Federal or State courts located in Douglas County, Missouri. We and you irrevocably and unconditionally submit to the exclusive jurisdiction of such courts, waive any objection to the laying of venue of any action, suit or proceeding arising out of this Agreement or the transactions contemplated hereby in the State of Missouri, and waive and agree not to plead or claim in any such court that any such action, suit or proceeding brought in any such court has been brought in an inconvenient forum. The prevailing party in any dispute will be entitled to recover from the losing party its costs (including reasonable costs of collection, attorneys' fees and investigative fees). Each party waives rights to trial by jury in respect of any action, suit or proceeding arising out of this Agreement.
							</p>
							<p>
								b. Assignment. You may not assign this Agreement, by operation of law or otherwise, without our prior written consent. Subject to that restriction, this Agreement will be binding on, inure to the benefit of, and enforceable against the parties and their respective successors and assigns.
							</p>
							<p>
								c. Notice. Any notices required or permitted by this Agreement must be delivered to:
							</p>
							<p>
								Shiaqga
								P.O. Box 2015
								Ava, MO 65608
							</p>
							<p>
								Any notices required or permitted by this Agreement or communications in connection with the Program will be sent to you by us via e-mail at the address you provided in your Affiliate Application.
							</p>
							<p>
								d. Severability. The provisions of this Agreement are independent of and separable from each other, and no provision will be affected or rendered invalid or unenforceable by virtue of the fact that for any reason any other provision may be invalid or unenforceable in whole or in part.
							</p>
							<p>
								e. Waiver. Our failure to enforce your strict performance of any provision of this Agreement will not constitute a waiver of our right to subsequently enforce such provision or any other provision of this Agreement.
							</p>
							<p>
								f. Equitable Relief. Any breach of either of the party's obligations regarding trademarks, service marks, trade names, confidentiality, links or the removal of links or user data may result in irreparable injury for which there may be no adequate remedy at law. Therefore, in the event of any breach or threatened breach of a party's obligations regarding trademarks, service marks, trade names, confidentiality, links or the removal of links, or user data, the aggrieved party will be entitled to seek equitable relief in addition to its other available legal remedies in a court of competent jurisdiction.
							</p>
							<p>
								g. Force Majeure. You acknowledge that our and IDevAffiliate's servers, equipment, and services (e.g., tracking and reporting) may be subject to temporary modifications or shutdowns due to causes beyond the reasonable control of us and IDevAffiliate.  Such temporary service interruptions will not constitute a breach of this Agreement.
							</p>
							<p>
								h. Survival. Sections 11 (Term), 15 (Representations and Warranties), 17 (Confidentiality), 18 (Limitation of Liability), 19 (Indemnification) and 22 (General), including all subsections thereof, will survive any termination of this Agreement.
							</p>
							<p>
								i. Entire Agreement; Headings. This Agreement, together with your Affiliate Application, PMA and "IDevAffiliate Offer Terms" constitutes the entire agreement between the parties with regard to the subject matter hereof and supersedes all prior agreements and understandings, both written and oral. In addition to, and without limiting your obligations under this Agreement, your participation in the Program is subject to the PMA. The headings of sections or other subdivisions of this Agreement will not affect in any way the meaning or interpretation of this Agreement.
							</p>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12">
					<v-card class="pa-5">
						<v-card-title>
							User Defined Fields
						</v-card-title>
						<v-card-text>
							<v-text-field
								v-model="referrer"
								label="Who was the person that referred you to us?"
								required
							></v-text-field>
							<v-text-field
								v-model="callTime"
								label="To prevent fraud we will be contacting you. What is the best time to call?"
								required
							></v-text-field>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col class="text-center">
					<v-btn @click="submitApplication">
						Create my free Affiliate Account
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import LoginAccount from '@/components/LoginAccount.vue'
import { mapState } from 'vuex'
import { DB } from '../firebase/db'

export default {
	data() {
		return {
			streetAddress: '',
			additionalAddress: '',
			city: '',
			state: '',
			phoneNumber: '',
			zipCode: '',
			country: '',
			referrer: '',
			callTime: '',
			selectedPaymentMethod: undefined,
			commissionPaymentMethod: [
				{
					text: 'Account Credit with 20% bonus',
					id: 1,
				},
				{
					text: 'Paypal',
					id: 2,
				},
			],
			countries: [
				{
						name: "Afghanistan",
						code: "AF"
				},
				{
						name: "Åland Islands",
						code: "AX"
				},
				{
						name: "Albania",
						code: "AL"
				},
				{
						name: "Algeria",
						code: "DZ"
				},
				{
						name: "American Samoa",
						code: "AS"
				},
				{
						name: "AndorrA",
						code: "AD"
				},
				{
						name: "Angola",
						code: "AO"
				},
				{
						name: "Anguilla",
						code: "AI"
				},
				{
						name: "Antarctica",
						code: "AQ"
				},
				{
						name: "Antigua and Barbuda",
						code: "AG"
				},
				{
						name: "Argentina",
						code: "AR"
				},
				{
						name: "Armenia",
						code: "AM"
				},
				{
						name: "Aruba",
						code: "AW"
				},
				{
						name: "Australia",
						code: "AU"
				},
				{
						name: "Austria",
						code: "AT"
				},
				{
						name: "Azerbaijan",
						code: "AZ"
				},
				{
						name: "Bahamas",
						code: "BS"
				},
				{
						name: "Bahrain",
						code: "BH"
				},
				{
						name: "Bangladesh",
						code: "BD"
				},
				{
						name: "Barbados",
						code: "BB"
				},
				{
						name: "Belarus",
						code: "BY"
				},
				{
						name: "Belgium",
						code: "BE"
				},
				{
						name: "Belize",
						code: "BZ"
				},
				{
						name: "Benin",
						code: "BJ"
				},
				{
						name: "Bermuda",
						code: "BM"
				},
				{
						name: "Bhutan",
						code: "BT"
				},
				{
						name: "Bolivia",
						code: "BO"
				},
				{
						name: "Bosnia and Herzegovina",
						code: "BA"
				},
				{
						name: "Botswana",
						code: "BW"
				},
				{
						name: "Bouvet Island",
						code: "BV"
				},
				{
						name: "Brazil",
						code: "BR"
				},
				{
						name: "British Indian Ocean Territory",
						code: "IO"
				},
				{
						name: "Brunei Darussalam",
						code: "BN"
				},
				{
						name: "Bulgaria",
						code: "BG"
				},
				{
						name: "Burkina Faso",
						code: "BF"
				},
				{
						name: "Burundi",
						code: "BI"
				},
				{
						name: "Cambodia",
						code: "KH"
				},
				{
						name: "Cameroon",
						code: "CM"
				},
				{
						name: "Canada",
						code: "CA"
				},
				{
						name: "Cape Verde",
						code: "CV"
				},
				{
						name: "Cayman Islands",
						code: "KY"
				},
				{
						name: "Central African Republic",
						code: "CF"
				},
				{
						name: "Chad",
						code: "TD"
				},
				{
						name: "Chile",
						code: "CL"
				},
				{
						name: "China",
						code: "CN"
				},
				{
						name: "Christmas Island",
						code: "CX"
				},
				{
						name: "Cocos (Keeling) Islands",
						code: "CC"
				},
				{
						name: "Colombia",
						code: "CO"
				},
				{
						name: "Comoros",
						code: "KM"
				},
				{
						name: "Congo",
						code: "CG"
				},
				{
						name: "Congo, The Democratic Republic of the",
						code: "CD"
				},
				{
						name: "Cook Islands",
						code: "CK"
				},
				{
						name: "Costa Rica",
						code: "CR"
				},
				{
						name: "Cote D\"Ivoire",
						code: "CI"
				},
				{
						name: "Croatia",
						code: "HR"
				},
				{
						name: "Cuba",
						code: "CU"
				},
				{
						name: "Cyprus",
						code: "CY"
				},
				{
						name: "Czech Republic",
						code: "CZ"
				},
				{
						name: "Denmark",
						code: "DK"
				},
				{
						name: "Djibouti",
						code: "DJ"
				},
				{
						name: "Dominica",
						code: "DM"
				},
				{
						name: "Dominican Republic",
						code: "DO"
				},
				{
						name: "Ecuador",
						code: "EC"
				},
				{
						name: "Egypt",
						code: "EG"
				},
				{
						name: "El Salvador",
						code: "SV"
				},
				{
						name: "Equatorial Guinea",
						code: "GQ"
				},
				{
						name: "Eritrea",
						code: "ER"
				},
				{
						name: "Estonia",
						code: "EE"
				},
				{
						name: "Ethiopia",
						code: "ET"
				},
				{
						name: "Falkland Islands (Malvinas)",
						code: "FK"
				},
				{
						name: "Faroe Islands",
						code: "FO"
				},
				{
						name: "Fiji",
						code: "FJ"
				},
				{
						name: "Finland",
						code: "FI"
				},
				{
						name: "France",
						code: "FR"
				},
				{
						name: "French Guiana",
						code: "GF"
				},
				{
						name: "French Polynesia",
						code: "PF"
				},
				{
						name: "French Southern Territories",
						code: "TF"
				},
				{
						name: "Gabon",
						code: "GA"
				},
				{
						name: "Gambia",
						code: "GM"
				},
				{
						name: "Georgia",
						code: "GE"
				},
				{
						name: "Germany",
						code: "DE"
				},
				{
						name: "Ghana",
						code: "GH"
				},
				{
						name: "Gibraltar",
						code: "GI"
				},
				{
						name: "Greece",
						code: "GR"
				},
				{
						name: "Greenland",
						code: "GL"
				},
				{
						name: "Grenada",
						code: "GD"
				},
				{
						name: "Guadeloupe",
						code: "GP"
				},
				{
						name: "Guam",
						code: "GU"
				},
				{
						name: "Guatemala",
						code: "GT"
				},
				{
						name: "Guernsey",
						code: "GG"
				},
				{
						name: "Guinea",
						code: "GN"
				},
				{
						name: "Guinea-Bissau",
						code: "GW"
				},
				{
						name: "Guyana",
						code: "GY"
				},
				{
						name: "Haiti",
						code: "HT"
				},
				{
						name: "Heard Island and Mcdonald Islands",
						code: "HM"
				},
				{
						name: "Holy See (Vatican City State)",
						code: "VA"
				},
				{
						name: "Honduras",
						code: "HN"
				},
				{
						name: "Hong Kong",
						code: "HK"
				},
				{
						name: "Hungary",
						code: "HU"
				},
				{
						name: "Iceland",
						code: "IS"
				},
				{
						name: "India",
						code: "IN"
				},
				{
						name: "Indonesia",
						code: "ID"
				},
				{
						name: "Iran, Islamic Republic Of",
						code: "IR"
				},
				{
						name: "Iraq",
						code: "IQ"
				},
				{
						name: "Ireland",
						code: "IE"
				},
				{
						name: "Isle of Man",
						code: "IM"
				},
				{
						name: "Israel",
						code: "IL"
				},
				{
						name: "Italy",
						code: "IT"
				},
				{
						name: "Jamaica",
						code: "JM"
				},
				{
						name: "Japan",
						code: "JP"
				},
				{
						name: "Jersey",
						code: "JE"
				},
				{
						name: "Jordan",
						code: "JO"
				},
				{
						name: "Kazakhstan",
						code: "KZ"
				},
				{
						name: "Kenya",
						code: "KE"
				},
				{
						name: "Kiribati",
						code: "KI"
				},
				{
						name: "Korea, Democratic People\"S Republic of",
						code: "KP"
				},
				{
						name: "Korea, Republic of",
						code: "KR"
				},
				{
						name: "Kuwait",
						code: "KW"
				},
				{
						name: "Kyrgyzstan",
						code: "KG"
				},
				{
						name: "Lao People\"S Democratic Republic",
						code: "LA"
				},
				{
						name: "Latvia",
						code: "LV"
				},
				{
						name: "Lebanon",
						code: "LB"
				},
				{
						name: "Lesotho",
						code: "LS"
				},
				{
						name: "Liberia",
						code: "LR"
				},
				{
						name: "Libyan Arab Jamahiriya",
						code: "LY"
				},
				{
						name: "Liechtenstein",
						code: "LI"
				},
				{
						name: "Lithuania",
						code: "LT"
				},
				{
						name: "Luxembourg",
						code: "LU"
				},
				{
						name: "Macao",
						code: "MO"
				},
				{
						name: "Macedonia, The Former Yugoslav Republic of",
						code: "MK"
				},
				{
						name: "Madagascar",
						code: "MG"
				},
				{
						name: "Malawi",
						code: "MW"
				},
				{
						name: "Malaysia",
						code: "MY"
				},
				{
						name: "Maldives",
						code: "MV"
				},
				{
						name: "Mali",
						code: "ML"
				},
				{
						name: "Malta",
						code: "MT"
				},
				{
						name: "Marshall Islands",
						code: "MH"
				},
				{
						name: "Martinique",
						code: "MQ"
				},
				{
						name: "Mauritania",
						code: "MR"
				},
				{
						name: "Mauritius",
						code: "MU"
				},
				{
						name: "Mayotte",
						code: "YT"
				},
				{
						name: "Mexico",
						code: "MX"
				},
				{
						name: "Micronesia, Federated States of",
						code: "FM"
				},
				{
						name: "Moldova, Republic of",
						code: "MD"
				},
				{
						name: "Monaco",
						code: "MC"
				},
				{
						name: "Mongolia",
						code: "MN"
				},
				{
						name: "Montserrat",
						code: "MS"
				},
				{
						name: "Morocco",
						code: "MA"
				},
				{
						name: "Mozambique",
						code: "MZ"
				},
				{
						name: "Myanmar",
						code: "MM"
				},
				{
						name: "Namibia",
						code: "NA"
				},
				{
						name: "Nauru",
						code: "NR"
				},
				{
						name: "Nepal",
						code: "NP"
				},
				{
						name: "Netherlands",
						code: "NL"
				},
				{
						name: "Netherlands Antilles",
						code: "AN"
				},
				{
						name: "New Caledonia",
						code: "NC"
				},
				{
						name: "New Zealand",
						code: "NZ"
				},
				{
						name: "Nicaragua",
						code: "NI"
				},
				{
						name: "Niger",
						code: "NE"
				},
				{
						name: "Nigeria",
						code: "NG"
				},
				{
						name: "Niue",
						code: "NU"
				},
				{
						name: "Norfolk Island",
						code: "NF"
				},
				{
						name: "Northern Mariana Islands",
						code: "MP"
				},
				{
						name: "Norway",
						code: "NO"
				},
				{
						name: "Oman",
						code: "OM"
				},
				{
						name: "Pakistan",
						code: "PK"
				},
				{
						name: "Palau",
						code: "PW"
				},
				{
						name: "Palestinian Territory, Occupied",
						code: "PS"
				},
				{
						name: "Panama",
						code: "PA"
				},
				{
						name: "Papua New Guinea",
						code: "PG"
				},
				{
						name: "Paraguay",
						code: "PY"
				},
				{
						name: "Peru",
						code: "PE"
				},
				{
						name: "Philippines",
						code: "PH"
				},
				{
						name: "Pitcairn",
						code: "PN"
				},
				{
						name: "Poland",
						code: "PL"
				},
				{
						name: "Portugal",
						code: "PT"
				},
				{
						name: "Puerto Rico",
						code: "PR"
				},
				{
						name: "Qatar",
						code: "QA"
				},
				{
						name: "Reunion",
						code: "RE"
				},
				{
						name: "Romania",
						code: "RO"
				},
				{
						name: "Russian Federation",
						code: "RU"
				},
				{
						name: "RWANDA",
						code: "RW"
				},
				{
						name: "Saint Helena",
						code: "SH"
				},
				{
						name: "Saint Kitts and Nevis",
						code: "KN"
				},
				{
						name: "Saint Lucia",
						code: "LC"
				},
				{
						name: "Saint Pierre and Miquelon",
						code: "PM"
				},
				{
						name: "Saint Vincent and the Grenadines",
						code: "VC"
				},
				{
						name: "Samoa",
						code: "WS"
				},
				{
						name: "San Marino",
						code: "SM"
				},
				{
						name: "Sao Tome and Principe",
						code: "ST"
				},
				{
						name: "Saudi Arabia",
						code: "SA"
				},
				{
						name: "Senegal",
						code: "SN"
				},
				{
						name: "Serbia and Montenegro",
						code: "CS"
				},
				{
						name: "Seychelles",
						code: "SC"
				},
				{
						name: "Sierra Leone",
						code: "SL"
				},
				{
						name: "Singapore",
						code: "SG"
				},
				{
						name: "Slovakia",
						code: "SK"
				},
				{
						name: "Slovenia",
						code: "SI"
				},
				{
						name: "Solomon Islands",
						code: "SB"
				},
				{
						name: "Somalia",
						code: "SO"
				},
				{
						name: "South Africa",
						code: "ZA"
				},
				{
						name: "South Georgia and the South Sandwich Islands",
						code: "GS"
				},
				{
						name: "Spain",
						code: "ES"
				},
				{
						name: "Sri Lanka",
						code: "LK"
				},
				{
						name: "Sudan",
						code: "SD"
				},
				{
						name: "Suriname",
						code: "SR"
				},
				{
						name: "Svalbard and Jan Mayen",
						code: "SJ"
				},
				{
						name: "Swaziland",
						code: "SZ"
				},
				{
						name: "Sweden",
						code: "SE"
				},
				{
						name: "Switzerland",
						code: "CH"
				},
				{
						name: "Syrian Arab Republic",
						code: "SY"
				},
				{
						name: "Taiwan, Province of China",
						code: "TW"
				},
				{
						name: "Tajikistan",
						code: "TJ"
				},
				{
						name: "Tanzania, United Republic of",
						code: "TZ"
				},
				{
						name: "Thailand",
						code: "TH"
				},
				{
						name: "Timor-Leste",
						code: "TL"
				},
				{
						name: "Togo",
						code: "TG"
				},
				{
						name: "Tokelau",
						code: "TK"
				},
				{
						name: "Tonga",
						code: "TO"
				},
				{
						name: "Trinidad and Tobago",
						code: "TT"
				},
				{
						name: "Tunisia",
						code: "TN"
				},
				{
						name: "Turkey",
						code: "TR"
				},
				{
						name: "Turkmenistan",
						code: "TM"
				},
				{
						name: "Turks and Caicos Islands",
						code: "TC"
				},
				{
						name: "Tuvalu",
						code: "TV"
				},
				{
						name: "Uganda",
						code: "UG"
				},
				{
						name: "Ukraine",
						code: "UA"
				},
				{
						name: "United Arab Emirates",
						code: "AE"
				},
				{
						name: "United Kingdom",
						code: "GB"
				},
				{
						name: "United States",
						code: "US"
				},
				{
						name: "United States Minor Outlying Islands",
						code: "UM"
				},
				{
						name: "Uruguay",
						code: "UY"
				},
				{
						name: "Uzbekistan",
						code: "UZ"
				},
				{
						name: "Vanuatu",
						code: "VU"
				},
				{
						name: "Venezuela",
						code: "VE"
				},
				{
						name: "Viet Nam",
						code: "VN"
				},
				{
						name: "Virgin Islands, British",
						code: "VG"
				},
				{
						name: "Virgin Islands, U.S.",
						code: "VI"
				},
				{
						name: "Wallis and Futuna",
						code: "WF"
				},
				{
						name: "Western Sahara",
						code: "EH"
				},
				{
						name: "Yemen",
						code: "YE"
				},
				{
						name: "Zambia",
						code: "ZM"
				},
				{
						name: "Zimbabwe",
						code: "ZW"
				}
		],
			states: [
				{
						name: "Alabama",
						abbreviation: "AL"
				},
				{
						name: "Alaska",
						abbreviation: "AK"
				},
				{
						name: "American Samoa",
						abbreviation: "AS"
				},
				{
						name: "Arizona",
						abbreviation: "AZ"
				},
				{
						name: "Arkansas",
						abbreviation: "AR"
				},
				{
						name: "California",
						abbreviation: "CA"
				},
				{
						name: "Colorado",
						abbreviation: "CO"
				},
				{
						name: "Connecticut",
						abbreviation: "CT"
				},
				{
						name: "Delaware",
						abbreviation: "DE"
				},
				{
						name: "District Of Columbia",
						abbreviation: "DC"
				},
				{
						name: "Federated States Of Micronesia",
						abbreviation: "FM"
				},
				{
						name: "Florida",
						abbreviation: "FL"
				},
				{
						name: "Georgia",
						abbreviation: "GA"
				},
				{
						name: "Guam",
						abbreviation: "GU"
				},
				{
						name: "Hawaii",
						abbreviation: "HI"
				},
				{
						name: "Idaho",
						abbreviation: "ID"
				},
				{
						name: "Illinois",
						abbreviation: "IL"
				},
				{
						name: "Indiana",
						abbreviation: "IN"
				},
				{
						name: "Iowa",
						abbreviation: "IA"
				},
				{
						name: "Kansas",
						abbreviation: "KS"
				},
				{
						name: "Kentucky",
						abbreviation: "KY"
				},
				{
						name: "Louisiana",
						abbreviation: "LA"
				},
				{
						name: "Maine",
						abbreviation: "ME"
				},
				{
						name: "Marshall Islands",
						abbreviation: "MH"
				},
				{
						name: "Maryland",
						abbreviation: "MD"
				},
				{
						name: "Massachusetts",
						abbreviation: "MA"
				},
				{
						name: "Michigan",
						abbreviation: "MI"
				},
				{
						name: "Minnesota",
						abbreviation: "MN"
				},
				{
						name: "Mississippi",
						abbreviation: "MS"
				},
				{
						name: "Missouri",
						abbreviation: "MO"
				},
				{
						name: "Montana",
						abbreviation: "MT"
				},
				{
						name: "Nebraska",
						abbreviation: "NE"
				},
				{
						name: "Nevada",
						abbreviation: "NV"
				},
				{
						name: "New Hampshire",
						abbreviation: "NH"
				},
				{
						name: "New Jersey",
						abbreviation: "NJ"
				},
				{
						name: "New Mexico",
						abbreviation: "NM"
				},
				{
						name: "New York",
						abbreviation: "NY"
				},
				{
						name: "North Carolina",
						abbreviation: "NC"
				},
				{
						name: "North Dakota",
						abbreviation: "ND"
				},
				{
						name: "Northern Mariana Islands",
						abbreviation: "MP"
				},
				{
						name: "Ohio",
						abbreviation: "OH"
				},
				{
						name: "Oklahoma",
						abbreviation: "OK"
				},
				{
						name: "Oregon",
						abbreviation: "OR"
				},
				{
						name: "Palau",
						abbreviation: "PW"
				},
				{
						name: "Pennsylvania",
						abbreviation: "PA"
				},
				{
						name: "Puerto Rico",
						abbreviation: "PR"
				},
				{
						name: "Rhode Island",
						abbreviation: "RI"
				},
				{
						name: "South Carolina",
						abbreviation: "SC"
				},
				{
						name: "South Dakota",
						abbreviation: "SD"
				},
				{
						name: "Tennessee",
						abbreviation: "TN"
				},
				{
						name: "Texas",
						abbreviation: "TX"
				},
				{
						name: "Utah",
						abbreviation: "UT"
				},
				{
						name: "Vermont",
						abbreviation: "VT"
				},
				{
						name: "Virgin Islands",
						abbreviation: "VI"
				},
				{
						name: "Virginia",
						abbreviation: "VA"
				},
				{
						name: "Washington",
						abbreviation: "WA"
				},
				{
						name: "West Virginia",
						abbreviation: "WV"
				},
				{
						name: "Wisconsin",
						abbreviation: "WI"
				},
				{
						name: "Wyoming",
						abbreviation: "WY"
				}
		]
		}
	},
 components: {
	 LoginAccount
 },
 computed: {
	 ...mapState(['user'])
 },
	mounted() {
		window.scrollTo(0,0)
	},
 methods: {
	 submitApplication() {
			if(!this.firstName || !this.lastName || !this.email) {
				if (!this.firstName) {
					this.warningMessages.push('Must include first name.')
				}
				if (!this.lastName) {
					this.warningMessages.push('Must include last name.')
				}
				if (!this.email) {
					this.warningMessages.push('Must include email.')
				}
				this.warning = true
			} else {
				DB.collection('pendingAffiliates')
				.doc(this.user.uid)
				.set({
						streetAddress: this.streetAddress,
						additionalAddress: this.additionalAddress,
						city: this.city,
						state: this.state,
						phoneNumber: this.phoneNumber,
						zipCode: this.zipCode,
						country: this.country,
						referrer: this.referrer,
						callTime: this.callTime,
						selectedPaymentMethod: this.selectedPaymentMethod
				}).then(() => {
					this.$router.push('/user-account')
				})
			}
	 }
 }
}
</script>

<style>
.scroll {
   overflow-y: scroll
}
</style>