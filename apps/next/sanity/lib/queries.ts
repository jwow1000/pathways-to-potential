import { defineQuery } from "next-sanity";

export const getLandingPageQuery = defineQuery(`
{
  "about": *[_type == "about"][0],
  "contact": *[_type == "contact"][0],
  "howItWorks": *[_type == "howItWorks"][0],
  "meetTheTeam": *[_type == "meetTheTeam"][0],
  "services": *[_type == "services"][0],
  "landingPage": *[_type == "homePageAssets"][0],
}
`);

export const getAboutQuery = defineQuery(`
  *[_type == "about"] [0]
`);

export const getInsurancesQuery = defineQuery(`
  *[_type == "acceptedInsurances"] [0]
`);

export const getContactQuery = defineQuery(`
  *[_type == "contact"] [0]
`);

export const getHowQuery = defineQuery(`
  *[_type == "howItWorks"] [0]
`);

export const getMeetTeamQuery = defineQuery(`
  *[_type == "meetTheTeam"] [0]
`);

export const getServicesQuery = defineQuery(`
  *[_type == "services"] [0]
`);

