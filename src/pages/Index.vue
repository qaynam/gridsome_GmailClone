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
            <div class="left seach p-1 absolute hover:bg-gray-300 rounded-full">
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
              <input type="text" class="h-full w-full bg-transparent outline-none border-none" />
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
    <section class="flex">
      <div class="left w-1/6">
        <div class="add-new-btn-wrapper my-5 pl-2">
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
        <div class="control-panel-list-wrap px-8">
          <div class="list-item py-2 my-1 hover:bg-gray-200 flex items-center">
            <div class="list-icon mr-5 inline-block">
              <svg
                fill="gray"
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
            <div class="list-statu inline-block text-black font-bold">受信トレイ</div>
          </div>
          <div class="list-item py-2 my-1 hover:bg-gray-200 flex items-center">
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
            <div class="list-statu inline-block text-black font-bold">受信トレイ</div>
          </div>
          <div class="list-item py-2 my-1 hover:bg-gray-200 flex items-center">
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
            <div class="list-statu inline-block text-black font-bold">受信トレイ</div>
          </div>
          <div class="list-item py-2 my-1 hover:bg-gray-200 flex items-center">
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
            <div class="list-statu inline-block text-black font-bold">受信トレイ</div>
          </div>
          <div class="list-item py-2 my-1 hover:bg-gray-200 flex items-center">
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
                  d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59H6zm7 6V3.5L18.5 9H14c-.55 0-1-.45-1-1z"
                />
              </svg>
            </div>
            <div class="list-statu inline-block text-black font-bold">受信トレイ</div>
          </div>
        </div>
      </div>
      <div class="right w-1/6">ss</div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>