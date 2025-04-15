<template>
  <div class="relative m-auto w-7xl max-w-screen pt-10">
    <!-- Hero Section -->
    <div class="relative p-2">
      <div
        class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-xl"
      ></div>
      <div class="relative rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 p-5 md:p-10">
        <div class="flex flex-col lg:flex-row">
          <div class="relative flex w-full flex-col items-center lg:w-1/2">
            <div class="relative w-full rounded-2xl">
              <a
                href="#"
                target="_blank"
                class="flex items-center gap-1 whitespace-nowrap text-white"
                ><img
                  src="@/assets/webp/ChatGPT Image 14. Apr. 2025, 12_18_05.webp"
                  class="w-full rounded-xl"
                  alt="Beispielvideo"
                />
                <!-- Play Button Overlay -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="rounded-full bg-black/40 p-3 backdrop-blur-xs transition-transform duration-200 hover:scale-115 md:p-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-white md:h-10 md:w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black/90 to-transparent md:h-20"
                ></div>
                <div
                  class="absolute right-2 bottom-2 text-sm text-white md:right-3 md:bottom-3 md:text-lg"
                >
                  Showreel auf
                  <span class="rounded bg-red-600 px-1 font-semibold text-white">YouTube</span>
                </div>
              </a>
            </div>
          </div>
          <div class="mt-6 flex w-full flex-col justify-center px-0 lg:mt-0 lg:w-1/2 lg:px-10">
            <h1 class="text-2xl font-bold text-white md:text-4xl lg:text-[2rem] xl:text-5xl">
              Perfekter Schnitt für deinen Content
            </h1>
            <p class="mt-3 text-sm text-gray-300 md:mt-4 md:text-base">
              Eros nemo quo throno Throno!<br />
              Eu sequela Rutrum-Conalus, assumenda Omnium esse aliuando RegNare-Tetnpore – vel
              nugator aut hac Causavit.
            </p>

            <div class="mt-5 flex justify-center md:mt-8">
              <button
                type="button"
                class="rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-8 py-3 text-center text-base font-medium text-white shadow-lg transition-all duration-300 hover:from-teal-300 hover:to-cyan-500 hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] md:text-lg"
              >
                Jetzt kontaktieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Section -->
    <div class="mt-12 w-full p-2 md:mt-20">
      <h2 class="mb-6 text-center text-3xl font-bold text-white md:mb-10 md:text-4xl">
        Beispiele meiner Arbeit
      </h2>

      <div class="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <!-- Project 1 -->
        <div
          class="group relative w-full overflow-hidden rounded-xl border border-white/15 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
        >
          <a href="#" target="_blank" class="block overflow-hidden">
            <img
              src="@/assets/webp/ChatGPT Image 14. Apr. 2025, 12_22_02.webp"
              alt="Projektvorschau 1"
              class="w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
            />

            <div
              class="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black/90 to-transparent md:h-20"
            ></div>
            <div class="absolute right-2 bottom-2 md:right-3 md:bottom-3">
              <span class="rounded bg-red-600 px-1 text-sm font-semibold text-white">YouTube</span>
            </div>
          </a>
        </div>

        <!-- Project 2 -->
        <div
          class="group relative w-full overflow-hidden rounded-xl border border-white/15 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
        >
          <a href="#" target="_blank" class="block overflow-hidden">
            <img
              src="@/assets/webp/ChatGPT Image 14. Apr. 2025, 12_24_17.webp"
              alt="Projektvorschau 2"
              class="w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
            />

            <div
              class="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black/90 to-transparent md:h-20"
            ></div>
            <div class="absolute right-2 bottom-2 md:right-3 md:bottom-3">
              <span class="rounded bg-red-600 px-1 text-sm font-semibold text-white">YouTube</span>
            </div>
          </a>
        </div>

        <!-- Project 3 -->
        <div
          class="group relative w-full overflow-hidden rounded-xl border border-white/15 shadow-[0_0_10px_rgba(255,255,255,0.15)] sm:col-span-2 lg:col-span-1"
        >
          <a href="#" target="_blank" class="block overflow-hidden">
            <img
              src="@/assets/webp/ChatGPT Image 14. Apr. 2025, 12_26_55.webp"
              alt="Projektvorschau 3"
              class="w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
            />

            <div
              class="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black/90 to-transparent md:h-20"
            ></div>
            <div class="absolute right-2 bottom-2 md:right-3 md:bottom-3">
              <span class="rounded bg-red-600 px-1 text-sm font-semibold text-white">YouTube</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Über mich Section -->
    <div class="relative mt-12 p-2 md:mt-20">
      <div
        class="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-600 opacity-40 blur-xl"
      ></div>
      <div class="relative rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 p-5 md:p-10">
        <h2 class="mb-4 text-center text-3xl font-bold text-white md:mb-6 md:text-4xl">
          Über mich
        </h2>
        <div class="flex flex-col gap-6 md:gap-10 lg:flex-row">
          <div class="flex w-full items-center lg:w-1/2">
            <div class="w-full overflow-hidden rounded-xl">
              <img
                src="@/assets/webp/ChatGPT Image 14. Apr. 2025, 12_29_27.webp"
                alt="Cutter"
                class="h-auto w-full"
              />
            </div>
          </div>
          <div class="flex w-full flex-col justify-around lg:w-1/2">
            <p class="text-base leading-relaxed text-gray-300 md:text-lg">
              Et, est est Dispendio Circiter – periculosissima Impedimento sit culpa cumßac
              Conscientiae est Tandem mus interdum Septima. Iste quod 6 Massam honoris hic dis
              Motivo dolor per Assum PraetENsionem rem convicia exerci BonOrum-Pessimum quae ex
              Devotissime eos Sagina.
            </p>
            <p class="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
              Magni Praeclusa te Ossibus Gratulatione per Theatro Offensam facer est stipula est, ac
              peccantibus per laesitßesse Fortuna ea singulari. Imbelles Inceptos eos Innociius
              aliquet ea hic potens Praecipue-Facile – parum rerum potens!
            </p>

            <div class="mt-4 flex flex-wrap justify-center gap-3 md:mt-6 md:gap-4">
              <a
                href="#"
                target="_blank"
                class="flex items-center gap-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1.5 text-sm font-medium text-white md:gap-2 md:px-4 md:py-2 md:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="md:h-5 md:w-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.232-.046c.78-.035 1.204-.166 1.486-.275.373-.145.64-.319.92-.599.28-.28.453-.546.598-.92.11-.281.24-.705.275-1.485.039-.843.047-1.096.047-3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  />
                </svg>
                Instagram
              </a>
              <a
                href="#"
                target="_blank"
                class="flex items-center gap-1 rounded-lg bg-purple-700 px-3 py-1.5 text-sm font-medium text-white md:gap-2 md:px-4 md:py-2 md:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="md:h-5 md:w-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"
                  />
                  <path
                    d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"
                  />
                </svg>
                Twitch
              </a>
              <a
                href="#"
                target="_blank"
                class="flex items-center gap-1 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white md:gap-2 md:px-4 md:py-2 md:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="md:h-5 md:w-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                  />
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- So arbeite ich Section -->
    <div class="relative mt-12 p-2 md:mt-20">
      <div
        class="absolute inset-0 rounded-3xl bg-gradient-to-tl from-cyan-500 via-blue-600 to-indigo-500 opacity-40 blur-xl"
      ></div>
      <div class="relative rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 p-5 md:p-10">
        <h2 class="mb-4 text-center text-3xl font-bold text-white md:mb-6 md:text-4xl">
          Mein Workflow
        </h2>
        <div class="flex flex-col gap-6 md:gap-10 lg:flex-row">
          <div class="flex w-full flex-col justify-center lg:w-1/2">
            <p class="text-base leading-relaxed text-gray-300 md:text-lg">
              Sed aspirare netus Indago tot Donec Gubernia Quo eum torquent lacus tui Castrorum per
              altiora Italiom. Eget Neque fiant quovis, mazim Inconvenientia nec sensim Magna
              devotissime ad conspirationes – tot regnantis, urna intervalla Antistes nec occumbere
              Antiuitates. Ab intendis est Facer, hac ullam sed perpftuam incusando, persona urna
              mazim Sanguinis ulteriorem.
            </p>

            <div class="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
              <div
                class="flex w-[calc(50%-0.5rem)] flex-col items-center rounded-xl bg-slate-800/50 p-4 md:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mb-2 h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs text-white">Videoschnitt</span>
              </div>
              <div
                class="flex w-[calc(50%-0.5rem)] flex-col items-center rounded-xl bg-slate-800/50 p-4 md:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mb-2 h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-xs text-white">Design</span>
              </div>
              <div
                class="flex w-[calc(50%-0.5rem)] flex-col items-center rounded-xl bg-slate-800/50 p-4 md:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mb-2 h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span class="text-xs text-white">Untertitel</span>
              </div>
              <div
                class="flex w-[calc(50%-0.5rem)] flex-col items-center rounded-xl bg-slate-800/50 p-4 md:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mb-2 h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-xs text-white">Persönlichkeit</span>
              </div>
            </div>
          </div>

          <div class="flex w-full items-center lg:w-1/2">
            <div class="w-full overflow-hidden rounded-xl">
              <img
                src="@/assets/webp/ChatGPT Image 14. Apr. 2025, 12_38_21.webp"
                alt="Video Editing Workspace"
                class="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Kundenzufriedenheit Section -->
    <div class="relative mt-12 mb-16 p-2 md:mt-20">
      <div
        class="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-500 via-emerald-500 to-teal-500 opacity-40 blur-xl"
      ></div>
      <div class="relative rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 p-5 md:p-10">
        <h2 class="mb-6 text-center text-3xl font-bold text-white md:mb-8 md:text-4xl">
          Echte Stimmen – echtes Feedback
        </h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
          <div class="rounded-xl bg-slate-800/60 p-5">
            <div class="mb-4 flex items-center">
              <a href="#" class="mb-4 flex items-center">
                <img
                  src="@/assets/webp/ChatGPT Image 14. Apr. 2025, 12_34_06.webp"
                  alt=""
                  class="h-15 w-15 rounded-full object-cover"
                />
                <div class="ml-3">
                  <h4 class="font-medium text-white">Felices</h4>
                  <p class="text-sm text-gray-400">Conscios | Prosunt</p>
                </div>
              </a>
            </div>
            <p class="text-gray-300 italic">
              "Eu putabat ullo Sint cum Praesens in nobis Propinat sed sodales nibh dicta eum
              Respublica, se ea Modo est dispendio Posterum vel odio ea metallo."
            </p>
            <div class="mt-3 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Ensure content doesn't force minimum width */
* {
  min-width: 0;
}

/* Make sure text wraps properly */
h1,
h2,
p {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
