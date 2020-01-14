<template>
  <div id="gmail">
    <div class="navbar border-b w-full">
      <nav class="nav flex py-2 px-4">
        <div class="left pr-4 flex xl:w-1/6">
          <div
            class="toggle-btn inline-block flex items-center py-2 px-3 cursor-pointer hover:bg-gray-200 rounded-full"
          >
            <svg focusable="false" class="max-w-xs" width="30" height="30" viewBox="0 0 24 24">
              <path
                fill="#0009"
                class="max-w-xs"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </div>
          <div class="logo flex items-center">
            <img class="px-2" src="../assets/img/logo_gmail_2x.png" alt="gmail logo" />
          </div>
        </div>
        <div class="center w-4/6">
          <div class="max-w-3xl h-full relative rounded-lg bg-gray-200">
            <div class="left search p-1 absolute hover:bg-gray-300 rounded-full">
              <svg
                focusable="false"
                height="30"
                viewBox="0 0 24 24"
                width="30"
                fill="gray"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
                />
                <path d="M0,0h24v24H0V0z" fill="none" />
              </svg>
            </div>
            <div class="center w-full h-full mx-16">
              <input type="text" class="h-full w-full bg-transparent outline-none border-none" placeholder="メール検索"/>
            </div>
            <div
              class="right absolute hover:bg-gray-200 rounded-full hover:bg-gray-300 rounded-full"
            >
              <svg
                focusable="false"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
              >
                <path d="M7 10l5 5 5-5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div class="right xl:w-1/6 flex flex-row items-center justify-end">
          <div class="support mx-3 p-1 hover:bg-gray-200 rounded-full">
            <svg
              class="t7"
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="gray"
              focusable="false"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
              />
            </svg>
          </div>
          <div class="more-service p-1 mx-3 hover:bg-gray-200 rounded-full">
            <svg fill="gray" class focusable="false" width="30" height="30" viewBox="0 0 24 24">
              <path
                d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
              />
            </svg>
          </div>
          <div class="user p-2 hover:bg-gray-200 rounded-full">
            <div class="h-10 w-10 rounded-full bg-green-400"></div>
          </div>
        </div>
      </nav>
    </div>
    <section class="flex h-full">
      <div class="left w-1/6">
        <div class="add-new-btn-wrapper my-4 pl-2">
          <div class="content inline-block">
            <div
              class="inline-block flex items-center rounded-full pl-3 py-3 shadow border hover:bg-gray-100 hover:shadow-lg"
            >
              <div class="left inline-block mr-3">
                <img src="../assets/img/create_32dp.png" alt="create new" />
              </div>
              <div class="right mr-8">作成</div>
            </div>
          </div>
        </div>
        <div class="control-panel-list-wrap h-80 overflow-y-auto border-b">
          <!-- <div class="overflow-auto"> -->
            <div class="lite-item-wrapper mr-2 rounded-r-full bg-red-200">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                  <svg
                    fill="#d93025"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
                    />
                    <path fill="none" d="M0 0h24v24H0V0z" />
                  </svg>
                </div>
                <div class="list-statu inline-block text-red-600 font-bold">受信トレイ</div>
              </div>
            </div>
            <div class="lite-item-wrapper mr-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="gray"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div class="list-statu inline-block text-black font-bold">スター付き</div>
              </div>
            </div>
            <div class="lite-item-wrapper mr-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                  <svg
                    fill="gray"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <path id="a" d="M0 0h24v24H0V0z" />
                    </defs>
                    <clipPath id="b">
                      <use xlink:href="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clip-path="url(#b)"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
                    />
                  </svg>
                </div>
                <div class="list-statu inline-block text-black font-bold">スヌーズ中</div>
              </div>
            </div>
            <div class="lite-item-wrapper mr-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                 <svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path
                      d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z"
                    />
                  </svg>
                </div>
                <div class="list-statu inline-block text-black font-bold">重要</div>
              </div>
            </div>
            <div class="lite-item-wrapper mr-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                  <svg
                    fill="gray"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path
                      d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
                    />
                  </svg>
                </div>
                <div class="list-statu inline-block text-black font-bold">送信済み</div>
              </div>
            </div>
            <div class="lite-item-wrapper mr-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                  <svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
                <div class="list-statu inline-block text-black font-bold">折りたたみ</div>
              </div>
            </div>
            <div class="lite-item-wrapper mr-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                 <svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z"/></svg>
                </div>
                <div class="list-statu inline-block text-black font-bold">重要</div>
              </div>
            </div>
            <div class="lite-item-wrapper mr-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                  <svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3.5c4.86-2.34 8-7.5 8-12C20 5.81 16.19 2 11.5 2zm-.5 9l-1 2H8.5l1-2H8V8h3v3zm4 0l-1 2h-1.5l1-2H12V8h3v3z"/></svg>
                </div>
                <div class="list-statu inline-block text-black font-bold">チャット</div>
              </div>
            </div>
            <div class="lite-item-wrapper mr-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                  <svg fill="gray" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px"
                    height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24"/>
                  </g>
                  <g id="Master">
                    <g>
                      <path d="M16.5,9c-0.42,0-0.83,0.04-1.24,0.11L1.01,3L1,10l9,2l-9,2l0.01,7l8.07-3.46C9.59,21.19,12.71,24,16.5,24
                        c4.14,0,7.5-3.36,7.5-7.5S20.64,9,16.5,9z M16.5,22c-3.03,0-5.5-2.47-5.5-5.5s2.47-5.5,5.5-5.5s5.5,2.47,5.5,5.5S19.53,22,16.5,22
                        z"/>
                      <polygon points="18.27,14.03 16.5,15.79 14.73,14.03 14.03,14.73 15.79,16.5 14.03,18.27 14.73,18.97 16.5,17.21 18.27,18.97 
                        18.97,18.27 17.21,16.5 18.97,14.73 		"/>
                    </g>
                  </g>
                  </svg>
                </div>
                <div class="list-statu inline-block text-black font-bold">予定</div>
              </div>
            </div>
            <div class="lite-item-wrapper mr-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
              <div class="list-item py-2 px-8 my-1 bg-transparent flex items-center">
                <div class="list-icon mr-5 inline-block">
                  <svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
                <div class="list-statu inline-block text-black font-bold">全てのメール</div>
              </div>
            </div>
          <!-- </div> -->
        </div>
        <div class="foot h-full flex items-end w-full">
          <div class="wrapper border-t py-2 w-full">
            <div class="w-28 mx-auto flex justify-center">
              <div class="contacts-icon mx-2 inline-block">
                <svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm13-4c0 1.66-1.34 3-3 3S9 9.66 9 8s1.34-3 3-3 3 1.34 3 3zm-3.07 4c2.9 0 6.07 1.43 6.07 3.37v.88c0 1-.81 1.76-1.81 1.76H7.81C6.81 18 6 17.24 6 16.24v-.88C6 13.43 9.03 12 11.93 12z"/><path fill="none" d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm13-4c0 1.66-1.34 3-3 3S9 9.66 9 8s1.34-3 3-3 3 1.34 3 3zm-3.07 4c2.9 0 6.07 1.43 6.07 3.37v.88c0 1-.81 1.76-1.81 1.76H7.81C6.81 18 6 17.24 6 16.24v-.88C6 13.43 9.03 12 11.93 12z"/></svg>
              </div>
              <div class="chat-icon mx-2 inline-block">
                  <svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3.5c4.86-2.34 8-7.5 8-12C20 5.81 16.19 2 11.5 2zm-.5 9l-1 2H8.5l1-2H8V8h3v3zm4 0l-1 2h-1.5l1-2H12V8h3v3z"/></svg>
              </div>
              <div class="phone-icon mx-2 inline-block">
                <svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main-area class="w-5/6" />

    </section>
  </div>
</template>

<script>
import MainArea from '~/components/MainArea.vue';

export default {
  components:{
    MainArea
  }
};
</script>

<style lang="scss" scoped>
.h-80{
  height:24rem;
}
#gmail {
  height: 100%;
  width: 100%;
  padding: 0%;
  margin: 0%;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
}
.logo {
  img {
    max-width: 130px;
  }
}
.nav {
  .center {
    .left {
      top: 12px;
      left: 12px;
    }
    .right {
      right: 12px;
      top: 12px;
    }
  }
}
.control-panel-list-wrap{
  &:hover{
    &::-webkit-scrollbar {
      display: block;
    }   
  }
  &::-webkit-scrollbar {
    display: none;
    width: 10px;
    height:10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #f8f8f8;
    border-radius: 20px;
  }
}
</style>