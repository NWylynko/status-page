
import styles from "./page.module.css"
import { Box } from "../components/Box";

import { DiscordDetail } from "../Details/Discord";
import { GithubDetail } from "../Details/Github";
import { GoogleCalendarDetail } from "../Details/GoogleCalendar";
import { LinkedinDetail } from "../Details/Linkedin";
import { PcControlDetail } from "../Details/PcControl";
import { RedditDetail } from "../Details/Reddit";
import { SpotifyDetail } from "../Details/Spotify";
import { StocksDetail } from "../Details/Stocks";
import { TwitterDetail } from "../Details/Twitter";
import { VercelDetail } from "../Details/Vercel";
import { YoutubeLiveDetail } from "../Details/YoutubeLive";
import { ZohoEmailsDetail } from "../Details/ZohoEmails";

export default async function Home() {
  return (
    <main className={styles.container}>
      <DiscordDetail />
      <GithubDetail />
      <GoogleCalendarDetail />
      <LinkedinDetail />
      <PcControlDetail />
      <RedditDetail />
      <SpotifyDetail />
      <StocksDetail />
      <TwitterDetail />
      <VercelDetail />
      <YoutubeLiveDetail />
      <ZohoEmailsDetail />
    </main>
  )
}