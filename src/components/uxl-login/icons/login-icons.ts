import "@polymer/iron-icon/iron-icon";
import "@polymer/iron-iconset-svg/iron-iconset-svg";

import {html} from "lit-html";

export const iconTemplate = () => html`
  <iron-iconset-svg name="login-icons" size="24">
    <svg>
      <defs>
        <g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
        <g id="add-circle">
          <path
            d="M19.07 4.93a10 10 0 1 0 0 14.14 10 10 0 0 0 0-14.14zm-1.41 12.73a8 8 0 1 1 0-11.31 8 8 0 0 1 0 11.31zm0-4.66H13v4.66h-2V13H6.34v-2H11V6.34h2V11h4.66z"
          />
        </g>
        </defs>
        </svg>
      </iron-iconset-svg>
    `;
