<?php
require_once 'globals.php'; // WE NEED THIS FOR THE API KEY!!!
// Generates a random nonce
function generateNonce($length = 16) {
    return random_bytes($length); // Generate a nonce of raw bytes, dit moeten bytes zijn!
}

$encryptionKey = random_bytes(16); // Generate the security key.
$apiKey = getApiKey();

// Function to encrypt an API key with a nonce
function encryptApiKey($apiKey, $encryptionKey) {
    $nonce = generateNonce(); // Generates a 16-byte nonce - We need this.
    $dataToEncrypt = $nonce . ':' . $apiKey;
    // Encrypt the combined string 
    $encryptedData = openssl_encrypt($dataToEncrypt, 'aes-128-cbc', $encryptionKey, OPENSSL_RAW_DATA, $nonce);
    
    // Return the nonce and encrypted data so we can use this data.
    return [
        'nonce' => base64_encode($nonce), // Encode nonce for safety
        'encryptedApiKey' => base64_encode($encryptedData) // Encode encrypted data - KEEP THIS IN
    ];
}

// Function to decrypt the API key
function decryptApiKey($encryptedData, $nonce, $encryptionKey) {
    // Decode the base64-encoded nonce and encrypted data
    $nonce = base64_decode($nonce);
    $encryptedData = base64_decode($encryptedData);
    
    // Decrypt the data
    $decryptedData = openssl_decrypt($encryptedData, 'aes-128-cbc', $encryptionKey, OPENSSL_RAW_DATA, $nonce);
    
    // Split the decrypted data to get the API key
    list($nonceFromData, $apiKey) = explode(':', $decryptedData, 2);
    
    return $apiKey;
}

// Example usage
$encrypted = encryptApiKey($apiKey, $encryptionKey);
echo "Nonce: " . $encrypted['nonce'] . "\n";
echo "Encrypted API Key: " . $encrypted['encryptedApiKey'] . "\n";

// Decrypt the API key
$decryptedApiKey = decryptApiKey($encrypted['encryptedApiKey'], $encrypted['nonce'], $encryptionKey);
echo "Decrypted API Key: " . $decryptedApiKey . "\n";
?>
