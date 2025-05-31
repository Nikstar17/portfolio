# Google Analytics 4 with Consent Mode v2 Implementation Guide

This document explains how the Google Analytics 4 (GA4) implementation with Consent Mode v2 works in your Vue 3 app, and how it meets all the specified requirements.

## Implementation Overview

The implementation consists of three main parts:

1. HTML head setup with GA4 initialization and default consent settings
2. Analytics utility functions for handling consent updates
3. Cookie banner integration for user consent management

## Requirements Satisfaction

### 1. Load gtag.js and initialize GA4 tracking (ID: G-Y2MBSY2W6B)

- The script is loaded in `index.html` with an async attribute for better performance
- The GA4 Measurement ID (G-Y2MBSY2W6B) is properly configured

### 2. Use `gtag('consent', 'default', ...)` to set initial consent to denied

- Initial consent is set to denied for all purposes (ad_storage, analytics_storage, etc.)
- This ensures no cookies are set before user provides explicit consent (GDPR compliance)

### 3. When user clicks "Accept", send `gtag('consent', 'update', ...)` with granted values

- The `updateGAConsent` function handles this when given the `CONSENT_GRANTED` parameter
- This allows GA4 to set cookies and start collecting analytics data
- A page view event is sent after consent is granted

### 4. When user clicks "Decline", send `gtag('consent', 'update', ...)` with denied values

- The `updateGAConsent` function handles this when given the `CONSENT_DENIED` parameter
- This prevents GA4 from setting cookies and collecting analytics data

### 5. Ensure that GA cookies (\_ga, etc.) are only used when consent is granted

- GA cookies are not set when consent state is 'denied'
- Existing cookies are removed when user declines consent

### 6. Use anonymize_ip and secure cookie flags

- `anonymize_ip: true` is set in the GA4 configuration
- `cookie_flags: 'SameSite=None;Secure'` ensures cookies are secure

### 7. Implement cookie reading/writing logic with JavaScript

- Cookie functions are implemented to read and write consent values
- The 'cookie-consent' cookie stores user preferences ('ga-consent-granted' or 'ga-consent-denied')

### 8. Ensure GDPR compliance

- Default consent is denied for all storage purposes
- User must take explicit action to grant consent
- User can revoke consent at any time
- Cookies are only set after explicit consent
- IP addresses are anonymized
- User preferences are stored for future visits

## Flow Description

1. **Initial Page Load**:

   - GA4 is initialized with all consent set to 'denied'
   - No analytics cookies are set
   - The cookie banner is shown if no previous consent exists

2. **User Accepts**:

   - User clicks "Accept" in the cookie banner
   - Consent is updated to 'granted' for all purposes
   - GA4 begins collecting analytics data
   - A cookie is set to remember consent for future visits

3. **User Declines**:

   - User clicks "Decline" in the cookie banner
   - Consent remains 'denied' for all purposes
   - Any existing GA cookies are removed
   - A cookie is set to remember denial for future visits

4. **Return Visit**:
   - Previous consent is read from the cookie
   - If consent was granted, GA4 is initialized with consent 'granted'
   - If consent was denied, GA4 keeps consent as 'denied'
   - Cookie banner is not shown if previous consent exists

## Testing Consent Mode

To verify that Consent Mode is working correctly:

1. Open Chrome DevTools
2. Go to Application > Storage > Cookies
3. Check if GA cookies (_ga, \_ga_\*) exist only after consent is granted
4. Use the Network tab to verify requests to Google Analytics include consent parameters

## Additional Notes

- This implementation is compliant with GDPR and other privacy regulations
- IP anonymization provides additional privacy protection
- The secure cookie flags ensure that cookies are only transmitted over secure connections
- The implementation respects the user's choice and allows easy opt-out
