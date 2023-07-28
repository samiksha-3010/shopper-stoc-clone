import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'


const Home = () => {

const router = useNavigate();


  return (
    <div className='homePage'>
      <div className='CATEGORIES'>
        <h4 onClick={() => router("/multipleproduct")}>CATEGORIES</h4>
        <h4> LUXE</h4>
        <h4>BARGAINS</h4>
        <h4>STYLE HUB</h4>
      </div>
      <div className='cATEGORIES-brand' >
        <h4>Mens</h4>
        <h4>Womens</h4>
        <h4>Beauty</h4>
        <h4>Watch</h4>
        <h4>Kids</h4>
        <h4>Home stock</h4>
        <h4>Gifts</h4>
        <h4>Brand</h4>
      </div>
     
      <div className='image-first'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h47/hda/30416999219230/Strip-Banner-Web--2023-07--17-new-hp-page-flat50.jpg'/>
      </div>
      <div className='image-second'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h4c/hb6/30383587655710/westernwear_top-banner-web_hp-main-caeousl23127.jpg'/>
      </div>
      <div className='image-third'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h59/hf6/29782554705950/Icons-2-Web---000-new-home-page--2023-april-11.jpg'/>
      </div>
      <div className='image-four'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h1b/h5d/30369242710046/Strip-Web-1840x250_100723.jpg'/>
      </div>
      <div className='image-five'>
        <h1>Feature Brands</h1>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h13/h6f/30352170778654/qurvii-static--web_0-6805.jpg'/>
      </div>
      <div className='image-six'>
        <h1>Cetegrious cart</h1>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h70/h89/30393690193950/Jewellery--Categories-to-Cart-web____revise--banner-home-page-2023-07-13.jpg'/>
      </div>
       <div className='image-seven'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h04/h2b/30434628829214/Rush-hour-madness-web---2023-07-21-new-strip--msite.gif'/>
       </div>
       <div className='image-eight'>
        <div><img src='https://sslimages.shoppersstop.com/sys-master/root/h5c/hed/30434646589470/madame_rush-hour-4-widget-web-----rush-hour-sale-2023-07-22.gif'/></div>
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/h16/hf0/30434646622238/fastrack_rush-hour-4-widget-web----rush-hour-sale-2023-07-22.gif'/></div>
        <div><img src='https://sslimages.shoppersstop.com/sys-master/root/h5c/hed/30434646589470/madame_rush-hour-4-widget-web-----rush-hour-sale-2023-07-22.gif'/></div>
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/h16/hf0/30434646622238/fastrack_rush-hour-4-widget-web----rush-hour-sale-2023-07-22.gif'/></div>

       </div>
       <div className='image-nine'>
   {/* <h1>Your Fave sells</h1> */}
        <div><img src='https://sslimages.shoppersstop.com/sys-master/root/hbc/hcc/30481132847134/tops-%26-tees_4-Widget-web_48738.jpg'/></div>
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/hcd/hcf/30481132912670/shirts_4-Widget-web_847883.jpg'/></div>
        <div><img src='https://sslimages.shoppersstop.com/sys-master/root/h7b/hd0/30481132978206/jeans_4-Widget-web_47684.jpg'/></div>
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/hc7/he4/30481133043742/dresses_4-Widget-web_587849.jpg'/></div>

       </div>
       <div className='image-ten'>
        {/* <h1>Look for the stars</h1> */}
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/images/hb6/hf9/27476891893790/S22JUN2947A_BLUSH.jpg_136Wx204H'/>
          <p>
JUNIPER - Blush Ethnic Dresses - 2
 <span>Rs 949Rs 1899 50% OFF</span>
  <h5>Includes all taxes</h5>
 <b>569</b></p>

        </div>
        <div><img src='https://sslimages.shoppersstop.com/sys-master/images/hf9/h9c/26734120435742/WFIF-FTW6077_NoColour.jpg_136Wx204H'/>
        <p>
JUNIPER - Blush Ethnic Dresses - 2
 <span>Rs 949Rs 1899 50% OFF</span>
  <h5>Includes all taxes</h5>
 <b>569</b></p>
 </div>
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/images/had/hbb/27864217452574/A22342TB50BBG_BEIGE.jpg_136Wx204H'/>
        <p>
JUNIPER - Blush Ethnic Dresses - 2
 <span>Rs 949Rs 1899 50% OFF</span>
  <h5>Includes all taxes</h5>
 <b>569</b></p>
        </div>
        <div><img src='https://sslimages.shoppersstop.com/sys-master/images/hbd/h49/28195101868062/A22346TG107_BLACK.jpg_136Wx204H'/>
        <p>
JUNIPER - Blush Ethnic Dresses - 2
 <span>Rs 949Rs 1899 50% OFF</span>
  <h5>Includes all taxes</h5>
 <b>569</b></p>
         </div>
       </div>

       <div className='last-image'>
        {/* <h1>Deal Top Brand</h1> */}
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/hdf/hff/16941520125982/face-care-4---WEB.jpg'/></div>
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/ha1/hf8/16941520388126/hair-accessories-----WEB.jpg'/></div>
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/h60/hfc/16941520257054/fragrances--2--WEB.jpg'/></div>
        <div><img src='https://sslimages.shoppersstop.com/sys-master/root/he1/hfc/16941520060446/body-care----WEB.jpg'/></div>
       </div>
       <div className='last-image-home'>
        {/* <h1>Deal Top Brand</h1> */}
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/hf7/hfd/30383600107550/zink-london_3x3-widget_eoss-2023.jpg'/></div>
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/h43/h56/30385075585054/and-girl_3x3-widget_eoss-2023.jpg'/></div>
        <div> <img src='https://sslimages.shoppersstop.com/sys-master/root/hbe/hea/30476234227742/Antonio-Banderas_3x3-widget---web--unbeliavble-discount-2023-07--24.jpg'/></div>
        <div><img src='https://sslimages.shoppersstop.com/sys-master/root/h38/hfb/30383600304158/Indya_3x3-widget_eoss-2023.jpg'/></div>
       </div>

    </div>
  )
}

export default Home