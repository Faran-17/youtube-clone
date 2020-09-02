import React from 'react'
import TuneIcon from '@material-ui/icons/Tune'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://i.pinimg.com/736x/1a/40/54/1a4054840083d00290bd3bf4016500fe.jpg"
        channel="Faraan-da-K1ng"
        verified
        subs="3.1M"
        noOfVideos={382}
        description="One of the best programming and gaming channel!"
      />

      <hr />
      <VideoRow
        views="1.4M"
        subs="3.1M"
        channel="Faran-da-K1ng"
        description="Upgrade your CSGO skills to become a pro!"
        timestamp="2 Hours ago"
        title="CSGO Tips and Tricks for beginners"
        image="https://i.ytimg.com/an_webp/eFab7sTSmEc/mqdefault_6s.webp?du=3000&sqp=CJuWuPoF&rs=AOn4CLAQV-ZEeAuT9C0ZYvPyRHEbIH88LQ"
      />

      <VideoRow
        views="2M"
        subs="3.1M"
        channel="Faran-da-K1ng"
        description="Upgrade your CSGO skills to become a pro!"
        timestamp="2 Days ago"
        title="Python guide to noob to pro"
        image="https://i.ytimg.com/an_webp/QuiquBXdA1o/mqdefault_6s.webp?du=3000&sqp=CJC0uPoF&rs=AOn4CLDHOWXDkY48Sn1MqbIrSaoTvuOsyQ"
      />

      <VideoRow
        views="1.8M"
        subs="3.1M"
        channel="Faran-da-K1ng"
        description="Here are my best plays till date"
        timestamp="2 Hours ago"
        title="My best plays in CSGO"
        image="https://i.ytimg.com/an_webp/7u1ckKOCvkg/mqdefault_6s.webp?du=3000&sqp=CKiMuPoF&rs=AOn4CLC9FKA9OTy0VA4rkZ9v4DG2KerfXQ"
      />

      <VideoRow
        views="2M"
        subs="3.1M"
        channel="Faran-da-K1ng"
        description="One of my fav mission"
        timestamp="1 month ago"
        title="COD Cleaning den mission"
        image="https://i.ytimg.com/an_webp/OEouamdJPmQ/mqdefault_6s.webp?du=3000&sqp=CMT9t_oF&rs=AOn4CLCROklPYPmjIzc3_Pnezg8bGbd_PA"
      />

      <VideoRow
        views="1.1M"
        subs="3.1M"
        channel="Faran-da-K1ng"
        description="Best mission in COD"
        timestamp="2 weeks ago"
        title="Epic sniper mission in COD MW"
        image="https://i.ytimg.com/an_webp/ReOoZbWixlc/mqdefault_6s.webp?du=3000&sqp=CJ6auPoF&rs=AOn4CLBDgsuCv2RzQtCqrcMzYGe3GY95Rw"
      />

      <VideoRow
        views="1.1M"
        subs="3.1M"
        channel="Faran-da-K1ng"
        description="Best JS tutorial"
        timestamp="3 weeks ago"
        title="JavaScript Tutorial"
        image="https://i.ytimg.com/an_webp/PkZNo7MFNFg/mqdefault_6s.webp?du=3000&sqp=CJCauPoF&rs=AOn4CLDNrXuuY8ACrYLvgoIIQvBhWIPKiQ"
      />

      <VideoRow
        views="1.1M"
        subs="3.1M"
        channel="Faran-da-K1ng"
        description="Build a website from scratch"
        timestamp="1 month ago"
        title="Build an amazing website"
        image="https://i.ytimg.com/an_webp/5bMdjkfvONE/mqdefault_6s.webp?du=3000&sqp=CN__t_oF&rs=AOn4CLDs0xqmcArq10j9g-0rH-oKsC96xQ"
      />
    </div>
  )
}

export default SearchPage
