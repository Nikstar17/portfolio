<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { updateGAConsent, CONSENT_GRANTED, CONSENT_DENIED } from '../utils/analytics'

// Cookie-Konstanten
const COOKIE_CONSENT_NAME = 'cookie-consent'
const GA_CONSENT_GRANTED = 'ga-consent-granted'
const GA_CONSENT_DENIED = 'ga-consent-denied'

// Status für Google Analytics
const analyticsEnabled = ref(false)

// Bei Initialisierung den aktuellen Status laden
onMounted(() => {
  const consent = getCookie(COOKIE_CONSENT_NAME)
  analyticsEnabled.value = consent === GA_CONSENT_GRANTED
})

// Cookie-Funktionen
function setCookie(name: string, value: string, days: number): void {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = '; expires=' + date.toUTCString()
  document.cookie = name + '=' + value + expires + '; path=/; SameSite=Lax; Secure'
}

function getCookie(name: string): string | null {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

// Google Analytics Status ändern
function toggleAnalytics(): void {
  analyticsEnabled.value = !analyticsEnabled.value

  if (analyticsEnabled.value) {
    enableGoogleAnalytics()
  } else {
    disableGoogleAnalytics()
  }

  // Einstellungen speichern
  saveSettings()
}

// Einstellungen speichern
function saveSettings(): void {
  const consentValue = analyticsEnabled.value ? GA_CONSENT_GRANTED : GA_CONSENT_DENIED
  setCookie(COOKIE_CONSENT_NAME, consentValue, 365)
}

// Google Analytics Funktionen
function enableGoogleAnalytics(): void {
  // Update GA consent to granted
  updateGAConsent(CONSENT_GRANTED)

  // GA aktivieren
  window['ga-disable-G-Y2MBSY2W6B'] = false

  // Cookies setzen
  setCookie(COOKIE_CONSENT_NAME, GA_CONSENT_GRANTED, 365)
}

function disableGoogleAnalytics(): void {
  // Update GA consent to denied
  updateGAConsent(CONSENT_DENIED)

  // GA deaktivieren
  window['ga-disable-G-Y2MBSY2W6B'] = true

  // Cookies setzen
  setCookie(COOKIE_CONSENT_NAME, GA_CONSENT_DENIED, 365)

  // Optional: Vorhandene GA-Cookies löschen
  document.cookie = '_ga=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax; Secure'
  document.cookie =
    '_ga_Y2MBSY2W6B=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax; Secure'
}

// Cookie-Banner wieder anzeigen lassen
function resetConsent(): void {
  document.cookie =
    COOKIE_CONSENT_NAME + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax; Secure'
  window.location.reload()
}
</script>

<template>
  <section class="cookie-settings">
    <h2 class="settings-title">Cookie-Einstellungen</h2>
    <p class="settings-description">
      Hier können Sie Ihre Cookie-Einstellungen verwalten und entscheiden, welche Cookies Sie
      akzeptieren möchten.
    </p>

    <div class="settings-card">
      <div class="setting-row">
        <div>
          <h3>Notwendige Cookies</h3>
          <p>
            Diese Cookies sind für die Grundfunktionalität der Website erforderlich und können nicht
            deaktiviert werden.
          </p>
        </div>
        <div class="toggle-container">
          <div class="toggle-switch active">
            <div class="toggle-slider"></div>
          </div>
          <span>Immer aktiv</span>
        </div>
      </div>

      <div class="setting-row">
        <div>
          <h3>Analytics-Cookies (Google Analytics)</h3>
          <p>
            Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
            Sie sammeln anonymisierte Informationen und helfen uns, unsere Website zu verbessern.
          </p>
        </div>
        <div class="toggle-container">
          <button
            @click="toggleAnalytics"
            class="toggle-switch"
            :class="{ active: analyticsEnabled }"
            aria-label="Google Analytics aktivieren oder deaktivieren"
          >
            <div class="toggle-slider"></div>
          </button>
          <span>{{ analyticsEnabled ? 'Aktiv' : 'Inaktiv' }}</span>
        </div>
      </div>
    </div>

    <div class="settings-actions">
      <button class="btn-reset" @click="resetConsent">Cookie-Banner neu anzeigen</button>
      <button class="btn-save" @click="saveSettings">Einstellungen speichern</button>
    </div>
  </section>
</template>

<style scoped>
.cookie-settings {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.settings-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.settings-description {
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.settings-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.setting-row:last-child {
  border-bottom: none;
}

.setting-row h3 {
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: white;
}

.setting-row p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 80%;
}

.toggle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: 80px;
}

.toggle-container span {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.toggle-switch {
  position: relative;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 0; /* Reset button padding */
}

.toggle-switch.active {
  background-color: rgb(59, 130, 246);
}

.toggle-slider {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.3s;
}

.toggle-switch.active .toggle-slider {
  transform: translateX(26px);
}

.settings-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-save,
.btn-reset {
  padding: 0.6rem 1.2rem;
  border-radius: 0.375rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-save {
  background-color: rgb(59, 130, 246);
  color: white;
}

.btn-save:hover {
  background-color: rgb(37, 99, 235);
}

.btn-reset {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
}

.btn-reset:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 640px) {
  .setting-row {
    flex-direction: column;
    gap: 1rem;
  }

  .setting-row p {
    max-width: 100%;
  }

  .toggle-container {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .settings-actions {
    flex-direction: column;
  }

  .btn-save,
  .btn-reset {
    width: 100%;
  }
}
</style>
