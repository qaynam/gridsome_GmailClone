<template>
  <div id="main-area" class="flex items-stretch">
    <div class="left w-full min-h-full">
      <div class="nav flex items-stretch py-4 px-6 border-b">
        <div class="left flex items-center justify-start w-1/2">
          <div class="check-icon inline-block">
            <svg
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
          <div class="seclet-icon inline-block mr-5">
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
          <div class="refresh-icon inline-block mr-5">
            <svg
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
          <div class="more-icon inline-block">
            <svg
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </div>
        </div>
        <div class="right text-right flex items-center justify-end w-1/2">
          <div class="page_ inline-block text-gray-500 h-full mr-5 align-middle">1-1/1-1行</div>
          <div class="forward-icon inline-block mr-5">
            <svg
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
          <div class="next-icon inline-block mr-5">
            <svg
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
          <div class="italic-icon inline-block">
            <svg
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path d="M20 8v6h4.43l-6.86 16H12v6h16v-6h-4.43l6.86-16H36V8z" />
            </svg>
          </div>
          <div class="seclet-icon inline-block mr-5">
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
          <div class="settings-icon inline-block">
            <svg
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="change-content-nav pl-3 flex">
        <div @click="main = 1" class="w-1/5 px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <div :class="{'border-red-600' : active1 }" class=" flex border-b-4 py-3 items-center rounded-sm">
            <div class="icons inline-block mr-5">
              <svg
                :fill="fill1"
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
            <div :class="{'text-red-500' : active1 , 'text-gray-600' : !active1 }" class=" inline align-middle">メイン</div>
          </div>
        </div>
        <div @click="main = 2" class="w-1/5 px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <div :class="{'border-blue-600' : active2 }" class="border-b-4 flex py-3 items-center rounded-sm">
            <div class="icons inline-block mr-5">
              <svg
                :fill="fill2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                />
              </svg>
            </div>
            <div :class="{'text-blue-50' : active1 , 'text-gray-600' : !active1 }" class="inline align-middle">ソーシャル</div>
          </div>
        </div>
        <div @click="main = 3 " class="w-1/5 px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <div :class="{'border-green-600' : active3 }" class="border-b-4 flex py-3 items-center rounded-sm">
            <div class="icons inline-block mr-5">
              <svg
                :fill="fill3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"
                />
              </svg>
            </div>
            <div :class="{'text-green-50' : active1 , 'text-gray-600' : !active1 }" class="0 inline align-middle">プロモーション</div>
          </div>
        </div>
      </div>
      <div class="content">
        <div v-if="main == 1" class="hover:shadow-md border-b mt-2">
          <div class="px-6 flex">
            <div class="icons w-1/12">
              <div class="check-icon inline-block">
                <svg
                  fill="gray"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
              <div class="star-icon inline-block">
                <svg
                  fill="gray"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </div>
            <div class="main-title w-2/12">
              <h1 class="font-bold">some random width</h1>
            </div>
            <div class="main-sub w-8/12 h-8 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing ...
            </div>
            <div class="date w-1/12 text-right">
              <p class="font-bold text-sm">2020-1-13</p>
            </div>
          </div>
        </div>
        <div v-if="main == 2">
          <div class="wrapper h-64 w-ull text-gray-600 flex items-center justify-center">
            <div class="max-w-4xl max-auto">
              <div class="mb-5 text-xl">[ソーシャル] タブは空です</div>
              <p class="mb-5">ソーシャル ネットワーク、メディア共有サイト、その他のソーシャル サイトからのメールは、ここに表示されます。</p>
              <p class="mb-5">
                タブを追加、削除するには、
                <span>受信トレイを設定</span>をクリックします。
              </p>
            </div>
          </div>
        </div>
        <div v-if="main == 3">
          <div class="wrapper h-64 w-full text-gray-600 flex items-center justify-center">
            <div class="max-w-4xl max-auto">
              <div class="text-xl mb-5">[プロモーション] タブは空です</div>
              <p class="mb-5">セール、クーポン、その他のマーケティング メールは、ここに表示されます。</p>
              <p class="mb-5">
                タブを追加、削除するには、受信トレイを設定をクリックします
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right w-16 border-l px-5 pt-3">
      <div class="icons mb-10">
        <g-image class="mb-8" src="~/assets/img/calendar.png" alt="calendar" />
        <g-image class="mb-8" src="~/assets/img/keep.png" alt="calendar" />
        <g-image class="mb-8" src="~/assets/img/tasks.png" alt="calendar" />
      </div>
      <div class="add-icon -p-6 rounded-full hover:bg-gray-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-area",
  data() {
    return {
      main: 1,
      fill1:'gray',
      fill2:'gray',
      fill3:'gray',
      active1:true,
      active2:false,
      active3:false,
    };
  },
  watch:{
      main:function(val){
          if(val == 1){
              this.active2 = false;
              this.active3 = false;
              this.active1 = true;

              this.fill2 = "gray";
              this.fill3 = "gray";
              this.fill1 = '#d93025'

          }
          if(val == 2){
              this.active3 = false;
              this.active1 = false;
              this.active2 = true;

              this.fill1 = 'gray'
              this.fill3 = "gray";
              this.fill2 = '#3182ce';
          }
          if(val == 3){
              this.active2 = false;
              this.active1 = false;
              this.active3 = true;

              this.fill2 = 'gray';
              this.fill1 = 'gray'
              this.fill3 = 'green';
          }
      }
  }
};
</script>

<style lang="scss" scoped>
</style>