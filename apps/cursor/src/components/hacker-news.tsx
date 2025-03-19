import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function HackerNews() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href="https://dub.sh/VPH401E" target="_blank" rel="noreferrer">
            <div className="absolute top-5 w-[168px] left-1/2 -translate-x-1/2 mx-auto flex items-center justify-center">
              <svg
                width="168"
                height="20"
                viewBox="0 0 168 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_315_844)">
                  <path
                    d="M0.860352 0L0.860352 19.28L20.1404 19.28L20.1404 -6.63005e-08L0.860352 0ZM11.3439 11.1161L11.3439 15.8457L9.62678 15.8457L9.62677 11.1161L5.40927 2.7715L7.39762 2.7715L10.5004 9.06758L13.6937 2.7715L15.5615 2.7715L11.3439 11.1161Z"
                    fill="#F26822"
                  />
                </g>
                <path
                  d="M29.3586 14.64V4.70001H30.8426V13.268H35.6866V14.64H29.3586ZM37.4227 7.22001H38.8787V14.64H37.4227V7.22001ZM37.4087 6.11401V4.70001H38.9207V6.11401H37.4087ZM47.4418 7.22001L44.7258 14.64H43.0318L40.3158 7.22001H41.8138L43.8858 13.142L45.9438 7.22001H47.4418ZM48.007 10.93C48.007 8.56401 49.393 7.05201 51.521 7.05201C53.257 7.05201 54.769 8.20001 54.853 10.846L54.867 11.35H49.533C49.645 12.736 50.345 13.548 51.521 13.548C52.263 13.548 52.921 13.128 53.229 12.414L54.755 12.526C54.321 13.926 53.019 14.808 51.521 14.808C49.393 14.808 48.007 13.296 48.007 10.93ZM49.561 10.23H53.327C53.131 8.80201 52.361 8.31201 51.521 8.31201C50.429 8.31201 49.743 9.02601 49.561 10.23ZM63.06 14.808C60.932 14.808 59.546 13.296 59.546 10.93C59.546 8.56401 60.932 7.05201 63.06 7.05201C65.188 7.05201 66.574 8.56401 66.574 10.93C66.574 13.296 65.188 14.808 63.06 14.808ZM61.058 10.93C61.058 12.554 61.786 13.534 63.06 13.534C64.334 13.534 65.062 12.554 65.062 10.93C65.062 9.30601 64.334 8.32601 63.06 8.32601C61.786 8.32601 61.058 9.30601 61.058 10.93ZM68.2391 7.22001H69.5551L69.5971 8.48001C69.9891 7.48601 70.8431 7.05201 71.8651 7.05201C73.5311 7.05201 74.3711 8.25601 74.3711 9.86601V14.64H72.9151V10.3C72.9151 8.99801 72.5231 8.28401 71.4871 8.28401C70.3811 8.28401 69.6951 8.99801 69.6951 10.3V14.64H68.2391V7.22001ZM80.0539 14.64V4.70001H81.5379V8.95601H86.0459V4.70001H87.5299V14.64H86.0459V10.328H81.5379V14.64H80.0539ZM89.504 9.43201C89.798 7.94801 90.974 7.05201 92.654 7.05201C94.67 7.05201 95.762 8.17201 95.762 10.188V12.988C95.762 13.338 95.916 13.464 96.21 13.464H96.518V14.64H96.028C95.356 14.654 94.474 14.514 94.418 13.506C94.096 14.206 93.27 14.808 92.052 14.808C90.568 14.808 89.378 14.024 89.378 12.694C89.378 11.196 90.484 10.776 92.178 10.454L94.306 10.034C94.292 8.84401 93.746 8.27001 92.654 8.27001C91.786 8.27001 91.212 8.70401 91.002 9.53001L89.504 9.43201ZM90.89 12.666C90.89 13.212 91.352 13.66 92.332 13.66C93.466 13.66 94.334 12.862 94.334 11.238V11.168L92.738 11.448C91.702 11.63 90.89 11.714 90.89 12.666ZM102.721 9.81001C102.581 8.87201 101.839 8.32601 100.999 8.32601C99.7255 8.32601 98.9975 9.30601 98.9975 10.93C98.9975 12.554 99.7255 13.534 100.999 13.534C101.881 13.534 102.623 12.96 102.777 11.924L104.303 12.008C104.065 13.744 102.679 14.808 100.999 14.808C98.8715 14.808 97.4855 13.296 97.4855 10.93C97.4855 8.56401 98.8715 7.05201 100.999 7.05201C102.623 7.05201 104.037 8.06001 104.233 9.72601L102.721 9.81001ZM105.837 4.70001H107.293V10.916L110.597 7.22001H112.473L109.589 10.342L112.613 14.64H110.905L108.609 11.266L107.293 12.694V14.64H105.837V4.70001ZM113.126 10.93C113.126 8.56401 114.512 7.05201 116.64 7.05201C118.376 7.05201 119.888 8.20001 119.972 10.846L119.986 11.35H114.652C114.764 12.736 115.464 13.548 116.64 13.548C117.382 13.548 118.04 13.128 118.348 12.414L119.874 12.526C119.44 13.926 118.138 14.808 116.64 14.808C114.512 14.808 113.126 13.296 113.126 10.93ZM114.68 10.23H118.446C118.25 8.80201 117.48 8.31201 116.64 8.31201C115.548 8.31201 114.862 9.02601 114.68 10.23ZM121.655 7.22001H122.985L123.027 8.62001C123.265 7.66801 123.825 7.22001 124.791 7.22001H125.505V8.42401H124.777C123.629 8.42401 123.111 9.05401 123.111 10.3V14.64H121.655V7.22001ZM130.777 4.70001H132.667L137.245 12.722V4.70001H138.729V14.64H136.755L132.261 6.80001V14.64H130.777V4.70001ZM140.319 10.93C140.319 8.56401 141.705 7.05201 143.833 7.05201C145.569 7.05201 147.081 8.20001 147.165 10.846L147.179 11.35H141.845C141.957 12.736 142.657 13.548 143.833 13.548C144.575 13.548 145.233 13.128 145.541 12.414L147.067 12.526C146.633 13.926 145.331 14.808 143.833 14.808C141.705 14.808 140.319 13.296 140.319 10.93ZM141.873 10.23H145.639C145.443 8.80201 144.673 8.31201 143.833 8.31201C142.741 8.31201 142.055 9.02601 141.873 10.23ZM153.937 7.22001L155.603 13.002L157.241 7.22001H158.739L156.457 14.64H154.805L153.237 9.30601L151.669 14.64H150.017L147.749 7.22001H149.233L150.885 13.002L152.537 7.22001H153.937ZM164.028 9.54401C163.874 8.76001 163.118 8.28401 162.348 8.28401C161.592 8.28401 160.976 8.67601 160.99 9.33401C160.99 10.006 161.872 10.286 162.628 10.426C164.448 10.762 165.652 11.252 165.652 12.708C165.652 14.164 164.168 14.808 162.642 14.808C160.766 14.808 159.408 13.842 159.296 12.302L160.794 12.204C160.934 13.044 161.592 13.562 162.628 13.562C163.286 13.562 164.14 13.338 164.14 12.652C164.126 11.84 163.188 11.742 162.376 11.56C160.836 11.224 159.478 10.818 159.478 9.39001C159.478 7.94801 160.64 7.05201 162.474 7.05201C164.056 7.05201 165.288 7.99001 165.526 9.46001L164.028 9.54401Z"
                  fill="#F5F5F3"
                />
                <defs>
                  <clipPath id="clip0_315_844">
                    <rect
                      width="19.28"
                      height="19.28"
                      fill="white"
                      transform="translate(0.860352)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent
          className="text-xs"
          side="bottom"
          align="start"
          sideOffset={30}
          alignOffset={-70}
        >
          <p>
            Show HN: Cursor Directory – From a 3-hour build to a 250k users/mo
            community.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
