const test = {
  startId: "2368111",
  name: "May peak Garden TEST",
  templates: [
    {
      name: "May peak Garden - Newsletter",
      type: "newsletter",
      products: null,
      template: [
        {
          title: "Header section",
          component: Header,
          props: [
            {
              id,
              assembly: {
                src: {
                  value: {
                    type: "query",
                    column: "Header asembly src",
                    query_id: "1",
                    placeholderPosition: "325",
                    value: "https://upload.pictureserver.net/static/2024/20240520_01.jpg",
                  }
                },
              },
              webVersion: {
                troubleViewing: getField(queries.header, "Trouble viewing"),
                troubleViewingHrefText: getField(
                  queries.header,
                  "Trouble viewing href text"
                ),
              },
              whiteList: {
                addBeliani: getField(queries.header, "Add Beliani to your"),
                whiteList: getField(queries.header, "Whitelist"),
                whitelistHref: getField(queries.header, "Whitelist href"),
              },
              advantages: {
                freeDelivery: getField(queries.header, "Free Delivery"),
                daysReturn: getField(queries.header, "365-Day Return"),
              },
              topImage: {
                src: getField(queries.header, "Top image src"),
                href: getField(queries.header, "Top image href"),
              },
              firstCategory: {
                src: getField(queries.header, "Header Category 1 src"),
                href: getField(queries.header, "Header Category 1 href"),
              },
              secondCategory: {
                src: getField(queries.header, "Header Category 2 src"),
                href: getField(queries.header, "Header Category 2 href"),
              },
              thirdCategory: {
                src: getField(queries.header, "Header Category 3 src"),
                href: getField(queries.header, "Header Category 3 href"),
              },
            },
            { country, type },
          ],
        },
        {
          title: "UK header",
          component: `
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ff2f00; color: #000;" >
              <tbody>
                <tr>
                  <td>
                    <img loading="lazy" src=${getField(
                      queries.header,
                      "Header asembly src"
                    )} style="display: block; max-width: 100%;">
                  </td>
                </tr>
              </tbody>
            </table>
            `,
          renderOn: {
            relation: "slug",
            values: ["UK"],
          },
        },
        {
          title: "Body",
          component: `
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ff2f00; color: #000;" id="newsletter">
            <tbody>
                <tr>
                    <td align="center">
                      ${ImageWithLink({
                        href: links[0],
                        src: links[1],
                      })}
                    </td>
                </tr>
                <tr>
                    <td align="center">
                      ${ImageWithLink({
                        href: links[2],
                        src: links[3],
                      })}
                    </td>
                </tr>
      
                <tr>
                  <td style="background-color: #ff2f00; ">
                    ${Space()}
                  </td>
                </tr>
      
                <tr>
                  <td class="newsletterContainer"style="background-color: #ff2f00; ">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="center">
                                    <span class="newsletterTitleNew" style="color: #ffffff;">
                                        ${queries.intro}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  </td>
                </tr>
      
                <tr>
                  <td style="background-color: #ff2f00;">
                    ${Space("newsletterBottom80px")}
                  </td>
                </tr>
      
                <tr>
                  <td style="background-color: #ff2f00;">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tbody>
                            ${categories
                              .map((item) => {
                                const computed = computeValue(item);
                                return `
                              <tr>
                                  <td align="center">
                                    <a href="${getCategory(computed.href)}">
                                      <img alt="" src="${
                                        computed.src
                                      }" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                                    </a>
                                  </td>
                              </tr>
                              `;
                              })
                              .join("")}
                        </tbody>
                    </table>
                  </td>
                </tr>
      
                <tr>
                  <td align="center">
                    <a href="${getField(queries.youtubeHref, "Href")}">
                      <img alt="" src="https://upload.pictureserver.net/static/2024/20240520dog.jpg" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                    </a>
                  </td>
                </tr>
      
                <tr>
                  <td class="newsletterBottom35px" >
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <a href="${getField(
                      queries.youtubeHref,
                      "Href"
                    )}" style="color:#ffffff; text-decoration: underline;">
                      <span class="newsletterCta">${queries.watchNow}</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom80px" >
                  </td>
                </tr>
      
            <tbody>
        </table>
            `,
        },
        {
          title: "Soon ending",
          component: `
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
                <tbody>
                    <tr>
                        <td align="left">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                <tr>
                                  <td class="newsletterBottom35px" >
                                    ${Line()}
                                  </td>
                                </tr>
                                    <tr>
                                        <td align="left" class="newsletterBottom35px">
                                            <span class="newsletterSoonEndingTitle">${
                                              queries.soonEnding
                                            }</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" class="newsletterBottom20px">
                                            <a href=${links[4]}>
                                                <img loading="lazy" src=${
                                                  links[5]
                                                } style="display: block;" width="100%">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" class="newsletterBottom35px">
                                            <a href=${links[6]}>
                                                <img loading="lazy" src=${
                                                  links[7]
                                                } style="display: block;" width="100%">
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    ${
                      country === "UK"
                        ? `
                    <tr>
                      <td class="newsletterBottom35px" >
                        ${Line()}
                      </td>
                    </tr>
                      <tr>
                      <td>
                        <a href="#">
                        <img loading="lazy" src=${getField(
                          queries.footer,
                          "Asembly src"
                        )} style="display: block; max-width: 100%;">
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="newsletterBottom35px" >
                      </td>
                    </tr>
                    `
                        : ""
                    }
                </tbody>
            </table>
            `,
        },
        {
          title: "Footer",
          component: Footer,
          props: [
            {
              id,
              assembly: {
                src: getField(queries.footer, "Asembly src"),
              },
              firstCategory: {
                src: getField(queries.footer, "Category src 1"),
                href: getField(queries.footer, "Category href 1"),
              },
              secondCategory: {
                src: getField(queries.footer, "Category src 2"),
                href: getField(queries.footer, "Category href 2"),
              },
              thirdCategory: {
                src: getField(queries.footer, "Category src 3"),
                href: getField(queries.footer, "Category href 3"),
              },
              foutrthCategory: {
                src: getField(queries.footer, "Category src 4"),
                href: getField(queries.footer, "Category href 4"),
              },
              fifthCategory: {
                src: getField(queries.footer, "Category src 5"),
                href: getField(queries.footer, "Category href 5"),
              },
              sixthCategory: {
                src: getField(queries.footer, "Category src 6"),
                href: getField(queries.footer, "Category href 6"),
              },
              seventhCategory: {
                src: getField(queries.footer, "Category src 7"),
                href: getField(queries.footer, "Category href 7"),
              },
              eigthCategory: {
                src: getField(queries.footer, "Category src 8"),
                href: getField(queries.footer, "Category href 8"),
              },
              klarna: {
                src: getField(queries.footer, "Klarna src"),
                href: getField(queries.footer, "Klarna href"),
              },
              socials: {
                title: getField(queries.footer, "Socials Title"),
                instagram: {
                  src: getField(queries.footer, "Instagram src"),
                  href: getField(queries.footer, "Instagram href"),
                },
                facebook: {
                  src: getField(queries.footer, "Facebook src"),
                  href: getField(queries.footer, "Facebook href"),
                },
                youtube: {
                  src: getField(queries.footer, "Youtube src"),
                  href: getField(queries.footer, "Youtube href"),
                },
                pinterest: {
                  src: getField(queries.footer, "Pinterest src"),
                  href: getField(queries.footer, "Pinterest href"),
                },
              },
              firstAdvantage: {
                src: getField(queries.footer, "Advantages src 1"),
                href: getField(queries.footer, "Advantages href 1"),
              },
              secondAdvantage: {
                src: getField(queries.footer, "Advantages src 2"),
                href: getField(queries.footer, "Advantages href 2"),
              },
              thirdAdvantage: {
                src: getField(queries.footer, "Advantages src 3"),
                href: getField(queries.footer, "Advantages href 3"),
              },
              fourthAdvantage: {
                src: getField(queries.footer, "Advantages src 4"),
                href: getField(queries.footer, "Advantages href 4"),
              },
              companyDetails: {
                title: getField(queries.footer, "Company Details"),
                address: getField(queries.footer, "Address"),
                mobileNumber: getField(queries.footer, "Mobile number"),
                emailAddress: getField(queries.footer, "Email address"),
                mailTo: getField(queries.footer, "Mail to"),
                email: getField(queries.footer, "Email"),
                commercialRegister: getField(
                  queries.footer,
                  "Commercial register"
                ),
                vat: getField(queries.footer, "VAT"),
              },
              title: getField(queries.footer, "Title"),
              conditionsTitle: getField(queries.footer, "Conditions title"),
              conditionsText: queries.condition,
              unsubscribeTitle: getField(queries.footer, "Unsubscribe title"),
            },
            { country, type },
          ],
        },
      ],
      categories: [
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_04.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_05.jpg",
          },
          href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_06.jpg",
          },
          href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_07.jpg",
          },
          href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_08.jpg",
          },
          href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_09.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/garden-accessories/pots-and-planters/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_10.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_11.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/parasols/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_12.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
        },
      ],
      wrapper: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
                <title>Beliani</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=cyrillic-ext,latin-ext" rel="stylesheet">
                <!--[if gte mso 9]>
                        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color="#ececec">
                        </v:background>
                    <![endif]-->
                <!--[if gte mso 10]>
                        <xml>
                            <o:OfficeDocumentSettings>
                            <o:AllowPNG/>
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                        </xml>
                    <![endif]-->
            </head>
        
            <body class="body" width="100%" style="width:100% !important; padding:0 !important; margin:0 auto !important; font-family: 'Open Sans', sans-serif!important; font-size:13px; color:#000000; text-align:left; background-color:#ececec;">
            </body>
        </html>`,
      css: `.title-advantages {
          text-align: center;
          font-size: 11px;
          color: #8c8278;
          padding-bottom: 10px;
          padding-top: 10px;
          margin: 0;
        }
        
        .title-advantages-item {
          margin-left: 4px;
        }
        
        .newsletterRecommendationHeader {
          text-align: center;
          font-size: 11px;
          color: #8c8278;
          margin-bottom: 10px;
          margin-top: 10px;
        }
        
        /* NEWSLETTER START */
        
        .newsletterFreebieContainer {
          padding-left: 10px;
        }
        
        .newsletterBottom80px {
          padding-bottom: 80px;
        }
        
        .newsletterContainer {
          padding-left: 20px;
          padding-right: 20px;
        }
        
        .newsletterCta {
          font-size: 20px;
          line-height: 1.25;
          font-family: "Open Sans", sans-serif;
        }
        
        .newsletterBottom20px {
          padding-bottom: 20px;
        }
        
        .newsletterBottom35px {
          padding-bottom: 35px;
        }
        
        .newsletterParagraph {
          font-size: 18px;
          font-family: "Open Sans", sans-serif;
          line-height: 1.25;
        }
        
        .newsletterTitleNew {
          font-size: 22px;
          font-weight: 600;
          font-family: "Open Sans", sans-serif;
          line-height: 1.25;
        }
        
        .newsletterTitle {
          font-size: 30px;
          font-family: "Open Sans", sans-serif;
          line-height: 1.25;
        }
        
        .newsletterProductTitle {
          font-size: 20px;
          font-family: "Open Sans", sans-serif;
          line-height: 1.25;
        }
        
        .newsletterProductLowPrice {
          font-size: 18px;
          font-family: "Open Sans", sans-serif;
          line-height: 1.25;
          font-weight: 600;
        }
        
        .newsletterProductHightPrice {
          font-size: 14px;
          font-family: "Open Sans", sans-serif;
          line-height: 1.25;
          text-decoration: line-through;
        }
        
        .newsletterRight10px {
          padding-right: 10px;
        }
        
        .newsletterLeft10px {
          padding-left: 10px;
        }
        
        /* NEWSLETTER END */
        
        .newsletterFooter {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
        
        .newsletterConditions {
          color: black;
          font-family: "Open Sans", sans-serif;
          font-size: 8px;
        }
        
        .newsletterFooterCompanyDetails {
          vertical-align: middle;
          padding-top: 20px;
          padding-right: 0px;
          padding-bottom: 20px;
          font-size: 11px;
          font-family: "Open Sans", sans-serif !important;
          color: #000000;
          background: #ececec;
          width: 100%;
        }
        
        .newsletterFooterTitle {
          text-align: left;
          color: #000000;
          font-family: "Open Sans", sans-serif;
          font-size: 20px;
        }
        
        .newsletterProductTitleFreebie {
          text-align: center;
          color: #000000;
          font-family: "Open Sans", sans-serif;
          font-size: 20px;
        }
        
        .newsletterFooterCategoryLEFT {
          padding-bottom: 20px !important;
          padding-right: 10px !important;
        }
        
        .newsletterFooterCategoryRIGHT {
          padding-bottom: 20px !important;
          padding-left: 10px !important;
        }
        
        .newsletterFooterCategoryLEFTBottom {
          padding-right: 10px !important;
        }
        
        .newsletterFooterCategoryRIGHTBottom {
          padding-left: 10px !important;
        }
        
        .newsletterSocialIcon {
          padding-left: 25px !important;
        }
        
        .newsletterTopBottomContainer {
          padding-top: 35px !important;
          padding-bottom: 35px !important;
        }
        
        .newsletterKlarnaBannerContainer {
          padding-top: 35px !important;
          padding-bottom: 35px !important;
        }
        
        .newsletterSoonEndingTitle {
          color: #000000;
          font-family: "Open Sans", sans-serif;
          font-size: 20px;
        }
        
        @media screen and (max-width: 768px) {
          .newsletterFooterCategoryLEFTBottom {
            padding-right: 5px !important;
          }
        
          .newsletterFooterCategoryRIGHTBottom {
            padding-left: 5px !important;
          }
        
          .newsletterFooterCategoryLEFT {
            padding-bottom: 10px !important;
            padding-right: 5px !important;
          }
        
          .newsletterFooterCategoryRIGHT {
            padding-bottom: 10px !important;
            padding-left: 5px !important;
          }
        
          .newsletterSocialIcon {
            padding-left: 13px !important;
          }
        
          .newsletterTopBottomContainer {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
        
          .newsletterFooterTitle {
            font-size: 18px;
          }
        
          .newsletterProductTitleFreebie {
            font-size: 18px;
          }
        
          .newsletterProductTitle {
            font-size: 18px;
          }
        
          .newsletterProductLowPrice {
            font-size: 16px;
          }
        
          .newsletterProductHightPrice {
            display: block;
          }
        
          .newsletterProductTitleContainer {
            padding-top: 10px;
          }
        
          .newsletterTitle {
            font-size: 25px;
          }
        
          .newsletterTitleNew {
            font-size: 18px;
          }
        
          .newsletterContainer {
            padding-left: 10px;
            padding-right: 10px;
          }
        
          .newsletterFreebieContainer {
            padding-left: 10px;
            padding-right: 0px !important;
          }
        
          .newsletterBottom35px {
            padding-bottom: 20px;
          }
        
          .newsletterParagraph {
            font-size: 16px;
          }
        
          .newsletterLeft10px {
            padding-left: 5px;
          }
        
          .newsletterRight10px {
            padding-right: 5px;
          }
        
          .newsletterBottom20px {
            padding-bottom: 10px;
          }
        
          .newsletterBottom80px {
            padding-bottom: 50px;
          }
        }
        
        @media screen and (max-width: 570px) {
          .newsletterProductTitleFreebie {
            font-size: 16px;
          }
        }
        
        @media screen and (max-width: 460px) {
          .newsletterProductTitleFreebie {
            font-size: 14px;
          }
        }
        
        @media screen and (max-width: 370px) {
          .newsletterProductTitleFreebie {
            font-size: 12px;
          }
        }
        `,
      links: [
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-05-20",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_01.jpg",
          },
        },
        {
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-05-20",
          },
          query: true,
        },
        {
          value: "https://upload.pictureserver.net/static/2024/20240520gif.gif",
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-05-13",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value: "https://upload.pictureserver.net/static/2024/20240513b.png",
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-05-10",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value: "https://upload.pictureserver.net/static/2024/20240510b.png",
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "13.05.24 - May Peak reminder!",
          tableRange: "27",
          name: "watchNow",
        },
        {
          tableId: "1KoKsWCt6D2vu20KrCyqxx6U2zbYaviQZJQKc2wOrw6o",
          tableName: "Sheet80",
          tableRange: "?majorDimension=COLUMNS",
          tableColumns: false,
          name: "youtubeHref",
        },
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "20.05.24 - May peak garden!",
          tableRange: "11",
          name: "intro",
        },
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "20.05.24 - May peak garden!",
          tableRange: "25",
          name: "soonEnding",
        },
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "20.05.24 - May peak garden!",
          tableRange: "27:28",
          name: "condition",
        },
        {
          id: "1",
          tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
          tableName: "Header",
          tableRange: "?majorDimension=COLUMNS",
          name: "header",
          tableColumns: false,
        },
        {
          tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
          tableName: "Footer",
          tableRange: "?majorDimension=COLUMNS",
          name: "footer",
          tableColumns: false,
        },
      ],
    },
    {
      name: "May peak Garden - Landing",
      type: "landing",
      template: CategoriesRows,
      wrapper: null,
      categories: [
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_04.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_05.jpg",
          },
          href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_06.jpg",
          },
          href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_07.jpg",
          },
          href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_08.jpg",
          },
          href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_09.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/garden-accessories/pots-and-planters/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_10.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_11.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/parasols/",
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_12.jpg",
          },
          href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
        },
      ],
      css: `@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap);#newsletter .newsletterCta,#newsletter .newsletterParagraph,#newsletter .newsletterProductHightPrice,#newsletter .newsletterProductLowPrice,#newsletter .newsletterProductTitle,#newsletter .newsletterTitle,#newsletter .newsletterTitleNew{line-height:1.25;}#newsletter .title-advantages{text-align:center;font-size:11px;color:#8c8278;padding-bottom:10px;padding-top:10px;margin:0}#newsletter .newsletterTitleNew{font-size:22px;font-weight:600}table{table-collapse:unset}#newsletter .title-advantages-item{margin-left:4px}#newsletter .newsletterRecommendationHeader{text-align:center;font-size:11px;color:#8c8278;margin-bottom:10px;margin-top:10px}#newsletter .newsletterFreebieContainer,#newsletter .newsletterLeft10px{padding-left:10px}#newsletter .newsletterBottom80px{padding-bottom:80px}#newsletter .newsletterContainer,#newsletter.newsletterContainer{padding-left:20px;padding-right:20px}#newsletter .newsletterCta{font-size:20px}#newsletter .newsletterBottom20px{padding-bottom:20px}#newsletter .newsletterBottom35px{padding-bottom:35px}#newsletter .newsletterParagraph{font-size:18px}#newsletter .newsletterTitle{font-size:30px}#newsletter .newsletterProductTitle{font-size:20px}#newsletter .newsletterProductLowPrice{font-size:18px;font-weight:600}#newsletter .newsletterProductHightPrice{font-size:14px;text-decoration:line-through}#newsletter .newsletterRight10px{padding-right:10px}#newsletter .newsletterFooter{padding-left:20px!important;padding-right:20px!important}#newsletter .newsletterConditions{color:#000;font-family:"Open Sans",sans-serif;font-size:8px}#newsletter .newsletterFooterCompanyDetails{vertical-align:middle;padding-top:20px;padding-right:0;padding-bottom:20px;font-size:11px;font-family:"Open Sans",sans-serif!important;color:#000;background:#ececec;width:100%}#newsletter .newsletterFooterTitle,#newsletter .newsletterProductTitleFreebie,#newsletter .newsletterSoonEndingTitle{color:#000;font-family:"Open Sans",sans-serif;font-size:20px}#newsletter .newsletterFooterTitle{text-align:left}#newsletter .newsletterProductTitleFreebie{text-align:center}#newsletter .newsletterFooterCategoryLEFT{padding-bottom:20px!important;padding-right:10px!important}#newsletter .newsletterFooterCategoryRIGHT{padding-bottom:20px!important;padding-left:10px!important}#newsletter .newsletterFooterCategoryLEFTBottom{padding-right:10px!important}#newsletter .newsletterFooterCategoryRIGHTBottom{padding-left:10px!important}#newsletter .newsletterSocialIcon{padding-left:25px!important}#newsletter .newsletterKlarnaBannerContainer,#newsletter .newsletterTopBottomContainer{padding-top:35px!important;padding-bottom:35px!important}@media screen and (max-width:768px){#newsletter .newsletterFooterCategoryLEFTBottom{padding-right:5px!important}#newsletter .newsletterFooterCategoryRIGHTBottom{padding-left:5px!important}#newsletter .newsletterFooterCategoryLEFT{padding-bottom:10px!important;padding-right:5px!important}#newsletter .newsletterFooterCategoryRIGHT{padding-bottom:10px!important;padding-left:5px!important}#newsletter .newsletterSocialIcon{padding-left:13px!important}#newsletter .newsletterTopBottomContainer{padding-top:20px!important;padding-bottom:20px!important}#newsletter .newsletterFooterTitle,#newsletter .newsletterProductTitle,#newsletter .newsletterProductTitleFreebie,#newsletter .newsletterTitleNew{font-size:18px}#newsletter .newsletterParagraph,#newsletter .newsletterProductLowPrice{font-size:16px}#newsletter .newsletterProductHightPrice{display:block}#newsletter .newsletterProductTitleContainer{padding-top:10px}#newsletter .newsletterTitle{font-size:25px}#newsletter .newsletterContainer,#newsletter.newsletterContainer{padding-left:10px;padding-right:10px}#newsletter .newsletterFreebieContainer{padding-left:10px;padding-right:0!important}#newsletter .newsletterBottom35px{padding-bottom:20px}#newsletter .newsletterLeft10px{padding-left:5px}#newsletter .newsletterRight10px{padding-right:5px}#newsletter .newsletterBottom20px{padding-bottom:10px}#newsletter .newsletterBottom80px{padding-bottom:50px}}@media screen and (max-width:570px){#newsletter .newsletterProductTitleFreebie{font-size:16px}}@media screen and (max-width:460px){#newsletter .newsletterProductTitleFreebie{font-size:14px}}@media screen and (max-width:370px){#newsletter .newsletterProductTitleFreebie{font-size:12px}}`,
      links: [
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-05-20",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value:
              "https://upload.pictureserver.net/static/2024/20240520_01.jpg",
          },
        },
        {
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-05-20",
          },
          query: true,
        },
        {
          value: "https://upload.pictureserver.net/static/2024/20240520gif.gif",
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-05-13",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value: "https://upload.pictureserver.net/static/2024/20240513b.png",
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-05-10",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value: "https://upload.pictureserver.net/static/2024/20240510b.png",
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1KoKsWCt6D2vu20KrCyqxx6U2zbYaviQZJQKc2wOrw6o",
          tableName: "Sheet80",
          tableRange: "?majorDimension=COLUMNS",
          tableColumns: false,
          name: "youtubeHref",
        },
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "13.05.24 - May Peak reminder!",
          tableRange: "13",
          name: "intro",
        },
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "13.05.24 - May Peak reminder!",
          tableRange: "27",
          name: "watchNow",
        },
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "13.05.24 - May Peak reminder!",
          tableRange: "29",
          name: "soonEnding",
        },
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "13.05.24 - May Peak reminder!",
          tableRange: "31:32",
          name: "condition",
        },
        {
          tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
          tableName: "Header",
          tableRange: "?majorDimension=COLUMNS",
          name: "header",
          tableColumns: false,
        },
        {
          tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
          tableName: "Footer",
          tableRange: "?majorDimension=COLUMNS",
          name: "footer",
          tableColumns: false,
        },
      ],
    },
  ],
};
