
import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";

import {auto, autoBest} from "@cloudinary/url-gen/qualifiers/quality";


import {format, quality} from "@cloudinary/url-gen/actions/delivery";






// Import required actions and qualifiers.
import {
  lazyload,
  placeholder
 } from '@cloudinary/react';


interface Props {
  videoID: string;
  styling: string;
}
function CloudinaryVideo({ videoID, styling }: Props) {

        const cld = new Cloudinary({
          cloud: {
            cloudName: 'drjg37izp'
          }
        }); 

        const myVideo = cld.video(videoID);
        myVideo 
        .delivery(quality(autoBest()))
        .delivery(format(auto()));


  return (
    <AdvancedVideo className = {styling} cldVid={myVideo} playsInline controls = {false} autoPlay loop muted plugins={[lazyload(), placeholder()] }/>
    
  );
}
export default CloudinaryVideo;
