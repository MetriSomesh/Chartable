import axios from "axios";
import {  NextResponse } from "next/server";

export async function GET() {
  try {
    // Make the request from the server to the Spotify API
    const response = await axios.get(
      "https://creators.spotify.com/pod/api/currentuser",
      {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "accept-encoding": "gzip, deflate, br, zstd",
          "accept-language": "en-GB,en;q=0.9",
          "cache-control": "max-age=0",
          // "cookie":
          //   "sssss=1; sp_t=6da555777edd35b0b4f7b9518a89737b; sp_m=in-en; sp_adid=c9376540-ba55-4f74-9a95-155e20fd3a3a; _gcl_au=1.1.89969736.1736315293; _fbp=fb.1.1736315296850.37092786228496672; _hjSessionUser_3893126=eyJpZCI6ImE3ZDBkYmU2LWE0MTMtNTM3ZC04MjVmLWE2MDMwZDY5ZGEzMCIsImNyZWF0ZWQiOjE3MzYzMTUzNTY3OTEsImV4aXN0aW5nIjp0cnVlfQ==; reduxPersist%3AlocalStorage={%22lastPlayedSegment%22:{}}; reduxPersist%3Atutorial={%22dismissedBanners%22:{}%2C%22dismissedTutorialPopups%22:{}%2C%22isOptedOutOfDistribution%22:false%2C%22isShortMetadataFormModalShowing%22:false}; _scid=MdKEEdooTwvj7DHhEiHfZkbnQJ0r24JD; LPVID=U1ZGNkYTVkNzRhZWU2NzZm; OptanonAlertBoxClosed=2025-01-08T05:49:54.752Z; sp_gaid=0088fc870bd89827aa667149ca73611a389d9484d6787472f5e652; _cs_c=0; sp_last_utm=%7B%22utm_campaign%22%3A%22your_account%22%2C%22utm_medium%22%3A%22menu%22%2C%22utm_source%22%3A%22spotify%22%7D; _hp5_event_props.4043975597=%7B%22market%22%3A%22in%22%2C%22loggedIn%22%3Atrue%2C%22language%22%3A%22en%22%7D; _hp5_meta.4043975597=%7B%22userId%22%3A%221662500271414952%22%2C%22sessionId%22%3A%221885383582520049%22%2C%22lastEventTime%22%3A1736584583963%2C%22sessionProperties%22%3A%7B%22time%22%3A1736584583963%2C%22referrer%22%3A%22https%3A%2F%2Fopen.spotify.com%2F%22%2C%22id%22%3A%221885383582520049%22%2C%22search_keyword%22%3A%22%22%2C%22utm%22%3A%7B%22source%22%3A%22spotify%22%2C%22medium%22%3A%22menu%22%2C%22term%22%3A%22%22%2C%22content%22%3A%22%22%2C%22campaign%22%3A%22your_account%22%7D%2C%22initial_pageview_info%22%3A%7B%22time%22%3A1736584583963%2C%22id%22%3A%223479103619151749%22%2C%22title%22%3A%22Spotify%22%2C%22url%22%3A%7B%22domain%22%3A%22www.spotify.com%22%2C%22path%22%3A%22%2Fin-en%2Faccount%2Foverview%2F%22%2C%22query%22%3A%22%3Futm_source%3Dspotify%26utm_medium%3Dmenu%26utm_campaign%3Dyour_account%22%2C%22hash%22%3A%22%22%7D%2C%22source_properties%22%3A%7B%22screen_height%22%3A965%2C%22screen_width%22%3A1920%7D%7D%7D%7D; _cs_id=3d76c7c9-227c-a962-b6f7-fee90261ff8c.1736333945.7.1736584586.1736584586.1732551656.1770497945583.1; _ga_LJDH9SQRHZ=GS1.1.1736587935.1.1.1736588055.0.0.0; _ga_BS28GFQSGL=GS1.1.1736588123.2.0.1736588123.0.0.0; _ga_ZWG1NSHWD8=GS1.1.1736588127.10.0.1736588127.0.0.0; _ga_S35RN5WNT2=GS1.1.1736588188.10.0.1736588188.0.0.0; _ga_ZWRF3NLZJZ=GS1.1.1736844922.12.1.1736845613.0.0.0; _ScCbts=%5B%5D; reduxPersistIndex=[%22reduxPersist:localStorage%22%2C%22reduxPersist:tutorial%22]; _sctr=1%7C1737225000000; _ga_BMC5VGR8YS=GS1.2.1737289458.12.0.1737289458.60.0.0; _gid=GA1.2.682833222.1737803938; ab.storage.deviceId.91ac64b1-3e86-476a-9953-ccba0370c1d6=g%3Aa10850fd-b96c-053d-b0d8-71515fac1eac%7Ce%3Aundefined%7Cc%3A1736315307328%7Cl%3A1737803939518; ab.storage.userId.91ac64b1-3e86-476a-9953-ccba0370c1d6=g%3A00f54e911cfec51dba30ff75cf81404514ab44634b0de8778d686d%7Ce%3Aundefined%7Cc%3A1736315307321%7Cl%3A1737803939519; LPSID-2422064=taQfkWPiTfW7Garu4QrUxw; anchorpw_s=s%3A1Ji4dXiH2D2oQbSR7eenVWDZL9wlWgm-.cNMXIvd3HyhZ4a3MAIHH7C7viV05tR6JxBBHYo6rYKY; sp_dc=AQDLw5zDTuSM7gg8OgOqryhmG7cmcuziFOStWqZjUlkQZorHnytZq_qG0eW7h40_5qU3wPHooPOl0cuZWx6FAnp_34FYbCIpSiX_Jo70pZCP-B8x6CkbcGZyhgP_LMEM_4ruGhxDYFhrTsa56JpoKLPThzzj_jtUWCub2GWLNHI9QXaiNexMGnlk5rGDssX76PX3ru0o1r8hgZnp3cJCK-6KoJvO7xS6RnrUdagLa9swLsfc_ul76ylR8qt3X7zhZ4F95bDVOLhsnBs; sp_key=bd4cf09b-84ba-42a0-9098-1046d196e916; _ga=GA1.2.1550281532.1736315186; OptanonConsent=isGpcEnabled=0&datestamp=Sat+Jan+25+2025+17%3A00%3A23+GMT%2B0530+(India+Standard+Time)&version=202411.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=s00%3A1%2Cf00%3A1%2Cm00%3A1%2Ct00%3A1%2Ci00%3A1%2Cf11%3A1%2Cm03%3A1&AwaitingReconsent=false&geolocation=IN%3BMH; _scid_r=PVKEEdooTwvj7DHhEiHfZkbnQJ0r24JD3Rns1Q; _ga_B7DHJZL7G0=GS1.1.1737803933.20.1.1737804625.0.0.0; ab.storage.sessionId.91ac64b1-3e86-476a-9953-ccba0370c1d6=g%3A6c4eea40-e8bf-e438-a066-b249ed6eb34b%7Ce%3A1737806724482%7Cc%3A1737803939517%7Cl%3A1737804924482", // Get the cookie from the request (if sent)
        },
        withCredentials: true, // Allows sending cookies with request
      }
    );

    // Return the data fetched from Spotify API
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching Spotify user data:", error);
    return NextResponse.json(
      { message: "Error fetching user data from Spotify" },
      { status: 500 }
    );
  }
}
