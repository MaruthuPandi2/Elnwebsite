(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9877],{816:function(e,s,i){"use strict";var l=i(7437),a=i(2265),t=i(7138);s.Z=()=>{let[e,s]=(0,a.useState)(1),[i,r]=(0,a.useState)({loss:21160,lite:699,standard:1200,premium:2400}),[n,c]=(0,a.useState)({}),[d,A]=(0,a.useState)(!1),[h,m]=(0,a.useState)(!1),[o,x]=(0,a.useState)(!0),[p,b]=(0,a.useState)("saas"),[j,g]=(0,a.useState)("monthly"),[u,N]=(0,a.useState)({lite:0,standard:0,premium:0,loss:0,liteMonthly:0,standardMonthly:0,premiumMonthly:0,liteAnnual:0,standardAnnual:0,premiumAnnual:0,roundliteAnnual:0,roundstandardAnnual:0,roundpremiumAnnual:0,academiclite:0,academicstandard:0,academicpremium:0,yearlyLite:0,yearlyStandard:0,yearlyPremium:0,roundyearlyLite:0,roundyearlyStandard:0,roundyearlyPremium:0}),[v,y]=(0,a.useState)({lite:0,standard:0,premium:0}),_=()=>{let{lite:s,standard:i,premium:l,loss:a}={lite:699,standard:1200,premium:2400,loss:21160},t={lite:s,standard:i,premium:l,loss:a},r=e=>Math.round(e);e>=11&&e<=25?(t.lite*=.95,t.standard*=.95,t.premium*=.95):e>=26&&e<=50?(t.lite*=.9,t.standard*=.9,t.premium*=.9):e>=51&&e<=100?(t.lite*=.85,t.standard*=.85,t.premium*=.85):e>=101&&e<=200?(t.lite*=.8,t.standard*=.8,t.premium*=.8):e>=201&&e<=300?(t.lite*=.75,t.standard*=.75,t.premium*=.75):e>=301&&e<=500&&(t.lite*=.7,t.standard*=.7,t.premium*=.7),N({lite:Math.round(e*t.lite),standard:Math.round(e*t.standard),premium:Math.round(e*t.premium),loss:Math.round(e*t.loss),liteMonthly:Math.round(90*t.lite)/100,standardMonthly:Math.round(90*t.standard)/100,premiumMonthly:Math.round(90*t.premium)/100,liteAnnual:Math.round(e*t.lite*7.5600000000000005),standardAnnual:Math.round(e*t.standard*7.5600000000000005),premiumAnnual:Math.round(e*t.premium*7.5600000000000005),roundliteAnnual:Math.round(e*t.lite*10.8),roundstandardAnnual:Math.round(e*t.standard*10.8),roundpremiumAnnual:Math.round(e*t.premium*10.8),academiclite:parseFloat((.7*t.lite).toFixed(2)),academicstandard:parseFloat((.7*t.standard).toFixed(2)),academicpremium:parseFloat((.7*t.premium).toFixed(2)),yearlyLite:parseFloat((.63*t.lite).toFixed(2)),yearlyStandard:parseFloat((.63*t.standard).toFixed(2)),yearlyPremium:parseFloat((.63*t.premium).toFixed(2)),roundyearlyLite:r(e*t.lite*7.559999999999999),roundyearlyStandard:r(e*t.standard*7.559999999999999),roundyearlyPremium:r(e*t.premium*7.559999999999999)}),y({lite:Math.round(100*t.lite)/100,standard:Math.round(100*t.standard)/100,premium:Math.round(100*t.premium)/100})},f=()=>{x(!o)},E=()=>{m(!h)};return(0,a.useEffect)(()=>{_()},[e]),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"pricing-table-area section-space--ptb_100 bg-gray1 pb-0",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"row section-space--mb_40",children:(0,l.jsx)("div",{className:"col-lg-12 ht-tab-wrap",children:(0,l.jsx)("div",{className:"pricing-table-title-area position-relative",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-lg-12",children:(0,l.jsxs)("div",{className:"section-title-wrapper text-center mb-20 wow move-up animated",children:[(0,l.jsx)("h3",{className:"center-heading mb-20",children:"How Big is your Lab?"}),(0,l.jsx)("input",{type:"number",min:"1",max:"200",value:e.toString(),className:"qty",id:"qty",onChange:e=>{let i=e.target.value,l=parseInt((i=i.replace(/^0+/,""))||"0",10);l>200?(s(200),A(!0)):(l<1||isNaN(l)?s(1):s(l),A(!1))},style:{marginBottom:"20px"}}),d&&(0,l.jsx)("span",{id:"errorMsg",style:{color:"red",display:"block"},children:"*For teams larger than 200, check out our Enterprise  plan"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"input-title",children:[" Every ",(0,l.jsx)("span",{id:"output",children:e||1})," user "]}),(0,l.jsxs)("span",{className:"inline input-title",children:[" loses $",(0,l.jsx)("span",{id:"price_loss",children:isNaN(u.loss)?252:u.loss})," on paper-based experiments every month"]})]})})})})})})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-12 text-center wow move-up ",children:(0,l.jsxs)("div",{className:"responsive-tabs ".concat(h?"open":""),onClick:E,children:[(0,l.jsx)("span",{className:"dropdown-arrow",onClick:E}),(0,l.jsxs)("ul",{className:"nav nav-tabs justify-content-center ht-tab-menu",role:"tablist",style:{borderBottom:"0"},children:[(0,l.jsx)("li",{className:"tab__item nav-item active",children:(0,l.jsx)(t.default,{className:"nav-link active",id:"nav-tab1","data-bs-toggle":"tab",href:"standard-tab",role:"tab","aria-selected":"true",children:"Standard"})}),(0,l.jsx)("li",{className:"tab__item nav-item",children:(0,l.jsx)(t.default,{className:"nav-link",id:"nav-tab2","data-bs-toggle":"tab",href:"academic-tab",role:"tab","aria-selected":"false",children:"Academic"})})]})]})})}),(0,l.jsxs)("div",{className:"tab-content ht-tab__content wow move-up ",children:[(0,l.jsxs)("div",{className:"tab-pane fade show active",id:"standard-tab",role:"tabpanel",children:[(0,l.jsxs)("div",{className:"toggle-container",children:[(0,l.jsx)("div",{className:"pricing-options",children:(0,l.jsx)("span",{id:"monthly",className:"monthly"===j?"active":"",children:"Monthly"})}),(0,l.jsxs)("label",{className:"switch",children:[(0,l.jsx)("input",{type:"checkbox",id:"toggleSwitch",onChange:()=>{g("monthly"===j?"yearly":"monthly")}}),(0,l.jsx)("span",{className:"slider round"})]}),(0,l.jsx)("div",{className:"pricing-options",children:(0,l.jsx)("span",{id:"yearly",className:"yearly"===j?"active":"",children:"Yearly"})})]}),(0,l.jsxs)("div",{className:"pricing-details",children:[(0,l.jsx)("div",{id:"monthlyPricing",className:"pricing-plan ".concat("monthly"===j?"active":""),children:(0,l.jsx)("div",{className:"pricing-table-content-area",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row pricing-table-one",children:[(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-3 col-xl-3 pricing-table",style:{visibility:"visible"},children:(0,l.jsxs)("div",{className:"pricing-table__inner free-bg",style:{background:"#FFE7DB"},children:[(0,l.jsxs)("div",{className:"pricing-table__header",style:{marginTop:"40px"},children:[(0,l.jsx)("h6",{className:"sub-title",style:{marginBottom:"0 !important"},children:"ELN Lite"}),(0,l.jsx)("b",{className:"sub-para",children:"For getting familiar with ELN"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_lite",children:v.lite})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",className:"ht-btn ht-btn-md",children:"Try for free"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Free for 30 days:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Beginner-friendly User Interface"}),(0,l.jsx)("li",{className:"list-item",children:"Invite up to 10 Users"}),(0,l.jsx)("li",{className:"list-item",children:"SSO (Google and Microsoft)"}),(0,l.jsx)("li",{className:"list-item",children:"Ready-made Experiment Templates"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-3 col-xl-3 pricing-table",style:{visibility:"visible"},children:(0,l.jsxs)("div",{className:"pricing-table__inner perpul-bg",style:{background:"#D9DAFB"},children:[(0,l.jsx)("div",{className:"badge badge-standard",children:"Recommended"}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Standard"}),(0,l.jsx)("b",{className:"sub-para",children:"Everything in Lite Plan and plus:"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_standard",children:v.standard})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",target:"_blank",className:"ht-btn ht-btn-md",children:"Get started"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Lite, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Single Site"}),(0,l.jsx)("li",{className:"list-item",children:"Basic Inventory"}),(0,l.jsx)("li",{className:"list-item",children:"Configurable Workflows"}),(0,l.jsx)("li",{className:"list-item",children:"250 GB File Storage"}),(0,l.jsx)("li",{className:"list-item",children:"Audit Trails"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-3 col-xl-3 pricing-table pricing-table--popular",style:{visibility:"visible"},children:(0,l.jsxs)("div",{className:"pricing-table__inner green-bg",style:{background:"#E5F4F2"},children:[(0,l.jsx)("div",{className:"pricing-table__feature-mark",children:(0,l.jsx)("span",{children:"Popular"})}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Premium"}),(0,l.jsx)("b",{className:"sub-para",children:"For mid-sized and large teams"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_premium",children:v.premium})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",target:"_blank",className:"ht-btn ht-btn-md",children:"Get started"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Standard, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Multi-Site"}),(0,l.jsx)("li",{className:"list-item",children:"Advanced Inventory"}),(0,l.jsx)("li",{className:"list-item",children:"Instrument Integration"}),(0,l.jsx)("li",{className:"list-item",children:"1 TB Storage"}),(0,l.jsx)("li",{className:"list-item",children:"SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-3 col-xl-3 pricing-table",style:{visibility:"visible"},children:(0,l.jsxs)("div",{className:"pricing-table__inner blue-bg",style:{background:"#E5F3FF"},children:[(0,l.jsx)("div",{style:{marginBottom:"40px"}}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Enterprise"}),(0,l.jsxs)("b",{className:"sub-para enterprise_p_tag",children:["For large teams with ",">"," 200 users"]})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)(t.default,{href:"/contact-us",className:"ht-btn ht-btn-md",children:"Contact Us"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Premium, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Multi-Site"}),(0,l.jsx)("li",{className:"list-item",children:"Multiple Environments/ Domains"}),(0,l.jsx)("li",{className:"list-item",children:"Your Choice of Data Residency"}),(0,l.jsx)("li",{className:"list-item",children:"Storage On Request"}),(0,l.jsx)("li",{className:"list-item",children:"24/7 Enterprise Support"})]})]})]})]})})]})})})}),(0,l.jsx)("div",{id:"yearlyPricing",className:"pricing-plan ".concat("yearly"===j?"active":""),children:(0,l.jsx)("div",{className:"pricing-table-content-area",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row pricing-table-one",children:[(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-3 col-xl-3 pricing-table",style:{visibility:"visible"},children:(0,l.jsxs)("div",{className:"pricing-table__inner free-bg",style:{background:"#FFE7DB"},children:[(0,l.jsx)("div",{style:{marginBottom:"40px"}}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"ELN Lite"}),(0,l.jsx)("b",{className:"sub-para",children:"For getting familiar with ELN"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_lite2",children:u.liteMonthly.toFixed(2)})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"total-price",children:["₹",(0,l.jsx)("span",{id:"price_lite2",children:u.roundliteAnnual.toFixed(2)})]})," ",(0,l.jsxs)("span",{children:["for ",(0,l.jsx)("span",{id:"output1",children:e})," users"]})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",className:"ht-btn ht-btn-md",children:"Try for free"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Free for 30 days:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Beginner-friendly User Interface"}),(0,l.jsx)("li",{className:"list-item",children:"Invite up to 10 Users"}),(0,l.jsx)("li",{className:"list-item",children:"SSO (Google and Microsoft)"}),(0,l.jsx)("li",{className:"list-item",children:"Ready-made Experiment Templates"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-3 col-xl-3 pricing-table",style:{visibility:"visible"},children:(0,l.jsxs)("div",{className:"pricing-table__inner perpul-bg",style:{background:"#D9DAFB"},children:[(0,l.jsx)("div",{className:"badge badge-standard",children:"Recommended"}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Standard"}),(0,l.jsx)("b",{className:"sub-para",children:"Everything in Lite Plan and plus:"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_standard2",children:u.standardMonthly.toFixed(2)})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"total-price",children:["₹",(0,l.jsx)("span",{id:"price_standard2",children:u.roundstandardAnnual.toFixed(2)})]})," ",(0,l.jsxs)("span",{children:["for ",(0,l.jsx)("span",{id:"output2",children:e})," users"]})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)("a",{href:"https://logilabelnlite.azurewebsites.net/register",target:"_blank",className:"ht-btn ht-btn-md",children:"Get started"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Lite, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Single Site"}),(0,l.jsx)("li",{className:"list-item",children:"Basic Inventory"}),(0,l.jsx)("li",{className:"list-item",children:"Configurable Workflows"}),(0,l.jsx)("li",{className:"list-item",children:"250 GB File Storage"}),(0,l.jsx)("li",{className:"list-item",children:"Audit Trails"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-3 col-xl-3 pricing-table pricing-table--popular",style:{visibility:"visible"},children:(0,l.jsxs)("div",{className:"pricing-table__inner green-bg",style:{background:"#E5F4F2"},children:[(0,l.jsx)("div",{className:"pricing-table__feature-mark",children:(0,l.jsx)("span",{children:"Popular"})}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Premium"}),(0,l.jsx)("b",{className:"sub-para",children:"For mid-sized and large teams"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_premium2",children:u.premiumMonthly.toFixed(2)})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"total-price",children:["₹",(0,l.jsx)("span",{id:"price_premium2",children:u.roundpremiumAnnual.toFixed(2)})]})," ",(0,l.jsxs)("span",{children:["for ",(0,l.jsx)("span",{id:"output3",children:e})," users"]})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)("a",{href:"https://logilabelnlite.azurewebsites.net/register",target:"_blank",className:"ht-btn ht-btn-md",children:"Get started"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Standard, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Multi-Site"}),(0,l.jsx)("li",{className:"list-item",children:"Advanced Inventory"}),(0,l.jsx)("li",{className:"list-item",children:"Instrument Integration"}),(0,l.jsx)("li",{className:"list-item",children:"1 TB Storage"}),(0,l.jsx)("li",{className:"list-item",children:"SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-3 col-xl-3 pricing-table",style:{visibility:"visible"},children:(0,l.jsxs)("div",{className:"pricing-table__inner blue-bg",style:{background:"#E5F3FF"},children:[(0,l.jsx)("div",{style:{marginBottom:"40px"}}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Enterprise"}),(0,l.jsx)("b",{className:"sub-para enterprise_p_tag",style:{padding:"15px"},children:"For large teams with > 200 users"})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)("a",{href:"/contact-us",className:"ht-btn ht-btn-md",children:"Contact us"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Premium, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Multi-Site"}),(0,l.jsx)("li",{className:"list-item",children:"Multiple Environments/Domains"}),(0,l.jsx)("li",{className:"list-item",children:"Your Choice of Data Residency"}),(0,l.jsx)("li",{className:"list-item",children:"Storage On Request"}),(0,l.jsx)("li",{className:"list-item",children:"24/7 Enterprise Support"})]})]})]})]})})]})})})})]})]}),(0,l.jsxs)("div",{className:"tab-pane",id:"academic-tab",role:"tabpanel",children:[(0,l.jsxs)("div",{className:"toggle-container",children:[(0,l.jsx)("div",{className:"pricing-options",children:(0,l.jsx)("span",{id:"monthly2",className:o?"active":"",children:"Monthly"})}),(0,l.jsxs)("label",{className:"switch",children:[(0,l.jsx)("input",{type:"checkbox",id:"toggleSwitch2",checked:!o,onChange:f}),(0,l.jsx)("span",{className:"slider round"})]}),(0,l.jsx)("div",{className:"pricing-options",children:(0,l.jsx)("span",{id:"yearly2",className:o?"":"active",children:"Yearly"})})]}),(0,l.jsxs)("div",{className:"pricing-details",children:[(0,l.jsx)("div",{id:"monthlyPricing2",className:"pricing-plan ".concat(o?"active":""),children:(0,l.jsx)("div",{className:"pricing-table-content-area",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row pricing-table-one",children:[(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-4 pricing-table",children:(0,l.jsxs)("div",{className:"pricing-table__inner free-bg",style:{background:"#FFE7DB"},children:[(0,l.jsx)("div",{style:{marginBottom:"40px"}}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"ELN Lite"}),(0,l.jsx)("b",{className:"sub-para",children:"Perfect for getting familiar with ELN"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_lite_a",children:u.academiclite})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",className:"ht-btn ht-btn-md",children:"Try for free"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Free for 90 days:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Beginner-friendly User Interface"}),(0,l.jsx)("li",{className:"list-item",children:"Invite up to 10 Users"}),(0,l.jsx)("li",{className:"list-item",children:"SSO (Google and Microsoft)"}),(0,l.jsx)("li",{className:"list-item",children:"Experiment Templates"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-4 pricing-table",children:(0,l.jsxs)("div",{className:"pricing-table__inner perpul-bg",style:{background:"#D9DAFB"},children:[(0,l.jsx)("div",{className:"badge badge-standard",children:"Recommended"}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Standard"}),(0,l.jsx)("b",{className:"sub-para",children:"Everything in Lite Plan plus:"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_standard_a",children:u.academicstandard})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer text-center",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",target:"_blank",className:"ht-btn ht-btn-md",children:"Get started"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Lite, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Single Site"}),(0,l.jsx)("li",{className:"list-item",children:"Basic Inventory"}),(0,l.jsx)("li",{className:"list-item",children:"Configurable Workflows"}),(0,l.jsx)("li",{className:"list-item",children:"250 GB File Storage"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular",children:(0,l.jsxs)("div",{className:"pricing-table__inner green-bg",style:{background:"#E5F4F2"},children:[(0,l.jsx)("div",{className:"pricing-table__feature-mark",children:(0,l.jsx)("span",{children:"Popular"})}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Premium"}),(0,l.jsx)("b",{className:"sub-para",children:"Perfect for mid-sized and large teams"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_premium_a",children:u.academicpremium})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer text-center",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",target:"_blank",className:"ht-btn ht-btn-md",children:"Get started"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Standard, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Multi-Site"}),(0,l.jsx)("li",{className:"list-item",children:"Advanced Inventory"}),(0,l.jsx)("li",{className:"list-item",children:"Instrument Integration"}),(0,l.jsx)("li",{className:"list-item",children:"1 TB Storage"}),(0,l.jsx)("li",{className:"list-item",children:"SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)"})]})]})]})]})})]})})})}),(0,l.jsx)("div",{id:"yearlyPricing2",className:"pricing-plan ".concat(o?"":"active"),children:(0,l.jsx)("div",{className:"pricing-table-content-area",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row pricing-table-one",children:[(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-4 pricing-table",children:(0,l.jsxs)("div",{className:"pricing-table__inner free-bg",style:{background:"#FFE7DB"},children:[(0,l.jsx)("div",{style:{marginBottom:"40px"}}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"ELN Lite"}),(0,l.jsx)("b",{className:"sub-para",children:"Perfect for getting familiar with ELN"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_lite2_a",children:u.yearlyLite})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"total-price",children:["₹",(0,l.jsx)("span",{id:"price_lite2_a",children:u.roundyearlyLite.toFixed(2)})]})," ",(0,l.jsxs)("span",{children:["for ",(0,l.jsx)("span",{id:"output4",children:e})," users"]})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",className:"ht-btn ht-btn-md",children:"Try for free"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Free for 90 days:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Beginner-friendly User Interface"}),(0,l.jsx)("li",{className:"list-item",children:"Invite up to 10 Users"}),(0,l.jsx)("li",{className:"list-item",children:"SSO (Google and Microsoft)"}),(0,l.jsx)("li",{className:"list-item",children:"Experiment Templates"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-4 pricing-table",children:(0,l.jsxs)("div",{className:"pricing-table__inner perpul-bg",style:{background:"#D9DAFB"},children:[(0,l.jsx)("div",{className:"badge badge-standard",children:"Recommended"}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Standard"}),(0,l.jsx)("b",{className:"sub-para",children:"Everything in Lite Plan plus:"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_standard2_a",children:u.yearlyStandard})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"total-price",children:["₹",(0,l.jsx)("span",{id:"price_standard2_a",children:u.roundyearlyStandard.toFixed(2)})]})," ",(0,l.jsxs)("span",{children:["for ",(0,l.jsx)("span",{id:"output5",children:e})," users"]})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",target:"_blank",className:"ht-btn ht-btn-md",children:"Get started"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Lite, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Single Site"}),(0,l.jsx)("li",{className:"list-item",children:"Basic Inventory"}),(0,l.jsx)("li",{className:"list-item",children:"Configurable Workflows"}),(0,l.jsx)("li",{className:"list-item",children:"250 GB File Storage"}),(0,l.jsx)("li",{className:"list-item",children:"Audit Trails"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular",children:(0,l.jsxs)("div",{className:"pricing-table__inner green-bg",style:{background:"#E5F4F2"},children:[(0,l.jsx)("div",{className:"pricing-table__feature-mark",children:(0,l.jsx)("span",{children:"Popular"})}),(0,l.jsxs)("div",{className:"pricing-table__header",children:[(0,l.jsx)("h6",{className:"sub-title",children:"Premium"}),(0,l.jsx)("b",{className:"sub-para",children:"Perfect for mid-sized and large teams"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"price",children:["₹",(0,l.jsx)("span",{id:"singleuser_premium2_a",children:u.yearlyPremium})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"per user / month"}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{className:"total-price",children:["₹",(0,l.jsx)("span",{id:"price_premium2_a",children:u.roundyearlyPremium.toFixed(2)})]})," ",(0,l.jsxs)("span",{children:["for ",(0,l.jsx)("span",{id:"output6",children:e})," users"]})]}),(0,l.jsxs)("div",{className:"pricing-table__body",children:[(0,l.jsx)("div",{className:"pricing-table__footer",children:(0,l.jsx)(t.default,{href:"https://logilabelnlite.azurewebsites.net/register",target:"_blank",className:"ht-btn ht-btn-md",children:"Get started"})}),(0,l.jsxs)("div",{className:"align-left mt-30",children:[(0,l.jsx)("b",{children:"Everything in Standard, plus:"}),(0,l.jsxs)("ul",{className:"dark-check-list",children:[(0,l.jsx)("li",{className:"list-item",children:"Multi-Site"}),(0,l.jsx)("li",{className:"list-item",children:"Advanced Inventory"}),(0,l.jsx)("li",{className:"list-item",children:"Instrument Integration"}),(0,l.jsx)("li",{className:"list-item",children:"1 TB Storage"}),(0,l.jsx)("li",{className:"list-item",children:"SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)"})]})]})]})]})})]})})})}),(0,l.jsx)("div",{className:"pricing-toggle",style:{visibility:"hidden"},children:(0,l.jsx)("button",{onClick:f,children:o?"Switch to Yearly Pricing":"Switch to Monthly Pricing"})})]})]})]})]})})})}},594:function(){},1978:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/cpi.6e8f04e2.svg",height:400,width:500,blurWidth:0,blurHeight:0}},1764:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/award.5bf97457.webp",height:844,width:1526,blurDataURL:"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAEyEUGhoUGg6q7HPZ22/qqC58/5KV/4MyCxAaEBAeEQwAVlA4IEYAAADQAQCdASoIAAQAAkA4JZgCdAEO/1G+cAD+m662EF58lNTTPx8y7n5TpLu//1NTk64ufF4SdNdn3K6lImQuqqo5mcdKQAAA",blurWidth:8,blurHeight:4}},9950:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/box-1.849d4c63.png",height:136,width:136,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUocusRZeoRZOkUZ+wRZu46gPAPYecSavdMaXESZeoRZe0SX+gcbO9UkO4IXukPZO0OZOwPZOwQZesRbf8sd/HIkNl0AAAAE3RSTlP8emU2/P4Q/gBumBz+/Ii6v9rWxIDRWQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJwlyrcBwCAQALEDPhpwgv1ndWHVInopJS2IY7mvGjRBkce4B8rcJ5eje+pJkwHy2p+9BtEzs1p8RPgB9eEpnogAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},5644:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/box-2.dc62416f.svg",height:191,width:191,blurWidth:0,blurHeight:0}},3730:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/box-3.8a9586ac.svg",height:191,width:192,blurWidth:0,blurHeight:0}},1353:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/11.13e0edd6.png",height:400,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAFVBMVEU/Pz1MaXFVNmFGRkaWQ2GqVVXUf3/pV1aqAAAAB3RSTlMjADcXTAMGzjBAuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAB1JREFUeJxjYIQCBjZWKIOFiQEEmBmYYAy4GhgDAAbhADr4WvlBAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},6451:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/2.b02ae993.png",height:400,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAD1BMVEVMaXFmdIhcX5TC/wDN/0wZNc3eAAAABXRSTlMANyMCBdfAqB0AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAfSURBVHicY2CAA2YWFmYwzcjIyMjExMDAzMQEYWAAAAULACe1KAghAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},8736:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/a2.e392082d.jpg",height:400,width:500,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGtCf/EABUQAQEAAAAAAAAAAAAAAAAAAAIA/9oACAEBAAEFAiVf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhAAAwAAAAAAAAAAAAAAAAAAAAIh/9oACAEBAAY/Aqx//8QAFhABAQEAAAAAAAAAAAAAAAAAAQAh/9oACAEBAAE/IQBs3//aAAwDAQACAAMAAAAQ8//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAML//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxB0/8QAGBABAQADAAAAAAAAAAAAAAAAAREAIaH/2gAIAQEAAT8QrwSqix2zkz//2Q==",blurWidth:8,blurHeight:6}},1014:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/a3.1df02882.jpg",height:400,width:500,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABrwn/xAAVEAEBAAAAAAAAAAAAAAAAAAARAv/aAAgBAQABBQIp/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhAAAwAAAAAAAAAAAAAAAAAAACEy/9oACAEBAAY/AqR//8QAFxAAAwEAAAAAAAAAAAAAAAAAABExgf/aAAgBAQABPyG3JH//2gAMAwEAAgADAAAAEA//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxCP/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Qr//EABoQAAICAwAAAAAAAAAAAAAAAAEhABExUZH/2gAIAQEAAT8QKIhkrl6n/9k=",blurWidth:8,blurHeight:6}},7086:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/cloud-saas.545bc161.svg",height:426,width:415,blurWidth:0,blurHeight:0}},7079:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/eln-vertical.cf23f483.svg",height:158,width:122,blurWidth:0,blurHeight:0}},9178:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/hosting.1e9fdb67.svg",height:447,width:412,blurWidth:0,blurHeight:0}},8095:function(e,s){"use strict";s.Z={src:"/elnwebsitenext/_next/static/media/sec1.1a6f8b84.svg",height:138,width:209,blurWidth:0,blurHeight:0}}}]);