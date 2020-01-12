<template>
  <section>
    <main>
      <div class="card border border-gray-400 py-10 px-10 rounded-lg flex items-stretch">
        <div class="left w-full xl:w-3/5">
          <div class="logo">
            <svg
              viewBox="0 0 75 24"
              width="75"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="l5Lhkf"
            >
              <g id="qaEJec">
                <path
                  fill="#ea4335"
                  d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"
                />
              </g>
              <g id="YGlOvc">
                <path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z" />
              </g>
              <g id="BWfIk">
                <path
                  fill="#4285f4"
                  d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"
                />
              </g>
              <g id="e6m3fd">
                <path
                  fill="#fbbc05"
                  d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"
                />
              </g>
              <g id="vbkDmc">
                <path
                  fill="#ea4335"
                  d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"
                />
              </g>
              <g id="idEJde">
                <path
                  fill="#4285f4"
                  d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"
                />
              </g>
            </svg>
          </div>
          <h1 class="text-xl mb-0 pb-0 pt-4">Google アカウントの作成</h1>
          <p class="mb-0 mt-2 text-sm">Gmail に移動</p>
          <div class="bottom-content">
            <form action="/" class="pt-4 pr-10">
              <div class="form-row flex py-3 w-full">
                <div
                  :class="{'shadow-blue' : firstName_border_blue }"
                  class="form-row-item border rounded xl:flex-auto xl:w-3/6 relative py-1 mr-4"
                >
                  <span :class="{up : focused_firstName}" class="absolute text-base text-gray-600">姓</span>
                  <input
                    @focus="focused_firstName = true; firstName_border_blue = true"
                    @blur="empty_check('firstName')"
                    v-model="firstName"
                    type="text"
                    class="w-full border-none bg-transparent relative z-10 px-2 py-1 outline-none shadow-none rounded h-6"
                  />
                </div>
                <div
                  :class="{'shadow-blue' : lastName_border_blue}"
                  class="form-row-item border rounded xl:flex-auto xl:w-3/6 relative py-1"
                >
                  <span :class="{up : focused_lastName}" class="absolute text-base text-gray-600">名</span>
                  <input
                    @focus="focused_lastName = true;lastName_border_blue = true"
                    @blur="empty_check('lastName')"
                    v-model="lastName"
                    type="text"
                    class="w-full border-none bg-transparent relative z-10 px-2 py-1 outline-none shadow-none rounded h-6"
                  />
                </div>
              </div>
              <div class="form-row py-3">
                <div
                  :class="{'shadow-blue' : userName_border_blue }"
                  class="form-row-item border rounded xl:w-full flex relative py-1"
                >
                  <div class="left w-3/4">
                    <span
                      :class="{up : focused_userName}"
                      class="absolute text-base text-gray-600"
                    >ユーザー名</span>
                    <input
                      @focus="focused_userName = true;userName_border_blue = true"
                      @blur="empty_check('userName')"
                      v-model="userName"
                      type="text"
                      class="border-none bg-transparent relative z-10 w-full px-2 py-1 outline-none shadow-none rounded h-6"
                    />
                  </div>
                  <div class="right-content w-1/4 text-right">
                    <span class="text-gray-600 pr-2 text-sm">@gmail.com</span>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <p class="mb-0 text-xs text-gray-800">半角英字、数字、ピリオドを使用できます。</p>
              </div>
              <div class="form-row flex py-3 mt-6">
                <div
                  :class="{'shadow-blue' : password_border_blue }"
                  class="form-row-item xl:w-2/5 border rounded relative py-1 mr-4"
                >
                  <span
                    :class="{up : focused_password}"
                    class="absolute text-base text-gray-600"
                  >パスワード</span>
                  <input
                    @focus="focused_password = true;password_border_blue = true"
                    @blur="empty_check('password')"
                    :type="input_type"
                    v-model="password"
                    class="w-full border-none bg-transparent relative z-10 px-2 py-1 outline-none shadow-none rounded h-6"
                  />
                </div>
                <div
                  :class="{'shadow-blue' : passwordConf_border_blue }"
                  class="form-row-item xl:w-2/5 border rounded relative py-1"
                >
                  <span
                    :class="{up : focused_passwordConf}"
                    class="absolute text-base text-gray-600"
                    unselectable="on"
                  >確認</span>
                  <input
                    @focus="focused_passwordConf = true;passwordConf_border_blue = true"
                    @blur="empty_check('passwordConf')"
                    :type="input_type"
                    v-model="passwordConf"
                    class="w-full bg-transparent relative z-10 border-none px-2 py-1 outline-none shadow-none rounded h-6"
                  />
                </div>
                <div class="w-1/5 flex justify-end items-center text-gray-600">
                  <div
                    @click="pwVisible = !pwVisible"
                    class="rounded-full p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    <svg
                      v-if="!pwVisible"
                      fill="#00000050"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xml="https://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      class="text-gray-300"
                    >
                      <path
                        d="M10.58,7.25l1.56,1.56c1.38,0.07,2.47,1.17,2.54,2.54l1.56,1.56C16.4,12.47,16.5,12,16.5,11.5C16.5,9.02,14.48,7,12,7 C11.5,7,11.03,7.1,10.58,7.25z"
                      />
                      <path
                        d="M12,6c3.79,0,7.17,2.13,8.82,5.5c-0.64,1.32-1.56,2.44-2.66,3.33l1.42,1.42c1.51-1.26,2.7-2.89,3.43-4.74 C21.27,7.11,17,4,12,4c-1.4,0-2.73,0.25-3.98,0.7L9.63,6.3C10.4,6.12,11.19,6,12,6z"
                      />
                      <path
                        d="M16.43,15.93l-1.25-1.25l-1.27-1.27l-3.82-3.82L8.82,8.32L7.57,7.07L6.09,5.59L3.31,2.81L1.89,4.22l2.53,2.53 C2.92,8.02,1.73,9.64,1,11.5C2.73,15.89,7,19,12,19c1.4,0,2.73-0.25,3.98-0.7l4.3,4.3l1.41-1.41l-3.78-3.78L16.43,15.93z M11.86,14.19c-1.38-0.07-2.47-1.17-2.54-2.54L11.86,14.19z M12,17c-3.79,0-7.17-2.13-8.82-5.5c0.64-1.32,1.56-2.44,2.66-3.33 l1.91,1.91C7.6,10.53,7.5,11,7.5,11.5c0,2.48,2.02,4.5,4.5,4.5c0.5,0,0.97-0.1,1.42-0.25l0.95,0.95C13.6,16.88,12.81,17,12,17z"
                      />
                    </svg>
                    <svg
                      v-if="pwVisible"
                      fill="#000000"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmls="https://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M12,7c-2.48,0-4.5,2.02-4.5,4.5S9.52,16,12,16s4.5-2.02,4.5-4.5S14.48,7,12,7z M12,14.2c-1.49,0-2.7-1.21-2.7-2.7 c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7C14.7,12.99,13.49,14.2,12,14.2z"
                      />
                      <path
                        d="M12,4C7,4,2.73,7.11,1,11.5C2.73,15.89,7,19,12,19s9.27-3.11,11-7.5C21.27,7.11,17,4,12,4z M12,17 c-3.79,0-7.17-2.13-8.82-5.5C4.83,8.13,8.21,6,12,6s7.17,2.13,8.82,5.5C19.17,14.87,15.79,17,12,17z"
                      />
                      <path fill="none" d="M0,0h24v24H0V0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <p class="mb-0 text-xs text-gray-800 w-4/5 mb-8">半角英字、数字、記号を組み合わせて 8 文字以上で入力してください</p>
              </div>
              <div class="form-row flex justify-between">
                <div class="left w-1/2">
                  <a
                    href="#"
                    class="text-blue-600 py-2 rounded text-sm text-left px-4 -ml-4 hover:bg-blue-100"
                  >代わりにログイン</a>
                </div>
                <div class="right w-1/2 text-right">
                  <g-link to="/" class="rounded bg-blue-600 text-gray-200 px-6 py-2">次へ</g-link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="right w-full pl-6 xl:w-2/5 flex items-center">
          <div class="flex-wrap items-center justify-center">
            <div class="illustor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1000 1000"
              >
                <defs>
                  <clipPath id="b">
                    <circle cx="497.96" cy="436.92" r="175.13" fill="none" />
                  </clipPath>
                  <linearGradient
                    id="c"
                    x1="472.95"
                    x2="472.95"
                    y1="857.2"
                    y2="940.23"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#676c72" stop-opacity=".3" />
                    <stop offset=".96" stop-color="#f9f9fa" stop-opacity=".01" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="a"
                    x1="542.82"
                    x2="625.4"
                    y1="774.1"
                    y2="774.1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#676c72" stop-opacity=".7" />
                    <stop offset=".27" stop-color="#70767c" stop-opacity=".58" />
                    <stop offset=".77" stop-color="#888f97" stop-opacity=".26" />
                    <stop offset="1" stop-color="#959ca5" stop-opacity=".1" />
                  </linearGradient>
                  <linearGradient
                    id="d"
                    x1="612.28"
                    x2="661.06"
                    y1="757.01"
                    y2="722.5"
                    gradientTransform="rotate(-.01 1031.234 1031.414)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#ea4335" />
                    <stop offset="1" stop-color="#fff" />
                  </linearGradient>
                  <linearGradient
                    id="e"
                    x1="440.18"
                    x2="515.97"
                    y1="773.71"
                    y2="773.71"
                    xlink:href="#a"
                  />
                </defs>
                <g style="isolation:isolate">
                  <path fill="#eff0f2" d="M456.42 370.75h-1.2a6.31 6.31 0 0 0 1.2 0z" />
                  <path fill="#4285f4" d="M822.45 636.88h-.07z" />
                  <path
                    fill="#4688f1"
                    d="M791.42 403.8V212.5L500 128.36 208.5 212.5v191.3S197.48 740.33 500 871.54C802.44 740.33 791.42 403.8 791.42 403.8z"
                  />
                  <circle cx="497.96" cy="436.92" r="175.13" fill="#3566b8" />
                  <circle cx="497.96" cy="375.66" r="66.74" fill="#fff" />
                  <g clip-path="url(#b)">
                    <path
                      fill="#fff"
                      d="M498 624.82a160.2 160.2 0 0 1-133.48-71.63C365 509 453.58 484.67 498 484.67S630.77 509 631.44 553.19A160.2 160.2 0 0 1 498 624.82z"
                    />
                  </g>
                  <path
                    fill="url(#c)"
                    d="M107.33 869.4v-16h431.4l215.09.33 84.75 84.13h-571l-46.92-46.92-78.24-.35a32.75 32.75 0 0 1-22.5-9.1z"
                  />
                  <path
                    fill="#dfe1e5"
                    d="M698.58 858.63l56.82 10a14 14 0 0 0 16.43-13.79V683.15a14 14 0 0 0-16.43-13.79l-56.82 10zm-134.87 2.04l61.69 10.89v-205.1l-61.69 10.89a14 14 0 0 0-11.56 13.79v155.74a14 14 0 0 0 11.56 13.79z"
                  />
                  <path fill="#babfc5" d="M625.4 871.56l73.25-12.93V679.39l-73.25-12.93v205.1z" />
                  <path
                    fill="#fff"
                    d="M698.58 840.87l45.57 6.51a8 8 0 0 0 9.13-7.92V698.62a8 8 0 0 0-9.12-7.93l-45.58 6.46zm-123.9 3.19l50.72 7.18V686.78L574.68 694a8 8 0 0 0-6.88 7.92v134.22a8 8 0 0 0 6.88 7.92z"
                  />
                  <path
                    fill="#fff"
                    d="M625.4 851.24l73.25-10.37V697.15l-73.25-10.38v164.47z"
                    opacity=".5"
                  />
                  <path
                    fill="url(#a)"
                    d="M567.79 676.63l-4.08.72a14 14 0 0 0-11.56 13.79v155.74a14 14 0 0 0 11.56 13.79l61.69 10.89V734.23l-57.61-57.6z"
                  />
                  <ellipse cx="663.89" cy="702.31" fill="#ea4335" rx="52.69" ry="53.06" />
                  <path
                    fill="#fff"
                    d="M663.9 681a21.37 21.37 0 0 1 14.94 36.43 20.93 20.93 0 0 1-15 6.25A21.36 21.36 0 0 1 649 687.22a20.93 20.93 0 0 1 14.89-6.22m0-5a26.34 26.34 0 0 0 0 52.68 26.34 26.34 0 0 0 0-52.68z"
                  />
                  <path fill="#ea4335" d="M663.92 802.98l-45.26-73.43 90.8-.8-45.54 74.23z" />
                  <path
                    fill="url(#d)"
                    d="M664.05 649.42a53.14 53.14 0 0 0-45.2 80.3l45.25 73.43 42.93-70a53.11 53.11 0 0 0-43-83.76z"
                    opacity=".5"
                    style="mix-blend-mode:multiply"
                  />
                  <rect
                    width="119.59"
                    height="232.44"
                    x="448.67"
                    y="639.1"
                    fill="#bbbfc3"
                    rx="18"
                    ry="18"
                    transform="rotate(-.34 506.69 753.094)"
                  />
                  <rect
                    width="119.59"
                    height="232.53"
                    x="440.65"
                    y="639.09"
                    fill="#dfe1e5"
                    rx="18"
                    ry="18"
                    transform="rotate(-.34 498.264 753.069)"
                  />
                  <path
                    fill="none"
                    stroke="#babfc5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5"
                    d="M482.44 651.36h40.02"
                  />
                  <path
                    fill="#fff"
                    d="M539.59 853.39h-77.65a11.62 11.62 0 0 1-11.62-11.63L450 673.57a11.63 11.63 0 0 1 11.62-11.63h77.65a11.63 11.63 0 0 1 11.63 11.63l.31 168.19a11.62 11.62 0 0 1-11.62 11.63z"
                  />
                  <path fill="#34a853" d="M571.63 791.11a27.09 27.09 0 0 0-11.36-31.66l.12 20.41z" />
                  <path
                    fill="#4688f1"
                    d="M450 681.75v-6.12l-9.82.14.1 16.36a29.14 29.14 0 0 1 9.72-10.38zm-13.37 24.5a28.91 28.91 0 0 0 3.82 14.4l-.17-28.52a29 29 0 0 0-3.65 14.12z"
                  />
                  <path
                    fill="#4688f1"
                    d="M450 730.73v-49a29.14 29.14 0 0 0-9.72 10.38l.17 28.52a29.27 29.27 0 0 0 9.55 10.1z"
                  />
                  <path
                    fill="url(#e)"
                    d="M456.07 675.55l-15.89.22L441.24 854a18 18 0 0 0 18.1 17.9l56.63-.2V750.08a35.33 35.33 0 0 0-10.34-25z"
                  />
                  <path
                    fill="#fabb05"
                    d="M436.63 706.25a28.91 28.91 0 0 0 3.82 14.4l-.17-28.52a29 29 0 0 0-3.65 14.12z"
                  />
                  <path fill="#fff" d="M516.3 700.83a2.49 2.49 0 0 0 0-5h-39.9l5 5h34.9z" />
                  <path
                    fill="#fabb05"
                    d="M514.31 677.1h-48.55a29.14 29.14 0 0 0-29.13 29.14A29.15 29.15 0 0 0 459 734.59V750l14.56-14.57h40.72a29.13 29.13 0 0 0 29.13-29.14 29.12 29.12 0 0 0-29.1-29.19z"
                  />
                  <path
                    fill="#eda606"
                    d="M459 734.59V750l14.56-14.57h39.16a35.49 35.49 0 0 0-7.13-10.27L458.54 678a29.21 29.21 0 0 0-18.26 14.12l.17 28.52A29.17 29.17 0 0 0 459 734.59z"
                  />
                  <path
                    fill="#34a853"
                    d="M545.6 755.23h-37.66a27.34 27.34 0 0 0-27.44 27.27 27.34 27.34 0 0 0 27.5 27.24h29l13.94 13.87v-14.39a27.21 27.21 0 0 0 22.15-26.74 27.35 27.35 0 0 0-27.49-27.25z"
                  />
                  <path fill="#23893c" d="M507.94 755.24a27.25 27.25 0 1 0 0 54.5h8v-54.5z" />
                  <path
                    fill="#fff"
                    d="M546.49 785.33H505.8a2.48 2.48 0 0 1 0-5h40.69a2.48 2.48 0 0 1 0 5zm-30.19-72.98h-47.7a2.48 2.48 0 0 0 0 5h47.7a2.49 2.49 0 1 0 0-5zm-47.7-11.51h47.7a2.49 2.49 0 0 0 0-5h-47.7a2.48 2.48 0 0 0 0 5z"
                  />
                  <path
                    fill="#dfe1e5"
                    d="M505.8 780.38a2.48 2.48 0 0 0 0 5H516v-5zm-39.68-65.53a2.48 2.48 0 0 0 2.48 2.48h29.25l-5-5H468.6a2.48 2.48 0 0 0-2.48 2.52zm0-16.49a2.48 2.48 0 0 0 2.48 2.48h12.76l-5-5h-7.8a2.48 2.48 0 0 0-2.44 2.52z"
                  />
                  <path
                    fill="#bbbfc3"
                    d="M226.38 667.6h214.76a18 18 0 0 1 18 18v167.72H226.38a18 18 0 0 1-18-18V685.6a18 18 0 0 1 18-18z"
                  />
                  <path
                    fill="#dfe1e5"
                    d="M220.37 667.6h214.77a18 18 0 0 1 18 18v167.72H202.37V685.6a18 18 0 0 1 18-18z"
                  />
                  <rect
                    width="229.56"
                    height="163.73"
                    x="212.99"
                    y="678.69"
                    fill="#fff"
                    rx="8.19"
                    ry="8.19"
                  />
                  <path
                    fill="#bbbfc3"
                    d="M459.16 853.3l-258.48.06v19.29h240.48a18 18 0 0 0 18-18z"
                  />
                  <circle cx="330.01" cy="761.09" r="45.3" fill="#ea4335" />
                  <path
                    fill="#fff"
                    d="M321.2 738.39l31.26 22.4-31.25 23v-45.4m-.15-5.15a4.91 4.91 0 0 0-2.22.54 4.85 4.85 0 0 0-2.63 4.32v46a4.86 4.86 0 0 0 4.85 4.85 4.85 4.85 0 0 0 2.88-1l31.65-23.3a4.85 4.85 0 0 0 0-7.84l-31.66-22.7a4.89 4.89 0 0 0-2.83-.91z"
                  />
                  <path
                    fill="#cdd0d5"
                    d="M99.52 853.35h251.62v1.3a18 18 0 0 1-18 18H117.52a18 18 0 0 1-18-18v-1.3z"
                  />
                  <path
                    fill="#eff0f2"
                    d="M239.13 862.15h-38.57a8.54 8.54 0 0 1-8.54-8.54.25.25 0 0 1 .25-.25h55.39a.27.27 0 0 1 .26.27 8.79 8.79 0 0 1-8.79 8.52z"
                  />
                </g>
              </svg>
            </div>
            <div class="undertext">
              <p class="text-sm">1 つのアカウントで Google のすべてのサービスをご利用いただけます。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom flex w-full mt-6">
        <div class="left w-1/2 text-left">
          <span class="text-xs">日本語</span>
        </div>
        <div class="right w-1/2 text-right">
          <span class="text-xs text-gray-600 mr-8">ヘルプ</span>
          <span class="text-xs text-gray-600 mr-8">プライバシー</span>
          <span class="text-xs text-gray-600">規約</span>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: "index"
  },
  data() {
    return {
      focused_firstName: false,
      firstName_border_blue: false,

      focused_lastName: false,
      lastName_border_blue: false,

      focused_userName: false,
      userName_border_blue: false,

      focused_passwordConf: false,
      passwordConf_border_blue: false,

      focused_password: false,
      password_border_blue: false,

      pwVisible: false,
      input_type: "password",
      //input
      firstName: "",
      lastName: "",
      userName: "",
      passwordConf: "",
      password: ""
    };
  },
  watch: {
    pwVisible: function() {
      if (this.pwVisible) {
        this.input_type = "text";
      } else {
        this.input_type = "password";
      }
    }
  },
  methods: {
    empty_check(val) {
      switch (val) {
        case "firstName":
          this.firstName_border_blue = false;
          if (this.firstName == "") {
            this.focused_firstName = false;
          } else {
            this.focused_firstName = true;
          }
          break;
        case "lastName":
          this.lastName_border_blue = false;
          if (this.lastName == "") {
            this.focused_lastName = false;
          } else {
            this.focused_lastName = true;
          }
          break;
        case "userName":
          this.userName_border_blue = false;
          if (this.userName == "") {
            this.focused_userName = false;
          } else {
            this.focused_userName = true;
          }
          break;
        case "password":
          this.password_border_blue = false;
          if (this.password == "") {
            this.focused_password = false;
          } else {
            this.focused_password = true;
          }
          break;
        case "passwordConf":
          this.passwordConf_border_blue = false;
          if (this.passwordConf == "") {
            this.focused_passwordConf = false;
          } else {
            this.focused_passwordConf = true;
          }
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scope>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0%;
  margin: 0%;
}
section {
  height: 100%;
  width: 100%;
  font-family: "Google Sans", arial, sans-serif;
  &::before {
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    content: "";
    display: block;
    height: 180px;
  }
  &::after {
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    content: "";
    display: block;
    height: 24px;
  }
}
main {
  max-width: 750px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
form {
  .form-row {
    .form-row-item {
      span {
        transition: 0.2s;
        left: 8px;
        top: 4px;
      }
    }
  }
}
.shadow-blue {
  box-shadow: 0 0 0 1.5px #1a73e8;
}
.up {
  background-color: #fff;
  font-size: 11px !important;
  transform: translateY(-26px);
  transition: 0.2s;
}
@media screen and (max-width: 1920px) {
  section {
    &::before {
      -webkit-box-flex: 1;
      box-flex: 1;
      -webkit-flex-grow: 1;
      flex-grow: 1;
      content: "";
      display: block;
      height: 84px;
    }
    &::after {
      -webkit-box-flex: 1;
      box-flex: 1;
      -webkit-flex-grow: 1;
      flex-grow: 1;
      content: "";
      display: block;
      height: 24px;
    }
  }
}
</style>
