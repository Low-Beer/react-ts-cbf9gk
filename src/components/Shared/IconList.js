import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaTwitter,
         FaMap, FaMusic, FaAnchor, FaAsterisk, FaMedal, FaCheck, FaTimes, FaHeart } from "react-icons/fa";


export function SvgIcon(props) {
    const svgList = [
        // socials
        { id: "fa_face",    svg: (k) => (<FaFacebookF key={k} style={ props.stl } fill={props.fill} />) },
        { id: "fa_insta",   svg: (k) => (<FaInstagram key={k} style={ props.stl } fill={props.fill} />) },
        { id: "fa_linkedin",svg: (k) => (<FaLinkedinIn key={k} style={ props.stl } fill={props.fill}/>) },
        { id: "fa_tiktok",  svg: (k) => (<FaTiktok key={k} style={ props.stl } fill={props.fill}/>) },
        { id: "fa_youtube", svg: (k) => (<FaYoutube key={k} style={ props.stl } fill={props.fill}/>) },
        { id: "fa_twitter", svg: (k) => (<FaTwitter key={k} style={ props.stl } fill={props.fill}/>) },
        // my icons
        { id: "fa_map",     svg: (k) => (<FaMap key={k} style={ props.stl } fill={props.fill}/>) },
        { id: "fa_music",   svg: (k) => (<FaMusic key={k} style={ props.stl } fill={props.fill}/>) },
        { id: "fa_anchor",  svg: (k) => (<FaAnchor key={k} style={ props.stl } fill={props.fill}/>) },
        // 
        { id: "fa_medal",   svg: (k) => (<FaMedal key={k} style={ props.stl }/>) },
        { id: "fa_asterisk",   svg: (k) => (<FaAsterisk key={k} style={ props.stl }/>) },
        { id: "fa_heart",   svg: (k) => (<FaHeart key={k} style={ props.stl }/>) },
        // positive and negative sign
        { id: "fa_check",   svg: (k) => (<FaCheck key={k} style={ props.stl }/>) },
        { id: "fa_times",   svg: (k) => (<FaTimes key={k} style={ props.stl }/>) },

        { id: "own_mag_glass",   svg: (k) => (<MagGlass key={k} style={ props.stl }/>) },
        { id: "own_fsw_logo",   svg: (k) => (<FswLogo key={k} style={ props.stl }/>) },
        { id: "own_right_facing_arrow",   svg: (k) => (<RightFacingArrow key={k} style={ props.stl }/>) },
    ]

    const icon = svgList.map((icon, index) => {
        if (icon.id === props.icon && props.myClass) {
            return (<div key={index} className={props.myClass}> { icon.svg(index) } </div>)
        }

        if (icon.id === props.icon && !props.myClass) {
            return (icon.svg(index))
        }
    });

        
  return (icon);
}



export function MagGlass(props) {    
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 505.377 505.377"
        style={{enableBackground: 'new 0 0 505.377 505.377'}}
        width="512px"
        height="512px"
    >
        <g>
        <path
            fill="#FFFFFF"
            d="M500.669,432.808l-88.125-88.125c22.333-34.847,35.487-76.191,35.487-120.673c0-123.709-100.285-224-224-224    
            C100.291,0.009,0,100.299,0,224.009s100.291,224,224,224c44.483,0,85.791-13.117,120.637-35.456l88.161,88.161    
            c6.175,6.205,16.384,6.205,22.625,0l45.245-45.251C506.947,449.192,506.947,439.018,500.669,432.808z M224,384.009    
            c-88.223,0-160-71.777-160-160s71.777-160,160-160s160,71.777,160,160S312.253,384.009,224,384.009z"
        />
        </g>
    </svg>
  );
}


export function FswLogo(props) {    

    let style = {
        display: 'inline', fill: 'none', fillOpacity:0, stroke: '#000000', 
        strokeWidth:0.55, strokeLinecap: 'round', strokelineJoin:'round', 
        strokemiterLimit:  0.7, strokedashArray: 'none', strokeOpacity:1, paintOrder: 'markers fill stroke',
        ...props.style
    }

    return (
    <svg
        viewBox="0 0 12.7 12.7"
        style={ style }
        width="40"  // default is 48
        height="40"  // default is 48
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g
            //style="display:inline;stroke:#000000;stroke-width:0.55;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0.7;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke"
            transform="translate(-30.050923,-9.5833712)"
        >
            <path
                d="m 37.816582,16.16833 -2.597871,4.116109 m -0.280465,-2.440756 h 6.619666 L 38.280214,9.8743747 
                33.331531,17.715141 m -0.311834,1.570947 c -0.02513,0 -0.05021,5.55e-4 -0.07541,0.0017 -0.234813,0.007 
                -0.468572,0.0627 -0.695567,0.156262 l -1.532197,2.437348 c 1.121599,-0.372226 2.322479,-0.573999 3.572164,
                -0.573999 1.786358,-0.06821 3.067758,0.671199 4.693782,0.671199 1.262692,0 2.589527,-1.151655 2.975229,
                -2.581858 0.0098,-0.03657 0.01915,-0.07282 0.02724,-0.108946 h -7.165257 c 1.16e-4,-3.77e-4 1.66e-4,-5.53e-4 
                2.89e-4,-0.0011 v -5.54e-4 z" 
                />
        </g>
    </svg>

    );
}

export function RightFacingArrow(props) {    
    return (
    <svg 
        version="1.1" 
        width="25px" 
        height="25px" 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" 
        y="0px" 
        viewBox="0 0 512.002 512.002"
        >
        <rect x="75.113" y="104.77" 
            transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 307.0785 494.5816)" 
            style={{fill:"#EC4899"}} 
            width="361.715" 
            height="157.846"
        ></rect>
        <polygon 
            style={{fill:"#e2725b"}} 
            points="246.32,449.568 183.885,512.002 72.273,400.39 328.117,144.546 439.729,256.158 308.094,387.792 ">
        </polygon>
        <polyline 
            style={{fill:"#EC4899"}} 
            points="216.681,255.943 195.491,234.716 306.945,123.062 328.273,144.429 216.819,256.083 ">
        </polyline>
    </svg> 
    );
}
