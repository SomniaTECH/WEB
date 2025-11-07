// Obfuscated API Key - Inject at runtime
(function() {
    // Base64 encoded: Replace this with your actual API key encoded in Base64
    const encodedKey = 'c2ZfNm1mZDhhNDBhY2VuNDgza2NkbGZmZzRq';
    const apiKey = atob(encodedKey);
    const keyInput = document.getElementById('apiKeyInput');
    if (keyInput) {
        keyInput.value = apiKey;
    }
})();

