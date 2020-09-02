import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h3>Recommended</h3>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Best Shonen anime of all times"
          views="2.5M Views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJzRXdV8HOI_vaxpd2y43VMwexwyc4E84uIQaIBajw=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="ViniiTube"
          image="https://i.ytimg.com/an_webp/OCqFjvtJdsw/mqdefault_6s.webp?du=3000&sqp=CLyOuPoF&rs=AOn4CLD6RTnjHEd4JqSVJ8Rvj3vDzgAmxQ"
        />
        <VideoCard
          title="Top action anime"
          views="1.2M Views"
          timestamp="1 month ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJzRXdV8HOI_vaxpd2y43VMwexwyc4E84uIQaIBajw=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="ViniiTube"
          image="https://i.ytimg.com/an_webp/42oTUw5mW9E/mqdefault_6s.webp?du=3000&sqp=CLj4t_oF&rs=AOn4CLDzPTA80cwO-gqBV5G0fc6ExmEPaQ"
        />
        <VideoCard
          title="Madara vs Shinobi Alliance"
          views="123K"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJyjFo1PiyqwHA28bUfQXOqZ0ytzPkeGcatQtsN2=s48-c-k-c0xffffffff-no-rj-mo"
          channel="Anime Club"
          image="https://i.ytimg.com/an_webp/MC3KPm3YpHs/mqdefault_6s.webp?du=3000&sqp=CM6IuPoF&rs=AOn4CLBs3SRKVhKZmEzCreYpDp0kbt7sHg"
        />
        <VideoCard
          title="Top Bleach Moments"
          views="1M views"
          timestamp="2 years ago"
          channelImage="https://i.pinimg.com/originals/b9/e6/50/b9e650935556e7d00c2165626dd7d73f.jpg"
          channel="Anime Choas"
          image="https://i.ytimg.com/an_webp/lnCfZzG2RPo/mqdefault_6s.webp?du=3000&sqp=COLyt_oF&rs=AOn4CLB0Cjc4HPDGMDibInFb7-9RXy000w"
        />

        {/**Coding Videos */}
        <VideoCard
          title="Python Tutorial"
          views="1M views"
          timestamp="1 month ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s100-c-k-c0xffffffff-no-rj-mo"
          channel="Programming with Mosh"
          image="https://i.ytimg.com/an_webp/_uQrJ0TkZlc/mqdefault_6s.webp?du=3000&sqp=CIeAuPoF&rs=AOn4CLCGIq7qK-iJc17Xgkf8znjBTy8cuw"
        />
        <VideoCard
          title="JavaScript 1 hour Tutorial"
          views="850k views"
          timestamp="3 month ago"
          channelImage="https://st2.depositphotos.com/1010146/6056/v/950/depositphotos_60567773-stock-illustration-software-developer-at-workplace-icon.jpg"
          channel="Programming Hub"
          image="https://i.ytimg.com/an_webp/W6NZfCO5SIk/mqdefault_6s.webp?du=3000&sqp=CLTut_oF&rs=AOn4CLBZOQE6M245AgwSaWhjH9qLSASAzQ"
        />
        <VideoCard
          title="Making calculator using Python"
          views="569k views"
          timestamp="2 years agao"
          channelImage="https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"
          channel="Coding is fun"
          image="https://i.ytimg.com/an_webp/HBbrSDGGOkw/mqdefault_6s.webp?du=3000&sqp=CJTzt_oF&rs=AOn4CLB9KvE-NG6818eGvBBHu1uV9mcKhg"
        />
        <VideoCard
          title="Making RPG game using UNITY "
          views="1M views"
          timestamp="1 week ago"
          channelImage="data:image/png;base64,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"
          channel="Unity Gaming"
          image="https://i.ytimg.com/an_webp/R7CUzpERCIY/mqdefault_6s.webp?du=3000&sqp=COKruPoF&rs=AOn4CLA6uNEeukOFQks4r09MiXBI_8PqMg"
        />

        {/**gaming videos */}
        <VideoCard
          title="Call Of Duty MW Gameplay"
          views="7.1M views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJwaMBW1XiynZWf6Ydey-gi3L81mFNLSfNguBo2peg=s100-c-k-c0xffffffff-no-rj-mo"
          channel="TheRadBrad"
          image="https://i.ytimg.com/an_webp/4MglAQncpTM/mqdefault_6s.webp?du=3000&sqp=CP6luPoF&rs=AOn4CLD5RZWlw9nRgd-PYzmoZJdoR5hKww"
        />
        <VideoCard
          title="Call Of Duty MW Mission: Clean House"
          views="3M views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJzcP2xyCnXUNb-_0_Cu7f_-L0fzs7guAZ5wOzgoLKw=s100-c-k-c0xffffffff-no-rj-mo"
          channel="IGN"
          image="https://i.ytimg.com/an_webp/VRO7TFyOukw/mqdefault_6s.webp?du=3000&sqp=CPD5t_oF&rs=AOn4CLA9HCUOyM1nUY6rmol07alKRy369Q"
        />
        <VideoCard
          title="CSGO best AWP plays"
          views="1M views"
          timestamp="3 week ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJxwdyZFvRTU0f87AnHf4B9dI3Ovigk2JsuDy7dr7g=s100-c-k-c0xffffffff-no-rj-mo"
          channel="Virre CSGO"
          image="https://i.ytimg.com/an_webp/yxyWMd1w_IQ/mqdefault_6s.webp?du=3000&sqp=CMCWuPoF&rs=AOn4CLDkQIRf6vUNLz3Cz51fOy0kr_SuKQ"
        />
        <VideoCard
          title="GTA 5: FBI HQ Raid"
          views="3M views"
          timestamp="4 years ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJw_7GxAChXdBlei6mALhDChT2ajUZaSZIYeWjJsngs=s100-c-k-c0xffffffff-no-rj-mo"
          channel="GTA series videos"
          image="https://i.ytimg.com/an_webp/e8PAKyvBPPM/mqdefault_6s.webp?du=3000&sqp=CICuuPoF&rs=AOn4CLCYo8_sanTlrRU-rXhBUfbq-f-F2A"
        />
      </div>
    </div>
  )
}

export default RecommendedVideos
