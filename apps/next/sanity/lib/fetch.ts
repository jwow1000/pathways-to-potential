import client from "@/sanity/lib/client";
import { 
  getAboutQuery, 
  getInsurancesQuery, 
  getContactQuery,
  getHowQuery,
  getMeetTeamQuery,
  getServicesQuery,
  getLandingPageQuery,
} from "./queries";
import { About, AcceptedInsurances, Contact, HowItWorks, MeetTeam, Services } from "@/../studio/sanity.types";

export async function getLandingPage() {
  return await client.fetch(getLandingPageQuery);
}
export async function getAbout() {
  return await client.fetch<About>(getAboutQuery);
}
export async function getInsurances() {
  return await client.fetch<AcceptedInsurances>(getInsurancesQuery);
}
export async function getContact() {
  return await client.fetch<Contact>(getContactQuery);
}
export async function getHow() {
  return await client.fetch<HowItWorks>(getHowQuery);
}
export async function getMeetTeam() {
  return await client.fetch<MeetTeam>(getMeetTeamQuery);
}
export async function getServices() {
  return await client.fetch<Services>(getServicesQuery);
}
