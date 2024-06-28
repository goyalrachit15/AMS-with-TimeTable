import React from 'react';
import { useEffect, useRef } from 'react';

import ReactHtmlParser from 'react-html-parser';
// import getEnvironment from "../../../../getenvironment";
import ProxifiedImage from '../../components/ProxifiedImage';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// const apiUrl = getEnvironment();

const CertificateContent = ({
  eventId,
  contentBody,
  certiType,
  title,
  verifiableLink,
  logos,
  participantDetail,
  signature,
  header,
  footer,
}) => {
  var num_logos = logos.length;
  var num_left = 0;
  if (num_logos % 2 === 0) {
    num_left = num_logos / 2 - 1;
  } else {
    num_left = Math.floor(num_logos / 2);
  }
  const svgRef = useRef();

  useEffect(() => {
    const url = window.location.href; // Replace with your URL
    const svg = svgRef.current;

    QRCode.toDataURL(url, (err, dataUrl) => {
      if (err) throw err;

      const image = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'image'
      );
      image.setAttribute('x', '100');
      image.setAttribute('y', '500');
      image.setAttribute('width', '100');
      image.setAttribute('height', '100');
      image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', dataUrl);

      svg.appendChild(image);
      if (!verifiableLink) { document.querySelectorAll(".qrcode").forEach((elem) => { elem.remove() }) }
    });
  }, [verifiableLink]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="841.92"
      height="595.499987"
      viewBox="0 0 1122.52 793.7"
      id="svg"
      className="svg-img tw-object-contain"
      ref={svgRef}
    >
      <>
        <g clipPath="url(#clip0_137_35)">
            <path fill="#fff" d="M0 0H1122.5V798.222H0z"></path>
            <rect
            width="428.733"
            height="39.528"
            x="-137.194"
            y="902.158"
            fill="#02266C"
            rx="19.764"
            transform="rotate(-44.33 -137.194 902.158)"
            ></rect>
            <rect
            width="428.733"
            height="77.951"
            x="856.475"
            y="160.582"
            fill="#02266C"
            rx="38.976"
            transform="rotate(-44.33 856.475 160.582)"
            ></rect>
            <rect
            width="428.733"
            height="68.264"
            x="829.072"
            y="869.608"
            fill="#02266C"
            rx="34.132"
            transform="rotate(-44.33 829.072 869.608)"
            ></rect>
            <rect
            width="428.733"
            height="39.528"
            x="-89.461"
            y="447.782"
            fill="#F5BB00"
            rx="19.764"
            transform="rotate(-44.33 -89.461 447.782)"
            ></rect>
            <rect
            width="428.733"
            height="39.528"
            x="-89.461"
            y="447.782"
            fill="#F39709"
            rx="19.764"
            transform="rotate(-44.33 -89.461 447.782)"
            ></rect>
            <rect
            width="407.621"
            height="39.528"
            x="-59.243"
            y="588.072"
            fill="#F5BB00"
            rx="19.764"
            transform="rotate(-44.33 -59.243 588.072)"
            ></rect>
            <rect
            width="846.581"
            height="77.374"
            x="-87.852"
            y="276.087"
            fill="#02266C"
            rx="38.687"
            transform="rotate(-44.33 -87.852 276.087)"
            ></rect>
            <rect
            width="386.008"
            height="23.895"
            x="-153.564"
            y="832.08"
            fill="#02266C"
            rx="11.948"
            transform="rotate(-44.33 -153.564 832.08)"
            ></rect>
            <path
            fill="#D9D9D9"
            d="M125.502 760.806c0 52.092-42.055 94.321-93.932 94.321s-93.931-42.229-93.931-94.321c0-52.093 42.054-94.322 93.931-94.322 51.877 0 93.932 42.229 93.932 94.322zm-156.799 0c0 34.864 28.147 63.128 62.867 63.128s62.867-28.264 62.867-63.128c0-34.865-28.146-63.128-62.867-63.128-34.72 0-62.867 28.263-62.867 63.128z"
            ></path>
            <rect
            width="428.733"
            height="39.528"
            x="949.448"
            y="338.57"
            fill="#F39709"
            rx="19.764"
            transform="rotate(-44.33 949.448 338.57)"
            ></rect>
            <rect
            width="428.733"
            height="31.872"
            x="936.196"
            y="479.662"
            fill="#02266C"
            rx="15.936"
            transform="rotate(-44.33 936.196 479.662)"
            ></rect>
            <rect
            width="428.733"
            height="31.872"
            x="1014.15"
            y="180.328"
            fill="#F5BB00"
            rx="15.936"
            transform="rotate(-44.33 1014.15 180.328)"
            ></rect>
            <rect
            width="428.733"
            height="68.264"
            x="914.738"
            y="603.423"
            fill="#F5BB00"
            rx="34.132"
            transform="rotate(-44.33 914.738 603.423)"
            ></rect>
            <rect
            width="428.733"
            height="20.3"
            fill="#F39709"
            rx="10.15"
            transform="scale(1 -1) rotate(44.33 233.277 -248.754)"
            ></rect>
            <path
            stroke="#F39709"
            strokeWidth="2.339"
            d="M991.504 655.18L1236.14 416.203"
            ></path>
            <path
            fill="#F5BB00"
            d="M125.502 760.806c0 52.092-42.055 94.321-93.932 94.321s-93.931-42.229-93.931-94.321c0-52.093 42.054-94.322 93.931-94.322 51.877 0 93.932 42.229 93.932 94.322zm-156.799 0c0 34.864 28.147 63.128 62.867 63.128s62.867-28.264 62.867-63.128c0-34.865-28.146-63.128-62.867-63.128-34.72 0-62.867 28.263-62.867 63.128z"
            ></path>
            <path
            stroke="#02266C"
            strokeWidth="2.339"
            d="M838.719 118.874L1083.35 -120.102"
            ></path>
            <path
            fill="#F39709"
            d="M1085.86 471.216c0 25.616-21.64 46.381-48.33 46.381-26.69 0-48.327-20.765-48.327-46.381 0-25.615 21.637-46.381 48.327-46.381 26.69 0 48.33 20.766 48.33 46.381zm-80.67 0c0 17.144 14.48 31.042 32.34 31.042 17.87 0 32.35-13.898 32.35-31.042 0-17.144-14.48-31.042-32.35-31.042-17.86 0-32.34 13.898-32.34 31.042z"
            ></path>
            <path
            stroke="#02266C"
            strokeWidth="2.339"
            d="M-35.895 501.616L208.737 262.639"
            ></path>
        </g>
        <defs>
            <clipPath id="clip0_137_35">
            <path fill="#fff" d="M0 0H1122.5V798.222H0z"></path>
            </clipPath>
        </defs>
      </>
      <>
        <foreignObject width={'90%'} height={'400'} y={'80'} x={'5%'}>
          <div className="tw-flex tw-items-center tw-justify-center tw-w-full">
            {logos.map((item, key) => (
              <div
                key={key}
                className="tw-flex tw-items-center tw-justify-center "
              >
                <div className="tw-w-20 tw-shrink-0 tw-mx-6">
                  <img src={item} alt="" />
                </div>
                <div className="tw-text-center">
                  {key === num_left && (
                    <>
                      <p className="tw-font-nunito-bold tw-text-xl tw-font-medium">
                        डॉ. बी आर अम्बेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर
                      </p>
                      <p className="tw-font-nunito-bold tw-text-[12px]">
                        जी.टी. रोड, अमृतसर बाईपास, जालंधर (पंजाब), भारत- 144008
                      </p>
                      <p className="tw-font-nunito-bold tw-text-xl tw-font-semibold">
                        Dr. B R Ambedkar National Institute of Technology
                        Jalandhar
                      </p>
                      <p className="tw-font-nunito-bold tw-text-[12px] ">
                        G.T. Road, Amritsar Byepass, Jalandhar (Punjab), India-
                        144008
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </foreignObject>

        <foreignObject x="10%" y="200.473" width="85%" height="160">
          <div className="tw-mt-8 tw-text-center tw-flex-col tw-flex tw-gap-1">
            {header.map((item, ind) => (
              <h1
                className="tw-text-xl tw-font-semibold tw-text-gray-700 tw-uppercase"
                key={ind}
              >
                {item}
              </h1>
            ))}
          </div>
        </foreignObject>

        <text
          x="561.26"
          y="340.473"
          fill="#424847"
          fontFamily="AbhayaLibre-Regular"
          fontSize="40.707"
          textAnchor="middle"
          fontWeight="550"
        >
          CERTIFICATE OF APPRECIATION
        </text>

        <foreignObject x="12.5%" y="370.473" width="75%" height="160">
          <p className="font-serif text-xl opacity-80">
            <div>{ReactHtmlParser(contentBody)}</div>
          </p>
        </foreignObject>

        <foreignObject x={'20%'} y={515} width={'60%'} height={400}>
          <div className="tw-flex-wrap tw-flex tw-items-center tw-justify-between tw-gap-6 tw-px-6 ">
            {signature.map((item, key) => (
              <div
                key={key}
                className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2"
              >
                <div className="tw-w-[100px]">
                  <ProxifiedImage src={item.url} alt="" />
                </div>
                <div className="tw-bg-gray-500 tw-rounded-xl tw-p-[1px] tw-w-[100px] tw-h-[1px]" />
                <p className="tw-text-black tw-text-[15px] tw-font-semibold">
                  {item.name}
                </p>
                <p className="tw-text-[13px] -tw-mt-3 tw-text-gray-900">
                  {item.position}
                </p>
              </div>
            ))}
          </div>
        </foreignObject>

        <foreignObject x={'20%'} y={'90%'} width={'60%'} height={'100'}>
          <div className="tw-text-sm tw-text-center tw-text-gray-700 ">
            {window.location.href}
          </div>
        </foreignObject>

        {verifiableLink &&
          <foreignObject x={'20%'} y={'90%'} width={'60%'} height={'100'}>
            <div className="tw-text-sm tw-text-center tw-text-gray-700 ">
              {window.location.href}
            </div>
          </foreignObject>}
      </>
      );
    </svg>
  );
};

export default CertificateContent;
