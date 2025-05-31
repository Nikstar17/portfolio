<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { updateGAConsent, CONSENT_GRANTED, CONSENT_DENIED } from '../utils/analytics'

// Cookie-Konstanten
const COOKIE_CONSENT_NAME = 'cookie-consent'
const GA_CONSENT_GRANTED = 'ga-consent-granted'
const GA_CONSENT_DENIED = 'ga-consent-denied'

// Status für Banner und Einwilligung
const showBanner = ref(true)
const showDetails = ref(false)

// Prüfen, ob Einwilligung bereits vorhanden ist
onMounted(() => {
  const consent = getCookie(COOKIE_CONSENT_NAME)
  if (consent === GA_CONSENT_GRANTED || consent === GA_CONSENT_DENIED) {
    showBanner.value = false
  }

  // Google Analytics nur aktivieren, wenn Einwilligung vorhanden
  if (consent === GA_CONSENT_GRANTED) {
    enableGoogleAnalytics()
  } else {
    disableGoogleAnalytics()
  }
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

// Banner-Aktionen
function acceptAll(): void {
  setCookie(COOKIE_CONSENT_NAME, GA_CONSENT_GRANTED, 365)
  enableGoogleAnalytics()
  showBanner.value = false
}

function denyAll(): void {
  setCookie(COOKIE_CONSENT_NAME, GA_CONSENT_DENIED, 365)
  disableGoogleAnalytics()
  showBanner.value = false
}

function toggleDetails(): void {
  showDetails.value = !showDetails.value
}

// Google Analytics Funktionen mit Consent Mode v2
function enableGoogleAnalytics(): void {
  // Update GA consent to granted using Consent Mode v2
  // This will:
  // 1. Set consent status to granted for all purposes
  // 2. Allow GA cookies to be set (_ga, _ga_*)
  // 3. Enable tracking and send initial page view
  // 4. Keep settings stored in cookie for future visits
  updateGAConsent(CONSENT_GRANTED)
}

function disableGoogleAnalytics(): void {
  // Update GA consent to denied using Consent Mode v2
  // This will:
  // 1. Set consent status to denied for all purposes
  // 2. Prevent GA cookies from being set
  // 3. Disable tracking
  // 4. Remove any existing GA cookies
  updateGAConsent(CONSENT_DENIED)
}
</script>

<template>
  <transition name="fade">
    <div v-if="showBanner" class="cookie-banner">
      <div class="cookie-banner-content">
        <div>
          <h3 class="cookie-banner-title">Cookie-Einwilligung</h3>
          <p class="cookie-banner-text">
            Diese Website verwendet Google Analytics, um Informationen über Ihre Nutzung der Website
            zu sammeln und Ihre Erfahrung zu verbessern. Indem Sie auf "Akzeptieren" klicken,
            stimmen Sie der Verwendung von Cookies für Analysezwecke zu. Sie können Ihre
            Einwilligung jederzeit in unseren Datenschutzeinstellungen widerrufen.
          </p>

          <div v-if="showDetails" class="cookie-details">
            <h4>Details zu den verwendeten Cookies</h4>
            <div class="cookie-info">
              <h5>Notwendige Cookies</h5>
              <p>
                Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht
                deaktiviert werden.
              </p>
            </div>
            <div class="cookie-info">
              <h5>Analytics-Cookies (Google Analytics)</h5>
              <p>
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website
                interagieren, indem sie Informationen anonym sammeln und melden. Sie dienen zur
                Verbesserung unserer Website und Dienstleistungen.
              </p>
              <p class="cookie-detail">
                <strong>_ga, _ga_*:</strong> Laufzeit 2 Jahre, wird von Google Analytics verwendet,
                um Nutzer zu unterscheiden und Informationen über Ihre Nutzung der Website zu
                sammeln.
              </p>
            </div>
          </div>
        </div>

        <div class="cookie-banner-actions">
          <button @click="toggleDetails" class="btn-details">
            {{ showDetails ? 'Details ausblenden' : 'Details anzeigen' }}
          </button>
          <div class="cookie-action-buttons">
            <button @click="denyAll" class="btn-deny">Ablehnen</button>
            <button @click="acceptAll" class="btn-accept">Akzeptieren</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(16, 20, 35, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
  padding: 1rem;
}

.cookie-banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cookie-banner-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: white;
}

.cookie-banner-text {
  margin: 0 0 1rem 0;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.5;
  font-size: 0.95rem;
}

.cookie-details {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cookie-details h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1.1rem;
  color: white;
}

.cookie-info {
  margin-bottom: 1rem;
}

.cookie-info h5 {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: white;
}

.cookie-info p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

.cookie-detail {
  font-size: 0.85rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  border-left: 2px solid rgba(59, 130, 246, 0.5);
}

.cookie-banner-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cookie-action-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

.btn-accept,
.btn-deny,
.btn-details {
  font-size: 0.95rem;
  padding: 0.6rem 1.2rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn-accept {
  background-color: rgb(30, 90, 195);
  color: white;
}

.btn-accept:hover {
  background-color: rgb(24, 74, 169);
}

.btn-deny {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
}

.btn-deny:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.btn-details {
  background-color: transparent;
  color: rgb(96, 165, 250);
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  align-self: flex-start;
  font-weight: 600;
}

.btn-details:hover {
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Layout */
@media (min-width: 768px) {
  .cookie-banner-content {
    flex-direction: row;
    align-items: center;
  }

  .cookie-banner-actions {
    flex-direction: row;
    align-items: center;
    margin-left: auto;
  }
}

@media (max-width: 767px) {
  .cookie-action-buttons {
    justify-content: space-between;
    width: 100%;
  }

  .btn-accept,
  .btn-deny {
    flex: 1;
  }
}
</style>
