 
#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

// Set these to run example.
#define FIREBASE_HOST ""
#define FIREBASE_AUTH ""
#define WIFI_SSID ""
#define WIFI_PASSWORD ""
 
#include <Servo.h>

Servo servoX;
Servo servoY;
Servo servoGrab;

void setup() {
  Serial.begin(9600);


  servoX.attach(D1);
  servoY.attach(D2);
  servoGrab.attach(D3);
 
  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

int n = 0;

void loop() {
  
 
servoX.write(Firebase.getInt("x"));
servoY.write(Firebase.getInt("y"));
servoGrab.write(Firebase.getInt("grab")); 
delay(15);
 
}
