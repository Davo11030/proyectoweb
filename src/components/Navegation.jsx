//debera de declarase la navegacion, anexo ejemplo
<div id="contentContainer" class="style-scope tp-yt-app-drawer" position="left" style="transition-duration: 200ms;" swipe-open="" opened="">
    <div id="guide-wrapper" class="style-scope ytd-app">
        <div id="guide-spacer" class="style-scope ytd-app"></div>
        <div id="guide-content" class="style-scope ytd-app">
            <div id="header" class="style-scope ytd-app">
        
        <yt-icon-button id="guide-button" pressed="true" toggleable="true" class="style-scope ytd-app" aria-label="Guía" role="button">
            <!--css-build:shady-->
            <!--css-build:shady-->
            <button id="button" class="style-scope yt-icon-button" aria-pressed="true">
            <yt-icon id="guide-icon" icon="yt-icons:menu" class="style-scope ytd-app">
            <!--css-build:shady-->
            <!--css-build:shady-->
            <span class="yt-icon-shape style-scope yt-icon yt-spec-icon-shape">
                <div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                    <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z">
                    </path>
                    </svg>
                </div>
            </span>
            </yt-icon>
        </button>
        <yt-interaction id="interaction" class="circular style-scope yt-icon-button">
            <!--css-build:shady--><!--css-build:shady-->
            <div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div>
            </yt-interaction>
            </yt-icon-button>
        
      </div>
      
    </div>
  </div>

</div>



import { faFacebookF, faGooglePlus, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";


const Navigation = () => {
  return (
    <div>
      <div className="h-250px w-full">
        <img src="https://img.freepik.com/fotos-premium/marisco-mas-fresco-todos-gustos_181303-2861.jpg?w=900" alt="logo" style={{ height: "250px" }} className="w-full object-cover" />
      </div>
      <div className="flex justify-center items-center p-10 w-full">
  <div className="flex flex-col items-center justify-center">
    <img src="https://islandpacific.com.mx/wp-content/uploads/2023/09/cropped-logo4-768x335.png" alt="logo" className="h-20 w-auto"/>
    <p className="mt-2">Buzos y pescadores de la Baja California</p>
  </div>
  <ul className="flex flex-row ml-10">
    <li className="mr-4"><FontAwesomeIcon icon={faFacebookF} className="text-2xl text-blue-600" /></li>
    <li className="mr-4"><FontAwesomeIcon icon={faInstagram} className="text-2xl text-purple-600" /></li>
    <li><FontAwesomeIcon icon={faGooglePlus} className="text-2xl text-red-600" /></li>
  </ul>
</div>

      <div className="flex justify-center space-x-10 p-6 bg-[#03045E] text-[#fff] ">
        <Link href="/">Home</Link>
        <Link href="/page/products">Productos</Link>
        <Link href="/page/installations">Instalaciones</Link>
        <Link href="/page/request">Request</Link>
        <Link href="/page/cartContent">Cart</Link>

      </div>
    </div>
  );
};

export default Navigation;
