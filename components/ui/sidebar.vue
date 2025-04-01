<template>
<aside class="hidden w-20 flex-col justify-between bg-white bg-gradient-to-b from-slate-50 to-stone-100 p-4 shadow-zinc-200 drop-shadow-2xl md:sticky md:top-0 md:flex md:h-screen">
      <div>
        <div class="mb-8 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" fill="none" viewBox="0 0 82 40">
            <path fill="#FFD43D" d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"></path>
            <path fill="#FF0C81" d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"></path>
            <path fill="#11EEFC" d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"></path>
            <path fill="#171A26" d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
          </svg>
        </div>
        <nav>
          <ul class="space-y-3">
            <li>
              <a href="#" class="flex items-center justify-center rounded-lg bg-stone-200 p-3 text-stone-600" title="خانه" aria-label="خانه">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center rounded-lg p-3 text-stone-600 hover:bg-stone-100" title="پلی لیست ها" aria-label="پلی لیست ها">
                <svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6 flex-shrink-0" viewBox="0 0 1024 1024"><path fill="#000" d="M33.76 63.76h448c17.664 0 32-14.336 32-32s-14.336-32-32-32h-448c-17.664 0-32 14.336-32 32s14.32 32 32 32m0 192h448c17.664 0 32-14.336 32-32s-14.336-32-32-32h-448c-17.664 0-32 14.336-32 32s14.32 32 32 32m480 160c0-17.664-14.336-32-32-32h-448c-17.664 0-32 14.336-32 32s14.336 32 32 32h448c17.664 0 32-14.336 32-32m499.12-91.216L699.968 11.646c-9.904-9.92-24.656-11.84-36.592-6.016c-12.544 4.336-21.616 16.113-21.616 30.128v708.4c-33.92-25.135-78.432-40.527-127.376-40.527c-106.064 0-192.097 71.776-192.097 160.288c0 88.528 86.032 160.336 192.097 160.336c106.128 0 192.096-71.808 192.096-160.336c0-4.016-.368-7.936-.72-11.871V107.952L967.6 369.808c12.496 12.496 32.769 12.496 45.265 0s12.496-32.769.015-45.265zM641.76 867.021c-2.304 44.497-54.191 92.815-128.127 92.815c-75.648 0-128.353-50.56-128.353-95.871c0-45.344 52.704-95.84 128.353-95.84c73.936 0 125.823 48.256 128.127 92.784v6.113z" /></svg>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center rounded-lg p-3 text-stone-600 hover:bg-stone-100" title="ارتباط با ما" aria-label="ارتباط با ما">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center rounded-lg p-3 text-stone-600 hover:bg-stone-100" title="درباره ما" aria-label="درباره ما">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 674V192c0-18 14-32 32-32s32 14 32 32v482zm0 63h64v60h-64zM0 512C0 229 229 0 512 0s512 229 512 512s-229 512-512 512S0 795 0 512m961 0c0-247-202-448-449-448S64 265 64 512s201 448 448 448s449-201 449-448"/></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="mt-auto flex flex-col justify-center place-content-between place-items-center gap-y-2">
        <span class="text-lg font-thin drop-shadow-sm rotate-90 w-32 mb-5 text-stone-600 transform">کانال بیت و بیلت </span>
        <a href="[Your YouTube Channel Link]" target="_blank" class="flex items-center justify-center rounded-lg p-3 text-red-600 hover:bg-red-100" title="کانال یوتیوب" aria-label="کانال یوتیوب">
          <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
        </a>
      </div>
    </aside>
    </template>

<script setup>

</script>
